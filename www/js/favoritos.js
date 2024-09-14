// Estado para rastrear se o item está favoritado ou não
let favoritados = {};

// Evento de clique no botão de coração (usando .coracao e .heartMenu)
$(document).on('click', '.coracao, .heartMenu', function (event) {
    event.preventDefault(); // Evita qualquer comportamento padrão do link

    // Obtém o item associado ao botão clicado
    const $itemCard = $(this).closest('.item-card');
    const itemId = $itemCard.find('.item').attr('data-id');
    const itemNome = $itemCard.find('.nome-rating .color-gray').text();

    // Alterna o estado favoritado do item
    if (!favoritados[itemId]) {
        // Item foi favoritado
        var toastCenter = app.toast.create({
            text: `${itemNome} foi Favoritado`,
            position: 'center',
            closeTimeout: 2000,
        });

        toastCenter.open();

        // Alterar a cor do ícone (favoritar)
        $(this).find('i').addClass('mudancaDeCor');

        // Alterar o estado do item para favoritado
        favoritados[itemId] = true;
    } else {
        // Item foi removido dos favoritos
        var toastCenter = app.toast.create({
            text: `${itemNome} foi removido dos Favoritos`,
            position: 'center',
            closeTimeout: 2000,
        });

        toastCenter.open();

        // Remover a cor do ícone (desfavoritar)
        $(this).find('i').removeClass('mudancaDeCor');

        // Alterar o estado do item para não favoritado
        favoritados[itemId] = false;
    }
});