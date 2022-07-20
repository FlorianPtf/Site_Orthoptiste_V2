$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 2000);
            }
        }
    });
});


$(function() {
    /**
    * Smooth scrolling to the top of page !
    **/
    $("html, body").animate({scrollTop : 0}, 1500);
});

var compteurtop = 0;
// https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-unobserve 


const startAnimation = (entries, observer) => {
  compteurtop++;
  console.log(compteurtop);

    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
    });
  };

 
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements = document.querySelectorAll('#boxcontainergauche');

  if ( compteurtop <= 5){ 
  elements.forEach(el => {
    observer.observe(el, options);
    // observer.unobserve(document.querySelectorAll('#boxcontainergauche'));
  })};



  const startAnimation2 = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
    });
  };
  
  const observer2 = new IntersectionObserver(startAnimation2);
  const options2 = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements2 = document.querySelectorAll('#boxcontainerdroite');
  if ( compteurtop == 5){ 
    
  elements2.forEach(el => {
      observer2.observe(el, options2);
      
  });
}


if ( compteurtop <= 5){
  const startAnimation3 = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-bot", entry.isIntersecting);
    });
  };
  
  const observer3 = new IntersectionObserver(startAnimation3);
  const options3 = { root: null, rootMargin: '0px', threshold: 1 }; 
  const calcul = 0;
  
  const elements3 = document.querySelectorAll('#boxcontainerbot');
    elements3.forEach(el => {
    observer3.observe(el, options3);
  });
}
  