define(['skate'], function(skate) {
  return function(parent) {
    var selector = parent.getAttribute('data-toc-selector') || 'h2, h3, h4, h5, h6';
    var lastSequence = 0;
    var index = 0;

    skate(selector, function(child) {
      var sequence = child.tagName.replace('H', '');
      var listitem = document.createElement('li');
      var anchor = document.createElement('a');

      anchor.href = '#' + child.id;
      anchor.textContent = child.textContent;
      listitem.appendChild(anchor);

      if (!lastSequence) {
        lastSequence = sequence;
      }

      if (sequence > lastSequence) {
        for (var a = lastSequence; a < sequence; a++) {
          var newlist = document.createElement('ul');
          parent.appendChild(newlist);
          newlist.appendChild(listitem);
          parent = newlist;
        }
      } else if (sequence < lastSequence) {
        for (var a = sequence; a < lastSequence; a++) {
          parent = parent.parentNode;
        }

        parent.appendChild(listitem);
      } else {
        parent.appendChild(listitem);
      }

      lastSequence = sequence;
    });
  };
});
