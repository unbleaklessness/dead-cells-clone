let Keys = {
    pressed: {},
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    isDown(keyCode) {
        return this.pressed[keyCode]
    },
    onKeyDown(event) {
        this.pressed[event.keyCode] = true
    },
    onKeyUp(event) {
        delete this.pressed[event.keyCode]
    }
  }