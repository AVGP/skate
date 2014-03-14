define([
  'skate',
  'components/code',
  'components/detach',
  'components/each',
  'components/external-link',
  'components/heading-link',
  'components/icon',
  'components/template',
  'components/toc'
], function(
  skate,
  code,
  detach,
  each,
  externalLink,
  headingLink,
  icon,
  template,
  toc
) {
  return function() {
    skate('pre[code]', code);
    skate('.detach', detach);
    skate('[each]', each);
    skate('a.external', externalLink);
    skate('h1[id], h2[id], h3[id]', headingLink);
    skate('[icon]', icon);
    skate('.toc', toc);
    skate('[data-template]', template);

    document.body.className = 'loaded';
  };
});
