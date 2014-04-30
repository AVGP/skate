define(['skate'], function(skate) {
  return skate('skate-external-link', {
    type: skate.types.ATTR,
    insert: function(element) {
      element.addEventListener('click', function(e) {
        window.open(e.target.getAttribute('href'));
        e.preventDefault();
      });
    }
  });
});
