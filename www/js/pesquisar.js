$(document).ready(function() {
    // Função para carregar produtos do arquivo JSON
    function carregarProdutos() {
        $.getJSON('backend.json', function(data) {
            window.produtos = data; // Armazena os produtos em uma variável global
            atualizarProdutos(''); // Inicialmente mostra todos os produtos
        }).fail(function() {
            console.error('Erro ao carregar o arquivo JSON.');
        });
    }
    
    carregarProdutos(); // Chama a função ao carregar a página

    // Função para atualizar a exibição dos produtos com base na pesquisa
    function atualizarProdutos(filtro) {
        $('.page-content .block').empty(); // Limpa o conteúdo existente

        if (!window.produtos) {
            console.error('Produtos não carregados.');
            return;
        }

        const filtroLower = filtro.toLowerCase();
        
        window.produtos.forEach(produto => {
            if (produto.nome.toLowerCase().includes(filtroLower)) {
                const itemHtml = `
                                  <!-- ITEM CARD -->
                                <div class="item-card">
                                    <a data-id="${produto.id}" href="#" class="item">
                                        <div class="img-container">
                                            <img src="${produto.imagem}">
                                        </div>
                                        <div class="nome-rating">
                                            <span class="color-gray">${produto.nome}</span>
                                            <span class="bold margin-right"></span>
                                            <span>
                                                <i class="ri-star-fill"></i>
                                                ${produto.rating}
                                            </span>
                                        </div>
                                        <div class="price">
                                        <span><buttom><i class="heartMenu ri-heart-3-line"></i></buttom></span>
                                        ${produto.preco_promocional.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
                                        
                                    </a>

                                </div>                                          
            `;
                $('.page-content .block').append(itemHtml);
            }
        });
    }

    // Evento de pesquisa
    $('#outroSearch').on('input', function() {
        const filtro = $(this).val();
        atualizarProdutos(filtro);
    });
});
