<!-- Adicione este código ao final do seu arquivo JavaScript personalizado -->

    // Ative uma função quando o carrossel estiver prestes a mudar de slide
    $('#investmentCarousel').on('slide.bs.carousel', function (e) {
        // Remova a classe 'fadeIn' do item anterior
        $('.carousel-item').eq(e.from).removeClass('fadeIn');
    });

    // Ative uma função quando o novo slide foi exibido
    $('#investmentCarousel').on('slid.bs.carousel', function (e) {
        // Adicione a classe 'fadeIn' ao novo item
        $('.carousel-item').eq(e.to).addClass('fadeIn');
    });
