define(['witness'], function(witness) {
  return function() {
    var that = this;
    var each = window[this.getAttribute('each')];
    var observer = witness(each);
    var parent = this.parentNode;

    // Remove and use as a template.
    parent.removeChild(this);

    observer.on('add', function(change) {
      parent.appendChild(clone());
    });

    observer.on('update', function(change) {
      var ref = parent.childNodes.item(change.name);

      parent.insertBefore(clone(), ref);
      parent.removeChild(ref);
    });

    observer.on('delete', function(change) {
      parent.removeChild(parent.childNodes.item(change.name));
    });


    function clone() {
      var dolly = that.cloneNode(true);
      dolly.removeAttribute('each');
      return dolly;
    }
  };
});
