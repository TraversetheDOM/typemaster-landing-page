const sectionElements = document.querySelectorAll('.section'); 


const observerOptions = {
  root: null, 
  rootMargin: "0px", 
  threshold: 0.25, 
}


const handleInterSection = function(entries, observer) {
  entries.forEach(function(entry) {
    if(entry.isIntersecting) {
      entry.target.classList.remove('section__hidden');
      observer.unobserve(entry.target); 
    } 
  }); 
}



let observer = new IntersectionObserver(handleInterSection, observerOptions); 
 
sectionElements.forEach(function(section) {
  section.classList.add('section__hidden');
  observer.observe(section); 
}); 