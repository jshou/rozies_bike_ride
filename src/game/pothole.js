game.module(
  'game.pothole'
)
.body(function() {
  game.addAsset('pothole.png', 'pothole');
  Pothole = game.Class.extend({
    speed: 3,

    init: function(x, y) {
      this.sprite = new game.Sprite('pothole');
      this.sprite.anchor.x = this.sprite.anchor.y = 0.5; // anchor to the middle
      this.sprite.position.x = x;
      this.sprite.position.y = y;
      this.x = x;
      this.y = y;

      game.scene.stage.addChildAt(this.sprite, 0); // potholes always spawn underneath everything else
      game.scene.addObject(this);
    },

    update: function() {
      this.sprite.position.x -= this.speed;
    }
  });
});
