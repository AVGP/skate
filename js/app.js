define([
  'components/code',
  'components/each',
  'components/external-link',
  'components/heading-link',
  'components/icon',
  'components/toc',
  'components/toc-item'
], function() {
  return function() {
    document.body.className = 'loaded';
  };
});
