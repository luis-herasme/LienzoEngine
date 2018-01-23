(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vector"] = factory();
	else
		root["Vector"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D = (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector2D.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    };
    Vector2D.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Vector2D.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
    };
    Vector2D.prototype.inverse = function () {
        this.x *= -1;
        this.y *= -1;
    };
    Vector2D.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2D.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y;
    };
    Vector2D.prototype.distance = function (vector) {
        return Vector2D.sub(this, vector).mag();
    };
    Vector2D.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector2D.prototype.copy = function () {
        return new Vector2D(this.x, this.y);
    };
    Vector2D.prototype.normalize = function () {
        this.div(this.mag());
    };
    Vector2D.prototype.setMag = function (mag) {
        this.normalize();
        this.mult(mag);
    };
    Vector2D.prototype.setAngle = function (angle) {
        var magnitude = this.mag();
        this.x = magnitude * Math.cos(angle);
        this.y = magnitude * Math.sin(angle);
    };
    Vector2D.prototype.addAngle = function (angle) {
        this.setAngle(this.angle() + angle);
    };
    Vector2D.prototype.limit = function (scalar) {
        if (this.mag() > scalar) {
            this.setMag(scalar);
        }
    };
    Vector2D.prototype.moveTowards = function (vector, speed, stop) {
        if (this.distance(vector) > stop) {
            var unit = Vector2D.normalize(vector);
            unit.mult(speed);
            this.add(unit);
        }
    };
    Vector2D.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
    };
    Vector2D.add = function (vector1, vector2) {
        return new Vector2D(vector1.x + vector2.x, vector1.y + vector2.y);
    };
    Vector2D.sub = function (vector1, vector2) {
        return new Vector2D(vector1.x - vector2.x, vector1.y - vector2.y);
    };
    Vector2D.angleMagnitude = function (rotation, magnitude) {
        var x = Math.cos(rotation) * magnitude;
        var y = Math.sin(rotation) * magnitude;
        return new Vector2D(x, y);
    };
    Vector2D.mult = function (vector, scalar) {
        return new Vector2D(vector.x * scalar, vector.y * scalar);
    };
    Vector2D.div = function (vector, scalar) {
        return new Vector2D(vector.x / scalar, vector.y / scalar);
    };
    Vector2D.inverse = function (vector) {
        return new Vector2D(vector.x * -1, vector.y * -1);
    };
    Vector2D.distance = function (vector1, vector2) {
        return this.sub(vector1, vector2).mag();
    };
    Vector2D.normalize = function (vector) {
        return this.div(vector, vector.mag());
    };
    Vector2D.cross = function (vector1, vector2) {
        return vector1.x * vector2.y - vector2.x * vector1.y;
    };
    Vector2D.random = function (x, y) {
        if (Math.random() > 0.5) {
            return new Vector2D(x * Math.random(), y * Math.random());
        }
        else {
            return new Vector2D(-x * Math.random(), -y * Math.random());
        }
    };
    return Vector2D;
}());
exports.__esModule = true;
exports["default"] = Vector2D;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GameObject_1 = __webpack_require__(6);
exports.GameObject = GameObject_1["default"];
var GameScene_1 = __webpack_require__(19);
exports.Scene = GameScene_1["default"];
var GameManager_1 = __webpack_require__(49);
exports.Manager = GameManager_1["default"];
var Vector2D_1 = __webpack_require__(0);
var Color_1 = __webpack_require__(14);
exports.Color = Color_1["default"];
var Graphic_1 = __webpack_require__(5);
exports.Graphic = Graphic_1["default"];
var number = __webpack_require__(50);
exports.number = number;
var Vector = Vector2D_1["default"];
exports.Vector = Vector;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function id() {
    var ID = '';
    for (var i = 0; i < 10; i++) {
        ID += Math.round(Math.random() * 100);
    }
    return ID;
}
exports.__esModule = true;
exports["default"] = id;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lienzo_1 = __webpack_require__(1);
var Vector2D_1 = __webpack_require__(0);
var DinamicBody = (function () {
    function DinamicBody(position, restitution) {
        if (position === void 0) { position = new Vector2D_1["default"](0, 0); }
        if (restitution === void 0) { restitution = 1; }
        this.restitution = restitution;
        this.position = position;
        this.velocity = new Vector2D_1["default"](0, 0);
        this.acceleration = new Vector2D_1["default"](0, 0);
        this.isDynamic = true;
    }
    DinamicBody.prototype.addForce = function (force) {
        this.acceleration.add(force);
    };
    DinamicBody.prototype.momentum = function () {
        return lienzo_1.Vector.mult(this.velocity, this.mass);
    };
    DinamicBody.prototype.inelasticCollision = function (other) {
        var velocity1 = this.velocity;
        var velocity2 = other.velocity;
        var totalMomentum = other.momentum();
        totalMomentum.add(this.momentum());
        var totalMass = this.mass + other.mass;
        // This velociry
        this.velocity = lienzo_1.Vector.sub(velocity2, velocity1);
        this.velocity.mult(this.restitution * other.mass);
        this.velocity.add(totalMomentum);
        this.velocity.div(totalMass);
        // Other velociry
        other.velocity = lienzo_1.Vector.sub(velocity1, velocity2);
        other.velocity.mult(other.restitution * this.mass);
        other.velocity.add(totalMomentum);
        other.velocity.div(totalMass);
    };
    DinamicBody.prototype.update = function () {
        this.acceleration.div(this.mass);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.zero();
    };
    return DinamicBody;
}());
exports.__esModule = true;
exports["default"] = DinamicBody;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
function add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
}
/**
 * This function subtracts all the given vectors
 * @param {Array} Vector takes multiple vectors and subtracts them
 */
function sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
}
/**
 * This function multiplies the vector given by the scalar give
 * @param {Array} vector This is an array of components of a vector
 * @param {Number} scalar This is a number
 */
function mult(vector, scalar) {
    return vector.map(function (x) { return x * scalar; });
}
/**
 * This function returns the inverse of the vector
 * @param {array} vector This is an array of components of a vector
 */
function inverse(vector) {
    return vector.map(function (x) { return x * -1; });
}
/**
 * This function normalise the vector
 * @param {array} vector This is an array of components of a vector
 */
function normalize(vector) {
    var r = mag(vector);
    if (isNaN(r) || r === 0)
        r = 1;
    return vector.map(function (x) { return x / r; });
}
/**
 * Returns the magnitude of the distance between the two vectors given
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function distance(vector1, vector2) {
    return mag(sub(vector1, vector2));
}
/**
 * Returns a copy of the given vector
 * @param {array} vector This is an array of components of a vector
 */
function copy(vector) {
    return vector.slice();
}
/**
 * Limits the magnitud of the given vector
 * @param {array} vector This is an array of components of a vector
 * @param {array} scalar This is the maximun length of the vector
 */
function limit(vector, scalar) {
    if (mag(vector) > scalar)
        return setMag(vector, scalar);
    return vector;
}
/**
 * This function returns the dot product of the two vectors given
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function dot(vector1, vector2) {
    var ret = 0;
    for (var i = 0; i < vector1.length; i++) {
        ret += vector1[i] * vector2[i];
    }
    return ret;
}
/**
 * This functions returns the margnitud of the given vector
 * @param {array} vector This is an array of components of a vector
 */
