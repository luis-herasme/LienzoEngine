
const vec = require('vector_functions')

function Vector (value) {
  this.value = Array.from(arguments)

  this.add = function (vector) {
    this.value = vec.add(this.value, vector.value)
  }

  this.sub = function (vector) {
    this.value = vec.sub(this.value, vector.value)
  }

  this.mult = function (scalar) {
    this.value = vec.mult(this.value, scalar)
  }

  this.inverse = function () {
    this.value = vec.inverse(this.value)
  }

  this.mag = function () {
    return vec.mag(this.value)
  }

  this.dot = function (vector) {
    return vec.dot(this.value, vector.value)
  }

  this.normalize = function () {
    this.value = vec.normalize(this.value)
  }

  this.distance = function (vector) {
    return vec.distance(vector.value, this.value)
  }

  this.angle = function () {
    return vec.angle(this.value)
  }

  this.copy = function () {
    return new Vector(vec.copy(this.value))
  }

  this.setMag = function (magnitud) {
    this.value = vec.setMag(this.value, magnitud)
  }

  this.addAngle = function (ang, piv) {
    this.value = vec.addAngle(this.value, ang, piv)
  }

  this.limit = function (scalar) {
    this.value = vec.limit(this.value, scalar)
  }

  this.moveTowards = function (vector, speed, stop) {
    this.value = vec.moveTowards(this.value, vector, speed, stop)
  }

  this.angleBetween = function (vector) {
    return vec.angleBetween(this.value, vector)
  }

  this.setAngle = function (ang) {
    this.value = vec.setAngle(this.value, ang)
  }
}

module.exports = Vector
