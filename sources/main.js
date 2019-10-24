let WIDTH, HEIGHT, WIDTH_PX, HEIGHT_PX

let stageElement = document.querySelector('#stage')
let backgroundLayer = document.querySelector('#background-layer').getContext('2d')
let characterLayer = document.querySelector('#character-layer').getContext('2d')

let lastTime = Date.now()
let DT = 0

let onResize = (event) => {
    WIDTH = window.innerWidth
    HEIGHT = window.innerHeight
    WIDTH_PX = WIDTH + 'px'
    HEIGHT_PX = HEIGHT + 'px'

    stageElement.style.width = WIDTH_PX
    stageElement.style.height = HEIGHT_PX
    backgroundLayer.canvas.setAttribute('width', WIDTH_PX)
    backgroundLayer.canvas.setAttribute('height', HEIGHT_PX)
    characterLayer.canvas.setAttribute('width', WIDTH_PX)
    characterLayer.canvas.setAttribute('height', HEIGHT_PX)
}
window.addEventListener('resize', (event) => onResize(event), false)
window.addEventListener('keyup', (event) => Keys.onKeyUp(event), false)
window.addEventListener('keydown', (event) => Keys.onKeyDown(event), false)
window.dispatchEvent(new Event('resize'))

let heroSprite = Sprite.make('images/hero.png')

characterLayer.scale(0.1, 0.1)

let draw = () => {
    let now = Date.now()
    DT = now - lastTime
    lastTime = now

    heroSprite.draw(characterLayer)

    if (Keys.isDown(Keys.RIGHT)) {
        heroSprite.rectangle.x += 1 * DT
    }
    if (Keys.isDown(Keys.LEFT)) {
        heroSprite.rectangle.x -= 1 * DT
    }

    backgroundLayer.fillRect(0, 0, WIDTH, HEIGHT)

    requestAnimationFrame(draw.bind(this))
}
requestAnimationFrame(draw.bind(this))