function mag(vector) {
    return Math.sqrt(dot(vector, vector));
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
function moveTowards(start, end, speed, stop) {
    if (speed === void 0) { speed = 1; }
    if (stop === void 0) { stop = 1; }
    var distance = sub(end, start);
    if (mag(distance) > stop) {
        distance = normalize(distance);
        distance = mult(distance, speed);
        return add(start, distance);
    }
    return start;
}
/**
 * Returns the angle between 2 vectors
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function angleBetween(vector1, vector2) {
    return Math.acos((dot(vector1, vector2)) / (mag(vector1) * mag(vector2)));
}
/**
 * Sets the magnitud of the vector to the length of the scalar given
 * @param {array} vector This is an array of components of a vector
 * @param {number} scalar This will be the length of the vector
 */
function setMag(vector, scalar) {
    return mult(normalize(vector), scalar);
}
/**
 * Converts a number from radian to degree
 * @param {number} radian This number represents the radian that you want to convert
 */
function toDegree(radian) {
    return radian * (180 / Math.PI);
}
/**
 * Converts a number from degree to radian
 * @param {number} degree This number represents the degree that you want to convert
 */
function toRadian(degree) {
    return degree * (Math.PI / 180);
}
/**
 * Returns the cross product of 2 vectors with 3 components
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function cross3d(vec1, vec2) {
    var vecR = [];
    vecR[0] = (vec1[1] * vec2[2]) - (vec1[2] * vec2[1]);
    vecR[1] = (vec1[2] * vec2[0]) - (vec1[0] * vec2[2]);
    vecR[2] = (vec1[0] * vec2[1]) - (vec1[1] * vec2[0]);
    return vecR;
}
/**
 * Returns the cross product of 2 vectors with 2 components
 * @param {array} vector1 This is an array of components of a vector
 * @param {array} vector2 This is an array of components of a vector
 */
function cross2d(vector1, vector2) {
    return vector1[0] * vector2[1] - vector1[1] * vector2[0];
}
/**
 * Returns the angle of the vector
 * @param {array} vector This is an array of components of a vector
 */
function angle(vector) {
    var result = Math.atan2(vector[1], vector[0]);
    return result;
}
/**
 * Creates a vector from a magnitud and a direction
 * @param {number} direction This is the direction of the vector that will be created
 * @param {number} magnitud This is the magnitud of the vector that will be created
 */
function angleMagnitude(direction, magnitud) {
    if (magnitud < 0)
        return inverse(setAngle([0, magnitud], direction));
    return setAngle([0, magnitud], direction);
}
/**
 * Sets the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle of the given vector in radians
 */
function linearIntersect(a, b, c, d) {
    var r = sub(b, a);
    var s = sub(d, c);
    var d1 = cross2d(r, s);
    var u = cross2d(sub(c, a), r) / d1;
    var t = cross2d(sub(c, a), s) / d1;
    if (!((u < 1 && u > 0) && (t < 1 && t > 0))) {
        u = 1;
        t = 1;
    }
    return [u, t];
}
/**
 * Adds the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle that will be added to the given vector in radians
 * @param {array} piv This is the center of rotation
 */
function addAngle(vec, ang, piv) {
    if (piv === void 0) { piv = [0, 0]; }
    var s = Math.sin(ang);
    var c = Math.cos(ang);
    var vecR = sub(vec, piv);
    var xnew = vecR[0] * c - vecR[1] * s;
    var ynew = vecR[0] * s + vecR[1] * c;
    vecR = add([xnew, ynew], piv);
    return vecR;
}
/**
 * Sets the angle of the given vector to the given angle
 * @param {array} vector This is the vector that will be changed
 * @param {number} angle This will be the angle of the given vector in radians
 */
function setAngle(vec, ang) {
    var r = mag(vec);
    return [r * Math.cos(ang), r * Math.sin(ang)];
}
/**
 * Takes as a parameter a list of vectors and returns the center point or the average of the vector
 * @param {array} vectorList This is the vector list
 */
function average(vectorList) {
    var vec = vectorList.reduce(function (a, c) { return add(a, c); }, [0, 0]);
    return mult(vec, 1 / vectorList.length);
}
exports.__esModule = true;
exports["default"] = {
    add: add,
    average: average,
    sub: sub,
    mult: mult,
    mag: mag,
    dot: dot,
    inverse: inverse,
    cross3d: cross3d,
    cross2d: cross2d,
    linearIntersect: linearIntersect,
    angleMagnitude: angleMagnitude,
    normalize: normalize,
    setMag: setMag,
    angle: angle,
    addAngle: addAngle,
    distance: distance,
    copy: copy,
    moveTowards: moveTowards,
    limit: limit,
    angleBetween: angleBetween,
    toDegree: toDegree,
    toRadian: toRadian,
    setAngle: setAngle
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var Graphic = (function () {
    function Graphic(renderFunction, position, scale, rotation) {
        if (position === void 0) { position = new Vector2D_1["default"](1, 1); }
        if (scale === void 0) { scale = new Vector2D_1["default"](1, 1); }
        if (rotation === void 0) { rotation = 0; }
        this.renderFunction = renderFunction.bind(this);
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
    }
    Graphic.prototype.line = function (start, end, style) {
        this.context.beginPath();
        this.setStyle(style);
        this.context.moveTo(start[0], start[1]);
        this.context.lineTo(end[0], end[1]);
        this.context.stroke();
    };
    Graphic.prototype.poligon = function (vecs, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.moveTo(vecs[0][0], vecs[0][1]);
        for (var i = 0; i < vecs.length; i++) {
            this.context.lineTo(vecs[i][0], vecs[i][1]);
        }
        this.context.closePath();
        this.context.fill();
    };
    Graphic.prototype.strokePoligon = function (vecs, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.moveTo(vecs[0][0], vecs[0][1]);
        for (var i = 0; i < vecs.length; i++) {
            this.context.lineTo(vecs[i][0], vecs[i][1]);
        }
        this.context.closePath();
        this.context.stroke();
    };
    Graphic.prototype.rect = function (x, y, width, height, color) {
        if (color === void 0) { color = '#fff'; }
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    };
    Graphic.prototype.strokeRect = function (x, y, width, height, color, lineWidth) {
        if (color === void 0) { color = '#fff'; }
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, width, height);
    };
    Graphic.prototype.setStyle = function (styles) {
        for (var style in styles) {
            this.context[style] = styles[style];
        }
    };
    Graphic.prototype.text = function (texto, x, y, style, stroke) {
        this.setStyle(style);
        if (stroke) {
            this.context.strokeText(texto, x, y);
        }
        this.context.fillText(texto, x, y);
    };
    Graphic.prototype.strokeCircle = function (x, y, radius, color, width) {
        if (color === void 0) { color = '#fff'; }
        if (width === void 0) { width = 1; }
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.lineWidth = width;
        this.context.stroke();
    };
    Graphic.prototype.circle = function (x, y, radius, color) {
        if (color === void 0) { color = '#fff'; }
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.fill();
    };
    Graphic.prototype.strokeArc = function (x, y, radius, lineWidth, eAngl, aAngl, color) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.arc(x, y, radius, eAngl, aAngl, true);
        this.context.lineWidth = lineWidth;
        this.context.stroke();
    };
    Graphic.prototype.render = function () {
        /*
        this.context.save()
        this.context.scale(this.scale.x, this.scale.y)
        this.context.rotate(this.rotation)
        */
        this.renderFunction();
        // this.context.restore()
    };
    return Graphic;
}());
exports.__esModule = true;
exports["default"] = Graphic;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TransformComponent_1 = __webpack_require__(16);
var IdentifierComponent_1 = __webpack_require__(17);
var ScriptComponent_1 = __webpack_require__(18);
var GameObject = (function () {
    function GameObject(components) {
        this.Transform = new TransformComponent_1["default"]();
        this.Identifier = new IdentifierComponent_1["default"]();
        this.ScriptManager = new ScriptComponent_1["default"](this);
        console.log(components);
        this.Components = components;
    }
    GameObject.prototype.run = function (name, params) {
        this.ScriptManager.run(name, params);
    };
    GameObject.prototype.destroy = function () {
        this.Components.forEach(function (component) {
            component.destroy();
        });
        this.Scene.remove(this);
    };
    return GameObject;
}());
exports.__esModule = true;
exports["default"] = GameObject;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Circle = __webpack_require__(20);
exports.Circle = Circle;
var Rect = __webpack_require__(23);
exports.Rect = Rect;
var RectCircle = __webpack_require__(26);
exports.RectCircle = RectCircle;
var Mesh = __webpack_require__(34);
exports.Mesh = Mesh;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Circle_1 = __webpack_require__(21);
var Collider = (function (_super) {
    __extends(Collider, _super);
    function Collider() {
        return _super.apply(this, arguments) || this;
    }
    return Collider;
}(Circle_1["default"]));
exports.__esModule = true;
exports["default"] = Collider;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var World = (function () {
    function World(gravity) {
        this.maxPositionX = window.innerWidth;
        this.minPositionX = 0;
        this.maxPositionY = window.innerHeight;
        this.minPositionY = 0;
        this.gravity = gravity;
        this.dynamicParticles = [];
        this.particles = [];
        this.boundsSet = false;
    }
    World.prototype.setBounds = function (bounds) {
        this.boundsSet = true;
        this.maxPositionX = bounds[0];
        this.minPositionX = bounds[1];
        this.maxPositionY = bounds[2];
        this.minPositionY = bounds[3];
    };
    World.prototype.add = function (particle) {
        particle.World = this;
        this.particles.push(particle);
        if (particle.dynamic) {
            this.dynamicParticles.push(particle);
        }
    };
    World.prototype.remove = function (particle) {
        this.particles.splice(this.particles.indexOf(particle), 1);
    };
    World.prototype.insideWorldBounds = function (particle) {
        // Horizontal bounds
        if (particle.position.x + particle.radius > this.maxPositionX) {
            particle.position.x = this.maxPositionX - particle.radius - 1;
            particle.velocity.x *= -1 * particle.restitution;
        }
        else if (particle.position.x - particle.radius < this.minPositionX) {
            particle.position.x = this.minPositionX + particle.radius + 1;
            particle.velocity.x *= -1 * particle.restitution;
        }
        // Vectical bounds
        if (particle.position.y + particle.radius > this.maxPositionY) {
            particle.position.y = this.maxPositionY - particle.radius - 1;
            particle.velocity.y *= -1 * particle.restitution;
        }
        else if (particle.position.y - particle.radius < this.minPositionY) {
            particle.position.y = this.minPositionY + particle.radius + 1;
            particle.velocity.y *= -1 * particle.restitution;
        }
    };
    World.prototype.insideBounds = function (particle) {
        // Horizontal bounds
        if (particle.position.x + particle.size.x > this.maxPositionX) {
            particle.position.x = this.maxPositionX - particle.size.x - 1;
            particle.velocity.x *= -1 * particle.restitution;
        }
        else if (particle.position.x < this.minPositionX) {
            particle.position.x = this.minPositionX;
            particle.velocity.x *= -1 * particle.restitution;
        }
        // Vectical bounds
        if (particle.position.y >= this.maxPositionY - particle.size.y) {
            // console.log()
            particle.position.y = this.maxPositionY - particle.size.y;
            // particle.velocity.y *= -1 * particle.restitution
            particle.velocity.y = 0;
        }
        else if (particle.position.y <= this.minPositionY) {
            particle.position.y = this.minPositionY;
            particle.addForce(Vector2D_1["default"].inverse(Vector2D_1["default"].mult(this.gravity, 1)));
            particle.velocity.y *= -1 * particle.restitution;
        }
    };
    World.prototype.update = function () {
        var _this = this;
        this.particles.forEach(function (particle) {
            _this.check(particle);
            if (!particle.gameObject.static) {
                particle.update();
                if (_this.gravity)
                    particle.addForce(_this.gravity);
                if (_this.boundsSet)
                    _this.insideBounds(particle);
            }
        });
    };
    World.prototype.center = function (body) {
        return {
            x: body.position.x + body.size.x / 2,
            y: body.position.y + body.size.y / 2
        };
    };
    World.prototype.separate = function (particle, other) {
        var w = 0.5 * (particle.size.x + other.size.x);
        var h = 0.5 * (particle.size.y + other.size.y);
        var dx = this.center(particle).x - this.center(other).x;
        var dy = this.center(particle).y - this.center(other).y;
        var s = 0;
        if (Math.abs(dx) <= w && Math.abs(dy) <= h) {
            /* collision! */
            var wy = w * dy;
            var hx = h * dx;
            if (wy > hx) {
                if (wy > -hx) {
                    particle.position.y = other.position.y + other.size.y + s; // bottom
                    particle.velocity.y = 0;
                }
                else {
                    particle.position.x = other.position.x - particle.size.x - s; /* on the Rigth */
                    particle.velocity.x = 0;
                }
            }
            else {
                if (wy > -hx) {
                    particle.position.x = other.position.x + other.size.x + s; // left
                    particle.velocity.x = 0;
                }
                else {
                    particle.position.y = other.position.y - particle.size.y - s; /* at the Top */
                    particle.velocity.y = 0;
                }
            }
        }
    };
    World.prototype.check = function (particle) {
        for (var i = 0; i < this.particles.length; i++) {
            if (particle.id !== this.particles[i].id) {
                if (particle.position.x < this.particles[i].position.x + this.particles[i].size.x &&
                    particle.position.x + particle.size.x > this.particles[i].position.x &&
                    particle.position.y < this.particles[i].position.y + this.particles[i].size.y &&
                    particle.size.y + particle.position.y > this.particles[i].position.y) {
                    if (!particle.gameObject.static && !this.particles[i].gameObject.static) {
                        particle.inelasticCollision(this.particles[i]);
                    }
                    if (!particle.gameObject.static) {
                        this.separate(particle, this.particles[i]);
                    }
                    if (particle.collision) {
                        particle.collision(this.particles[i]);
                    }
                    if (this.particles[i].collision) {
                        this.particles[i].collision(particle);
                    }
                }
            }
        }
    };
    return World;
}());
exports.__esModule = true;
exports["default"] = World;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rect_1 = __webpack_require__(24);
var Collider = (function (_super) {
    __extends(Collider, _super);
    function Collider() {
        return _super.apply(this, arguments) || this;
    }
    Collider.prototype.collides = function (other) {
        if (this.position.x < other.position.x + other.size.x &&
            this.position.x + this.size.x > other.position.x &&
            this.position.y < other.position.y + other.size.y &&
            this.size.y + this.position.y > other.position.y) {
            return true;
        }
        else {
            return false;
        }
    };
    return Collider;
}(Rect_1["default"]));
exports.__esModule = true;
exports["default"] = Collider;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Scene_1 = __webpack_require__(38);
exports.Scene = Scene_1["default"];
var Render_1 = __webpack_require__(39);
exports.Render = Render_1["default"];
var Sprite_1 = __webpack_require__(12);
exports.Sprite = Sprite_1["default"];
var Graphic_1 = __webpack_require__(5);
exports.Graphic = Graphic_1["default"];
var gObject_1 = __webpack_require__(40);
exports.gObject = gObject_1["default"];
var Animation_1 = __webpack_require__(13);
exports.Animation = Animation_1["default"];
var Color_1 = __webpack_require__(14);
exports.Color = Color_1["default"];


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global Image */

