game.module(
    'game.home_controller'
)
.body(function() {
  HomeController = game.Class.extend({
    startButtonSelector: '.home .start',
    homeScreenSelector: '.home',

    init: function(callback) {
      this._wireUpButtons(callback);
    },

    _wireUpButtons: function(callback) {
      var homeScreenSelector = this.homeScreenSelector;

      $(this.startButtonSelector).click(function() {
        $(homeScreenSelector).hide();
        callback();
      }).bind(this);
    }
  });
});

