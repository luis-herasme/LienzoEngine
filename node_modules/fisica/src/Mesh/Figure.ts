
import { Vector2D } from 'vector_class'

class Figure {
  public points: Array<Vector2D> = []
  public rotation: number = 0

  add(point) {
    this.points.push(point)
  }

  translate(vec) {
    this.points = this.points.map((x) => Vector2D.add(x, vec))
  }

  rotate(rotation) {
    this.points = this.points.map((x) => Vector2D.setAngle(x, this.rotation + rotation))
  }

  scale(vec) {
    this.points = this.points.map((x) => Vector2D.mult(x, vec))
  }

  center() {
    Vector2D.average(this.points)
  }

  far(center) {
    return Vector2D.mag(this.points.reduce((a, c) => {
      if (Vector2D.distance(a, center) > Vector2D.distance(c, center)) return a
      else return c
    }))
  }
}

export default Figure
