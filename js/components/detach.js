define(['jquery'], function($) {
  var CLASS_DETACHED = 'detached';
  var DATA_INSTANCE = '_detach.instance';


  function Detach(el) {
    this._el = el;
    this._detached = false;
    this._deatachedOffset = 0;
    this._namespace = 'detach-' + Math.random()
    this._init();
  }

  Detach.prototype = {
    _init: function() {
      var that = this;

      $(window).on('scroll.' + this._namespace, function(e) {
        that._scrollHandler(e);
      });
    },

    _destroy: function() {
      $(window).off('scroll.' + this._namespace);
    },

    _scrollHandler: function(e) {
      var $el = $(this._el);
      var offset = $el.offset();
      var outerOffset = offset.top - ($el.outerHeight(true) - $el.outerHeight());
      var scrollTop = $(window).scrollTop();
      var shouldDetach = !this._detached && outerOffset < scrollTop;
      var shouldAttach = this._detached && this._deatachedOffset >= scrollTop;

      if (shouldDetach) {
        this._detached = true;
        this._deatachedOffset = outerOffset;
        $el.addClass(CLASS_DETACHED);
      } else if (shouldAttach) {
        this._detached = false;
        this._deatachedOffset = 0;
        $el.removeClass(CLASS_DETACHED);
      }
    }
  };


  function detach(el) {
    var $el = $(el);
    var instance = $el.data(DATA_INSTANCE);

    if (instance) {
      return instance;
    } else {
      $el.data(DATA_INSTANCE, instance = new Detach($el.get(0)));
    }

    return instance;
  }


  return {
    ready: detach,
    remove: function(el) {
      detach(el).destroy();
    }
  };
});
