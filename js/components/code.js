define(['skate', 'lib/trim', 'highlight'], function (skate, trim, hjs) {
  return skate('skate-code', {
    restrict: 'skate-code',
    ready: function (element) {
      var html = element.textContent;
      var lines = html.split("\n").filter(function(line) {
        return line || false;
      });
      var baseIndent = getIndentLength(lines[0]);
      var pre = document.createElement('pre');

      element.innerHTML = '';
      element.appendChild(pre);

      lines.forEach(function (line, index) {
        var indent = getIndentLength(line) - baseIndent;
        var num = document.createElement('code');
        var code = document.createElement('code');
        var nl = document.createTextNode("\n");

        line = trim(line);
        line = line.replace('&gt;', '>');
        line = line.replace('&lt;', '<');

        num.className = 'code-line-number';
        num.innerHTML = index + 1;

        code.className = 'code-line-content';
        code.innerHTML = setIndentLength(indent) + hjs.highlight(element.getAttribute('lang') || 'html', line).value;

        pre.appendChild(num);
        pre.appendChild(code);
        pre.appendChild(nl);
      });
    }
  });

  function getIndentLength (str) {
    return str.match(/^\s*/)[0].length;
  }

  function setIndentLength (len) {
    return len > 0 ? new Array(len + 1).join(' ') : '';
  }
});
