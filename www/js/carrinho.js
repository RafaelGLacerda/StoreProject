var localCarrinho = localStorage.getItem('carrinho');
if(localCarrinho){
    var carrinho =  JSON.parse(localCarrinho);
    if(carrinho.length> 0){
        
    }else{

    }
}else{

}


function carrinhoVazio(){
    console.log('O carrinho está vazio');
    $("#listaCarrinho").empty();

    $("#toolbarTotais").addClass('display-none')
    $("#toolbarCheckout").addClass('display-none')

    $("listaCarrinho").html(`
        <div width="300" class="text-align-center">
            <img src="img/empty.gif">
            <br><span class="color-gray"> nada por enquanto </span></br>
        </div>
        
        `);

}


$("#esvaziar").on('click', function(){
    app.dialog.confirm('Tem certeza que quer esvaziar o carrinho?', '<strong>Esvaziar</strong>', function(){
            localStorage.removeItem('carrinho');
            app.views.main.route.refreshPage();
    });
});