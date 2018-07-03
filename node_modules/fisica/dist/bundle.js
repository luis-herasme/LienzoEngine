(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DibujoJs"] = factory();
	else
		root["DibujoJs"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(1);
exports.Vector2D = Vector2D_1["default"];
var Vector3D_1 = __webpack_require__(2);
exports.Vector3D = Vector3D_1["default"];


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector3D = (function () {
    function Vector3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3D.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    };
    Vector3D.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
    };
    Vector3D.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    };
    Vector3D.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
    };
    Vector3D.prototype.inverse = function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
    };
    Vector3D.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vector3D.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    };
    Vector3D.prototype.distance = function (vector) {
        return Vector3D.sub(this, vector).mag();
    };
    Vector3D.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector3D.prototype.copy = function () {
        return new Vector3D(this.x, this.y, this.z);
    };
    Vector3D.prototype.normalize = function () {
        this.div(this.mag());
    };
    Vector3D.prototype.setMag = function (mag) {
        this.normalize();
        this.mult(mag);
    };
    Vector3D.prototype.setAngle = function (angle) {
        var magnitude = this.mag();
        this.x = magnitude * Math.cos(angle);
        this.y = magnitude * Math.sin(angle);
    };
    Vector3D.prototype.addAngle = function (angle) {
        this.setAngle(this.angle() + angle);
    };
    Vector3D.prototype.limit = function (scalar) {
        if (this.mag() > scalar) {
            this.setMag(scalar);
        }
    };
    Vector3D.prototype.moveTowards = function (vector, speed, stop) {
        if (this.distance(vector) > stop) {
            var unit = Vector3D.normalize(vector);
            unit.mult(speed);
            this.add(unit);
        }
    };
    Vector3D.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    };
    Vector3D.add = function (vector1, vector2) {
        return new Vector3D(vector1.x + vector2.x, vector1.y + vector2.y, vector1.z + vector2.z);
    };
    Vector3D.sub = function (vector1, vector2) {
        return new Vector3D(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
    };
    Vector3D.mult = function (vector, scalar) {
        return new Vector3D(vector.x * scalar, vector.y * scalar, vector.z * scalar);
    };
    Vector3D.div = function (vector, scalar) {
        return new Vector3D(vector.x / scalar, vector.y / scalar, vector.z / scalar);
    };
    Vector3D.inverse = function (vector) {
        return new Vector3D(vector.x * -1, vector.y * -1, vector.z * -1);
    };
    Vector3D.distance = function (vector1, vector2) {
        return this.sub(vector1, vector2).mag();
    };
    Vector3D.normalize = function (vector) {
        return this.div(vector, vector.mag());
    };
    Vector3D.cross = function (vector1, vector2) {
        return vector1.x * vector2.y - vector2.x * vector1.y;
    };
    Vector3D.random = function (x, y, z) {
        if (Math.random() > 0.5) {
            return new Vector3D(x * Math.random(), y * Math.random(), z * Math.random());
        }
        else {
            return new Vector3D(-x * Math.random(), -y * Math.random(), -z * Math.random());
        }
    };
    return Vector3D;
}());
exports.__esModule = true;
exports["default"] = Vector3D;


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var vector_class_1 = __webpack_require__(0);
var Circle_1 = __webpack_require__(5);
var CircleCollider = (function (_super) {
    __extends(CircleCollider, _super);
    function CircleCollider() {
        return _super.apply(this, arguments) || this;
    }
    CircleCollider.prototype.separate = function (distance, other) {
        var direction = vector_class_1.Vector2D.normalize(distance);
        direction.mult(this.radius + other.radius);
        direction.sub(distance);
        this.position.add(direction);
    };
    CircleCollider.prototype.checkCollision = function (other) {
        var distance = vector_class_1.Vector2D.sub(this.position, other.position);
        if (distance.mag() < this.radius + other.radius && distance.mag()) {
            return distance;
        }
    };
    CircleCollider.prototype.collision = function (other) {
        var distance = this.checkCollision(other);
        if (distance) {
            this.separate(distance, other);
            return true;
        }
        return false;
    };
    return CircleCollider;
}(Circle_1["default"]));
exports.__esModule = true;
exports["default"] = CircleCollider;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var CircleSystem = __webpack_require__(3);
exports.CircleSystem = CircleSystem;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var World_1 = __webpack_require__(4);
exports.World = World_1["default"];
var Collider_1 = __webpack_require__(1);
exports.Collider = Collider_1["default"];
var Dynamic_1 = __webpack_require__(6);
exports.Dynamic = Dynamic_1["default"];


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var World = (function () {
    function World() {
        this.maxPositionX = window.innerWidth;
        this.minPositionX = 0;
        this.maxPositionY = window.innerHeight;
        this.minPositionY = 0;
        this.dynamicParticles = [];
        this.particles = [];
    }
    World.prototype.setBounds = function (maxX, minX, maxY, minY) {
        this.maxPositionX = maxX;
        this.minPositionX = minX;
        this.maxPositionY = maxY;
        this.minPositionY = minY;
    };
    World.prototype.add = function (particle) {
        this.particles.push(particle);
        if (particle.dynamic) {
            this.dynamicParticles.push(particle);
        }
    };
    World.prototype.remove = function (particle) {
        // this.particles = _.filter(this.particles, particle => toRemove.id !== particle.id)
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
    World.prototype.update = function () {
        var _this = this;
        this.dynamicParticles.forEach(function (particle) {
            particle.update();
            _this.particles.forEach(function (other) { return particle.check(other); });
        });
        /*this.particles.forEach(particle => {
          if (particle.dynamic) {
            this.insideWorldBounds(particle)
            particle.update()
          }
          // this.particles.forEach(particle2 => particle.check(particle2))
        })*/
    };
    return World;
}());
exports.__esModule = true;
exports["default"] = World;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vector_class_1 = __webpack_require__(0);
var Circle = (function () {
    function Circle(position, radius) {
        this.position = new vector_class_1.Vector2D(0, 0);
        this.radius = 5;
        this.position = position;
        this.radius = radius;
    }
    return Circle;
}());
exports.__esModule = true;
exports["default"] = Circle;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var vector_class_1 = __webpack_require__(0);
var Collider_1 = __webpack_require__(1);
var Dynamic = (function (_super) {
    __extends(Dynamic, _super);
    function Dynamic(position, restitution, radius) {
        var _this = _super.call(this, position, radius) || this;
        _this.velocity = new vector_class_1.Vector2D(0, 0);
        _this.acceleration = new vector_class_1.Vector2D(0, 0);
        _this.restitution = 1;
        _this.dynamic = true;
        _this.mass = Math.PI * Math.pow(_this.radius, 2);
        _this.restitution = restitution;
        return _this;
    }
    Dynamic.prototype.addForce = function (force) {
        this.acceleration.add(force);
    };
    Dynamic.prototype.momentum = function () {
        return vector_class_1.Vector2D.mult(this.velocity, this.mass);
    };
    Dynamic.prototype.inelasticCollision = function (other) {
        var velocity1 = this.velocity;
        var velocity2 = other.velocity;
        var totalMomentum = other.momentum();
        totalMomentum.add(this.momentum());
        var totalMass = this.mass + other.mass;
        // This velocity
        this.velocity = vector_class_1.Vector2D.sub(velocity2, velocity1);
        this.velocity.mult(this.restitution * other.mass);
        this.velocity.add(totalMomentum);
        this.velocity.div(totalMass);
        // Other velocity
        other.velocity = vector_class_1.Vector2D.sub(velocity1, velocity2);
        other.velocity.mult(other.restitution * this.mass);
        other.velocity.add(totalMomentum);
        other.velocity.div(totalMass);
    };
    Dynamic.prototype.update = function () {
        this.acceleration.div(this.mass);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.zero();
    };
    Dynamic.prototype.check = function (other) {
        if (_super.prototype.collision.call(this, other)) {
            if (other.dynamic)
                this.inelasticCollision(other);
            else
                this.velocity.inverse;
        }
    };
    return Dynamic;
}(Collider_1["default"]));
exports.__esModule = true;
exports["default"] = Dynamic;


/***/ })
/******/ ]);
});