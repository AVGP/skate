define(function() {
  return function() {
    this.addEventListener('click', function(e) {
      window.open(e.target.getAttribute('href'));
      e.preventDefault();
    });
  };
});
