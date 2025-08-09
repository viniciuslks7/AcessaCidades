document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        effect: 'slide',
        loop: true,
        autoplay: {
            delay: 3000,  // Tempo entre as trocas de imagens (em milissegundos)
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: false,  // Desativa a navegação com as setas
    });
});



