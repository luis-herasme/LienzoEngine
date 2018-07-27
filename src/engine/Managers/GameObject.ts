//import AnimationComponent from '../Components/AnimationComponent'
// import SoundComponent from '../Components/SoundComponent'
import IdentifierComponent from '../Components/IdentifierComponent'
import TransformComponent from '../Components/TransformComponent'
import ColliderComponent from '../Components/ColliderComponent'
import SpriteComponent from '../Components/SpriteComponent'
import ScriptComponent from '../Components/ScriptComponent'
import GameScene from '../Managers/GameScene'
import Vector from '../../vector/Vector2D'

class GameObject {  
  // private AnimationComponent: AnimationComponent
  // private SoundComponent: SoundComponent
  public identifierComponent: IdentifierComponent
  public transformComponent: TransformComponent
  public scriptComponent: ScriptComponent

  public colliderComponent: ColliderComponent
  public spriteComponent: SpriteComponent

  private scene: GameScene

  constructor(scene: GameScene) {
    this.identifierComponent = new IdentifierComponent()
    this.transformComponent = new TransformComponent()
    this.scriptComponent = new ScriptComponent(this)
    this.scene = scene
  }

  setSprite(configuration): void {
    console.log(`Configuration
    -->
    ${configuration}`)
    this.spriteComponent = new SpriteComponent({
      src: configuration.src,
      width: configuration.width,
      height: configuration.height,
      position: this.transformComponent.position,
      rotation: this.transformComponent.rotation,
      scale: this.transformComponent.scale,
    }, this)
    this.scene.renderScene.add(this.spriteComponent)
  }

  setRigidBody(configuration): void {
    this.colliderComponent = new ColliderComponent(this.transformComponent.position,new Vector(configuration.width, configuration.height))
    this.colliderComponent.onCollision = configuration.onCollision
    this.scene.physicsScene.add(this.colliderComponent)
    console.log(this.scene.physicsScene)
  }

  run(name: string, params: Array<any>): void {
    this.scriptComponent.run(name, params)
  }

  update(): void {
    this.spriteComponent.position = this.colliderComponent.position
  }

  destroy(): void {
//    if (this.AnimationComponent) this.AnimationComponent.destroy(this.scene.getScene())
    if (this.colliderComponent) this.scene.physicsScene.remove(this.colliderComponent)
    // if (this.spriteComponent) this.spriteComponent.destroy(this.scene.renderScene)
    this.scene.remove(this)
  }
}

export default GameObject
