
import Scene from './GameScene'

export default class GameObject {
  private components
  public scene      : Scene

  constructor (components) {
    this.components = components
  }

  destroy (): void {
    this.scene.destroy(this)
  }
}
