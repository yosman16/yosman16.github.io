window.addEventListener('scroll', function() {
    var header = document.getElementById('pageHeader');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 90) {
        header.classList.add('transparent-header');
    } 
  
    else {
        header.classList.remove('transparent-header');
    }
  
});

