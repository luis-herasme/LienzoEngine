(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Library", [], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


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
function add () {
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {


let canvas
let render = {}

/**
 * This function creates an Point object
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 */
function Point (x, y) {
  this.x = x
  this.y = y
  return this
}

/**
 * This function initializes the canvas
 * @param {string} canvasName If this parameter is given the render will try to find a canvas with this ID to draw in
 * @param {number} width This will be the width of the canvas
 * @param {number} height This will be the height of the canvas
 */
function init (canvasName, width, height) {
  if (canvasName) {
    canvas = document.getElementById(canvasName)
    if (width && height) {
      canvas.width = width
      canvas.height = height
    } else {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  } else {
    canvas = document.createElement('canvas')
    document.body.appendChild(canvas)

    if (width && height) {
      canvas.width = width
      canvas.height = height
    } else {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  }
  render.width = canvas.width
  render.height = canvas.height

  render.center = [render.width / 2, render.height / 2]
  render.context = canvas.getContext('2d')
}

/**
 * This function sets the scale of the canvas to the parameter given
 * @param {number} scale This will be the scale of the canvas
 */
function setScale (scale) {
  render.width = render.width / scale
  render.height = render.height / scale
  render.center = [render.width / 2, render.height / 2]
  render.scale = scale
}

/**
 * This function puts all the styles given in the context
 * @param {object} style This object contains the styles
 */
function setStyle (style) {
  for (let i in style) render.context[i] = style[i]
}

/**
 * This function translates the context to the coordinates given
 * @param {array} vec This is an array of coordinates
 */
function setCenter (vec = render.center) {
  render.context.translate(vec[0], vec[1])
}

/**
 * Clears the entire screen
 * @param {string} color With this color the canvas will be clear
 */
function clear (color = '#000') {
  render.context.fillStyle = color
  render.context.save()
  render.context.setTransform(1, 0, 0, 1, 0, 0)
  render.context.fillRect(0, 0, canvas.width, canvas.height)
  render.context.restore()
}

/**
 * Enables and disbales canvas smoth
 * @param {boolean} state If true enables canvas smoth and if false disbales canvas smoth
 */
function smoth (state) {
  render.context.webkitImageSmoothingEnabled = state
  render.context.mozImageSmoothingEnabled = state
  render.context.imageSmoothingEnabled = state
}

/*
myMatrix
.translate(P.x, P.y)
.scale(xFactor, yFactor)
.translate(-P.x, -P.y);
*/

/**
 * This object contains all that will be render
 */
function Stage () {
  this.childs = []

  /**
   * This function adds objects to the stage
   */
  this.add = function () {
    Array.from(arguments).forEach((element) => {
      this.childs.push(element)
    })
  }.bind(this)

  /**
   * This function renders all the objects of the stage
   */
  this.update = () => {
    this.childs.forEach((child) => {
      child.render()
    })
  }

  /**
   * This function destroy an object from the stage
   * @param {string} name This is the name of the object
   */
  this.destroy = function (name) {
    this.childs = this.childs.filter((child) => child.name !== name)
  }.bind(this)

  return this
}

/**
 * This class creates an object that draws in the screen
 * @param {function} renderFunction This function draws in the screen
 * @param {object} configuration This object contais information as the position of where things will be drawn the rotation etc..
 */
function Graphic (renderFunction, configuration) {
  if (configuration) {
    if (configuration.position) this.position = configuration.position
    else this.position = new Point(0, 0)
    if (configuration.scale) this.scale = configuration.scale
    else this.scale = new Point(1, 1)
    if (configuration.rotation) this.rotation = configuration.rotation
    else this.rotation = 0
  } else {
    this.position = new Point(0, 0)
    this.scale = new Point(1, 1)
    this.rotation = 0
  }
  this.render = () => {
    render.context.save()
    if (this.position) render.context.translate(this.position.x, this.position.y)
    if (this.scale) render.context.scale(this.scale.x, this.scale.y)
    if (this.rotation) render.context.rotate(this.rotation)
    renderFunction()
    render.context.restore()
  }
  return this
}

module.exports = {
  init,
  setCenter,
  clear,
  width: 0,
  height: 0,
  setScale,
  setStyle,
  Point,
  Stage,
  smoth,
  Graphic,
  render
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


const vec = __webpack_require__(0)

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


const render = __webpack_require__(4)
const fisica = __webpack_require__(5)
const engine = new fisica.Engine()

window.addEventListener('load', () => {
  window.loaded = true
})

/**
 * This objects manages the state of the game you can change the scene that is been
 * rendered in the game and you can run methods from the scene gameObjects as events
 */
class GameManager {
  constructor () {
    this.stage = new render.Stage()
    this.engine = engine
    this.paused = false
    this.time = 1000 / 60
  }

  setScene (scene) {
    this.scene = scene
  }

  run (name) {
    this.scene.run(name)
  }

  init () {
    if (window.loaded) render.init()
    initEvents()
    this.interval = setInterval(() => {
      this.scene.run('update')
      this.scene.update()
      this.engine.update()
      this.stage.update()
      if (this.paused) this.time = 0
    }, this.time)
  }
}

/**
 * This function is called when the gameManager is initialized and
 * runs the events in the methods
 */
function initEvents () {
  let keys = {}

  setInterval(() => {
    Object.keys(keys).some((key) => {
      if (keys[key]) {
        if (!gameManager.paused) {
          gameManager.scene.run('keyPress', keys)
        }
        return true
      }
    })
  }, 20)

  document.addEventListener('mousedown', function () {
    if (!gameManager.paused) {
      gameManager.scene.run('globalMouseDown')
    }
  })

  document.addEventListener('mouseup', function () {
    if (!gameManager.paused) {
      gameManager.scene.run('globalMouseUp')
    }
  })

  document.addEventListener('keydown', function (event) {
    keys[event.key] = true
    if (!gameManager.paused) {
      gameManager.scene.run('keyDown', event.key)
    }
  })

  document.addEventListener('keyup', function (event) {
    keys[event.key] = false
    if (!gameManager.paused) {
      gameManager.scene.run('keyUp', event.key)
    }
  })
}

const gameManager = new GameManager()

module.exports = gameManager


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


const render = __webpack_require__(1)
const image = __webpack_require__(8)
const geometry = __webpack_require__(9)

module.exports = {
  Sprite: image.Sprite,
  SpriteSheet: image.SpriteSheet,
  loadImage: image.loadImage,
  drawImage: image.drawImage,

  init: render.init,
  clear: render.clear,
  Stage: render.Stage,
  render: render.render,
  setCenter: render.setCenter,
  center: render.render.center,
  width: render.width,
  height: render.height,
  setScale: render.setScale,
  setStyle: render.setStyle,
  Point: render.Point,
  smoth: render.smoth,
  Graphic: render.Graphic,

  strokeArc: geometry.strokeArc,
  text: geometry.text,
  poligon: geometry.poligon,
  strokeCircle: geometry.strokeCircle,
  circle: geometry.circle,
  strokeRect: geometry.strokeRect,
  rect: geometry.rect,
  line: geometry.line
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


const Body = __webpack_require__(10)
const Engine = __webpack_require__(12)

module.exports = { Body, Engine }


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


const Vector = __webpack_require__(2)
const vec = __webpack_require__(0)

/**
 * This class constrols the position of a gameObject
 * with the methods of this class you can control
 * the position of the gameObject
 */
class Place {
  constructor (config) {
    this.gameObject = config.gameObject
    this.scale = config.scale
    this.position = new Vector(...config.position)
    this.rotation = config.rotation
  }
  /**
   * This method updates the position of the gameObject
   */
  update () {
    if (this.gameObject.collider) {
      this.position.value[0] = this.gameObject.collider.center[0]
      this.position.value[1] = this.gameObject.collider.center[1]
    }
    this.gameObject.sprite.position.x = this.position.value[0]
    this.gameObject.sprite.position.y = this.position.value[1]
    this.gameObject.sprite.rotation = this.rotation
  }

  /**
   * This method rotates the gameObject
   * @param {number} rotation This is the amount of rotation
   */
  rotate (rotation) {
    this.rotation += rotation
    this.update()
  }

  /**
   * This method sets the position of the gameObject
   * @param {number} x The X coordinate that you want to put the gameObjet in
   * @param {number} y The X coordinate that you want to put the gameObjet in
   */
  setPosition (x, y) {
    this.position = new Vector(x, y) // TODO: Change the collider position
    this.update()
  }

  /**
   * This method translates the gameObject
   * @param {number} x
   * @param {number} y
   */
  globalTranslate (x, y) {
    this.position.add(new Vector(x, y))
    this.update()
  }

  /**
   * This method translates the gameObject localy
   * @param {number} x change in X
   * @param {number} x Change in Y
   */
  translate (x, y) {
    let translationY = vec.angleMagnitude(this.rotation, y)
    let translationX = vec.angleMagnitude(this.rotation + Math.PI / 2, x)
    translationY = new Vector(...translationY)
    translationX = new Vector(...translationX)
    this.position.add(translationY)
    this.position.add(translationX)
    this.update()
  }
}

module.exports = Place


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


const GameManager = __webpack_require__(3)
const GameObject = __webpack_require__(13)
const Scene = __webpack_require__(16)
const Place = __webpack_require__(6)
const Vector = __webpack_require__(2)
const vec = __webpack_require__(0)

module.exports = {GameManager, GameObject, Scene, Place, Vector, vec}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/* global Image */

const render = __webpack_require__(1)

let imageCache = {}

/**
 * This function loads an image and saves it.
 * @param {string} name With this name the loaded image will be save in a image cache for later use
 * @param {string} src This is where the image is save
 */
function loadImage (name, src) {
  const image = new Image()
  image.src = src
  imageCache[name] = image
}

/**
 * This function draws an image on the screen
 * @param {string} name This is the name of the image saved in the imageCache
 * @param {object} position This object contains the position of the image
 * @param {object} anchor This will be the point of rotation of the image
 * @param {number} rotation This will be the rotation of the image
 * @param {number} width This will be the width of the image
 * @param {number} height This will be the height of the image
 */
function drawImage (name, position, anchor, rotation, scale) {
  render.render.context.save()
  render.render.context.translate(position.x, position.y)
  render.render.context.rotate(rotation)
  let realWidth = scale.x * imageCache[name].width
  let realHeight = scale.y * imageCache[name].height
  render.render.context.drawImage(imageCache[name], -(realWidth * anchor.x), -(realHeight * anchor.y), realWidth, realHeight)
  render.render.context.restore()
}

/**
 * This function renders an animation from an srpite sheet in the screen
 * @param {string} name This will be the name of the animation
 * @param {object} config This object contains the configuration of the animation
 */
function SpriteSheet (name, config) {
  loadImage(name, config.src)
  let frame = new render.Point(0, 0)
  this.position = config.position
  this.scale = config.scale
  this.x = 0
  this.y = 0
  this.interval = setInterval(() => {
    frame.x += 1
    if (this.x >= imageCache[name].width - config.width) {
      frame.x = 0
      frame.y += 1
    }
    if (this.y >= imageCache[name].height) {
      frame.y = 0
      /*
      if (this.configuration.loop) frame.y = 0
      else this.destroy()
      */
    }
    this.x = config.width * frame.x
    this.y = config.height * frame.y
    // console.log(this.x, this.y)
  }, config.time)
  // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  this.destroy = () => clearInterval(this.interval)
  this.render = () => render.render.context.drawImage(imageCache[name], this.x, this.y, config.width, config.height, this.position.x, this.position.y, config.width * this.scale.x, config.height * this.scale.y)
  return this
}

/**
 * This function creates an image object
 * @param {string} name This will be the name of the image
 * @param {object} position This object contains the position of the image
 * @param {object} scale This object contains the scale of the image
 * @param {number} rotation This is the rotation of the image
 * @param {object} anchor This will be the point of rotation of the image
 * @param {string} src This will be the location where the image is saved
 */
function Sprite (name, config) {
  /*
    FROM LIENZO ENGINE
    if (data.name && data.src) {
      IMAGE_CACHE[data.name] = new PIXI.Sprite(PIXI.Texture.fromImage(data.src))
      this.sprite = IMAGE_CACHE[data.name]
    } else if (data.name && !data.src) {
      this.sprite = IMAGE_CACHE[data.name]
    } else if (!data.name && data.src) {
      this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage(data.src))
    }
*/
  this.name = name
  this.position = config.position ? config.position : new render.Point(0, 0)
  this.rotation = config.rotation ? config.rotation : 0
  this.anchor = config.anchor ? config.anchor : new render.Point(0.5, 0.5)
  this.scale = config.scale ? config.scale : new render.Point(1, 1)
  if (config.src) loadImage(this.name, config.src)
  this.render = () => drawImage(this.name, this.position, this.anchor, this.rotation, this.scale)
  return this
}

module.exports = {Sprite, SpriteSheet, drawImage, loadImage}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


const render = __webpack_require__(1)

/**
 * This function draws a line,
 * Takes a vector as start point and another vector as end point of the line
 * @param {array} start This will be the start point of the line
 * @param {array} end This will be the end point of the line
 * @param {object} style This will be the style of the line
 * @param {boolean} stroke If true the line will have an stroke
 */
function line (start, end, style) {
  render.render.context.beginPath()
  render.setStyle(style)
  render.render.context.moveTo(start[0], start[1])
  render.render.context.lineTo(end[0], end[1])
  render.render.context.stroke()
}

/**
 * This function draws a poligon in the screen
 * @param {array} vecs This contains all the points of the figure
 * @param {string} color This is the color of the poligon
 * @param {boolean} stroke If this true the poligon will have borders
 */
function poligon (vecs, color, stroke) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.moveTo(vecs[0][0], vecs[0][1])
  for (var i = 0; i < vecs.length; i++) render.render.context.lineTo(vecs[i][0], vecs[i][1])
  render.render.context.closePath()
  render.render.context.fill()
  if (stroke) render.render.context.stroke()
}

/**
 * This function draws a rect in the screen
 * @param {array} position This array contains the coordinates of the rect
 * @param {number} width This is the width of the rect
 * @param {number} height This is the height of the rect
 * @param {string} color This will be the color of the rect
 */
function rect (position, width, height, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.fillRect(position[0], position[1], width, height)
}

/**
 * This function draws the borders of a a rect in the screen
 * @param {array} position This array contains the coordinates of the rect
 * @param {number} width This is the width of the rect
 * @param {number} height This is the height of the rect
 * @param {string} color This will be the color of the rect
 * @param {number} lineWidth This is the width of the line
 */
function strokeRect (position, width, height, color, lineWidth) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.strokeRect(position[0], position[1], width, height)
}

/**
 * This function draws a text in the screen
 * @param {string} texto This is the text that will be drawn
 * @param {array} position This array contains the coordinates of the text
 * @param {object} style This object contais the styles of the text
 * @param {boolean} stroke If true the text will have borders
 */
function text (texto, position, style, stroke) {
  render.setStyle(style)
  if (stroke) render.render.context.strokeText(texto, position[0], position[1])
  render.render.context.fillText(texto, position[0], position[1])
}

/**
 * Draws the borders of a circle in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This will be the radius of the circle
 * @param {string} color This will be the color of the circle
 * @param {number} width This is the width of the line
 */
function strokeCircle (position, radius, color, width) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.arc(position[0], position[1], radius, 0, 2 * Math.PI)
  render.render.context.lineWidth = width
  render.render.context.stroke()
}

/**
 * Draws a circle in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This will be the radius of the circle
 * @param {string} color This will be the color of the circle
 */
function circle (position, radius, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.arc(position[0], position[1], radius, 0, 2 * Math.PI)
  render.render.context.fill()
}

/**
 * This function draws the borders of an arc in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This is the radius of the arc
 * @param {number} lineWidth This is the width of the line
 * @param {number} eAngl This is the end angle
 * @param {number} aAngl This is the start angle
 * @param {string} color This is the color of the arc
 */
function strokeArc (position, radius, lineWidth, eAngl, aAngl, color) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.arc(position[0], position[1], radius, eAngl, aAngl, true)
  render.render.context.lineWidth = lineWidth
  render.render.context.stroke()
}

module.exports = {strokeArc, text, poligon, strokeCircle, circle, strokeRect, rect, line}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


const Vector = __webpack_require__(2)
const vec = __webpack_require__(0)
const Figure = __webpack_require__(11)

function Body (type, config) {
  this.mass = config.mass ? config.mass : 1
  this.friction = config.friction
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


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


const vector = __webpack_require__(0)

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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


const vector = __webpack_require__(0)

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
  if (body.collision) body.collision(_body)
  if (_body.collision) _body.collision(body)
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


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


const Howl = __webpack_require__(14)
const fisica = __webpack_require__(5)
const render = __webpack_require__(4)
const Place = __webpack_require__(6)
const GameManager = __webpack_require__(3)

/**
 * This class creates gameObjects and contains the methods to add components
 */
class GameObject {
  constructor (data) {
    this.sounds = {}
    this.methods = {}
    Object.keys(data).forEach((key) => {
      this.add(key, data[key])
    })
    if (!this.ubication) {
      this.addUbication({
        position: [0, 0],
        rotation: 0,
        scale: 1
      })
    }
  }

  /**
   * This method adds a component to the gameobject
   * @param {string} type This will be the type of the component that you want to add
   * @param {object} data This objects contains the configuration of the component
   */
  add (type, data) {
    if (type === 'script') {
      this.addScript(data)
    } else if (type === 'sprite') {
      this.addSprite(data)
    } else if (type === 'collider') {
      this.addCollider(data)
    } else if (type === 'sound') {
      this.addSound(data)
    } else if (type === 'ubication') {
      this.addUbication(data)
    }
  }

  /**
   * This method adds a sound component to the gameObject
   * @param {object} data This object contains the configuration of sond that will be added
   */
  addSound (data) {
    this.sounds[data.name] = new Howl.Howl({src: data.src})
  }

  addUbication (data) {
    this.ubication = new Place({
      gameObject: this,
      position: data.position,
      scale: data.scale,
      rotation: data.rotation
    })
  }

  addCollider (data) {
    this.collider = new fisica.Body(data.type, data.config)
    this.collider.gameObject = this
    GameManager.engine.add(this.collider)
  }

  /**
   * This methods adds an script to the gameObject
   * @param {object} data This is an object that contains events to use in the gameObject
   */
  addScript (data) {
    Object.keys(data).forEach((method) => {
      if (this.methods[method]) {
        this.methods[method].push(data[method])
      } else {
        this.methods[method] = []
        this.methods[method].push(data[method])
      }
    })
  }

  /**
   * This methods sets the spite of the gameObject
   * @param {object} data This object contains the name of the image to be save in cache and the src of the image
   */
  addSprite (data) {
    this.sprite = new render.Sprite(data.name, data)
    GameManager.stage.add(this.sprite)
  }

  run (_event, data) {
    if (this.methods[_event]) this.methods[_event].forEach((x) => x(this, data))
  }

  /**
   * This method destroys the components that are been used by othes parts of the engine
   */
  destroy () {
    if (this.sprite) GameManager.stage.destroy(this.sprite)
    if (this.collider) GameManager.engine.destroy(this.collider)
  }

  render () {
    if (this.methods.render) this.methods.render.forEach((method) => method())
  }

  /**
   * This method updates the position of the gameObject
   */
  update () {
    this.ubication.update()
    this.render()
  }
}

module.exports = GameObject


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.0.4
 *  howlerjs.com
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto iOS enabler.
      self.mobileAutoEnable = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.value = vol;
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.value = muted ? 0 : self._volume;
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'running' : 'running';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Mobile browsers will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _enableMobileAudio: function() {
      var self = this || Howler;

      // Only run this on mobile devices if audio isn't already eanbled.
      var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
      var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
      if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
        return;
      }

      self._mobileEnabled = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function() {
        // Fix Android can not play in suspend state.
        Howler._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._mobileEnabled = true;
          self.mobileAutoEnable = false;

          // Remove the touch start listener.
          document.removeEventListener('touchend', unlock, true);
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchend', unlock, true);

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio on iOS.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
        Howler._enableMobileAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        var num = 0;
        for (var i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
            num++;
            id = self._sounds[i]._id;
          }
        }

        if (num === 1) {
          sprite = null;
        } else {
          id = null;
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Makr this sounded as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          setTimeout(function() {
            self._emit('play', sound._id);
          }, 0);
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);

      // Update the parameters of the sound
      sound._paused = false;
      sound._ended = false;
      sound._sprite = sprite;
      sound._seek = seek;
      sound._start = self._sprite[sprite][0] / 1000;
      sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._loop = !!(sound._loop || self._sprite[sprite][2]);

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
            }, 0);
          }
        };

        var isRunning = (Howler.state === 'running');
        if (self._state === 'loaded' && isRunning) {
          playWebAudio();
        } else {
          // Wait for the audio to load and then begin playback.
          var event = !isRunning && self._state === 'loaded' ? 'resume' : 'load';
          self.once(event, playWebAudio, isRunning ? sound._id : null);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;
          node.play();

          // Setup the new end timer.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            self._emit('play', sound._id);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (self._state === 'loaded' && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS));
        if (node.readyState === 4 || loadedNoReadyState) {
          playHtml5();
        } else {
          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to pause when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;
      var diff = Math.abs(from - to);
      var dir = from > to ? 'out' : 'in';
      var steps = diff / 0.01;
      var stepLen = (steps > 0) ? len / steps : len;

      // Since browsers clamp timeouts to 4ms, we need to clamp our steps to that too.
      if (stepLen < 4) {
        steps = Math.ceil(steps / (4 / stepLen));
        stepLen = 4;
      }

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          var vol = from;
          sound._interval = setInterval(function(soundId, sound) {
            // Update the volume amount, but only if the volume should change.
            if (steps > 0) {
              vol += (dir === 'in' ? 0.01 : -0.01);
            }

            // Make sure the volume is in the right bounds.
            vol = Math.max(0, vol);
            vol = Math.min(1, vol);

            // Round to within 2 decimal points.
            vol = Math.round(vol * 100) / 100;

            // Change the volume.
            if (self._webAudio) {
              if (typeof id === 'undefined') {
                self._volume = vol;
              }

              sound._volume = vol;
            } else {
              self.volume(vol, soundId, true);
            }

            // When the fade is complete, stop it and fire event.
            if ((to < from && vol <= to) || (to > from && vol >= to)) {
              clearInterval(sound._interval);
              sound._interval = null;
              self.volume(to, soundId);
              self._emit('fade', soundId);
            }
          }.bind(self, ids[i], sound), stepLen);
        }
      }

      return self;
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            sound._rateSeek = self.seek(id[i]);
            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.value = rate;
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Restart the playback if the sound was playing.
          if (playing) {
            self.play(id, true);
          }

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node) {
            sound._node.currentTime = seek;
          }

          self._emit('seek', id);
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);

        // Remove the references in the global Howler object.
        var index = Howler._howls.indexOf(self);
        if (index >= 0) {
          Howler._howls.splice(index, 1);
        }
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function() {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // don't move onto the next task until this one is done
        self.once(task.event, function() {
          self._queue.shift();
          self._loadQueue();
        });

        task.action();
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && self._node && !self._node.ended) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        clearTimeout(self._endTimers[id]);
        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop;
      }
      sound._node.bufferSource.playbackRate.value = sound._rate;

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;

      if (self._scratchBuffer) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        try { node.bufferSource.buffer = self._scratchBuffer; } catch(e) {}
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        self._node = new Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Decode the buffer into an audio source.
    Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      }
    }, function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    });
  };

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.value = Howler._muted ? 0 : 1;
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.4
 *  howlerjs.com
 *
 *  (c) 2013-2017, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
  
  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];
      self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];
      self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              sound._panner.setPosition(pan, 0, 0);
            } else {
              sound._panner.pan.value = pan;
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or
   * all in the group. The most common usage is to set the 'x' position for
   * left/right panning. Setting any value higher than 1.0 will begin to
   * decrease the volume of the sound as it moves further away.
   * @param  {Number} x  The x-position of the audio from -1000.0 to 1000.0.
   * @param  {Number} y  The y-position of the audio from -1000.0 to 1000.0.
   * @param  {Number} z  The z-position of the audio from -1000.0 to 1000.0.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            sound._panner.setPosition(x, y, z);
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            sound._panner.setOrientation(x, y, z);
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) There will be no volume reduction inside this angle.
   *     coneOuterAngle - (360 by default) The volume will be reduced to a constant value of
   *                      `coneOuterGain` outside this angle.
   *     coneOuterGain - (0 by default) The amount of volume reduction outside of `coneOuterAngle`.
   *     distanceModel - ('inverse' by default) Determines algorithm to use to reduce volume as audio moves
   *                      away from listener. Can be `linear`, `inverse` or `exponential`.
   *     maxDistance - (10000 by default) Volume won't reduce between source/listener beyond this distance.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *     refDistance - (1 by default) A reference distance for reducing volume as the source
   *                    moves away from the listener.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener.
   * 
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          self._pannerAttr = {
            coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : self._distanceModel,
            maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : self._maxDistance,
            panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : self._panningModel,
            refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : self._refDistance,
            rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : self._rolloffFactor
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.panningModel = pa.panningModel;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.panningModel = sound._pannerAttr.panningModel;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.value = sound._stereo;
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports) {


let idCounter = 0

/**
 * This is the scene class it creates a new scene for the game
 * ,you can add, create and remove scene from the GameManager
 * when you create an instance of the scene you can add, and destroy
 * objects from the scene.
 * @example
 * scene.add(gameObject)
 * scene.destroy(gameObject)
 */
class Scene {
  constructor () {
    this.elemets = []
  }

  add () {
    Array.from(arguments).forEach((gameObject) => {
      gameObject.id = idCounter++
      gameObject.run('init', gameObject)
      this.elemets.push(gameObject)
    })
  }

  run (name, data) {
    this.elemets.forEach((element) => element.run(name, data))
  }

  update () {
    this.elemets.forEach((element) => element.update())
  }

  destroy (gameObject) {
    this.elemets = this.elemets.filter((x) => x.id !== gameObject.id)
    gameObject.destroy()
  }
}

module.exports = Scene


/***/ })
/******/ ]);
});
//# sourceMappingURL=Library.js.map