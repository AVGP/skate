define(function() {
  return function() {
    var a = document.createElement('a');

    a.innerHTML = this.innerHTML;
    this.innerHTML = '';

    a.setAttribute('href', '#' + this.getAttribute('id'));
    this.appendChild(a);
  };
});
