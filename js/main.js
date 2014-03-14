require({
  paths: {
    highlight: '../bower_components/highlightjs/highlight.pack',
    jquery: '../bower_components/jquery/dist/jquery',
    skate: '../bower_components/skate/dist/skate',
    witness: '../bower_components/witness/dist/witness'
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
