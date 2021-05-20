// $(function(){
    
//     var swiper = new Swiper(".mySwiper", {
//         autoplay:{
//             delay: 2000,
//         },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
  
// })

var swiper = new Swiper(".mySwiper", {
// Línea para autoplay del carrusel inica aquí
  autoplay:{
                delay: 2000,
            },
// Línea para autoplay del carrusel inica aquí
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});