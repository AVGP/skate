define(['witness'], function(witness) {
  return function(el) {
    var each = window[el.getAttribute('each')];
    var observer = witness(each);
    var parent = el.parentNode;

    // Remove and use as a template.
    parent.removeChild(el);

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
      var dolly = el.cloneNode(true);
      dolly.removeAttribute('each');
      return dolly;
    }
  };
});
