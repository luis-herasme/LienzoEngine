const manager = new engine.GameManager()
const block = manager.gameObject({
    Sprite: {
        src: '../../assets/character.png',
        width: 50,
        height: 50
    },
    Script: {
        update() {
            if (this.mouse) {
                this.transformComponent.position.moveTowards(this.mouse)
            }
        },
        click(mouse) {
            this.mouse = mouse
        }
    }
})
manager.add(block)
manager.start()