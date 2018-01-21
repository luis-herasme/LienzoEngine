
/**
 * This function adds all the given vectors,
 * this function can take multiple vectors and add them
 * @param {Array} vector This is an array of components of a vector
 * @example
 * // returns [20, 20]
 * add([5, 15], [15, 5])
  * @example
 * // returns [20, 20]
 * add([5, 5], [10, 10], [5, 5])
 */
function add (v1, v2) {
  const vectors = Array.from(arguments)
  return vectors.reduce(function (current, future) {
    future.forEach(function (value, index) {
      if (current[index]) {
        current[index] += value
      } else {
        current[index] = value
      }
    })
    return current
  }, [])
}

/**
 * This function subtracts all the given vectors
 * @param {Array} Vector takes multiple vectors and subtracts them
 */
function sub () {
  const vectors = Array.from(arguments)
  return vectors.reduce(function (current, future) {
    future.forEach(function (value, index) {
      if (current[index]) {
        current[index] -= value
      } else {
        current[index] = value
      }
    })
    return current
  }, [])
}

/**
 * This function multiplies the vector given by the scalar give
 * @param {Array} vector This is an array of components of a vector
 * @param {Number} scalar This is a number
 */
function mult (vector, scalar) {
  return vector.map((x) => x * scalar)
}

/**
 * This function returns the inverse of the vector
 * @param {array} vector This is an array of components of a vector
 */
function inverse (vector) {
  return vector.map((x) => x * -1)
}

/**
 * This function normalise the vector
 * @param {array} vector This is an array of components of a vector
 */
function normalize (vector) {
  let r = mag(vector)
  if (isNaN(r) || r === 0) r = 1
  return vector.map((x) => x / r)
}

/**
 * Returns the magnitude of the distance between the two vectors given
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function distance (vector1, vector2) {
  return mag(sub(vector1, vector2))
}

/**
 * Returns a copy of the given vector
 * @param {array} vector This is an array of components of a vector
 */
function copy (vector) {
  return vector.slice()
}

/**
 * Limits the magnitud of the given vector
 * @param {array} vector This is an array of components of a vector
 * @param {array} scalar This is the maximun length of the vector
 */
function limit (vector, scalar) {
  if (mag(vector) > scalar) return setMag(vector, scalar)
  return vector
}

/**
 * This function returns the dot product of the two vectors given
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function dot (vector1, vector2) {
  let ret = 0
  for (let i = 0; i < vector1.length; i++) {
    ret += vector1[i] * vector2[i]
  }
  return ret
}

/**
 * This functions returns the margnitud of the given vector
 * @param {array} vector This is an array of components of a vector
 */
function mag (vector) {
  return Math.sqrt(dot(vector, vector))
}

/**
 * Moves the first vector given to the second vector given
 * with the given speed and wont move if the magnitude of the distance is
 * smaller than the stop parameter.
 * @param {array} start This is an array of components of a vector
 * @param {array} end This is an array of components of a vector
 * @param {number} speed This is the speed in wich the first vector will move towards the second
 * @param {number} stop This is the distance in wich the start vector will not move to the end vector
 */
function moveTowards (start, end, speed = 1, stop = 1) {
  let distance = sub(end, start)
  if (mag(distance) > stop) {
    distance = normalize(distance)
    distance = mult(distance, speed)
    return add(start, distance)
  }
  return start
}

/**
 * Returns the angle between 2 vectors
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function angleBetween (vector1, vector2) {
  return Math.acos((dot(vector1, vector2)) / (mag(vector1) * mag(vector2)))
}

/**
 * Sets the magnitud of the vector to the length of the scalar given
 * @param {array} vector This is an array of components of a vector
 * @param {number} scalar This will be the length of the vector
 */
function setMag (vector, scalar) {
  return mult(normalize(vector), scalar)
}

/**
 * Converts a number from radian to degree
 * @param {number} radian This number represents the radian that you want to convert
 */
function toDegree (radian) {
  return radian * (180 / Math.PI)
}

/**
 * Converts a number from degree to radian
 * @param {number} degree This number represents the degree that you want to convert
 */
function toRadian (degree) {
  return degree * (Math.PI / 180)
}

/**
 * Returns the cross product of 2 vectors with 3 components
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function cross3d (vec1, vec2) {
  let vecR = []
  vecR[0] = (vec1[1] * vec2[2]) - (vec1[2] * vec2[1])
  vecR[1] = (vec1[2] * vec2[0]) - (vec1[0] * vec2[2])
  vecR[2] = (vec1[0] * vec2[1]) - (vec1[1] * vec2[0])
  return vecR
}

/**
 * Returns the cross product of 2 vectors with 2 components
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function cross2d (vector1, vector2) {
  return vector1[0] * vector2[1] - vector1[1] * vector2[0]
}

/**
 * Returns the angle of the vector
 * @param {array} vector This is an array of components of a vector
 */
function angle (vector) {
  var result = Math.atan2(vector[1], vector[0])
  return result
}

/**
 * Creates a vector from a magnitud and a direction
 * @param {number} direction This is the direction of the vector that will be created
 * @param {number} magnitud This is the magnitud of the vector that will be created
 */
function angleMagnitude (direction, magnitud) {
  if (magnitud < 0) return inverse(setAngle([0, magnitud], direction))
  return setAngle([0, magnitud], direction)
}

/**
 * Sets the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle of the given vector in radians
 */
function linearIntersect (a, b, c, d) {
  let r = sub(b, a)
  let s = sub(d, c)
  let d1 = cross2d(r, s)
  let u = cross2d(sub(c, a), r) / d1
  let t = cross2d(sub(c, a), s) / d1
  if (!((u < 1 && u > 0) && (t < 1 && t > 0))) {
    u = 1
    t = 1
  }
  return [u, t]
}

/**
 * Adds the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle that will be added to the given vector in radians
 * @param {array} piv This is the center of rotation
 */
function addAngle (vec, ang, piv = [0, 0]) {
  let s = Math.sin(ang)
  let c = Math.cos(ang)
  let vecR = sub(vec, piv)
  let xnew = vecR[0] * c - vecR[1] * s
  let ynew = vecR[0] * s + vecR[1] * c
  vecR = add([xnew, ynew], piv)
  return vecR
}

/**
 * Sets the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle of the given vector in radians
 */
function setAngle (vec, ang) {
  let r = mag(vec)
  return [r * Math.cos(ang), r * Math.sin(ang)]
}

/**
 * Takes as a parameter a list of vectors and returns the center point or the average of the vector
 * @param {array} vectorList This is the vector list
 */
function average (vectorList) {
  let vec = vectorList.reduce((a, c) => add(a, c), [0, 0])
  return mult(vec, 1 / vectorList.length)
}

module.exports = {
  add,
  average,
  sub,
  mult,
  mag,
  dot,
  inverse,
  cross3d,
  cross2d,
  linearIntersect,
  angleMagnitude,
  normalize,
  setMag,
  angle,
  addAngle,
  distance,
  copy,
  moveTowards,
  limit,
  angleBetween,
  toDegree,
  toRadian,
  setAngle
}
