namespace SpriteKind {
    export const professer = SpriteKind.create()
}
let Pokeball_bulbasaur = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 2 7 2 2 2 2 2 f . . . . 
    . . f 2 2 2 7 7 2 2 2 2 f . . . 
    . . f 2 2 2 7 7 2 2 2 2 f . . . 
    . . f 2 2 2 f f f 2 2 2 f . . . 
    . . f f f f f f f f f f f . . . 
    . . f 1 1 1 f f f 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
    . . . . . 2 1 1 1 1 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . f 1 f 2 2 2 2 2 2 2 2 2 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . f 1 1 2 2 2 2 2 2 2 2 1 1 f . 
    . f 1 1 2 2 2 2 2 2 2 2 1 1 f . 
    . . f f f 2 2 f f 2 2 f f f . . 
    . . . f 2 f f 2 2 f f 2 f . . . 
    . . . f 2 2 2 f f 2 2 2 f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
let Pokeball_charmander = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . f 2 2 2 4 5 4 2 2 2 f . . . 
    . . f 2 2 2 4 4 4 2 2 2 f . . . 
    . . f 2 2 2 f f f 2 2 2 f . . . 
    . . f f f f f f f f f f f . . . 
    . . f 1 1 1 f f f 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Pokeball_squirtle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 2 2 6 6 2 2 2 f . . . . 
    . . f 2 2 2 6 2 2 2 2 2 f . . . 
    . . f 2 2 2 8 8 8 2 2 2 f . . . 
    . . f 2 2 2 f f f 2 2 2 f . . . 
    . . f f f f f f f f f f f . . . 
    . . f 1 1 1 f f f 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Professor_oak = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . f f f b b b b b b f . . . . 
    . . . f b f f b f f f b f . . . 
    . . . f f 1 1 f 1 1 1 f f . . . 
    . . f f 1 1 1 1 1 1 1 1 f f . . 
    . f 1 f 1 1 1 1 1 1 1 1 f 1 f . 
    . f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
    . f 1 1 1 1 f 1 1 f 1 1 1 1 f . 
    . . f f 1 1 1 1 1 1 1 1 f f . . 
    . f f 1 f 1 1 1 1 1 1 f 1 f f . 
    f 1 1 f b f f f f f f b f 1 1 f 
    f 1 1 f b b f f f f b b f 1 1 f 
    . f f f b b f 2 2 f b b f f f . 
    . . f b b b f f f f b b b f . . 
    . . . f f f f f f f f f f . . . 
    . . f f f f f . . f f f f f . . 
    `, SpriteKind.professer)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020303030301010101010104040404010101010101010101010101010101010101010101010101010105060701010101010101010101010303030101030303030304040401010404040404`, img`
    . . . . . . 2 2 2 2 
    . . . . . . 2 2 2 2 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . 2 2 2 . 
    . . . . . . . . . . 
    2 2 2 . . 2 2 2 2 2 
    2 2 2 . . 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen))
controller.moveSprite(mySprite)
Pokeball_bulbasaur.setPosition(105, 70)
Pokeball_charmander.setPosition(120, 70)
Pokeball_squirtle.setPosition(135, 70)
