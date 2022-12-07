const sectionElements = document.querySelectorAll('.section'); 
console.log(sectionElements); 


const observerOptions = {
  root: null, 
  rootMargin: "0px", 
  threshold: 0.25, 
}


const handleInterSection = function(entries, observer) {
  // The handleInterSection receives an IntersectionObserverEntry and the observer

  // The IntersectionObserverEntry is a list of entries of for each section element which has experienced an intersection change since it was last checked. 
  entries.forEach(function(entry) {
    if(entry.isIntersecting) {
      
      // Remove the class that hides the sections
      entry.target.classList.remove('section__hidden');

      // Then stop watch the intersections target element/section might or might not have with the root. 
      observer.unobserve(entry.target); 
    } 
  }); 
}



let observer = new IntersectionObserver(handleInterSection, observerOptions); 

// Since the sectionElements is  NodeList I can loop over it and then add the "section__hidden" class to each element. 
sectionElements.forEach(function(section) {
  section.classList.add('section__hidden');
  
  // I need to give the observer an element to watch which is the target element (section)
  observer.observe(section); 
}); 