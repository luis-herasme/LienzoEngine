const manager = new engine.GameManager()
const tree = manager.gameObject({
    Sprite: {
        src: '../../assets/character.png',
        width: 50,
        height: 50
    },
    Script: {
        update() {
            if (this.follow) {
                this.transformComponent.position.moveTowards(this.mouse)
            }
        },
        click(mouse) {
            this.follow = !this.follow
            this.mouse = mouse
        }
    }
})
manager.add(tree)
manager.start()