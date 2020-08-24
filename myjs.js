
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','green');
    } else {
    $('.navbar').css('background','transparent');
    }
    });

$(".navbar-toggler").click(function(){
    $("nav").toggleClass("navbar-green");
    });

    function toggleNavbar(){
      $("nav").toggleClass("navbar-hide");
    }

    function togglePopup1(){
        document.getElementById("popup-1").classList.toggle("active");
      }
    function togglePopup2(){
        document.getElementById("popup-2").classList.toggle("active");
      }
    function togglePopup3(){
        document.getElementById("popup-3").classList.toggle("active");
      }
    function togglePopup4(){
        document.getElementById("popup-4").classList.toggle("active");
      }
      function togglePopup5(){
        document.getElementById("popup-5").classList.toggle("active");
      }
