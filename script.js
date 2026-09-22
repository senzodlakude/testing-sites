(function(){
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dots button');
    var i = 0, timer;

    function show(n){
      slides[i].classList.remove('active');
      dots[i].classList.remove('active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active');
      dots[i].classList.add('active');
    }
    function reset(){
      clearInterval(timer);
      timer = setInterval(function(){ show(i+1); }, 5500);
    }
    window.clinicHero = {
      go: function(d){ show(i+d); reset(); },
      goTo: function(n){ show(n); reset(); }
    };
    reset();
  })();
