// Easy selector helper function
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};
const on = (type, el, listener,all = false)=>{
  let selectEl = select(el,all);
  if (selectEl){
    if (all){
      selectEl.forEach(e=> e.addEventListener(type,listener,));
    }else{
      selectEl.addEventListener(type,listener);

    }
   
    }

  }


// Portfolio isotope and filter
window.addEventListener('load', () => {
  let portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  }
}
)


 // Selecting all the portfolio filter items
let portfolioFilters = select('#portfolio-filters li', true);

// Add click event listener to each filter item
on('click', '#portfolio-filters li', function (e) {
  e.preventDefault();
  
  // Remove 'filter-active' class from all filter items
  portfolioFilters.forEach(function (el) {
    el.classList.remove('filter-active');
  });
  
  // Add 'filter-active' class to the clicked filter item
  this.classList.add('filter-active');
  
  // Arrange items using Isotope or similar library
  portfolioIsotope.arrange({
    filter: e.target.getAttribute('data-filter')
  });
}, true);

