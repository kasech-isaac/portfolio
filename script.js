$(document).ready(function(){
    $(window).scroll (function(){
        if (this.scrollY >20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
        if (this.scrollY > 500){
            $('.scroll-up').addClass("show")
        }else{
             $('.scroll-up').removeClass("show")
        }
    })
    // slide-up script
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop:0})
    })
    // toggle nav script
    $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
    })
})

// typing animate
// var x =new Typed(".x",{
//     string:['Full Stack Web Developer'],
//     typeSpped:60,
//     backSpeed:60,
//     loop:true
// })