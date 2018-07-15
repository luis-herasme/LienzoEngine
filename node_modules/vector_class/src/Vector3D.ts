
class Vector3D {
  public x: number
  public y: number
  public z: number

  constructor (x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  add (vector: Vector3D): void {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z
  }

  sub (vector: Vector3D): void {
    this.x -= vector.x
    this.y -= vector.y
    this.z -= vector.z
  }

  mult (scalar: number): void {
    this.x *= scalar
    this.y *= scalar
    this.z *= scalar
  }

  div (scalar: number): void {
    this.x /= scalar
    this.y /= scalar
    this.z /= scalar
  }

  inverse (): void {
    this.x *= -1
    this.y *= -1
    this.z *= -1
  }

  mag (): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  dot (vector: Vector3D): number {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z
  }

  distance (vector: Vector3D): number {
    return Vector3D.sub(this, vector).mag()
  }

  angle (): number {
    return Math.atan2(this.y, this.x)
  }

  copy (): Vector3D {
    return new Vector3D(this.x, this.y, this.z)
  }

  normalize (): void {
    this.div(this.mag())
  }

  setMag (mag: number): void {
    this.normalize()
    this.mult(mag)
  }

  setAngle (angle: number): void {
    const magnitude = this.mag()

    this.x = magnitude * Math.cos(angle)
    this.y =  magnitude * Math.sin(angle)
  }

  addAngle (angle: number): void {
    this.setAngle(this.angle() + angle)
  }

  limit (scalar: number): void {
    if (this.mag() > scalar) {
      this.setMag(scalar)
    }
  }

  moveTowards (vector: Vector3D, speed: number, stop: number): void {
    if (this.distance(vector) > stop) {
      const unit = Vector3D.normalize(vector)
      unit.mult(speed)
      this.add(unit)
    }
  }

  zero (): void {
    this.x = 0
    this.y = 0
    this.z = 0
  }

  static add (vector1: Vector3D, vector2: Vector3D): Vector3D {
    return new Vector3D(vector1.x + vector2.x, vector1.y + vector2.y, vector1.z + vector2.z)
  }

  static sub (vector1: Vector3D, vector2: Vector3D): Vector3D {
    return new Vector3D(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z)
  }

  static mult (vector: Vector3D, scalar: number): Vector3D {
    return new Vector3D(vector.x * scalar, vector.y * scalar, vector.z * scalar)
  }

  static div (vector: Vector3D, scalar: number): Vector3D {
    return new Vector3D(vector.x / scalar, vector.y / scalar, vector.z / scalar)
  }

  static inverse (vector: Vector3D): Vector3D {
    return new Vector3D(vector.x * -1, vector.y * -1, vector.z * -1)
  }

  static distance (vector1: Vector3D, vector2: Vector3D): number {
    return this.sub(vector1, vector2).mag()
  }

  static normalize (vector: Vector3D): Vector3D {
    return this.div(vector, vector.mag())
  }

  static cross (vector1: Vector3D, vector2: Vector3D): number {
    return vector1.x * vector2.y - vector2.x * vector1.y
  }

  static random (x: number, y: number, z: number): Vector3D {
    if (Math.random() > 0.5) {
      return new Vector3D(x * Math.random(), y * Math.random(), z * Math.random())
    } else {
      return new Vector3D(-x * Math.random(), -y * Math.random(), -z * Math.random())
    }
  }
}

export default Vector3D

/*

TO ADD

import vector from '../vector'

function rotate (x, y, z, center, vec) {
  let vecR
  vecR = vector.sub(vec, center)
  vecR = rotateX(vecR, x)
  vecR = rotateY(vecR, y)
  vecR = rotateZ(vecR, z)
  vecR = vector.add(vecR, center)
  return vecR
}

function rotateX (vec, t) {
  let vecR = vec
  let newy = vec[1] * Math.cos(t) - vec[2] * Math.sin(t)
  let newz = vec[1] * Math.sin(t) + vec[2] * Math.cos(t)
  vecR[1] = newy
  vecR[2] = newz
  return vecR
}

function rotateY (vec, t) {
  let vecR = vec
  let newz = vec[2] * Math.cos(t) - vec[0] * Math.sin(t)
  let newx = vec[2] * Math.sin(t) + vec[0] * Math.cos(t)
  vecR[2] = newz
  vecR[0] = newx
  return vecR
}

function rotateZ (vec, t) {
  let vecR = vec
  let newx = vec[0] * Math.cos(t) - vec[1] * Math.sin(t)
  let newy = vec[0] * Math.sin(t) + vec[1] * Math.cos(t)
  vecR[0] = newx
  vecR[1] = newy
  return vecR
}

const memlength = (vec) => Math.pow(Math.pow(vec[0], 2) + Math.pow(vec[1], 2) + Math.pow(vec[2], 2), 0.5)

const normal = (v1, v2, v3) => vector.cross(vector.sub(v2, v1), vector.sub(v3, v1))

function isInTriangle (vec, triangle) {
  let u = vector.sub(triangle.v2, triangle.v1)
  let v = vector.sub(triangle.v3, triangle.v1)
  let w = vector.sub(vec, triangle.v1)

  let vCrossW = vector.cross(v, w)
  let vCrossU = vector.cross(v, u)

  if (vector3.dot(vCrossW, vCrossU) < 0) return false

  let uCrossW = vector.cross(u, w)
  let uCrossV = vector.cross(u, v)

  if (vector3.dot(uCrossW, uCrossV) < 0) return false

  let denom = memlength(uCrossV)
  let r = memlength(vCrossW) / denom
  let t = memlength(uCrossW) / denom

  return (r + t <= 1)
}

function getTriangleArea (triangle) {
  let temp = vector.cross(vector.sub(triangle.v3, triangle.v1), vector.sub(triangle.v3, triangle.v2))
  let x = Math.pow(temp[0], 2)
  let y = Math.pow(temp[1], 2)
  let z = Math.pow(temp[2], 2)
  return Math.pow(x + y + z, 0.5) / 2
}

function dot (vec1, vec2) {
  return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2]
}

function getPlaneIntersect (line1, line2, triangle) {
  let normal = triangle.normal
  let u = vector3.dot(normal, vector.sub(triangle.v1, line1)) / vector3.dot(normal, vector.sub(line2, line1))
  return vector.add(line1, vector.mult(vector.sub(line2, line1), u))
}

const vector3 = { dot, rotate, normal, isInTriangle, getTriangleArea, getPlaneIntersect, memlength }

export default vector3

*/