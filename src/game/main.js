game.module(
  'game.main'
)
.require(
  'game.home_controller',
  'game.rozie'
)
.body(function() {

  SceneGame = game.Scene.extend({
    backgroundColor: 0xb9bec7,

    init: function() {
      new HomeController(this._startGame);
    },

    _startGame: function() {
      new Rozie(game.config.system.width * 0.3, game.config.system.height * 0.5);
    },
  });

  game.start();
});
