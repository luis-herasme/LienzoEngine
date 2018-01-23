
import Vector2D from '../Vector/Vector2D'

class Transform {
  public position : Vector2D
  public scale    : Vector2D
  public rotation : number

  constructor (position = new Vector2D(0, 0), scale = new Vector2D(1, 1), rotation = 0) {
    this.position = position
    this.scale = scale
    this.rotation = rotation
  }

  rotate (rotation) {
    this.rotation += rotation
  }

  setPosition (x, y) {
    this.position = new Vector2D(x, y)
  }

  globalTranslate (x, y) {
    this.position.add(new Vector2D(x, y))
  }

  translate (x, y) {
    const translationY = Vector2D.angleMagnitude(this.rotation, y)
    const translationX = Vector2D.angleMagnitude(this.rotation + Math.PI / 2, x)
    this.position.add(new Vector2D(translationY[0], translationY[1]))
    this.position.add(new Vector2D(translationX[0], translationX[1]))
  }
}

export default Transform
