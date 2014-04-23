define(function() {
  return function(element) {
    element.className = 'glyphicon glyphicon-' + element.getAttribute('icon');
  };
});
