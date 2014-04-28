define(['skate'], function(skate) {
  return skate('skate-heading-link', {
    restrict: 'h2, h3, h4, h5, h6',
    insert: function(element) {
      var a = document.createElement('a');

      a.innerHTML = element.innerHTML;
      element.innerHTML = '';

      a.setAttribute('href', '#' + element.getAttribute('id'));
      element.appendChild(a);
    }
  });
});
