var counter = 1;
var slider = document.querySelector(".slider2");

const images = document.getElementsByClassName("image");

    [...images].forEach(image => {

     image.addEventListener("click", function() {
        clearInterval(autoslide);
         counter = this.id[1]
         console.log(counter)
        })
    }
    )


var autoslide;

var repeatslide = () => {
autoslide = setInterval(function(){
    document.getElementById('s' + counter).checked = true; 
    counter++;
   
    if(counter > 5){
        counter = 1;
        
    }
}, 3000); }

repeatslide();

slider.addEventListener("mouseover", () => {
    clearInterval(autoslide);
})

slider.addEventListener("mouseout", () => {
    repeatslide();
})





const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[body]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });


