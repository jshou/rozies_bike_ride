game.module(
  'game.main'
)
.require(
  'game.home_controller',
  'game.rozie',
  'game.pothole'
)
.body(function() {

  SceneGame = game.Scene.extend({
    backgroundColor: 0xb9bec7,

    init: function() {
      new HomeController(this._startGame.bind(this));
    },

    _startGame: function() {
      new Rozie(game.config.system.width * 0.3, game.config.system.height * 0.5);

      this._spawnPothole();
      this.addTimer(5000, this._spawnPothole, true);
    },

    _spawnPothole: function() {
      var randomHeight = Math.random();
      new Pothole(game.config.system.width + 10, game.config.system.height * randomHeight);
    }
  });

  game.start();
});
