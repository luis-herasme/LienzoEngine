const manager = new engine.GameManager()
manager.scene.renderScene.backgroundColor = `rgb(50,50,50)`
const block = manager.gameObject({
    Sprite: {
        src: '../../assets/character.png',
        width: 50,
        height: 50
    },
    Script: {
        start() {
            this.spriteComponent.anchor = new engine.Vector2D(0.5, 0.5)
        },
        keyPress(e) {
            if (e.key === 's') {
                this.transformComponent.translate(10, 0)
            }
            if (e.key === 'w') {
                this.transformComponent.translate(-10, 0)
            }
            if (e.key === 'a') {
                this.transformComponent.rotation -= 0.1
            }
            if (e.key === 'd') {
                this.transformComponent.rotation += 0.1
            }
        }
    }
})
manager.add(block)
manager.start()
