
import IdentifierComponent from '../Components/IdentifierComponent'
import AnimationComponent from '../Components/AnimationComponent'
import TransformComponent from '../Components/TransformComponent'
import ColliderComponent from '../Components/ColliderComponent'
import SpriteComponent from '../Components/SpriteComponent'
import ScriptComponent from '../Components/ScriptComponent'
import SoundComponent from '../Components/SoundComponent'
import GameScene from '../Managers/GameScene'

class GameObject {
  
  private AnimationComponent: AnimationComponent
  private TransformComponent: TransformComponent
  private ColliderComponent: ColliderComponent
  private SpriteComponent: SpriteComponent
  private ScriptComponent: ScriptComponent
  private SoundComponent: SoundComponent
  private scene: GameScene
  
  public IdentifierComponent: IdentifierComponent

  constructor() {
    this.IdentifierComponent = new IdentifierComponent()
    this.TransformComponent = new TransformComponent()
    this.ScriptComponent = new ScriptComponent(this)
  }

  run(name: string, params: Array<any>): void {
    this.ScriptComponent.run(name, params)
  }

  destroy(): void {
    if (this.AnimationComponent) this.AnimationComponent.destroy(this.scene.getScene())
    if (this.ColliderComponent) this.ColliderComponent.destroy(this.scene.getWorld())
    if (this.SpriteComponent) this.SpriteComponent.destroy(this.scene.getScene())
    this.scene.remove(this)
  }
}

export default GameObject
/*
    gameObject.Scene = this
    for (let component in gameObject.Components) {
      const compo = gameObject.Components[component]
      if (compo.load) {
        compo.load(gameObject, this)
      }
    }
*/