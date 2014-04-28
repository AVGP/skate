define(['skate'], function(skate) {
  return skate('skate-external-link', {
    restrict: 'a',
    insert: function(element) {
      element.addEventListener('click', function(e) {
        window.open(e.target.getAttribute('href'));
        e.preventDefault();
      });
    }
  });
});
