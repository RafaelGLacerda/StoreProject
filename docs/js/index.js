fetch('js/backend.json')
    .then(response => response.json())
    .then(data=> {
    // salvar os dados vindos do back-end localmente
    localStorage.setItem('produtos', JSON.stringify(data));
    console.log('Dados dos produtos salvos no localStorage');
    
    setTimeout(() =>{

        $("#produtos").empty();

        data.forEach(produto =>{
            var produtoHTML = `
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
    
            $("#produtos").append(produtoHTML);
    });
    
    $(document).on('click', '.item', function () {
        var id = $(this).attr('data-id');
        localStorage.setItem('detalhe', id);
        app.views.main.router.navigate('/detalhes/');
    });

    $(document).on('click', '.heartMenu', function (e) {
        e.stopPropagation(); // Previne a propagação do clique para o link pai
        var id = $(this).closest('.item-card').find('.item').attr('data-id');
        console.log('Produto adicionado aos favoritos:', id);
        // Adicione aqui a lógica para adicionar o item aos favoritos
    });


    }, 700);
})  
.catch(error => console.error('Erro ao fazer fetch dos dados: ' +error));


setTimeout(() => {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    $('.btn-cart').attr('data-count', carrinho.length)
    
}, 300);

