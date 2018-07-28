const manager = new engine.GameManager()
manager.scene.renderScene.backgroundColor = `rgba(255,255,255, 0.25)`

for (let index = 0; index < 150; index++) {
    const block = manager.gameObject({
        Sprite: {
            src: '../../assets/character.png',
            width: 15,
            height: 15
        },
        RigidBody: {
            width: 15,
            height: 15
        },
        Script: {
            start() {
                this.colliderComponent.restitution = 0.75
                this.colliderComponent.position = engine.Vector2D.randomP(300, 300)
            },
            update() {
                if (this.mouse) {
                    const m = engine.Vector2D.sub(this.mouse, this.transformComponent.position)
                    const normal = engine.Vector2D.normalize(m)
                    m.mult(0.5)
                    this.colliderComponent.addForce(m)
                 
                }
            },
            click(mouse) {
                this.mouse = mouse
            }
        }
    })
    manager.add(block)    
}
manager.start()
