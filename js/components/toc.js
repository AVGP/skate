define(['skate'], function (skate) {
  return skate('skate-toc', {
    restrict: 'ul.skate-toc',
    insert: function (element) {
      [].forEach.call(document.querySelectorAll('.skate-toc-item'), function (item) {
        element.addItem(item);
      });
    },
    extend: {
      lastTocItemSequence: 0,
      addItem: function (child) {
        var parent = this;
        var sequence = child.tagName.replace('H', '');

        if (!sequence) {
          return this;
        }

        var listitem = document.createElement('li');
        var anchor = document.createElement('a');

        anchor.href = '#' + child.id;
        anchor.textContent = child.textContent;
        listitem.appendChild(anchor);

        if (!this.lastTocItemSequence) {
          this.lastTocItemSequence = sequence;
        }

        if (sequence > this.lastTocItemSequence) {
          for (var a = this.lastTocItemSequence; a < sequence; a++) {
            var newlist = document.createElement('ul');
            parent.appendChild(newlist);
            newlist.appendChild(listitem);
            parent = newlist;
          }
        } else if (sequence < this.lastTocItemSequence) {
          for (var a = sequence; a < this.lastTocItemSequence; a++) {
            parent = parent.parentNode;
          }

          parent.appendChild(listitem);
        } else {
          parent.appendChild(listitem);
        }

        this.lastTocItemSequence = sequence;

        return this;
      }
    }
  });
});
