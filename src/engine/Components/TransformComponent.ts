import { Vector2D } from '../../vector'

class Transform {
  public position: Vector2D = new Vector2D(0, 0)
  public scale: Vector2D = new Vector2D(1, 1)
  public rotation: number = 0

  constructor(configuration?) {
    if (configuration) {
      if (configuration.position) this.position = configuration.position
      if (configuration.rotation) this.rotation = configuration.rotation
      if (configuration.scale) this.scale = configuration.scale
    }
  }

  rotate(rotation): void {
    this.rotation += rotation
  }

  setPosition(x, y): void {
    this.position = new Vector2D(x, y)
  }

  globalTranslate(x, y): void {
    this.position.add(new Vector2D(x, y))
  }

  translate(x, y): void {
    const translationY = Vector2D.angleMagnitude(this.rotation, y)
    const translationX = Vector2D.angleMagnitude(this.rotation + Math.PI / 2, x)
    this.position.add(new Vector2D(translationY.x, translationY.y))
    this.position.add(new Vector2D(translationX.x, translationX.y))
  }
}

export default Transform 
