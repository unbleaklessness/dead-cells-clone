let Sprite = {
    make(source) {
        let image = new Image()
        let result = {
            image: image,
            rectangle: Rectangle.make(0, 0, 0, 0),
            draw(context) {
                context.clearRect(0, 0, 9999, 9999)
                context.drawImage(this.image, this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height)
            },
        }
        image.src = source
        image.onload = () => {
            result.rectangle = Rectangle.make(0, 0, image.width, image.height)
        }
        return result
    },
}