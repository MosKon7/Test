// Движение по якорям
const anchors = document.querySelectorAll('a[href*="#"');
// Цикл по всем ссылкам
for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
        behavior: "auto",
        block: "center"
        
      })
      
    document.querySelector('.burger_menu_div').classList.toggle('active');
    document.querySelector('.login').classList.toggle('hide');
    })
}


var burg = document.querySelector('.burger_menu_div');
var menu = document.querySelector('.menu');
var btn_reg = document.querySelector('.btn_register');

function init() {
    var widthWind = $(this).width();

    if( widthWind > 980){
        if(!burg.classList.contains("hide")){
            burg.classList.add('hide');
            menu.classList.remove('hide');
            btn_reg.classList.remove('hide');
            document.querySelector('body').classList.remove('mobile');
        }
    }
    if (widthWind <= 980) {
        burg.classList.remove('hide');
        menu.classList.add('hide');
        btn_reg.classList.add('hide');
        document.querySelector('body').classList.add('mobile');
    }
};
init();
/* Временно*/
window.onresize = function resize( ) {
    var widthWind = $(this).width();

    if( widthWind > 980){
        if(!burg.classList.contains("hide")){
            burg.classList.add('hide');
            menu.classList.remove('hide');
            btn_reg.classList.remove('hide');
            document.querySelector('body').classList.remove('mobile');
            
            update_swiper();
        }
    }
    if (widthWind <= 980) {
        burg.classList.remove('hide');
        menu.classList.add('hide');
        btn_reg.classList.add('hide');
        document.querySelector('body').classList.add('mobile');
        
        update_swiper();
    }
};

/*ЗАПОЛНЕНИЕ КАРУСЕЛИ*/ 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});
var product = ['<div class="product"><img src="./public/image 37.png" alt="" class="product_img"><p class="product_p">Лёгкий, брусок<br>180 г</p></div>',
        '<div class="product"><img src="./public/image 39.png" alt="" class="product_img"><p class="product_p">Лёгкий, слайсы<br>120, 225 г</p></div>',
        '<div class="product"><img src="./public/image 38.png" alt="" class="product_img"><p class="product_p">Сливочный, брусок<br>200, 300 г</p></div>',
        '<div class="product"><img src="./public/image 40.png" alt="" class="product_img"><p class="product_p">Сливочный, слайсы<br>130, 250 г</p></div>'];

function update_swiper(){   
if(!document.querySelector('body').classList.contains('mobile')){
    swiper.removeAllSlides();
    for (let i = 0; i < 3; i++) {
        let products = '<div class="swiper-slide">';
        for (let j = 0; j < 4; j++) {
            products += product[j];
        }
        products += '</div>';
        swiper.appendSlide(products);
    }
}
else{
    swiper.removeAllSlides();
    for (let i = 0; i < 4; i++) {
        let products = '<div class="swiper-slide">' + product[i] + '</div>';

        swiper.appendSlide(products);
    }
}
}
update_swiper();

$(".burger_btn").click(function(){
    document.querySelector('.burger_menu_div').classList.toggle('active');
    document.querySelector('.login').classList.toggle('hide');
});