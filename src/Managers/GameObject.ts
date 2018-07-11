//import AnimationComponent from '../Components/AnimationComponent'
// import SoundComponent from '../Components/SoundComponent'
import IdentifierComponent from '../Components/IdentifierComponent'
import TransformComponent from '../Components/TransformComponent'
import ColliderComponent from '../Components/ColliderComponent'
import SpriteComponent from '../Components/SpriteComponent'
import ScriptComponent from '../Components/ScriptComponent'
import GameScene from '../Managers/GameScene'

class GameObject {  
  // private AnimationComponent: AnimationComponent
  // private SoundComponent: SoundComponent
  public identifierComponent: IdentifierComponent
  public transformComponent: TransformComponent
  public scriptComponent: ScriptComponent

  private colliderComponent: ColliderComponent
  private spriteComponent: SpriteComponent

  private scene: GameScene

  constructor() {
    this.identifierComponent = new IdentifierComponent()
    this.transformComponent = new TransformComponent()
    this.scriptComponent = new ScriptComponent(this)
  }

  setSprite(src: string): void {
    this.spriteComponent = new SpriteComponent({
      src,
      position: this.transformComponent.position,
      rotation: this.transformComponent.rotation,
      scale: this.transformComponent.scale,
    })
    this.scene.renderScene.add(this.spriteComponent)
  }

  run(name: string, params: Array<any>): void {
    this.scriptComponent.run(name, params)
  }

  destroy(): void {
//    if (this.AnimationComponent) this.AnimationComponent.destroy(this.scene.getScene())
    if (this.colliderComponent) this.colliderComponent.destroy(this.scene.physicsScene)
    // if (this.spriteComponent) this.spriteComponent.destroy(this.scene.renderScene)
    this.scene.remove(this)
  }
}

export default GameObject
