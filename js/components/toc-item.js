define(['skate'], function(skate) {
  return skate('skate-toc-item', {
    restrict: 'h2, h3, h4, h5, h6',
    insert: function (element) {
      [].forEach.call(document.querySelectorAll('.skate-toc'), function(toc) {
        toc.addItem(element);
      });
    }
  });
});
