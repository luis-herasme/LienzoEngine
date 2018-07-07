
console.log('gameobject')

import Scene from './GameScene'
console.log('gmobj 2')
import TransformComponent from '../Components/TransformComponent'
console.log('gmobj 2')
import IdentifierComponent from '../Components/IdentifierComponent'
console.log('gmobj 2')
import ScriptComponent from '../Components/ScriptComponent'
console.log('gmobj 2')

class GameObject {
  public Transform: TransformComponent = new TransformComponent()
  public Identifier: IdentifierComponent = new IdentifierComponent()
  public Script: ScriptComponent = new ScriptComponent(this)
  public Scene: Scene
  public Components

  constructor(components) {
    this.Components = components
  }

  run(name: string, params?: Array<any>): void {
    this.Script.run(name, params)
  }

  destroy(): void {
    this.Components.forEach(component => {
      component.destroy()
    })
    this.Scene.remove(this)
  }
}

export default GameObject
