define(['skate'], function(skate) {
  return skate('skate-heading-link', {
    type: skate.types.ATTR,
    insert: function(element) {
      var a = document.createElement('a');

      a.innerHTML = element.innerHTML;
      element.innerHTML = '';

      a.setAttribute('href', '#' + element.getAttribute('id'));
      element.appendChild(a);
    }
  });
});
