require({
  paths: {
    highlight: '../bower_components/highlightjs/highlight.pack',
    skate: '../bower_components/skate/dist/skate.min'
  },
  shim: {
    highlight: {
      exports: 'hljs'
    }
  }
});

require(['app'], function (app) {
  app();
});
