
const vector = require('vector_functions')

function meshIntersect (mesh, mesh2) {
  mesh.vertices.points.forEach((vertex, index) => {
    mesh2.vertices.points.forEach((vertex2, index2) => {
      let end

      if (index !== mesh.vertices.points.length - 1) {
        end = mesh.vertices.points[index + 1]
      } else end = mesh.vertices.points[0]

      let end2
      if (index2 !== mesh2.vertices.points.length - 1) {
        end2 = mesh2.vertices.points[index2 + 1]
      } else end2 = mesh2.vertices.points[0]

      const i = vector.linearIntersect(vertex, end, vertex2, end2)
      if (i[0] !== 1 && i[1] !== 1) {
        collision(mesh, mesh2)
      }
    })
  })
}

function circleIntersect (circle, _circle) {
  if (vector.distance(circle.center, _circle.center) < circle.far + _circle.far) {
    collision(circle, _circle)
  }
}

function meshCircleIntersect (mesh, circle) {
  mesh.vertices.points.forEach((vertex) => {
    if (vector.distance(vertex, circle.center) < circle.far) collision(mesh, circle)
  })
}

function collision (body, _body) {
  if (body.collision) body.collision(body, _body)
  if (_body.collision) _body.collision(_body, body)
}

let idCounter = 0

function Engine () {
  this.bodies = []

  this.add = (body) => {
    body.id = idCounter++
    this.bodies.push(body)
  }

  this.destroy = (body) => {
    this.bodies = this.bodies.filter((b) => {
      return b.id !== body.id
    })
  }

  this.setBounds = (bounds) => {
    this.bounds = bounds
  }

  this.removeBounds = () => {
    this.bounds = false
  }

  this.update = () => {
    this.bodies.forEach((body, index) => {
      body.update()
      if (this.bounds) {
        if (body.center[0] <= this.bounds[0]) {
        // body.center.x = this.bounds[0]
          body.velocity.mult(body.restitution)
          body.velocity.value[0] *= -1
        }

        if (body.center[0] >= this.bounds[1]) {
        // body.center.x = this.bounds[1]
          body.velocity.mult(body.restitution)
          body.velocity.value[0] *= -1
        }

        if (body.center[1] <= this.bounds[2]) {
        // body.center.y = this.bounds[2]
          body.velocity.mult(body.restitution)
          body.velocity.value[1] *= -1
        }

        if (body.center[1] >= this.bounds[3]) {
        // body.center.y = this.bounds[3]
          body.velocity.mult(body.restitution)
          body.velocity.value[1] *= -1
        }
      }

      this.bodies.forEach((body2, index2) => {
        if (index !== index2) {
          if (vector.distance(body.center, body2.center) < body.far + body2.far) {
            if (body.type !== 'Circle' && body2.type !== 'Circle') meshIntersect(body, body2)
            else if (body.type !== 'Circle' && body2.type === 'Circle') meshCircleIntersect(body, body2)
            else if (body.type === 'Circle' && body2.type !== 'Circle') meshCircleIntersect(body2, body)
            else circleIntersect(body, body2)
          }
        }
      })
    })
  }
}

module.exports = Engine
