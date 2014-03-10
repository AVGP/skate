define(['skate'], function(skate) {
  var loaded = {};
  var config = {
    selector: '[data-template]',
    attribute: 'data-template',
    prefix: 'templates/',
    suffix: '.html'
  };

  return function() {
    skate(config.selector, {
      ready: function(el, done) {
        var templateName = el.getAttribute(config.attribute);
        var templateNode;

        if (loaded[templateName]) {
          return render(loaded[templateName]);
        }

        if (templateNode = document.getElementById(templateName)) {
          return render(templateNode.innerHTML);
        }

        request = new XMLHttpRequest;
        request.open('GET', config.prefix + templateName + config.suffix, true);
        request.onreadystatechange = function() {
          if (request.readyState === 4 && request.status === 200) {
            render(request.responseText);
          }
        };
        request.send();


        function render(data) {
          el.innerHTML = loaded[templateName] = data;
          done();
        }
      }
    });
  };
});
