define([
  'lib/trim',
  'highlight'
], function(
  trim,
  hjs
) {
  return {
    ready: function(element) {
      var baseIndent = getIndentLength(element.textContent.split("\n")[0]);
      var lines = trim(element.innerHTML).split("\n");

      element.innerHTML = '';

      lines.forEach(function(line, index) {
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
        code.innerHTML = setIndentLength(indent) + hjs.highlight(element.getAttribute('code'), line).value;

        element.appendChild(num);
        element.appendChild(code);
        element.appendChild(nl);
      });
    }
  };

  function getIndentLength(str) {
    return str.match(/^\s*/)[0].length;
  }

  function setIndentLength(len) {
    return len > 0 ? new Array(len + 1).join(' ') : '';
  }
});
