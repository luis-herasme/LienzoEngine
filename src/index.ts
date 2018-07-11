
import { Scene, GameObject, SpriteComponent, Manager } from './lienzo'

const manager = new Manager()
const player = new GameObject()
const scene = new Scene(manager)

player.scriptComponent.add({
    update() {
        this.position.x += .1
    }
})
player.setSprite('./assets/Slime.png')

scene.add(player)
manager.setScene(scene)
manager.start()

/*
player.colliderComponent({
    width: 10,
    heigth: 10
})
*/
