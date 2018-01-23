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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
var Scene_1 = __webpack_require__(8);
exports.Scene = Scene_1["default"];
var Manager_1 = __webpack_require__(44);
exports.Manager = Manager_1["default"];
var Vector2D_1 = __webpack_require__(0);
var Color_1 = __webpack_require__(16);
exports.Color = Color_1["default"];
var Graphic_1 = __webpack_require__(5);
exports.Graphic = Graphic_1["default"];
var number = __webpack_require__(46);
exports.number = number;
var Vector = Vector2D_1["default"];
exports.Vector = Vector;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Lienzo-Engine\\src\\manager\\GameObject.ts'");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Lienzo-Engine\\src\\manager\\Scene.ts'");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lienzo_1 = __webpack_require__(1);
// Prefabs
var character_1 = __webpack_require__(47);
var coins_1 = __webpack_require__(48);
var grass_1 = __webpack_require__(49);
var slime_1 = __webpack_require__(50);
var clouds_1 = __webpack_require__(51);
var background_1 = __webpack_require__(52);
var scene = new lienzo_1.Scene({
    system: 'Rect',
    background: '#9FE6FF',
    gravity: new lienzo_1.Vector(0, 500),
    gameObjects: [character_1["default"], coins_1["default"], grass_1["default"], slime_1["default"], clouds_1["default"], background_1["default"]]
});
var manager = new lienzo_1.Manager();
manager.setScene(scene);
manager.start();


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Lienzo-Engine\\src\\manager\\Manager.ts'");

/***/ }),
/* 45 */,
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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