game.module(
    'game.rozie'
)
.body(function() {
  game.addAsset('rozie.png', 'rozie');
  Rozie = game.Class.extend({
    init: function(x, y) {
      this.sprite = new game.Sprite('rozie');
      this.sprite.anchor.x = this.sprite.anchor.y = 0.5; // anchor to the middle
      this.sprite.position.x = x;
      this.sprite.position.y = y;

      game.scene.stage.addChild(this.sprite);
    }
  });
});


