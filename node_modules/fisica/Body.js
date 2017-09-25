
const Vector = require('vector_class')
const vec = require('vector_functions')
const Figure = require('./Figure')

function Body (type, config) {
  this.mass = config.mass ? config.mass : 1
  this.friction = config.friction ? config.friction: 1 
  this.restitution = config.restitution ? config.restitution : 0.9
  this.aceleration = config.aceleration ? new Vector(...config.aceleration) : new Vector(0, 0)
  this.velocity = config.velocity ? new Vector(...config.velocity) : new Vector(0, 0)
  this.collision = config.collision
  this.name = config.name
  this.type = type

  if (type !== 'Circle') {
    this.update = () => {
      this.velocity.add(this.aceleration)
      this.vertices.translate(this.velocity)

      this.velocity.mult(this.friction)

      this.center = this.vertices.center()
      this.aceleration.mult(0)
      this.far = this.vertices.far(this.center)
    }
  } else {
    this.update = () => {
      this.velocity.add(this.aceleration)
      this.center = vec.add(this.center, this.velocity.value)

      this.velocity.mult(this.friction)

      this.aceleration.mult(0)
    }
  }

  this.addForce = (force) => {
    force.mult(1 / this.mass)
    this.aceleration.add(force)
  }

  if (type === 'Circle') {
    this.center = config.position
    this.far = config.radius
  } else {
    this.vertices = new Figure()
    if (type === 'Mesh') {
      config.vertices.forEach((vertex) => this.vertices.add(vertex))
    } else if (type === 'Box') {
      const pointY = vec.add(config.position, [0, config.side])
      const pointX = vec.add(config.position, [config.side, 0])
      const pointXY = vec.add(config.position, [config.side, config.side])

      this.vertices.add(config.position)
      this.vertices.add(pointX)
      this.vertices.add(pointXY)
      this.vertices.add(pointY)
    } else if (type === 'Rect') {
      const pointY = vec.add(config.position, [0, config.height])
      const pointX = vec.add(config.position, [config.width, 0])
      const pointXY = vec.add(config.position, [config.width, config.height])

      this.vertices.add(config.position)
      this.vertices.add(pointX)
      this.vertices.add(pointXY)
      this.vertices.add(pointY)
    }
    this.center = this.vertices.center()
    this.far = this.vertices.far(this.center)
  }

  return this
}

module.exports = Body
