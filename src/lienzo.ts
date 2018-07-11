
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
