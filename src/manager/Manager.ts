
import initEvents   from './events'
import Scene        from './Scene'
import GameObject   from './GameObject'
import Vector2D     from '../Vector/Vector2D'
import { Render }   from '../render/index'

export default class Manager {
  public scene: Scene
  public render: Render

  constructor (id?: string, width?: number, height?: number) {
    this.render = new Render(id, width, height)
    this.setScene(new Scene())
    initEvents(this)
  }

  setScene (scene: Scene) {
    this.scene = scene
    this.scene.setRender(this.render)
  }

  getWidth (): number {
    return this.render.getWidth()
  }

  getHeight (): number {
    return this.render.getHeight()
  }

  getTranslation (): Vector2D {
    return this.scene.renderWorld.translation
  }

  run (method: string, data?: Array<any>): void {
    this.scene.run(method, data)
  }

  add (gameObject): void {
    this.scene.add(new GameObject(gameObject))
  }

  update (): void {
    this.scene.update()
    this.start()
  }

  start (): void {
    requestAnimationFrame(this.update.bind(this))
  }
}
