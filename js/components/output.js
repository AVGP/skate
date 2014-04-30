define(['skate'], function(skate) {
  skate('skate-output', {
    type: skate.types.TAG,
    ready: function(element) {
      element.innerHTML = '<div class="well">' + element.innerHTML + '</div>';
    },
    attrs: {
      title: function(element, value) {
        var title = document.createElement('div');
        title.textContent = value;
        element.parentNode.insertBefore(title, element);
      }
    }
  });
});
