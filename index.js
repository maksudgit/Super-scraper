
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XCXT48RDS5');








$( '.video' ).not( '.video.active' ).mouseenter(function() {
    $('.video.active').css('border','solid 1px #fff');
    $('.video.active').css('background','#fff');
  });
  
  $( '.video' ).not( '.video.active' ).mouseleave(function() {
    $('.video.active').css('border','solid 1px #ccc');
    $('.video.active').css('background','#dddddd4f');
  });
  
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  