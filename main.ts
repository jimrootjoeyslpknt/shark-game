controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let decor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(15)
for (let index = 0; index < 10; index++) {
    decor = sprites.create(assets.image`decoration`, SpriteKind.Player)
    decor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(2100, function () {
    mySprite2 = sprites.create(assets.image`food`, SpriteKind.Food)
    mySprite2.setPosition(scene.screenWidth(), randint(5, 115))
    mySprite2.vx = -75
})
