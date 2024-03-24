document.addEventListener('DOMContentLoaded', function () {
    var gallery = document.querySelector('.gallery');

    function showGalleryOnScroll() {
        var galleryTopPosition = gallery.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        // Eğer galeri sayfanın alt kısmına ulaştıysa, galeriyi görünür hale getir ve animasyonu uygula
        if (galleryTopPosition < windowHeight) {
            gallery.style.opacity = 1;
            gallery.classList.add('slide-up-animation');
            window.removeEventListener('scroll', showGalleryOnScroll); // Kaydırma olayını dinlemeyi durdur
        }
    }

    window.addEventListener('scroll', showGalleryOnScroll);
});
