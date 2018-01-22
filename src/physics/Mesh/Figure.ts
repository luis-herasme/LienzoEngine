
import vector from '../../Vector/vectorFunctions'

export default class Figure {
  public points
  public rotation

  constructor () {
    this.points = []
    this.rotation = 0
  }

  add (point) {
    this.points.push(point)
  }

  translate (vec) {
    this.points = this.points.map((x) => vector.add(x, vec))
  }

  rotate (rotation) {
    this.points = this.points.map((x) => vector.setAngle(x, this.rotation + rotation))
  }

  scale (vec) {
    this.points = this.points.map((x) => vector.mult(x, vec))
  }

  center () {
    vector.average(this.points)
  }

  far (center) {
    return vector.mag(this.points.reduce((a, c) => {
      if (vector.distance(a, center) > vector.distance(c, center)) return a
      else return c
    }))
  }
}
