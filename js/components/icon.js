define(['skate'], function(skate) {
  return skate('skate-template', {
    restrict: '[skate-icon]',
    insert: function(element) {
      element.className = 'glyphicon glyphicon-' + element.getAttribute('skate-icon');
    }
  });
});
