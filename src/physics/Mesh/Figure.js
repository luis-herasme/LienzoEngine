
const vector = require('vector_functions')

function Figure () {
  this.points = []
  this.rotation = 0

  this.add = (point) => {
    this.points.push(point)
  }

  this.translate = (vec) => {
    this.points = this.points.map((x) => vector.add(x, vec))
  }

  this.rotate = (rotation) => {
    this.points = this.points.map((x) => vector.setAngle(x, this.rotation + rotation))
  }

  this.scale = (vec) => {
    this.points = this.points.map((x) => vector.mult(x, vec))
  }

  this.center = () => vector.average(this.points)

  this.far = (center) => {
    return vector.mag(this.points.reduce((a, c) => {
      if (vector.distance(a, center) > vector.distance(c, center)) return a
      else return c
    }))
  }

  return this
}

module.exports = Figure
