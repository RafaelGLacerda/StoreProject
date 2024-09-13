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


    }, 700);
})  
.catch(error => console.error('Erro ao fazer fetch dos dados: ' +error));


setTimeout(() => {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    $('.btn-cart').attr('data-count', carrinho.length)
    
}, 300);
