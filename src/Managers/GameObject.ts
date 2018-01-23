
import Scene               from './GameScene'
import TransformComponent  from '../Components/TransformComponent'
import IdentifierComponent from '../Components/IdentifierComponent'
import ScriptComponent     from '../Components/ScriptComponent'

export default class GameObject {
  public Transform     : TransformComponent  = new TransformComponent()
  public Identifier    : IdentifierComponent = new IdentifierComponent()
  public ScriptManager : ScriptComponent     = new ScriptComponent(this)
  public Scene         : Scene
  public Components

  constructor (components) {
    console.log(components)
    this.Components = components
  }

  run (name: string, params?: Array<any>): void {
    this.ScriptManager.run(name, params)
  }

  destroy (): void {
    this.Components.forEach(component => {
      component.destroy()
    })
    this.Scene.remove(this)
  }
}
