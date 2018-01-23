
import Render from './Render'
import Vector2D from '../Vector/Vector2D'

class Scene {
  public context
  public renderer: Render
  public childs: Array<any>

  public following: boolean = false
  public translation: Vector2D = new Vector2D(0, 0)
  public followed
  public temp

  constructor () {
    this.childs = []
  }

  setRender (render: Render): void {
    this.renderer = render
    this.context = render.context
    this.smoth(false)
  }

  add (element): void {
    element.context = this.renderer.context
    this.childs.push(element)
  }

  remove (g): void {
    this.childs.splice(this.childs.indexOf(g), 1)
  }

  clear (color: string = '#000'): void {
    this.context.fillStyle = color

    this.context.fillRect(
      -this.translation.x,
      0,
      window.innerWidth,
      window.innerHeight
    )
  }

  follow (gameObject) {
    this.followed = gameObject.transform.position
    this.temp = this.followed.copy()
    this.following = true
  }

  smoth (state: boolean): void {
    this.context.webkitImageSmoothingEnabled = state
    this.context.mozImageSmoothingEnabled = state
    this.context.imageSmoothingEnabled = state
  }

  zoom (where: Vector2D, howMuch: Vector2D): void {
    this.context.translate(where.x, where.y)
    this.context.scale(howMuch.x, howMuch.y)
    this.context.translate(-where.x, -where.y)
  }

  translate(x, y) {
    this.translation.x -= x
    this.translation.y -= y
    this.context.translate(-x, -y)
  }

  update (): void {
    if (this.following) {
      const change = Vector2D.sub(this.temp, this.followed)
      this.temp = this.followed.copy()
      this.translate(-change.x, 0) /* -change.y To enable y following */
    }
  
    this.childs.forEach(child => child.render())
  }
}

export default Scene
