game.module(
  'game.rozie'
)
.require('engine.core', 'engine.keyboard')
.body(function() {
  game.addAsset('rozie.png', 'rozie');
  Rozie = game.Class.extend({
    movementAmount: 10,

    init: function(x, y) {
      this.sprite = new game.Sprite('rozie');
      this.sprite.anchor.x = this.sprite.anchor.y = 0.5; // anchor to the middle
      this.sprite.position.x = x;
      this.sprite.position.y = y;

      this.max = game.config.system.height - this.sprite.height / 2;
      this.min = this.sprite.height / 2;

      game.scene.stage.addChild(this.sprite);
      game.scene.addObject(this);
    },

    update: function() {
      if (game.keyboard.down('UP')) {
        this.sprite.position.y -= this.movementAmount;
      } else if (game.keyboard.down('DOWN')) {
        this.sprite.position.y += this.movementAmount;
      }

      this.sprite.position.y = Math.min(Math.max(this.min, this.sprite.position.y), this.max);
    },
  });
});
