
import initEvents   from './events'
import Scene        from './Scene'
import GameObject   from './GameObject'
import Vector2D     from '../Vector/Vector2D'
import { Render }   from '../render/index'

export default class Manager extends Render {
  public gameScene : Scene

  constructor (config, id?: string, width?: number, height?: number) {
    super(id, width, height)
    this.setScene(new Scene(config))
    initEvents(this)
  }

  setScene (scene: Scene) {
    this.gameScene = scene
    this.gameScene.setRender(this)
  }

  getWidth (): number {
    return this.getWidth()
  }

  getHeight (): number {
    return this.getHeight()
  }

  getTranslation (): Vector2D {
    return this.gameScene.stage.translation
  }

  update (): void {
    this.scene.update()
    this.start()
  }

  start (): void {
    requestAnimationFrame(this.update.bind(this))
  }
}
