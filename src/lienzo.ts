
import { Vector2D } from 'vector_class'
import { Color  } from 'dibujo'

/**
 * Managers
 */
import Scene from './Managers/GameScene'
import Manager from './Managers/GameManager'
import GameObject from './Managers/GameObject'

/**
 * Components
 */
import SoundComponent from './Components/SoundComponent'
import SpriteComponent from './Components/SpriteComponent'
import ColliderComponent from './Components/ColliderComponent'
// import AnimationComponent from './Components/AnimationComponent'


// import { Scene, GameObject, SpriteComponent, Manager } from './lienzo'

const manager = new Manager()
const scene = new Scene(manager)
const player = new GameObject(scene)

player.scriptComponent.add({
    update() {
      console.log('Update call')
        // this.transformComponent.position.x += .1
    }
})
player.setSprite('../assets/ball.png')

scene.add(player)
manager.setScene(scene)
manager.start()
/*



export {
//AnimationComponent,
  ColliderComponent,
  SpriteComponent,
  SoundComponent,
  GameObject,
  Vector2D,
  Manager,
  Scene,
  Color
}
*/