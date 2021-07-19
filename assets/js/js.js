var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
  pause: true
})

$(function () {

  $("a").click(function (event) {

      if (this.hash !== "") {
          event.preventDefault();

          var gato = this.hash;

          $("html, body").animate({
              scrollTop: $(gato).offset().top
          }, 800, function () {
          });
      }
  });
});