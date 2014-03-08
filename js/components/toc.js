define(['skate'], function(skate) {
  return function(list) {
    var parent = list;
    var selector = list.getAttribute('data-toc-selector') || 'h2, h3, h4, h5, h6';
    var lastSequence = 0;
    var index = 0;

    skate(selector, function(heading) {
      var sequence = heading.tagName.replace('H', '');
      var listitem = document.createElement('li');
      var anchor = document.createElement('a');

      anchor.href = '#' + heading.id;
      anchor.textContent = heading.textContent;
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
