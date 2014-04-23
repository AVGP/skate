define(function() {
  return function(element) {
    var a = document.createElement('a');

    a.innerHTML = element.innerHTML;
    element.innerHTML = '';

    a.setAttribute('href', '#' + element.getAttribute('id'));
    element.appendChild(a);
  };
});