var Vector2D_1 = __webpack_require__(0);
var Sprite = (function () {
    function Sprite(src, position, scale, rotation, anchor) {
        if (position === void 0) { position = new Vector2D_1["default"](1, 1); }
        if (scale === void 0) { scale = new Vector2D_1["default"](1, 1); }
        if (rotation === void 0) { rotation = 0; }
        if (anchor === void 0) { anchor = new Vector2D_1["default"](0.5, 0.5); }
        this.load(src);
        this.position = position;
        this.scale = scale;
        this.anchor = anchor;
        this.rotation = rotation;
    }
    Sprite.prototype.load = function (src) {
        this.image = new Image();
        this.image.src = src;
    };
    Sprite.prototype.getSize = function () {
        return new Vector2D_1["default"](this.scale.x * this.image.width, this.scale.y * this.image.height);
    };
    Sprite.prototype.render = function () {
        this.context.save();
        this.context.translate(this.position.x, this.position.y);
        this.context.rotate(this.rotation);
        var realWidth = this.scale.x * this.image.width;
        var realHeight = this.scale.y * this.image.height;
        this.context.drawImage(this.image, -(realWidth * this.anchor.x), -(realHeight * this.anchor.y), realWidth, realHeight);
        this.context.restore();
    };
    return Sprite;
}());
exports.__esModule = true;
exports["default"] = Sprite;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var Animation = (function () {
    function Animation(src, scale, position, frameRate, size, loop) {
        if (scale === void 0) { scale = new Vector2D_1["default"](1, 1); }
        if (position === void 0) { position = new Vector2D_1["default"](1, 1); }
        if (frameRate === void 0) { frameRate = 100; }
        if (size === void 0) { size = new Vector2D_1["default"](32, 32); }
        if (loop === void 0) { loop = true; }
        var _this = this;
        this.loop = true;
        this.loop = loop;
        this.load(src);
        this.size = size;
        this.position = position;
        this.scale = scale;
        this.frameRate = frameRate;
        var frame = new Vector2D_1["default"](0, 0);
        this.x = 0;
        this.y = 0;
        this.interval = setInterval(function () {
            frame.x += 1;
            _this.x = _this.size.x * frame.x;
            _this.y = _this.size.y * frame.y;
            if (_this.x >= _this.image.width) {
                frame.x = 0;
            }
            if (_this.y >= _this.image.height) {
                frame.y = 0;
                if (!_this.loop) {
                    _this.destroy();
                }
            }
            _this.x = _this.size.x * frame.x;
            _this.y = _this.size.y * frame.y;
        }, this.frameRate);
    }
    Animation.prototype.load = function (src) {
        this.image = new Image();
        this.image.src = src;
    };
    Animation.prototype.getSize = function () {
        return new Vector2D_1["default"](this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.render = function () {
        this.context.drawImage(this.image, this.x, this.y, this.size.x, this.size.y, this.position.x, this.position.y, this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.destroy = function () {
        clearInterval(this.interval);
    };
    return Animation;
}());
exports.__esModule = true;
exports["default"] = Animation;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Color = (function () {
    function Color(red, green, blue, alpha) {
        if (red === void 0) { red = 0; }
        if (green === void 0) { green = 0; }
        if (blue === void 0) { blue = 0; }
        if (alpha === void 0) { alpha = 1; }
        this.red = Math.round(red * 255);
        this.green = Math.round(green * 255);
        this.blue = Math.round(blue * 255);
        this.alpha = alpha;
        if (this.red > 255)
            this.red = 255;
        else if (this.red < 0)
            this.red = 0;
        if (this.green > 255)
            this.green = 255;
        else if (this.green < 0)
            this.green = 0;
        if (this.blue > 255)
            this.blue = 255;
        else if (this.blue < 0)
            this.blue = 0;
        if (this.alpha > 1)
            this.alpha = 1;
        else if (this.alpha < 0)
            this.alpha = 0;
    }
    Color.prototype.setRed = function (color) {
        if (color > 255) {
            this.red = 255;
        }
        else if (color < 0) {
            this.red = 0;
        }
        else {
            this.red = color;
        }
    };
    Color.prototype.setGree = function (color) {
        if (color > 255) {
            this.green = 255;
        }
        else if (color < 0) {
            this.green = 0;
        }
        else {
            this.green = color;
        }
    };
    Color.prototype.setBlue = function (color) {
        if (color > 255) {
            this.blue = 255;
        }
        else if (color < 0) {
            this.blue = 0;
        }
        else {
            this.blue = color;
        }
    };
    Color.prototype.rgba = function () {
        return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")";
    };
    Color.prototype.rgb = function () {
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    };
    Color.random = function () {
        return new Color(Math.random(), Math.random(), Math.random());
    };
    return Color;
}());
exports.__esModule = true;
exports["default"] = Color;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lienzo_1 = __webpack_require__(1);
// Prefabs
var character_1 = __webpack_require__(51);
var coins_1 = __webpack_require__(52);
var grass_1 = __webpack_require__(53);
var slime_1 = __webpack_require__(54);
var clouds_1 = __webpack_require__(55);
var background_1 = __webpack_require__(56);
var scene = new lienzo_1.Scene({
    system: 'Rect',
    background: '#9FE6FF',
    gravity: new lienzo_1.Vector(0, 500) // ,
});
var manager = new lienzo_1.Manager();
manager.setScene(scene);
scene.add([character_1["default"], coins_1["default"], grass_1["default"], slime_1["default"], clouds_1["default"], background_1["default"]]);
manager.start();


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var Transform = (function () {
    function Transform(configuration) {
        this.position = new Vector2D_1["default"](0, 0);
        this.scale = new Vector2D_1["default"](1, 1);
        this.rotation = 0;
        if (configuration) {
            if (configuration.position)
                this.position = configuration.position;
            if (configuration.rotation)
                this.rotation = configuration.rotation;
            if (configuration.scale)
                this.position = configuration.scale;
        }
    }
    Transform.prototype.rotate = function (rotation) {
        this.rotation += rotation;
    };
    Transform.prototype.setPosition = function (x, y) {
        this.position = new Vector2D_1["default"](x, y);
    };
    Transform.prototype.globalTranslate = function (x, y) {
        this.position.add(new Vector2D_1["default"](x, y));
    };
    Transform.prototype.translate = function (x, y) {
        var translationY = Vector2D_1["default"].angleMagnitude(this.rotation, y);
        var translationX = Vector2D_1["default"].angleMagnitude(this.rotation + Math.PI / 2, x);
        this.position.add(new Vector2D_1["default"](translationY[0], translationY[1]));
        this.position.add(new Vector2D_1["default"](translationX[0], translationX[1]));
    };
    return Transform;
}());
exports.__esModule = true;
exports["default"] = Transform;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var id_1 = __webpack_require__(2);
var Identifier = (function () {
    function Identifier(name, tags) {
        this.id = id_1["default"]();
        this.name = name;
        this.tags = tags;
    }
    return Identifier;
}());
exports.__esModule = true;
exports["default"] = Identifier;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ScriptManager = (function () {
    function ScriptManager(gameObject) {
        this.methods = {};
        this.gameObject = gameObject;
    }
    ScriptManager.prototype.add = function (scripts) {
        for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
            var script = scripts_1[_i];
            this.one(script);
        }
    };
    ScriptManager.prototype.one = function (script) {
        for (var _i = 0, _a = Object.keys(script); _i < _a.length; _i++) {
            var method = _a[_i];
            if (!this.methods[method]) {
                this.methods[method] = [];
            }
            this.methods[method].push(script[method].bind(this.gameObject));
        }
    };
    ScriptManager.prototype.run = function (name, params) {
        if (this.methods[name]) {
            for (var _i = 0, _a = this.methods[name]; _i < _a.length; _i++) {
                var method = _a[_i];
                method.apply(void 0, params);
            }
        }
    };
    return ScriptManager;
}());
exports.__esModule = true;
exports["default"] = ScriptManager;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(7);
var index_2 = __webpack_require__(11);
var loader_1 = __webpack_require__(41);
var GameScene = (function () {
    function GameScene(config) {
        this.stage = new index_2.Scene();
        this.world = new index_1.Rect.World();
        this.background = '#000000';
        this.paused = false;
        this.gameObjects = [];
        this.world = new index_1.Rect.World(config.gravity);
        if (config) {
            if (config.background) {
                this.background = config.background;
            }
            if (config.bounds) {
                this.world.setBounds(config.bounds);
            }
            if (config.gameObjects) {
                this.add(config.gameObjects);
            }
        }
    }
    GameScene.prototype.add = function (gameObjects) {
        for (var _i = 0, gameObjects_1 = gameObjects; _i < gameObjects_1.length; _i++) {
            var gameObject = gameObjects_1[_i];
            var loaded = loader_1["default"](gameObject);
            this.addGameObject(loaded);
        }
    };
    GameScene.prototype.addGameObject = function (gameObject) {
        gameObject.Scene = this;
        for (var component in gameObject.Components) {
            var compo = gameObject.Components[component];
            if (compo.load) {
                compo.load(gameObject, this);
            }
        }
        gameObject.run('init');
        this.gameObjects.push(gameObject);
    };
    GameScene.prototype.find = function (property, value) {
        var found = [];
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var gameObject = _a[_i];
            if (gameObject.Identifier) {
                if (gameObject.Identifier.name === name) {
                    found.push(gameObject);
                }
            }
        }
        return found;
    };
    GameScene.prototype.remove = function (gameObject) {
        this.gameObjects = this.gameObjects.filter(function (other) {
            return gameObject.Identifier.id !== other.Identifier.id;
        });
    };
    GameScene.prototype.run = function (method, params) {
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var gameObject = _a[_i];
            gameObject.run(method, params);
        }
    };
    GameScene.prototype.update = function () {
        this.stage.clear(this.background);
        // this.world.update()
        this.stage.update();
        this.run('update');
    };
    return GameScene;
}());
exports.__esModule = true;
exports["default"] = GameScene;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Collider_1 = __webpack_require__(8);
exports.Collider = Collider_1["default"];
var Dynamic_1 = __webpack_require__(22);
exports.Dynamic = Dynamic_1["default"];
// import Trigger from './Trigger'
var World_1 = __webpack_require__(9);
exports.World = World_1["default"];


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var id_1 = __webpack_require__(2);
var Circle = (function () {
    function Circle(position, radius) {
        this.position = new Vector2D_1["default"](0, 0);
        this.radius = 5;
        this.position = position;
        this.radius = radius;
        this.id = id_1["default"]();
    }
    return Circle;
}());
exports.__esModule = true;
exports["default"] = Circle;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vector2D_1 = __webpack_require__(0);
var Collider_1 = __webpack_require__(8);
var Dynamic = (function (_super) {
    __extends(Dynamic, _super);
    function Dynamic(config) {
        var _this = _super.call(this, config.position, config.radius) || this;
        _this.velocity = new Vector2D_1["default"](0, 0);
        _this.acceleration = new Vector2D_1["default"](0, 0);
        _this.dynamic = true;
        _this.moved = false;
        _this.futurePosition = new Vector2D_1["default"](0, 0);
        _this.mass = Math.PI * Math.pow(_this.radius, 2);
        _this.restitution = config.restitution;
        _this.friction = config.friction;
        return _this;
    }
    Dynamic.prototype.addForce = function (force) {
        this.acceleration.add(force);
    };
    Dynamic.prototype.momentum = function () {
        return Vector2D_1["default"].mult(this.velocity, this.mass);
    };
    Dynamic.prototype.inelasticCollision = function (other) {
        var velocity1 = this.velocity;
        var velocity2 = other.velocity;
        var totalMomentum = Vector2D_1["default"].add(other.momentum(), this.momentum());
        var totalMass = this.mass + other.mass;
        // This velocity
        this.velocity = Vector2D_1["default"].sub(velocity2, velocity1);
        this.velocity.mult(this.restitution * other.mass);
        this.velocity.add(totalMomentum);
        this.velocity.div(totalMass);
        // Other velocity
        other.velocity = Vector2D_1["default"].sub(velocity1, velocity2);
        other.velocity.mult(other.restitution * this.mass);
        other.velocity.add(totalMomentum);
        other.velocity.div(totalMass);
    };
    Dynamic.prototype.update = function () {
        this.acceleration.div(this.mass);
        this.velocity.add(this.acceleration);
        // const tempPosition = this.position.copy()
        this.position.add(this.velocity);
        // this.World.separate(this)
        this.velocity.mult(this.friction);
        this.acceleration.zero();
    };
    return Dynamic;
}(Collider_1["default"]));
exports.__esModule = true;
exports["default"] = Dynamic;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var World_1 = __webpack_require__(9);
exports.World = World_1["default"];
var Collider_1 = __webpack_require__(10);
exports.Collider = Collider_1["default"];
var Dynamic_1 = __webpack_require__(25);
exports.Dynamic = Dynamic_1["default"];


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
function id() {
    var ID = '';
    for (var i = 0; i < 10; i++) {
        ID += Math.round(Math.random() * 100);
    }
    return ID;
}
var Rect = (function () {
    function Rect(position, size) {
        this.position = new Vector2D_1["default"](0, 0);
        this.size = new Vector2D_1["default"](10, 10);
        this.id = id();
        this.position = position;
        this.size = size;
    }
    return Rect;
}());
exports.__esModule = true;
exports["default"] = Rect;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vector2D_1 = __webpack_require__(0);
var Collider_1 = __webpack_require__(10);
var Vector = Vector2D_1["default"];
var Dynamic = (function (_super) {
    __extends(Dynamic, _super);
    function Dynamic(position, restitution, size) {
        var _this = _super.call(this, position, size) || this;
        _this.velocity = new Vector2D_1["default"](0, 0);
        _this.acceleration = new Vector2D_1["default"](0, 0);
        _this.friction = 0.99;
        _this.restitution = 1;
        _this.dynamic = true;
        _this.mass = size.x * size.y;
        _this.restitution = restitution;
        return _this;
    }
    Dynamic.prototype.addForce = function (force) {
        this.acceleration.add(force);
    };
    Dynamic.prototype.momentum = function () {
        return Vector.mult(this.velocity, this.mass);
    };
    Dynamic.prototype.inelasticCollision = function (other) {
        var velocity1 = this.velocity;
        var velocity2 = other.velocity;
        var totalMomentum = other.momentum();
        totalMomentum.add(this.momentum());
        var totalMass = this.mass + other.mass;
        // This velocity
        this.velocity = Vector.sub(velocity2, velocity1);
        this.velocity.mult(this.restitution * other.mass);
        this.velocity.add(totalMomentum);
        this.velocity.div(totalMass);
        // Other velocity
        other.velocity = Vector.sub(velocity1, velocity2);
        other.velocity.mult(other.restitution * this.mass);
        other.velocity.add(totalMomentum);
        other.velocity.div(totalMass);
    };
    Dynamic.prototype.update = function () {
        this.acceleration.div(this.mass);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.velocity.mult(this.friction);
        // if (this.velocity.mag() < 0.05) {
        //   this.velocity.zero()
        // }
        this.acceleration.zero();
    };
    return Dynamic;
}(Collider_1["default"]));
exports.__esModule = true;
exports["default"] = Dynamic;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DynamicCircle_1 = __webpack_require__(27);
var DynamicBox_1 = __webpack_require__(28);
var DynamicRect_1 = __webpack_require__(29);
var StaticCircle_1 = __webpack_require__(30);
var StaticBox_1 = __webpack_require__(31);
var StaticRect_1 = __webpack_require__(32);
var World_1 = __webpack_require__(33);
exports.World = World_1["default"];
function dynamicBody(shape, size, position, restitution) {
    if (shape === 'circle') {
        return new DynamicCircle_1["default"](position, size, restitution);
    }
    else if (shape === 'box') {
        return new DynamicBox_1["default"](position, size);
    }
    else if (shape === 'rect') {
        return new DynamicRect_1["default"](position, size, restitution);
    }
    else {
        throw new Error('Type of body [' + shape + '] does not exist.');
    }
}
function staticBody(shape, size, position) {
    if (shape === 'circle') {
        return new StaticCircle_1["default"](position, size);
    }
    else if (shape === 'box') {
        return new StaticBox_1["default"](position, size);
    }
    else if (shape === 'rect') {
        return new StaticRect_1["default"](position, size);
    }
    else {
        throw new Error('Type of body [' + shape + '] does not exist.');
    }
}
function body(type, shape, size, position, onCollision) {
    var collider;
    if (type === 'static') {
        collider = staticBody(shape, size, position);
    }
    else if (type === 'dynamic') {
        collider = dynamicBody(shape, size, position);
    }
    else {
        throw new Error('Type [' + type + '] does not exist. dynamic or static');
    }
    if (onCollision) {
        collider.coliciona = onCollision.bind(this);
    }
    else {
        collider.coliciona = function () { };
    }
    return collider;
}
exports.body = body;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vector2D_1 = __webpack_require__(0);
var DynamicBody_1 = __webpack_require__(3);
var DynamicCircle = (function (_super) {
    __extends(DynamicCircle, _super);
    function DynamicCircle(position, radius, restitution) {
        var _this = _super.call(this, position, restitution) || this;
        _this.radius = radius;
        _this.mass = Math.PI * Math.pow(_this.radius, 2);
        _this.type = 'circle';
        return _this;
    }
    DynamicCircle.prototype.circleCollision = function (other) {
        var distance = Vector2D_1["default"].sub(this.position, other.position);
        if (distance.mag() < this.radius + other.radius && distance.mag()) {
            var direction = Vector2D_1["default"].normalize(distance);
            direction.mult(this.radius + other.radius);
            direction.sub(distance);
            this.position.add(direction);
            if (other.isDynamic) {
                this.inelasticCollision(other);
            }
            else {
                this.velocity.inverse();
            }
            this.collides(other);
        }
    };
    DynamicCircle.prototype.rectCollision = function (rect) {
        var distX = Math.abs(this.position.x - rect.position.x - rect.size.x / 2);
        var distY = Math.abs(this.position.y - rect.position.y - rect.size.y / 2);
        if (distX > (rect.size.x / 2 + this.radius))
            return false;
        if (distY > (rect.size.y / 2 + this.radius))
            return false;
        if (distX <= (rect.size.x / 2)) {
            this.velocity.y *= -1;
            this.collides(rect);
        }
        if (distY <= (rect.size.y / 2)) {
            this.velocity.x *= -1;
            this.collides(rect);
        }
        var dx = distX - rect.size.x / 2;
        var dy = distY - rect.size.y / 2;
        if (dx * dx + dy * dy <= (this.radius * this.radius)) {
            this.velocity.addAngle(90);
            this.collides(rect);
        }
    };
    return DynamicCircle;
}(DynamicBody_1["default"]));
exports.__esModule = true;
exports["default"] = DynamicCircle;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicBody_1 = __webpack_require__(3);
var DynamicBox = (function (_super) {
    __extends(DynamicBox, _super);
    function DynamicBox(position, side, restitution) {
        if (restitution === void 0) { restitution = 1; }
        var _this = _super.call(this, position, restitution) || this;
        _this.side = side;
        _this.mass = Math.pow(_this.side, 2);
        _this.type = 'box';
        return _this;
    }
    return DynamicBox;
}(DynamicBody_1["default"]));
exports.__esModule = true;
exports["default"] = DynamicBox;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicBody_1 = __webpack_require__(3);
var DynamicRect = (function (_super) {
    __extends(DynamicRect, _super);
    function DynamicRect(position, size, restitution, collides) {
        if (restitution === void 0) { restitution = 1; }
        var _this = _super.call(this, position, restitution) || this;
        _this.collides = collides;
        _this.size = size;
        _this.mass = size.x * size.y;
        _this.type = 'rect';
        return _this;
    }
    DynamicRect.prototype.circleCollision = function (circle) {
        var distX = Math.abs(circle.position.x - this.position.x - this.size.x / 2);
        var distY = Math.abs(circle.position.y - this.position.y - this.size.y / 2);
        if (distX > (this.size.x / 2 + circle.radius))
            return false;
        if (distY > (this.size.y / 2 + circle.radius))
            return false;
        if (distX <= (this.size.x / 2)) {
            circle.velocity.y *= -1;
            this.collides(this);
        }
        if (distY <= (this.size.y / 2)) {
            circle.velocity.x *= -1;
            this.collides(circle);
        }
        var dx = distX - this.size.x / 2;
        var dy = distY - this.size.y / 2;
        if (dx * dx + dy * dy <= (circle.radius * circle.radius)) {
            circle.velocity.addAngle(90);
            this.collides(circle);
        }
    };
    DynamicRect.prototype.rectCollision = function (rect) {
    };
    return DynamicRect;
}(DynamicBody_1["default"]));
exports.__esModule = true;
exports["default"] = DynamicRect;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var StaticCircle = (function () {
    function StaticCircle(position, radius) {
        if (position === void 0) { position = new Vector2D_1["default"](0, 0); }
        if (radius === void 0) { radius = 5; }
        this.position = position;
        this.radius = radius;
        this.type = 'circle';
    }
    return StaticCircle;
}());
exports.__esModule = true;
exports["default"] = StaticCircle;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var StaticBox = (function () {
    function StaticBox(position, side) {
        if (position === void 0) { position = new Vector2D_1["default"](0, 0); }
        if (side === void 0) { side = 5; }
        this.position = position;
        this.side = side;
        this.type = 'box';
    }
    return StaticBox;
}());
exports.__esModule = true;
exports["default"] = StaticBox;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var StaticRect = (function () {
    function StaticRect(position, size) {
        if (position === void 0) { position = new Vector2D_1["default"](0, 0); }
        if (size === void 0) { size = new Vector2D_1["default"](5, 5); }
        this.position = position;
        this.size = size;
        this.type = 'rect';
    }
    return StaticRect;
}());
exports.__esModule = true;
exports["default"] = StaticRect;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var World = (function () {
    function World(x, y) {
        this.x = x;
        this.y = y;
        this.dynamicParticles = [];
        this.circleParticles = [];
        this.rectParticles = [];
        this.maxPositionX = window.innerWidth;
        this.minPositionX = 0;
        this.maxPositionY = window.innerHeight;
        this.minPositionY = 0;
    }
    World.prototype.add = function (particle) {
        if (particle.type === 'circle') {
            this.circleParticles.push(particle);
        }
        else if (particle.type === 'rect') {
            this.rectParticles.push(particle);
        }
        if (particle.isDynamic) {
            this.dynamicParticles.push(particle);
        }
    };
    World.prototype.remove = function (particle) {
        if (particle.type === 'circle') {
            this.circleParticles.splice(this.circleParticles.indexOf(particle), 1);
        }
        else if (particle.type === 'rect') {
            this.rectParticles.splice(this.rectParticles.indexOf(particle), 1);
        }
        if (particle.isDynamic) {
            this.dynamicParticles.splice(this.dynamicParticles.indexOf(particle), 1);
        }
    };
    World.prototype.update = function () {
        var _this = this;
        this.dynamicParticles.forEach(function (particle) {
            _this.insideWorldBounds(particle);
            particle.update();
            _this.circleParticles.forEach(function (circle) {
                particle.circleCollision(circle);
            });
            _this.rectParticles.forEach(function (rect) {
                particle.rectCollision(rect);
            });
        });
    };
    World.prototype.insideWorldBounds = function (particle) {
        // Horizontal bounds
        if (particle.position.x + particle.radius > this.maxPositionX) {
            particle.position.x = this.maxPositionX - particle.radius;
            particle.velocity.x *= -1;
        }
        else if (particle.position.x - particle.radius < this.minPositionX) {
            particle.position.x = this.minPositionX + particle.radius;
            particle.velocity.x *= -1;
        }
        // Vectical bounds
        if (particle.position.y + particle.radius > this.maxPositionY) {
            particle.position.y = this.maxPositionY - particle.radius;
            particle.velocity.y *= -1;
        }
        else if (particle.position.y - particle.radius < this.minPositionY) {
            particle.position.y = this.minPositionY + particle.radius;
            particle.velocity.y *= -1;
        }
    };
    return World;
}());
exports.__esModule = true;
exports["default"] = World;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Body_1 = __webpack_require__(35);
var Engine_1 = __webpack_require__(37);
exports.__esModule = true;
exports["default"] = { Body: Body_1["default"], Engine: Engine_1["default"] };


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lienzo_1 = __webpack_require__(1);
var vectorFunctions_1 = __webpack_require__(4);
var Figure_1 = __webpack_require__(36);
function Body(type, config) {
    var _this = this;
    this.mass = config.mass ? config.mass : 1;
    this.friction = config.friction ? config.friction : 1;
    this.restitution = config.restitution ? config.restitution : 0.9;
    this.aceleration = config.aceleration ? new lienzo_1.Vector(config.aceleration[0], config.aceleration[1]) : new lienzo_1.Vector(0, 0);
    this.velocity = config.velocity ? new lienzo_1.Vector(config.velocity[0], config.velocity[1]) : new lienzo_1.Vector(0, 0);
    this.collision = config.collision;
    this.name = config.name;
    this.type = type;
    if (type !== 'Circle') {
        this.update = function () {
            _this.velocity.add(_this.aceleration);
            _this.vertices.translate(_this.velocity);
            _this.velocity.mult(_this.friction);
            _this.center = _this.vertices.center();
            _this.aceleration.mult(0);
            _this.far = _this.vertices.far(_this.center);
        };
    }
    else {
        this.update = function () {
            _this.velocity.add(_this.aceleration);
            _this.center = vectorFunctions_1["default"].add(_this.center, _this.velocity.value);
            _this.velocity.mult(_this.friction);
            _this.aceleration.mult(0);
        };
    }
    this.addForce = function (force) {
        force.mult(1 / _this.mass);
        _this.aceleration.add(force);
    };
    if (type === 'Circle') {
        this.center = config.position;
        this.far = config.radius;
    }
    else {
        this.vertices = new Figure_1["default"]();
        if (type === 'Mesh') {
            config.vertices.forEach(function (vertex) { return _this.vertices.add(vertex); });
        }
        else if (type === 'Box') {
            var pointY = vectorFunctions_1["default"].add(config.position, [0, config.side]);
            var pointX = vectorFunctions_1["default"].add(config.position, [config.side, 0]);
            var pointXY = vectorFunctions_1["default"].add(config.position, [config.side, config.side]);
            this.vertices.add(config.position);
            this.vertices.add(pointX);
            this.vertices.add(pointXY);
            this.vertices.add(pointY);
        }
        else if (type === 'Rect') {
            var pointY = vectorFunctions_1["default"].add(config.position, [0, config.height]);
            var pointX = vectorFunctions_1["default"].add(config.position, [config.width, 0]);
            var pointXY = vectorFunctions_1["default"].add(config.position, [config.width, config.height]);
            this.vertices.add(config.position);
            this.vertices.add(pointX);
            this.vertices.add(pointXY);
            this.vertices.add(pointY);
        }
        this.center = this.vertices.center();
        this.far = this.vertices.far(this.center);
    }
    return this;
}
exports.__esModule = true;
exports["default"] = Body;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vectorFunctions_1 = __webpack_require__(4);
var Figure = (function () {
    function Figure() {
        this.points = [];
        this.rotation = 0;
    }
    Figure.prototype.add = function (point) {
        this.points.push(point);
    };
    Figure.prototype.translate = function (vec) {
        this.points = this.points.map(function (x) { return vectorFunctions_1["default"].add(x, vec); });
    };
    Figure.prototype.rotate = function (rotation) {
        var _this = this;
        this.points = this.points.map(function (x) { return vectorFunctions_1["default"].setAngle(x, _this.rotation + rotation); });
    };
    Figure.prototype.scale = function (vec) {
        this.points = this.points.map(function (x) { return vectorFunctions_1["default"].mult(x, vec); });
    };
    Figure.prototype.center = function () {
        vectorFunctions_1["default"].average(this.points);
    };
    Figure.prototype.far = function (center) {
        return vectorFunctions_1["default"].mag(this.points.reduce(function (a, c) {
            if (vectorFunctions_1["default"].distance(a, center) > vectorFunctions_1["default"].distance(c, center))
                return a;
            else
                return c;
        }));
    };
    return Figure;
}());
exports.__esModule = true;
exports["default"] = Figure;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vectorFunctions_1 = __webpack_require__(4);
function meshIntersect(mesh, mesh2) {
    mesh.vertices.points.forEach(function (vertex, index) {
        mesh2.vertices.points.forEach(function (vertex2, index2) {
            var end;
            if (index !== mesh.vertices.points.length - 1) {
                end = mesh.vertices.points[index + 1];
            }
            else
                end = mesh.vertices.points[0];
            var end2;
            if (index2 !== mesh2.vertices.points.length - 1) {
                end2 = mesh2.vertices.points[index2 + 1];
            }
            else
                end2 = mesh2.vertices.points[0];
            var i = vectorFunctions_1["default"].linearIntersect(vertex, end, vertex2, end2);
            if (i[0] !== 1 && i[1] !== 1) {
                collision(mesh, mesh2);
            }
        });
    });
}
function circleIntersect(circle, _circle) {
    if (vectorFunctions_1["default"].distance(circle.center, _circle.center) < circle.far + _circle.far) {
        collision(circle, _circle);
    }
}
function meshCircleIntersect(mesh, circle) {
    mesh.vertices.points.forEach(function (vertex) {
        if (vectorFunctions_1["default"].distance(vertex, circle.center) < circle.far)
            collision(mesh, circle);
    });
}
function collision(body, _body) {
    if (body.collision)
        body.collision(body, _body);
    if (_body.collision)
        _body.collision(_body, body);
}
var idCounter = 0;
function Engine() {
    var _this = this;
    this.bodies = [];
    this.add = function (body) {
        body.id = idCounter++;
        _this.bodies.push(body);
    };
    this.destroy = function (body) {
        _this.bodies = _this.bodies.filter(function (b) {
            return b.id !== body.id;
        });
    };
    this.setBounds = function (bounds) {
        _this.bounds = bounds;
    };
    this.removeBounds = function () {
        _this.bounds = false;
    };
    this.update = function () {
        _this.bodies.forEach(function (body, index) {
            body.update();
            if (_this.bounds) {
                if (body.center[0] <= _this.bounds[0]) {
                    body.center[0] = _this.bounds[0];
                    body.velocity.mult(body.restitution);
                    body.velocity.value[0] *= -1;
                }
                else if (body.center[0] >= _this.bounds[1]) {
                    body.center[0] = _this.bounds[1];
                    body.velocity.mult(body.restitution);
                    body.velocity.value[0] *= -1;
                }
                if (body.center[1] <= _this.bounds[2]) {
                    body.center[1] = _this.bounds[2];
                    body.velocity.mult(body.restitution);
                    body.velocity.value[1] *= -1;
                }
                else if (body.center[1] >= _this.bounds[3]) {
                    body.center[1] = _this.bounds[3];
                    body.velocity.mult(body.restitution);
                    body.velocity.value[1] *= -1;
                }
            }
            _this.bodies.forEach(function (body2, index2) {
                if (index !== index2) {
                    if (vectorFunctions_1["default"].distance(body.center, body2.center) < body.far + body2.far) {
                        if (body.type !== 'Circle' && body2.type !== 'Circle')
                            meshIntersect(body, body2);
                        else if (body.type !== 'Circle' && body2.type === 'Circle')
                            meshCircleIntersect(body, body2);
                        else if (body.type === 'Circle' && body2.type !== 'Circle')
                            meshCircleIntersect(body2, body);
                        else
                            circleIntersect(body, body2);
                    }
                }
            });
        });
    };
}
exports.__esModule = true;
exports["default"] = Engine;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var Scene = (function () {
    function Scene() {
        this.following = false;
        this.translation = new Vector2D_1["default"](0, 0);
        this.childs = [];
    }
    Scene.prototype.setRender = function (render) {
        this.renderer = render;
        this.context = render.context;
        this.smoth(false);
    };
    Scene.prototype.add = function (element) {
        element.context = this.renderer.context;
        this.childs.push(element);
    };
    Scene.prototype.remove = function (g) {
        this.childs.splice(this.childs.indexOf(g), 1);
    };
    Scene.prototype.clear = function (color) {
        if (color === void 0) { color = '#000'; }
        this.context.fillStyle = color;
        this.context.fillRect(-this.translation.x, 0, window.innerWidth, window.innerHeight);
    };
    Scene.prototype.follow = function (gameObject) {
        this.followed = gameObject.transform.position;
        this.temp = this.followed.copy();
        this.following = true;
    };
    Scene.prototype.smoth = function (state) {
        this.context.webkitImageSmoothingEnabled = state;
        this.context.mozImageSmoothingEnabled = state;
        this.context.imageSmoothingEnabled = state;
    };
    Scene.prototype.zoom = function (where, howMuch) {
        this.context.translate(where.x, where.y);
        this.context.scale(howMuch.x, howMuch.y);
        this.context.translate(-where.x, -where.y);
    };
    Scene.prototype.translate = function (x, y) {
        this.translation.x -= x;
        this.translation.y -= y;
        this.context.translate(-x, -y);
    };
    Scene.prototype.update = function () {
        if (this.following) {
            var change = Vector2D_1["default"].sub(this.temp, this.followed);
            this.temp = this.followed.copy();
            this.translate(-change.x, 0); /* -change.y To enable y following */
        }
        this.childs.forEach(function (child) { return child.render(); });
    };
    return Scene;
}());
exports.__esModule = true;
exports["default"] = Scene;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var Render = (function () {
    function Render(canvasName, width, height) {
        var _this = this;
        if (canvasName) {
            this.canvas = document.getElementById(canvasName);
            if (this.canvas === null) {
                throw new Error('Element with that ID was not found.');
            }
        }
        else {
            this.canvas = document.createElement('canvas');
            document.body.appendChild(this.canvas);
        }
        if (width && height) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
        else {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', function () {
            _this.canvas.width = window.innerWidth;
            _this.canvas.height = window.innerHeight;
        });
        this.context = this.canvas.getContext('2d');
    }
    Render.prototype.getWidth = function () {
        return this.canvas.width;
    };
    Render.prototype.getHeight = function () {
        return this.canvas.height;
    };
    Render.prototype.getCenter = function () {
        return new Vector2D_1["default"](this.canvas.width / 2, this.canvas.height / 2);
    };
    Render.prototype.setScene = function (scene) {
        this.scene = scene;
        this.scene.renderer = this;
    };
    return Render;
}());
exports.__esModule = true;
exports["default"] = Render;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Graphic_1 = __webpack_require__(5);
var gObject = (function () {
    function gObject(data) {
        this.graphic = new Graphic_1["default"](this.render());
        this.instrucctions = Object.keys(data);
    }
    gObject.prototype.render = function () {
        var _this = this;
        this.instrucctions.forEach(function (instrucction) {
            (_a = _this.graphic)[instrucction].apply(_a, _this.instrucctions[instrucction]);
            var _a;
        });
    };
    return gObject;
}());
exports.__esModule = true;
exports["default"] = gObject;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Component = __webpack_require__(42);
var GameObject_1 = __webpack_require__(6);
function load(configuration) {
    var result = {};
    if (configuration) {
        for (var _i = 0, _a = Object.keys(configuration); _i < _a.length; _i++) {
            var component = _a[_i];
            result[component] = new Component[component](configuration[component]);
        }
    }
    return new GameObject_1["default"](result);
}
exports.__esModule = true;
exports["default"] = load;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ScriptComponent_1 = __webpack_require__(43);
exports.Script = ScriptComponent_1["default"];
var AnimationComponent_1 = __webpack_require__(44);
exports.Animation = AnimationComponent_1["default"];
var IdentifierComponent_1 = __webpack_require__(45);
exports.Identifier = IdentifierComponent_1["default"];
var TransformComponent_1 = __webpack_require__(46);
exports.Transform = TransformComponent_1["default"];
var SpriteComponent_1 = __webpack_require__(47);
exports.Sprite = SpriteComponent_1["default"];
var ColliderComponent_1 = __webpack_require__(48);
exports.Collider = ColliderComponent_1["default"];


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ScriptManager = (function () {
    function ScriptManager(gameObject) {
        this.methods = {};
        this.gameObject = gameObject;
    }
    ScriptManager.prototype.add = function (scripts) {
        for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
            var script = scripts_1[_i];
            this.one(script);
        }
    };
    ScriptManager.prototype.one = function (script) {
        for (var _i = 0, _a = Object.keys(script); _i < _a.length; _i++) {
            var method = _a[_i];
            if (!this.methods[method]) {
                this.methods[method] = [];
            }
            this.methods[method].push(script[method].bind(this.gameObject));
        }
    };
    ScriptManager.prototype.run = function (name, params) {
        if (this.methods[name]) {
            for (var _i = 0, _a = this.methods[name]; _i < _a.length; _i++) {
                var method = _a[_i];
                method.apply(void 0, params);
            }
        }
    };
    return ScriptManager;
}());
exports.__esModule = true;
exports["default"] = ScriptManager;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Animation_1 = __webpack_require__(13);
var Vector2D_1 = __webpack_require__(0);
var AnimationComponent = (function () {
    function AnimationComponent(config) {
        this.src = config.src;
        this.loop = config.loop;
        this.size = config.size ? config.size : 100;
        this.frameRate = config.frameRate ? config.frameRate : new Vector2D_1["default"](10, 10);
    }
    AnimationComponent.prototype.load = function (gameObject, Scene) {
        var animation = new Animation_1["default"](this.src, gameObject.Transform.scale, gameObject.Transform.position, this.frameRate, this.size);
        Scene.stage.add(animation);
    };
    return AnimationComponent;
}());
exports.__esModule = true;
exports["default"] = AnimationComponent;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var id_1 = __webpack_require__(2);
var Identifier = (function () {
    function Identifier(name, tags) {
        this.id = id_1["default"]();
        this.name = name;
        this.tags = tags;
    }
    return Identifier;
}());
exports.__esModule = true;
exports["default"] = Identifier;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var Transform = (function () {
    function Transform(configuration) {
        this.position = new Vector2D_1["default"](0, 0);
        this.scale = new Vector2D_1["default"](1, 1);
        this.rotation = 0;
        if (configuration) {
            if (configuration.position)
                this.position = configuration.position;
            if (configuration.rotation)
                this.rotation = configuration.rotation;
            if (configuration.scale)
                this.position = configuration.scale;
        }
    }
    Transform.prototype.rotate = function (rotation) {
        this.rotation += rotation;
    };
    Transform.prototype.setPosition = function (x, y) {
        this.position = new Vector2D_1["default"](x, y);
    };
    Transform.prototype.globalTranslate = function (x, y) {
        this.position.add(new Vector2D_1["default"](x, y));
    };
    Transform.prototype.translate = function (x, y) {
        var translationY = Vector2D_1["default"].angleMagnitude(this.rotation, y);
        var translationX = Vector2D_1["default"].angleMagnitude(this.rotation + Math.PI / 2, x);
        this.position.add(new Vector2D_1["default"](translationY[0], translationY[1]));
        this.position.add(new Vector2D_1["default"](translationX[0], translationX[1]));
    };
    return Transform;
}());
exports.__esModule = true;
exports["default"] = Transform;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Sprite_1 = __webpack_require__(12);
var Vector2D_1 = __webpack_require__(0);
var SpriteComponent = (function () {
    function SpriteComponent(src) {
        this.src = src;
    }
    SpriteComponent.prototype.load = function (gameObject, Scene) {
        console.log(this.src, gameObject.Transform.position, gameObject.Transform.scale, gameObject.Transform.rotation);
        var sprite = new Sprite_1["default"](this.src, gameObject.Transform.position, gameObject.Transform.scale, gameObject.Transform.rotation, new Vector2D_1["default"](0, 0));
        Scene.stage.add(sprite);
    };
    return SpriteComponent;
}());
exports.__esModule = true;
exports["default"] = SpriteComponent;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(0);
var index_1 = __webpack_require__(7);
var Collider = (function () {
    function Collider(configuration) {
        this.restitution = configuration.restitution;
        this.size = configuration.size;
        this.static = configuration.static;
    }
    Collider.prototype.load = function (gameObject, Scene) {
        if (this.size === 'fit') {
            if (this.static) {
                this.collider = new index_1.Rect.Collider(gameObject.Transform.position, new Vector2D_1["default"](50, 50) /*
                gameObject.sprite.getSize()*/);
            }
            else {
                this.collider = new index_1.Rect.Dynamic(gameObject.Transform.position, this.restitution, new Vector2D_1["default"](50, 50));
            }
        }
        else {
            if (this.static) {
                this.collider = new index_1.Rect.Collider(gameObject.Transform.position, this.size);
            }
            else {
                this.collider = new index_1.Rect.Dynamic(gameObject.Transform.position, this.restitution, this.size);
            }
        }
        /*
            if (!gameObject.sprite.animation) {
              gameObject.sprite.scale = new Vector2D(
                this.size.x / gameObject.sprite.image.width,
                this.size.y / gameObject.sprite.image.height)
            }
          */
        this.collision = function (other) {
            gameObject.run('collision', [other]);
        };
        //  gameObject.collider = this.collider
        // if (gameObject.collider) {
        //   gameObject.collider.load(gameObject)
        Scene.world.add(this.collider);
        // }
    };
    return Collider;
}());
exports.__esModule = true;
exports["default"] = Collider;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vector2D_1 = __webpack_require__(0);
var index_1 = __webpack_require__(11);
var GameManager = (function (_super) {
    __extends(GameManager, _super);
    function GameManager(id, width, height) {
        var _this = _super.call(this, id, width, height) || this;
        initEvents(_this);
        return _this;
    }
    GameManager.prototype.setScene = function (scene) {
        this.gameScene = scene;
        this.gameScene.stage.setRender(this);
    };
    GameManager.prototype.getWidth = function () {
        return this.getWidth();
    };
    GameManager.prototype.getHeight = function () {
        return this.getHeight();
    };
    GameManager.prototype.getTranslation = function () {
        return this.gameScene.stage.translation;
    };
    GameManager.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.gameScene.update();
        });
    };
    return GameManager;
}(index_1.Render));
exports.__esModule = true;
exports["default"] = GameManager;
function initEvents(manager) {
    var keys = {};
    setInterval(function () {
        Object.keys(keys).some(function (key) {
            if (keys[key]) {
                if (!manager.gameScene.paused) {
                    manager.gameScene.run('keyPress', [keys]);
                }
                return true;
            }
        });
    }, 20);
    document.addEventListener('mousedown', function (event) {
        if (!manager.gameScene.paused) {
            manager.gameScene.run('globalMouseDown', [new Vector2D_1["default"](event.clientX, event.clientY)]);
            manager.gameScene.runMouseDown(event, [new Vector2D_1["default"](event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('mousemove', function (event) {
        if (!manager.gameScene.paused) {
            manager.gameScene.run('globalMouseMove', [new Vector2D_1["default"](event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('mouseup', function (event) {
        if (!manager.gameScene.paused) {
            manager.gameScene.run('globalMouseUp', [new Vector2D_1["default"](event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('keydown', function (event) {
        keys[event.key] = true;
        if (!manager.gameScene.paused) {
            manager.gameScene.run('keyDown', [event.key]);
        }
    });
    document.addEventListener('keyup', function (event) {
        keys[event.key] = false;
        if (!manager.gameScene.paused) {
            manager.gameScene.run('keyUp', [event.key]);
        }
    });
}
function mouseDown(manager, mouse) {
    var translation = manager.gameScene.stage.translation;
    this.gameObjects.forEach(function (gameObject) {
        if (gameObject.collider) {
            if (mouse.x > gameObject.Transform.position.x + translation.x &&
                mouse.x < gameObject.Transform.position.x + translation.x + gameObject.collider.size.x &&
                mouse.y > gameObject.Transform.position.y + translation.y &&
                mouse.y < gameObject.Transform.position.y + translation.y + gameObject.collider.size.y) {
                gameObject.run('mouseDown', mouse);
            }
        }
    });
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function getNumber(number) {
    return number * Math.random() * symbol();
}
exports.getNumber = getNumber;
function symbol(probability) {
    if (probability === void 0) { probability = 0.5; }
    if (Math.random() < probability) {
        return -1;
    }
    else {
        return 1;
    }
}
exports.symbol = symbol;
function random(finish, start) {
    if (finish === void 0) { finish = 1; }
    if (start === void 0) { start = 0; }
    return (Math.random() * (finish - start)) + start;
}
exports.random = random;
function randomList(len, finish, start) {
    if (len === void 0) { len = 2; }
    if (finish === void 0) { finish = 1; }
    if (start === void 0) { start = 0; }
    var list = [];
    for (var i = 0; i < len; i++) {
        list.push(random(finish, start));
    }
    return list;
}
exports.randomList = randomList;
function randomMatrix(finish, start, width, heigth) {
    if (finish === void 0) { finish = 1; }
    if (start === void 0) { start = 0; }
    if (width === void 0) { width = 2; }
    if (heigth === void 0) { heigth = 2; }
    var list = [];
    for (var i = 0; i < heigth; i++) {
        list.push(randomList(width, finish, start));
    }
    return list;
}
exports.randomMatrix = randomMatrix;
function noise(resolution, len, finish, start) {
    if (resolution === void 0) { resolution = 3; }
    if (len === void 0) { len = 10; }
    if (finish === void 0) { finish = 1; }
    if (start === void 0) { start = 0; }
    var result = [];
    var size = Math.round(len / resolution);
    for (var long = 0; long < size; long++) {
        var number = random(finish, start);
        result.push(number);
        for (var i = 1; i <= resolution; i++) {
            number += symbol() * random(finish / i, start / i);
            result.push(number);
        }
        result.push(number);
    }
    return result;
}
exports.noise = noise;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lienzo__);



/* harmony default export */ __webpack_exports__["default"] = ({
  Identifier: {
    name: 'character'
  },

  Transform: {
    position: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, 0),
    scale: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](2, 2)
  },

  Collider: {
    size: 'fit'
  },

  Animation: {
    src: 'assets/walk.png',
    size: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](16, 28)
  },

  Script: {
    init () {
      this.jump = true
      this.coins = 0
      this.health = 30
      let x = new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Graphic"](function () {
        this.text(`Monedas: ${this.gameObject.coins}`, -this.position.x + 50, this.position.y + 75, { fillStyle: '#FFF', font: 'bold 34px Helvetica', lineWidth: 1 }, true)
      }, new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, 0))

      x.gameObject = this
      this.scene.renderWorld.add(x)

      let health = new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Graphic"](function () {
        this.rect(this.position.x, this.position.y - 15, 90, 10, '#000')
        this.rect(this.position.x, this.position.y - 15, this.gameObject.health * 3, 10, '#F00')
        this.text(`Health ${this.gameObject.health}`, this.position.x, this.position.y - 20, { fillStyle: '#000', font: 'bold 16px Arial' })
      }, this.transform.position)
      health.gameObject = this
      this.scene.renderWorld.add(health)
    },

    mouseDown (mouse) {
      let x = new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Graphic"](function () {
        this.rect(this.position.x, this.position.y - 25, 30 * 10, 30)
        this.text(`Monedas ${this.gameObject.coins}`, this.position.x, this.position.y, { fillStyle: '#f00', font: '34px Arial bold' })
      }, this.transform.position)
      x.gameObject = this

      this.scene.renderWorld.add(x)
      setTimeout(() => this.scene.renderWorld.remove(x), 1000)
    },

    keyPress (keys) {
      if (keys['d']) this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](1000, 0))
      if (keys['a']) this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](-1000, 0))
      if (keys['s']) this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, 1000))
      if (keys['w']) this.run('jump')
    },

    update () {
      if (this.transform.position.y > window.innerHeight) {
        console.log('U lose')
      }
    },

    jump () {
      if (this.jump) {
        this.jump = false
        this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, -40000))
        setTimeout(() => { this.jump = true }, 1500)
      }
    }
  }
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lienzo__);


/* harmony default export */ __webpack_exports__["default"] = ({
  Transform: {
    position: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](500, 600),
    scale: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0.5, 0.5)
  },
  Collider: {
    size: 'fit',
    static: true
  },
  Animation: {
    src: 'assets/coin.png',
    size: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](700 / 6, 200)
  },
  Script: {
    collision (other) {
      if (other.gameObject.name === 'character') {
        other.gameObject.coins++
        this.destroy()
      }
    }
  }
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lienzo__);


/* harmony default export */ __webpack_exports__["default"] = ({
  Transform: {
    scale: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](5, 2)
  },
  Collider: {
    size: 'fit',
    static: true
  },
  Sprite: 'assets/grass.png'
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lienzo__);


/* harmony default export */ __webpack_exports__["default"] = ({
  Transform: {
    position: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](600, 250)
  },
  Collider: {
    size: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](100, 50)
  },
  Sprite: 'assets/Slime.png',
  Script: {
    update () {
      this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](80, 0))
    }
  }
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lienzo__);



/* harmony default export */ __webpack_exports__["default"] = ({
  Transform: {
    position: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, 0),
    scale: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0.5, 0.5)
  },
  Sprite: 'assets/clouds.png',
  Script: {
    update () {
      this.transform.position.x += 5
    }
  }
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  Transform: {
    position: 'fixed'
  },
  Sprite: {
    src: 'assets/bg.png'
  }
});


/***/ })
/******/ ]);
});