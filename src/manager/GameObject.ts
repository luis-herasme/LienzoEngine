
import ScriptManager from '../components/Script'
import Transform     from '../components/Transform'
import Scene         from './Scene'
import Graphic       from '../render/Graphic'
import { Sprite }    from '../render/index'

export default class GameObject {
  private scripts   : ScriptManager = new ScriptManager(this)
  public graphics   : Array<Graphic> = []
  public collider   : Dynamic
  public sprite     : Sprite
  public scene      : Scene
  public Transform  : Transform

  constructor (components) {
    for (let component in Object.keys(components)) {
      if (component === 'Graphic') {
        this.graphics.push(components[component])
      }
      else if (component === 'Sprite') {
        this.sprite = components[component]
      }
      else if (component === 'Animation') {
        this.sprite = components[component]
      }
      else if (component === 'Transform') {
        this.Transform = components[component]
      }
      else if (component === 'Collider') {
        this.collider = components[component]
      }
      else if (component === 'Scripts') {
        this.scripts.add(components[component])
      }
      else if (component === 'Script') {
        this.scripts.one(components[component])
      }
    }
  }

  run (methodName: string, params?: Array<any>): void {
    this.scripts.run(methodName, params)
  }

  destroy (): void {
    this.scene.destroy(this)
  }
}
