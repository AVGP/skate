define(['skate'], function(skate) {
  return skate('skate-icon', {
    type: skate.types.ATTR,
    insert: function(element) {
      element.className = 'glyphicon glyphicon-' + element.getAttribute('skate-icon');
    }
  });
});
