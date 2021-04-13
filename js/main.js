var swiper = new Swiper('.swiper1', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
      },
  });

  var swiper2 = new Swiper('.swiper2', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
    delay: 4500,
     },
  });

var swiper3 = new Swiper('.swiper3', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
  delay: 2500,
     },
});


// tabs
  
var foodtab = document.getElementsByClassName('foodtab');
var category = document.getElementsByClassName('category-btn');
var allfood = document.querySelectorAll('.all');

  function openTab(x) {
        

    for (var i = 0; i < foodtab.length; i++) {
        foodtab[i].style.display = 'none';
    }

    for ( var k = 0; k < category.length; k++) {
      category[k].style.color = "";
    }

    x.style.color = '#FE4C8D';

    for ( a = 0; a < allfood.length; a++) {
      allfood[a].style.display = "none";
    }


    for ( var j = 0; j < foodtab.length; j++) {
      document.getElementsByClassName(x.dataset.aim)[j].style.display = 'flex';
    }

  }



  // Hamburger Menu
  $(document).ready(function () {

  $('.hamburger-container').click(function(){

    if ( $('#myLinks').is(':visible') )  {
      $('#myLinks').slideUp();
    } else {
      $('#myLinks').slideDown();
    }
    
  });
});
  

  function toggleHamburger(x) {
    x.classList.toggle("change");
  }



