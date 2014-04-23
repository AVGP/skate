define(function() {
  return function(element) {
    element.addEventListener('click', function(e) {
      window.open(e.target.getAttribute('href'));
      e.preventDefault();
    });
  };
});
