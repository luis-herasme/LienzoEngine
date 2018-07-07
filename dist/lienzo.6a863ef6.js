// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({26:[function(require,module,exports) {
var define;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dibujo"] = factory();
	else
		root["dibujo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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

"use strict";

exports.__esModule = true;
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    };
    Vector.prototype.mult = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Vector.prototype.div = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
    };
    Vector.prototype.inverse = function () {
        this.x *= -1;
        this.y *= -1;
    };
    Vector.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y;
    };
    Vector.prototype.distance = function (vector) {
        return Vector.sub(this, vector).mag();
    };
    Vector.prototype.angle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector.prototype.copy = function () {
        return new Vector(this.x, this.y);
    };
    Vector.prototype.normalize = function () {
        this.div(this.mag());
    };
    Vector.prototype.setMag = function (mag) {
        this.normalize();
        this.mult(mag);
    };
    Vector.prototype.setAngle = function (angle) {
        var magnitude = this.mag();
        this.x = magnitude * Math.cos(angle);
        this.y = magnitude * Math.sin(angle);
    };
    Vector.prototype.addAngle = function (angle) {
        this.setAngle(this.angle() + angle);
    };
    Vector.prototype.limit = function (scalar) {
        if (this.mag() > scalar) {
            this.setMag(scalar);
        }
    };
    Vector.prototype.moveTowards = function (vector, speed, stop) {
        if (speed === void 0) { speed = 1; }
        if (stop === void 0) { stop = 1; }
        if (this.distance(vector) > stop) {
            var unit = Vector.normalize(Vector.sub(vector, this));
            unit.mult(speed);
            this.add(unit);
        }
    };
    Vector.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
    };
    Vector.add = function (vector1, vector2) {
        return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    };
    Vector.sub = function (vector1, vector2) {
        return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    };
    Vector.mult = function (vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    };
    Vector.div = function (vector, scalar) {
        return new Vector(vector.x / scalar, vector.y / scalar);
    };
    Vector.inverse = function (vector) {
        return new Vector(vector.x * -1, vector.y * -1);
    };
    Vector.distance = function (vector1, vector2) {
        return this.sub(vector1, vector2).mag();
    };
    Vector.normalize = function (vector) {
        return this.div(vector, vector.mag());
    };
    Vector.cross = function (vector1, vector2) {
        return vector1.x * vector2.y - vector2.x * vector1.y;
    };
    Vector.randomP = function (x, y) {
        return new Vector(x * Math.random(), y * Math.random());
    };
    Vector.random = function (x, y) {
        var s1 = 1;
        var s2 = 1;
        if (Math.random() > 0.5)
            s1 = -1;
        if (Math.random() > 0.5)
            s2 = -1;
        return new Vector(x * Math.random() * s1, y * Math.random() * s2);
    };
    return Vector;
}());
exports["default"] = Vector;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Properties_1 = __webpack_require__(10);
var Graphic = /** @class */ (function () {
    function Graphic(data) {
        this.weight = Properties_1.weights.normal;
        this.fill = true;
        this.stroke = false;
        this.anchor = new Vector_1["default"](0.5, 0.5);
        this.position = new Vector_1["default"](0, 0);
        this.color = 'grey';
        this.family = 'Arial';
        this.lineCap = Properties_1.LineCap.round;
        this.lineJoin = Properties_1.LineJoin.round;
        this.lineColor = 'rgb(0, 0, 0)';
        this.textAlign = 'center';
        this.shadowColor = 'rgba(0, 0, 0, 0)';
        this.textBaseline = 'middle';
        this.size = 12;
        this.rotation = 0;
        this.z_index = 1;
        this.lineWidth = 1;
        this.miterLimit = 10;
        this.shadowBlur = 0;
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.childs = [];
        if (data) {
            if (data.stroke !== undefined) {
                if (typeof data.stroke === 'boolean') {
                    this.stroke = data.stroke;
                }
                else {
                    console.error("Type of stroke is not boolean");
                }
            }
            else {
                this.stroke = false;
            }
            if (data.fill !== undefined) {
                if (typeof data.fill === 'boolean') {
                    this.fill = data.fill;
                }
                else {
                    console.error("Type of fill is not boolean");
                }
            }
            else {
                this.fill = true;
            }
            this.weight = data.weights ? data.weights : Properties_1.weights.normal;
            this.anchor = data.anchor ? data.anchor : new Vector_1["default"](0.5, 0.5);
            this.position = data.position ? data.position : new Vector_1["default"](0, 0);
            this.z_index = data.z_index ? data.z_index : 1;
            this.shadowBlur = data.shadowBlur ? data.shadowBlur : 0;
            this.shadowOffsetX = data.shadowOffsetX ? data.shadowOffsetX : 0;
            this.shadowOffsetY = data.shadowOffsetY ? data.shadowOffsetY : 0;
            this.shadowColor = data.shadowColor ? data.shadowColor : 'rgba(0,0,0,0)';
            this.miterLimit = data.miterLimit ? data.miterLimit : 10;
            this.lineCap = data.lineCap ? data.lineCap : Properties_1.LineCap.round;
            this.color = data.color ? data.color : 'grey';
            this.family = data.family ? data.family : 'Arial';
            this.lineJoin = data.lineJoin ? data.lineJoin : Properties_1.LineJoin.round;
            this.lineColor = data.lineColor ? data.lineColor : 'rgb(0, 0, 0)';
            this.textAlign = data.textAlign ? data.textAlign : 'center';
            this.textBaseline = data.textBaseline ? data.textBaseline : 'middle';
            this.size = data.size ? data.size : 12;
            this.rotation = data.rotation ? data.rotation : 0;
            this.lineWidth = data.lineWidth ? data.lineWidth : 1;
        }
    }
    Graphic.prototype.add = function (child) {
        child.context = this.context;
        this.childs.push(child);
    };
    Graphic.prototype.remove = function (child) {
        this.childs.push(child);
    };
    Graphic.prototype.font = function () {
        return this.weight + " " + this.size + "px " + this.family;
    };
    Graphic.prototype.setStyle = function () {
        this.context.font = this.font();
        this.context.fillStyle = this.color;
        this.context.lineCap = this.lineCap;
        this.context.lineJoin = this.lineJoin;
        this.context.lineColor = this.lineColor;
        this.context.lineWidth = this.lineWidth;
        this.context.textAlign = this.textAlign;
        this.context.shadowColor = this.shadowColor;
        this.context.textBaseline = this.textBaseline;
        this.context.miterLimit = this.miterLimit;
        this.context.shadowBlur = this.shadowBlur;
        this.context.shadowOffsetX = this.shadowOffsetX;
        this.context.shadowOffsetY = this.shadowOffsetY;
    };
    Graphic.prototype.render = function () {
        this.context.save();
        this.context.beginPath();
        if (this.context.fill || this.context.stroke) {
            this.setStyle();
            this.selfRender();
        }
        this.context.restore();
    };
    Graphic.prototype.selfRender = function () { };
    return Graphic;
}());
exports["default"] = Graphic;
/*
locate() {
  // this.context.anchor:         Vector = new Vector(0.5, 0.5)
  this.context.translate(this.position.x, this.position.y)
  this.context.rotate(this.rotation)
}

var pat=ctx.createPattern(img,"repeat");
ctx.fillStyle=pat;
// this.context.linearGradient: any
public linearGradient: any

// renderChild() { }
*/


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var defaultCss = document.createElement('style');
defaultCss.type = 'text/css';
defaultCss.innerHTML = "\n* {\n  margin:0%;\n  padding: 0%;\n}\ncanvas {\n  display: block;\n}\n";
document.head.appendChild(defaultCss);
var Scene_1 = __webpack_require__(3);
exports.Scene = Scene_1["default"];
var Render_1 = __webpack_require__(11);
exports.Render = Render_1["default"];
var LinearGradient_1 = __webpack_require__(6);
exports.LinearGradient = LinearGradient_1["default"];
var Group_1 = __webpack_require__(12);
exports.Group = Group_1["default"];
var Vector_1 = __webpack_require__(0);
exports.Vector = Vector_1["default"];
var Color_1 = __webpack_require__(13);
exports.Color = Color_1["default"];
// Graphics
var Animation_1 = __webpack_require__(14);
exports.Animation = Animation_1["default"];
var Graphic_1 = __webpack_require__(1);
exports.Graphic = Graphic_1["default"];
var Ellipse_1 = __webpack_require__(15);
exports.Ellipse = Ellipse_1["default"];
var Poligon_1 = __webpack_require__(16);
exports.Poligon = Poligon_1["default"];
var Picture_1 = __webpack_require__(4);
exports.Picture = Picture_1["default"];
var Circle_1 = __webpack_require__(17);
exports.Circle = Circle_1["default"];
var Video_1 = __webpack_require__(5);
exports.Video = Video_1["default"];
var Rect_1 = __webpack_require__(18);
exports.Rect = Rect_1["default"];
var Line_1 = __webpack_require__(19);
exports.Line = Line_1["default"];
var Text_1 = __webpack_require__(20);
exports.Text = Text_1["default"];
var Arc_1 = __webpack_require__(21);
exports.Arc = Arc_1["default"];
var BezierCurve_1 = __webpack_require__(22);
exports.BezierCurve = BezierCurve_1["default"];
var QuadraticCurve_1 = __webpack_require__(23);
exports.QuadraticCurve = QuadraticCurve_1["default"];
// Events
var Mouse_1 = __webpack_require__(24);
var KeyBoard_1 = __webpack_require__(25);
var mouse = new Mouse_1["default"]();
exports.mouse = mouse;
var keyboard = new KeyBoard_1["default"]();
exports.keyboard = keyboard;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Camera_1 = __webpack_require__(9);
var Picture_1 = __webpack_require__(4);
var Video_1 = __webpack_require__(5);
/**
 * This is the detail about the constructor
 * @class This is the detail about the class
 * @memberOf namespace
 * @param {Render} renderer The first argument
 */
var Scene = /** @class */ (function () {
    function Scene(renderer) {
        this.backgroundColor = 'black';
        this.childs = [];
        this.frameRate = 0;
        this.ready = false;
        this.renderer = renderer;
        this.context = this.renderer.context;
        this.camera = new Camera_1["default"](this.context);
    }
    Scene.prototype.dataLoaded = function () {
        // Gets all the pictures and videos from the scene.
        var elements = this.childs.filter(function (child) {
            if (child instanceof Picture_1["default"])
                return true;
            if (child instanceof Video_1["default"])
                return true;
            return false;
        });
        // If there is an image that is not loaded returns false
        return !elements.some(function (element) { return !element.ready; });
    };
    /**
     * This method adds one element to the scene
     * @param {Graphic} element any graphic object
     * @returns {void}
     */
    Scene.prototype.add = function (element) {
        element.context = this.context;
        this.childs.push(element);
        this.organizeByZindex();
    };
    /**
     * Removes an element from the scene
     * @param {Graphic} element any graphic object
     * @returns {void}
     */
    Scene.prototype.remove = function (element) {
        var index = this.childs.indexOf(element);
        if (index >= 0) {
            this.childs.splice(index, 1);
        }
    };
    /**
     * This method clears the screen
     */
    Scene.prototype.clearScreen = function () {
        this.context.save();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.fillStyle = this.backgroundColor;
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.restore();
    };
    /**
     * This method enables or disables the image smoothing
     * @param {boolean} state enable or disable
     */
    Scene.prototype.smoth = function (state) {
        if (this.context.imageSmoothingEnabled) {
            this.context.imageSmoothingEnabled = state;
        }
        else if (this.context.mozImageSmoothingEnabled) {
            this.context.mozImageSmoothingEnabled = state;
        }
        else if (this.context.webkitImageSmoothingEnabled) {
            this.context.webkitImageSmoothingEnabled = state;
        }
    };
    /**
     * This method organizes the childs of the scene by their property z_indez
     */
    Scene.prototype.organizeByZindex = function () {
        this.childs.sort(function (a, b) { return a.z_index - b.z_index; });
    };
    /**
     * This method renders the screne ultil you call stopAutoRender
     */
    Scene.prototype.autoRender = function (func) {
        var _this = this;
        this.interval = setInterval(function () {
            if (func)
                func();
            _this.render();
        }, this.frameRate);
    };
    /**
     * This method stops autoRender
     */
    Scene.prototype.stopAutoRender = function () {
        clearInterval(this.interval);
    };
    /**
     * This method renders the screne
     */
    Scene.prototype.render = function () {
        if (!this.dataLoaded()) {
            console.info('Waiting for images to load...');
            setTimeout(this.render.bind(this), 100);
        }
        else {
            this.clearScreen();
            this.childs.forEach(function (child) { return child.render(); });
            this.camera.update();
        }
    };
    return Scene;
}());
exports["default"] = Scene;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
// Imaginary canvas
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(data) {
        var _this = _super.call(this, data) || this;
        _this.type = "img";
        _this.ready = false;
        _this.todo = [];
        _this.params = [];
        _this.image = new Image();
        _this.image.src = data.src;
        _this.image.addEventListener('load', function () {
            _this.ready = true;
            _this.todo.forEach(function (met, i) {
                met.apply(void 0, _this.params[i]);
            });
        });
        _this.image.addEventListener('error', function () {
            console.error('Error loading the image...');
        });
        _this.angle = data.angle ? data.angle : 0;
        _this.opacity = data.opacity ? data.opacity : 1;
        _this.width = data.width ? data.width : _this.image.width;
        _this.height = data.height ? data.height : _this.image.height;
        return _this;
    }
    Picture.prototype.filter = function () {
    };
    Picture.prototype.getImageData = function () {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(this.image, 0, 0, this.width, this.height);
        return context.getImageData(0, 0, this.width, this.height);
    };
    Picture.prototype.removeColor = function (color) {
        if (this.ready) {
            var image = void 0;
            if (!this.data) {
                image = this.getImageData();
            }
            else {
                image = this.data;
            }
            for (var pixel = 0; pixel < image.data.length; pixel += 4) {
                if (image.data[pixel] === color[0] && image.data[pixel + 1] === color[1] && image.data[pixel + 2] === color[2]) {
                    image.data[pixel + 3] = 0;
                }
            }
            this.data = image;
            this.render = this.renderData;
        }
        else {
            this.todo.push(this.removeColor.bind(this));
            this.params.push([color]);
        }
    };
    Picture.prototype.onClick = function (func) {
    };
    Picture.prototype.realPosition = function () {
        return new Vector_1["default"](this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height));
    };
    Picture.prototype.renderData = function () {
        //  console.log('here')
        //console.log(this.data)
        this.context.beginPath();
        this.context.save();
        // this.context.translate(this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))
        //this.context.rotate(this.angle)
        // this.context.globalAlpha = this.opacity
        // console.log(this.data)
        this.context.putImageData(this.data, this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height)); // -(this.anchor.x *  this.width), -(this.anchor.y *  this.height), this.position.x, this.position.y, this.width, this.height)
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    Picture.prototype.render = function () {
        this.context.beginPath();
        this.context.save();
        this.context.translate(this.position.x, this.position.y);
        this.context.rotate(this.angle);
        this.context.globalAlpha = this.opacity;
        this.context.drawImage(this.image, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height);
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    return Picture;
}(Graphic_1["default"]));
exports["default"] = Picture;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(data) {
        var _this = _super.call(this, data) || this;
        _this.type = "img";
        _this.ready = false;
        _this.todo = [];
        _this.params = [];
        _this.filterEnable = false;
        _this.filterColors = [];
        _this.video = document.createElement('video');
        _this.video.src = data.src;
        _this.video.play();
        _this.video.crossOrigin = "Anonymous";
        _this.video.addEventListener('loadedmetadata', function () {
            _this.ready = true;
            console.info("Video " + data.src + " correctly loaded.");
            console.log(_this.todo);
            console.log(_this.params);
            _this.todo.forEach(function (met, i) {
                met.apply(void 0, _this.params[i]);
            });
        });
        _this.video.addEventListener('error', function () {
            console.error('Error loading the video...');
        });
        _this.angle = data.angle ? data.angle : 0;
        _this.opacity = data.opacity ? data.opacity : 1;
        _this.width = data.width ? data.width : _this.video.width;
        _this.height = data.height ? data.height : _this.video.height;
        return _this;
    }
    Video.prototype.filter = function () {
    };
    Video.prototype.getImageData = function () {
        var canvas = document.createElement('canvas');
        // console.log(canvas)
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;
        context.translate((this.anchor.x * this.width), (this.anchor.y * this.height));
        context.rotate(this.angle);
        context.drawImage(this.video, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height);
        document.body.removeChild(canvas);
        // return context.getImageData( -this.width / 2 , - this.height/2, this.width + this.width/2, this.height + this.height/2)
        return context.getImageData(0, 0, this.width, this.height);
    };
    /*
      removeColor(color: Array<number>) {
        if (this.ready) {
          let image
          if (!this.data) {
            image = this.getImageData()
          } else {
            image = this.data
          }
    
          for (let pixel = 0; pixel < image.data.length; pixel += 4) {
            if (image.data[pixel] === color[0] && image.data[pixel + 1] === color[1] && image.data[pixel + 2] === color[2]) {
              image.data[pixel + 3] = 0
            }
          }
    
          this.data = image
          this.render = this.renderData
        } else {
          this.todo.push(this.removeColor.bind(this))
          this.params.push([color])
        }
      }
    */
    Video.prototype.onClick = function (func) {
    };
    Video.prototype.realPosition = function () {
        return new Vector_1["default"](this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height));
    };
    Video.prototype.renderData = function () {
        if (this.filterEnable) {
            this.filterColor(this.filterColors[0], this.filterColors[1], this.filterColors[2]);
        }
        //  console.log('here')
        //console.log(this.data)
        this.context.beginPath();
        this.context.save();
        // this.context.translate(this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))
        // this.context.rotate(this.angle)
        // this.context.globalAlpha = this.opacity
        // console.log(this.data)
        this.context.putImageData(this.data, this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height)); // -(this.anchor.x *  this.width), -(this.anchor.y *  this.height), this.position.x, this.position.y, this.width, this.height)
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    Video.prototype.filterColor = function (r, g, b) {
        if (this.ready) {
            this.filterEnable = true;
            this.filterColors = [r, g, b];
            var image = this.getImageData();
            for (var pixel = 0; pixel < image.data.length; pixel += 4) {
                image.data[pixel] += r;
                image.data[pixel + 1] += g;
                image.data[pixel + 2] += b;
                // image.data[pixel + 3]
            }
            this.data = image;
            this.render = this.renderData;
        }
        else {
            this.todo.push(this.filterColor.bind(this));
            this.params.push([r, g, b]);
        }
    };
    Video.prototype.render = function () {
        this.context.beginPath();
        this.context.save();
        this.context.translate(this.position.x, this.position.y);
        this.context.rotate(this.angle);
        this.context.globalAlpha = this.opacity;
        this.context.drawImage(this.video, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height);
        // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        this.context.restore();
    };
    return Video;
}(Graphic_1["default"]));
exports["default"] = Video;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var LinearGradient = /** @class */ (function (_super) {
    __extends(LinearGradient, _super);
    function LinearGradient(config) {
        var _this = _super.call(this, config) || this;
        _this.context = config.context;
        _this.size = config.size ? config.size : new Vector_1["default"](100, 100);
        _this.gradient = _this.context.createLinearGradient(_this.position.x, _this.position.y, _this.size.x, _this.size.y);
        var counter = 0;
        for (var _i = 0, _a = config.colors; _i < _a.length; _i++) {
            var color = _a[_i];
            _this.gradient.addColorStop(counter, color);
            // console.log(1 / config.colors.length)
            counter += 1 / config.colors.length;
        }
        return _this;
    }
    return LinearGradient;
}(Graphic_1["default"]));
exports["default"] = LinearGradient;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var CircleEvents = /** @class */ (function (_super) {
    __extends(CircleEvents, _super);
    function CircleEvents(configuration) {
        var _this = _super.call(this, configuration) || this;
        // Private
        _this.mouseDownEnabled = false;
        _this.dragStartEnabled = false;
        _this.dragEndEnabled = false;
        _this.dragingEnabled = false;
        _this.mouseUpEnabled = false;
        _this.hoverEnabled = false;
        _this.moveEnabled = false;
        _this.moveMethods = [];
        _this.mouseDownMethods = [];
        _this.mouseUpMethods = [];
        _this.hoverMethods = [];
        _this.dragStartMethods = [];
        _this.dragEndMethods = [];
        _this.dragingMethods = [];
        if (configuration) {
            if (configuration.radius)
                _this.radius = configuration.radius;
        }
        return _this;
    }
    CircleEvents.prototype.checkIfInside = function (point) {
        return this.position.distance(point) < this.radius;
    };
    CircleEvents.prototype.enableEvent = function (eventName, methods) {
        var _this = this;
        var mouse;
        document.addEventListener(eventName, function (event) {
            mouse = new Vector_1["default"](event.clientX, event.clientY);
            if (_this.checkIfInside(mouse)) {
                methods.forEach(function (method) { return method(mouse); });
            }
        });
    };
    CircleEvents.prototype.mouseDown = function (func) {
        if (!this.mouseDownEnabled) {
            this.mouseDownEnabled = !this.mouseDownEnabled;
            this.enableEvent('mousedown', this.mouseDownMethods);
        }
        this.mouseDownMethods.push(func.bind(this));
    };
    CircleEvents.prototype.mouseUp = function (func) {
        if (!this.mouseUpEnabled) {
            this.mouseUpEnabled = !this.mouseUpEnabled;
            this.enableEvent('mouseup', this.mouseUpMethods);
        }
        this.mouseUpMethods.push(func.bind(this));
    };
    CircleEvents.prototype.hover = function (func) {
        if (!this.hoverEnabled) {
            this.hoverEnabled = !this.hoverEnabled;
            this.enableEvent('mousemove', this.hoverMethods);
        }
        this.hoverMethods.push(func.bind(this));
    };
    CircleEvents.prototype.mouseMove = function (func) {
        var _this = this;
        if (!this.moveEnabled) {
            this.moveEnabled = !this.moveEnabled;
            var mouse_1;
            document.addEventListener('mousemove', function (event) {
                mouse_1 = new Vector_1["default"](event.clientX, event.clientY);
                _this.moveMethods.forEach(function (method) { return method(mouse_1); });
            });
        }
        func = func.bind(this);
        this.moveMethods.push(func);
    };
    CircleEvents.prototype.dragStart = function (func) {
        this.dragStartMethods.push(func.bind(this));
    };
    CircleEvents.prototype.draging = function (func) {
        this.dragingMethods.push(func.bind(this));
    };
    CircleEvents.prototype.dragEnd = function (func) {
        this.dragEndMethods.push(func.bind(this));
    };
    CircleEvents.prototype.enableMouseDrag = function () {
        var _this = this;
        var isDraging = false;
        var distance = new Vector_1["default"]();
        document.addEventListener('mousemove', function (event) {
            if (isDraging) {
                _this.position = Vector_1["default"].add(distance, new Vector_1["default"](event.clientX, event.clientY));
                _this.dragingMethods.forEach(function (meth) { return meth(); });
            }
        });
        this.mouseDown(function (mouse) {
            if (!isDraging) {
                document.body.style.cursor = 'pointer';
                isDraging = true;
                distance = Vector_1["default"].sub(_this.position, mouse);
                _this.position = Vector_1["default"].add(distance, mouse);
                _this.dragStartMethods.forEach(function (meth) { return meth(); });
            }
        });
        this.mouseUp(function () {
            if (isDraging) {
                document.body.style.cursor = 'default';
                isDraging = false;
                _this.dragEndMethods.forEach(function (meth) { return meth(); });
            }
        });
    };
    return CircleEvents;
}(Graphic_1["default"]));
exports["default"] = CircleEvents;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Event = /** @class */ (function () {
    function Event() {
        this.events = {
            // Mouse
            mousemove: [],
            mouseup: [],
            mousedown: [],
            mousemoveActive: false,
            mousedownActive: false,
            mouseupActive: false,
            // KeyBoard
            keypress: [],
            keyup: [],
            keydown: [],
            keypressActive: false,
            keydownActive: false,
            keyupActive: false
        };
    }
    Event.prototype.initEvent = function (name) {
        var _this = this;
        document.addEventListener(name, function (event) {
            _this.events[name].forEach(function (func) { return func(_this, event); });
        });
    };
    return Event;
}());
exports["default"] = Event;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var index_1 = __webpack_require__(2);
var Camera = /** @class */ (function () {
    function Camera(context) {
        this.keyMap = { up: 'w', down: 's', left: 'a', right: 'd' };
        this.position = new Vector_1["default"](0, 0);
        this.fLastPosition = new Vector_1["default"](0, 0);
        this.followingX = false;
        this.followingY = false;
        this.keyTranslateEnabled = false;
        this.velocity = new Vector_1["default"](0, 0);
        this.acceleration = new Vector_1["default"](0, 0);
        this.friction = 0.9;
        this.context = context;
    }
    Camera.prototype.addForce = function (force) {
        this.acceleration.add(force);
    };
    /*
      enable() {
        document.addEventListener('mousemove', (e) => {
          this.mouse.position.x = e.clientX
          this.mouse.position.y = e.clientY
        })
      }
    */
    Camera.prototype.getMouse = function () {
        return Vector_1["default"].add(index_1.mouse.position, this.position);
    };
    Camera.prototype.disableKeyTranslate = function () {
    };
    Camera.prototype.enableKeyTranslate = function () {
        var _this = this;
        this.keyTranslateEnabled = true;
        document.addEventListener('keypress', function (e) {
            if (e.key.toLowerCase() === _this.keyMap.up) {
                _this.addForce(new Vector_1["default"](0, 10));
            }
            if (e.key.toLowerCase() === _this.keyMap.down) {
                _this.addForce(new Vector_1["default"](0, -10));
            }
            if (e.key.toLowerCase() === _this.keyMap.left) {
                _this.addForce(new Vector_1["default"](10, 0));
            }
            if (e.key.toLowerCase() === _this.keyMap.right) {
                _this.addForce(new Vector_1["default"](-10, 0));
            }
        });
    };
    Camera.prototype.follow = function (graphic) {
        this.followedPosition = graphic.position;
        this.fLastPosition = this.followedPosition.copy();
        this.followingX = true;
        this.followingY = true;
    };
    Camera.prototype.followX = function (graphic) {
        this.followedPosition = graphic.position;
        this.followingX = true;
    };
    Camera.prototype.followY = function (graphic) {
        this.followedPosition = graphic.position;
        this.followingY = true;
    };
    Camera.prototype.stopFollowing = function () {
        this.followingX = false;
        this.followingY = false;
    };
    Camera.prototype.stopFollowingX = function () {
        this.followingX = false;
    };
    Camera.prototype.stopFollowingY = function () {
        this.followingY = false;
    };
    Camera.prototype.zoom = function (where, howMuch) {
        this.context.translate(where.x, where.y);
        this.context.scale(howMuch.x, howMuch.y);
        this.context.translate(-where.x, -where.y);
    };
    Camera.prototype.translate = function (x, y) {
        this.position.x -= x;
        this.position.y -= y;
        this.context.translate(x, y);
    };
    Camera.prototype.update = function () {
        if (this.keyTranslateEnabled) {
            this.velocity.add(this.acceleration);
            this.velocity.mult(this.friction);
            this.translate(this.velocity.x, this.velocity.y);
            this.position.add(this.velocity);
            this.acceleration.zero();
        }
        if (this.followingX || this.followingY) {
            var change = Vector_1["default"].sub(this.fLastPosition, this.followedPosition);
            this.fLastPosition = this.followedPosition.copy();
            this.translate(change.x, change.y);
        }
    };
    return Camera;
}());
exports["default"] = Camera;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var LineCap;
(function (LineCap) {
    LineCap["butt"] = "butt";
    LineCap["square"] = "square";
    LineCap["round"] = "round";
})(LineCap = exports.LineCap || (exports.LineCap = {}));
var LineJoin;
(function (LineJoin) {
    LineJoin["bevel"] = "bevel";
    LineJoin["round"] = "round";
    LineJoin["miter"] = "miter";
})(LineJoin = exports.LineJoin || (exports.LineJoin = {}));
var Pattern;
(function (Pattern) {
    Pattern["repeat"] = "repeat";
    Pattern["repeat_x"] = "repeat-x";
    Pattern["repeat_y"] = "repeat-y";
    Pattern["no_repeat"] = "no-repeat";
})(Pattern = exports.Pattern || (exports.Pattern = {}));
var weights;
(function (weights) {
    weights["lighter"] = "lighter";
    weights["normal"] = "normal";
    weights["bolder"] = "bolder";
    weights["bold"] = "bold";
})(weights = exports.weights || (exports.weights = {}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Scene_1 = __webpack_require__(3);
var Render = /** @class */ (function () {
    function Render(canvas, width, height) {
        var _this = this;
        if (canvas)
            this.canvas = canvas;
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
        var scene = new Scene_1["default"](this);
        this.setScene(scene);
    }
    Render.prototype.add = function (element) {
        this.scene.add(element);
    };
    Render.prototype.remove = function (element) {
        this.scene.remove(element);
    };
    Render.prototype.addMultiple = function (e) {
        var _this = this;
        e.forEach(function (m) { return _this.add(m); });
    };
    Render.prototype.autoUpdateRender = function (func) {
        this.scene.autoRender(func);
    };
    Render.prototype.getWidth = function () {
        return this.canvas.width;
    };
    Render.prototype.getHeight = function () {
        return this.canvas.height;
    };
    Render.prototype.getSize = function () {
        return new Vector_1["default"](this.canvas.width, this.canvas.height);
    };
    Render.prototype.getCenter = function () {
        return new Vector_1["default"](this.canvas.width / 2, this.canvas.height / 2);
    };
    Render.prototype.getCanvasImage = function () {
        return this.canvas.toDataURL();
    };
    /*
      filter () {
        let image = new Image()
        image.src = this.getCanvasImage()
    
      }
    */
    Render.prototype.fullScreen = function () {
        var _this = this;
        var isFull = false;
        document.addEventListener('click', function () {
            if (!isFull) {
                _this.canvas.webkitRequestFullScreen();
            }
        });
    };
    Render.prototype.render = function () {
        this.scene.render();
    };
    Render.prototype.setScene = function (scene) {
        this.scene = scene;
        this.scene.renderer = this;
        this.scene.context = this.context;
        this.scene.smoth(false);
    };
    return Render;
}());
exports["default"] = Render;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Group = /** @class */ (function () {
    function Group() {
        this.childs = [];
        this.position = new Vector_1["default"](0, 0); // la posicion tu la tenias publica, asi que no tiene sentido ese metodo de translate que querias hacer
        this.scale = new Vector_1["default"](1, 1);
    }
    Group.prototype.add = function (child) {
        this.childs.push(child);
    };
    Group.prototype.scaleObject = function (child) {
        var _this = this;
        if (child.type == "arc") {
            child.radius *= this.scale.x;
            child.render();
            child.radius /= this.scale.x;
        }
        else if (child.type == "line") {
            child.end = new Vector_1["default"](child.end.x * this.scale.x, child.end.y * this.scale.y);
            child.render();
            child.end = new Vector_1["default"](child.end.x / this.scale.x, child.end.y / this.scale.y);
        }
        else if (child.type == "img" || child.type == "rect") {
            child.width *= this.scale.x;
            child.height *= this.scale.y;
            child.render();
            child.width /= this.scale.x;
            child.height /= this.scale.y;
        }
        else if (child.type == "poligon") {
            child.cords.filter(function (pnt) {
                return new Vector_1["default"](pnt.x * _this.scale.x, pnt.y * _this.scale.y);
            });
            child.render();
            child.cords.filter(function (pnt) {
                return new Vector_1["default"](pnt.x / _this.scale.x, pnt.y / _this.scale.y);
            });
        }
        else if (child.type == "circle") {
            child.radius *= this.scale.x;
            child.render();
            child.radius /= this.scale.x;
        }
        else {
            throw "error, no se puede escalar dicho objeto";
        }
        return child;
    };
    Group.prototype.render = function () {
        var _this = this;
        // this.context.save()
        this.childs.forEach(function (child) {
            child.position.add(_this.position);
            child.context = _this.context;
            child.render();
            child.position.sub(_this.position);
        });
        // this.context.restore()
    };
    return Group;
}());
exports["default"] = Group;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Color = /** @class */ (function () {
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
exports["default"] = Color;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Graphic_1 = __webpack_require__(1);
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.loop = true;
        _this.size = new Vector_1["default"](32, 32);
        _this.frame = new Vector_1["default"](0, 0);
        _this.animationPlaying = false;
        _this.load(configuration.src);
        _this.loop = configuration.loop ? configuration.loop : true;
        _this.size = configuration.size ? configuration.size : new Vector_1["default"](32, 32);
        _this.scale = configuration.scale ? configuration.scale : new Vector_1["default"](1, 1);
        _this.frameRate = configuration.frameRate ? configuration.frameRate : 24;
        _this.animations = configuration.animations;
        _this.x = 0;
        _this.y = 0;
        return _this;
    }
    Animation.prototype.playAnimation = function (name) {
        if (!this.animationPlaying) {
            this.animationPlaying = true;
            this.frame.x = 0;
            this.frame.y = this.animations[name][1];
            this.reproduceAnimation(name);
        }
    };
    Animation.prototype.reproduceAnimation = function (name) {
        var _this = this;
        this.x = this.size.x * this.frame.x;
        this.y = this.size.y * this.frame.y;
        this.frame.x += 1;
        if (this.frame.x >= this.animations[name][0]) {
            this.animationPlaying = false;
        }
        else {
            setTimeout(function () { return _this.reproduceAnimation(name); }, this.frameRate);
        }
    };
    Animation.prototype.mouseDown = function () {
    };
    Animation.prototype.onClick = function (func) { };
    Animation.prototype.load = function (src) {
        this.image = new Image();
        this.image.src = src;
    };
    Animation.prototype.getSize = function () {
        return new Vector_1["default"](this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.render = function () {
        this.context.drawImage(this.image, this.x, this.y, this.size.x, this.size.y, this.position.x, this.position.y, this.size.x * this.scale.x, this.size.y * this.scale.y);
    };
    Animation.prototype.destroy = function () {
        clearInterval(this.interval);
    };
    return Animation;
}(Graphic_1["default"]));
exports["default"] = Animation;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var LinearGradient_1 = __webpack_require__(6);
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.radiusX = 10;
        _this.radiusY = 5;
        if (configuration) {
            _this.lineWidth = configuration.lineWidth ? configuration.lineWidth : _this.lineWidth;
            _this.lineColor = configuration.lineColor ? configuration.lineColor : _this.lineColor;
            _this.radiusX = configuration.radiusX ? configuration.radiusX : _this.radiusX;
            _this.radiusY = configuration.radiusY ? configuration.radiusY : _this.radiusY;
            _this.stroke = configuration.stroke ? configuration.stroke : _this.stroke;
            _this.color = configuration.color ? configuration.color : _this.color;
            _this.fill = configuration.fill ? configuration.fill : _this.fill;
            if (configuration.linearGradient) {
                _this.linearGradient = configuration.linearGradient;
                // this.render = this.renderGradient
            }
        }
        return _this;
    }
    Ellipse.prototype.renderGradient = function () {
        this.color = new LinearGradient_1["default"]({
            context: this.context,
            colors: this.linearGradient,
            size: new Vector_1["default"](this.position.x, this.position.y + this.radiusY),
            position: new Vector_1["default"](this.position.x, this.position.y - this.radiusY / 2)
        }).gradient;
        if (this.fill) {
            this.context.beginPath();
            this.context.fillStyle = this.color;
            this.context.ellipse(this.position.x, this.position.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
            this.context.fill();
        }
        if (this.stroke) {
            this.context.lineWidth = this.lineWidth;
            this.context.strokeStyle = this.lineColor;
            this.context.stroke();
        }
    };
    Ellipse.prototype.render = function () {
        this.renderGradient();
        /*
        if (this.fill) {
          this.context.beginPath()
          this.context.fillStyle = this.color
          this.context.ellipse(this.position.x, this.position.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI)
          this.context.fill()
        }
        if (this.stroke) {
          this.context.lineWidth = this.lineWidth
          this.context.strokeStyle = this.lineColor
          this.context.stroke()
        }
        */
    };
    return Ellipse;
}(Graphic_1["default"]));
exports["default"] = Ellipse;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Poligon = /** @class */ (function (_super) {
    __extends(Poligon, _super);
    function Poligon(configuration) {
        var _this = _super.call(this, configuration) || this;
        if (configuration.color)
            _this.color = configuration.color;
        if (configuration.stroke)
            _this.stroke = configuration.stroke;
        if (configuration.cords)
            _this.cords = configuration.cords.slice(1, configuration.cords.length);
        if (configuration.fill)
            _this.fill = configuration.fill;
        _this.position = configuration.cords.slice[0];
        _this.cords.filter(function (pnt) {
            return new Vector_1["default"](pnt.x - _this.position.x, pnt.y - _this.position.y);
        });
        return _this;
    }
    Poligon.prototype.render = function () {
        this.context.beginPath();
        this.context.strokeStyle = this.lineColor;
        this.context.lineCap = this.lineCap;
        this.context.fillStyle = this.color;
        this.context.lineJoin = this.lineJoin;
        this.context.moveTo(this.cords[0].x, this.cords[0].y);
        for (var i = 0; i < this.cords.length; i++) {
            this.context.lineTo(this.cords[i].x + this.position.x, this.cords[i].y + this.position.y);
        }
        this.context.closePath();
        this.context.fill();
        if (this.stroke)
            this.context.stroke;
    };
    return Poligon;
}(Graphic_1["default"]));
exports["default"] = Poligon;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CircleEvents_1 = __webpack_require__(7);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(config) {
        var _this = _super.call(this, config) || this;
        _this.radius = 5;
        if (config) {
            _this.radius = config.radius ? config.radius : 5;
        }
        return _this;
    }
    Circle.prototype.selfRender = function () {
        this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        if (this.fill)
            this.context.fill();
        if (this.stroke)
            this.context.stroke();
    };
    return Circle;
}(CircleEvents_1["default"]));
exports["default"] = Circle;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(data) {
        var _this = _super.call(this, data) || this;
        _this.width = 1;
        _this.height = 1;
        if (data.color)
            _this.color = data.color;
        if (data.width)
            _this.width = data.width;
        if (data.height)
            _this.height = data.height;
        if (data.fill)
            _this.fill = data.fill;
        if (data.stroke)
            _this.stroke = data.stroke;
        if (data.lineWidth)
            _this.lineWidth = data.lineWidth;
        if (data.lineColor)
            _this.lineColor = data.lineColor;
        return _this;
    }
    Rect.prototype.render = function () {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        if (this.fill) {
            this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        if (this.stroke) {
            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.context.strokeRect(this.position.x, this.position.y, this.width, this.height);
        }
    };
    return Rect;
}(Graphic_1["default"]));
exports["default"] = Rect;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(data) {
        var _this = _super.call(this, data) || this;
        _this.start = new Vector_1["default"](0, 0);
        _this.end = new Vector_1["default"](1, 1);
        if (data.start)
            _this.start = data.start;
        if (data.end)
            _this.end = data.end;
        if (data.color)
            _this.color = data.color;
        _this.width = 5;
        _this.position = data.start;
        _this.end = new Vector_1["default"](_this.end.x - _this.start.x, _this.end.y - _this.start.y);
        return _this;
    }
    Line.prototype.render = function () {
        this.context.beginPath();
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.width;
        this.context.lineCap = this.lineCap;
        this.context.lineJoin = this.lineJoin;
        this.context.moveTo(this.position.x, this.position.y);
        this.context.lineTo(this.end.x + this.position.x, this.end.y + this.position.y);
        this.context.stroke();
    };
    return Line;
}(Graphic_1["default"]));
exports["default"] = Line;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.fontConfig = '';
        _this.lineHeight = 12;
        _this.maxWidth = 500;
        _this.textAlign = configuration.textAlign ? configuration.textAlign : 'center';
        _this.textBaseline = configuration.textBaseline ? configuration.textBaseline : 'middle';
        _this.size = configuration.size ? configuration.size : 12;
        _this.family = configuration.family ? configuration.family : 'Arial';
        _this.content = configuration.content ? configuration.content : '';
        return _this;
    }
    Text.prototype.wrapText = function () {
        var x = this.position.x;
        var y = this.position.y;
        var words = this.content.split(' ');
        var line = '';
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = this.context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > this.maxWidth && n > 0) {
                this.context.fillText(line, x, y);
                line = words[n] + ' ';
                y += this.lineHeight;
            }
            else {
                line = testLine;
            }
        }
        this.context.fillText(line, x, y);
    };
    Text.prototype.render = function () {
        this.context.fillStyle = this.color;
        this.context.font = this.weight + " " + this.size + "px " + this.family;
        this.context.textAlign = this.textAlign;
        this.context.textBaseline = this.textBaseline;
        if (this.stroke) {
            this.context.strokeText(this.content, this.position.x, this.position.y);
        }
        this.context.fillText(this.content, this.position.x, this.position.y);
    };
    return Text;
}(Graphic_1["default"]));
exports["default"] = Text;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CircleEvents_1 = __webpack_require__(7);
var Arc = /** @class */ (function (_super) {
    __extends(Arc, _super);
    function Arc(configuration) {
        var _this = _super.call(this, configuration) || this;
        if (configuration) {
            _this.eAngl = configuration.eAngl ? configuration.eAngl : 0;
            _this.aAngl = configuration.aAngl ? configuration.aAngl : Math.PI;
        }
        else {
            _this.eAngl = 0;
            _this.aAngl = Math.PI;
        }
        return _this;
    }
    Arc.prototype.renderChild = function () {
        var _this = this;
        this.childs.forEach(function (c) { return c.context = _this.context; });
        this.childs.forEach(function (c) { return c.render(); });
        this.context.beginPath();
        this.context.arc(0, 0, this.radius, this.eAngl, this.aAngl, true);
        if (this.fill) {
            this.context.fillStyle = this.color;
            this.context.fill();
        }
        if (this.stroke) {
            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.context.stroke();
        }
    };
    return Arc;
}(CircleEvents_1["default"]));
exports["default"] = Arc;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var BezierCurve = /** @class */ (function (_super) {
    __extends(BezierCurve, _super);
    function BezierCurve(config) {
        var _this = _super.call(this, config) || this;
        _this.cords = config.cords ? config.cords : [[10, 10], [80, 20], [30, 30]];
        return _this;
    }
    BezierCurve.prototype.render = function () {
        this.context.save();
        this.context.beginPath();
        this.context.lineCap = this.lineCap;
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.lineColor;
        this.context.lineJoin = this.lineJoin;
        this.context.translate(this.position.x, this.position.y);
        this.context.bezierCurveTo(this.cords[0][0], this.cords[0][1], this.cords[1][0], this.cords[1][1], this.cords[2][0], this.cords[2][1]);
        this.context.stroke();
        this.context.restore();
    };
    return BezierCurve;
}(Graphic_1["default"]));
exports["default"] = BezierCurve;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Graphic_1 = __webpack_require__(1);
var QuadraticCurve = /** @class */ (function (_super) {
    __extends(QuadraticCurve, _super);
    function QuadraticCurve(config) {
        var _this = _super.call(this, config) || this;
        _this.color = config.color ? config.color : 'black';
        _this.width = config.width ? config.width : 5;
        _this.cords = config.cords ? config.cords : [[20, 100], [200, 20]];
        return _this;
    }
    QuadraticCurve.prototype.render = function () {
        this.context.save();
        this.context.beginPath();
        this.context.lineCap = this.lineCap;
        this.context.lineJoin = this.lineJoin;
        this.context.lineWidth = this.width;
        this.context.strokeStyle = this.color;
        this.context.moveTo(this.position.x, this.position.y);
        this.context.quadraticCurveTo(this.cords[0][0], this.cords[0][1], this.cords[1][0], this.cords[1][1]);
        this.context.stroke();
        this.context.restore();
    };
    return QuadraticCurve;
}(Graphic_1["default"]));
exports["default"] = QuadraticCurve;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vector_1 = __webpack_require__(0);
var Event_1 = __webpack_require__(8);
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        var _this = _super.call(this) || this;
        _this.position = new Vector_1["default"](0, 0);
        _this.clicked = false;
        _this.move(function (self, event) {
            _this.position.x = event.clientX;
            _this.position.y = event.clientY;
        });
        return _this;
    }
    Mouse.prototype.move = function (func) {
        if (!this.events.mousemoveActive) {
            this.initEvent('mousemove');
            this.events.mousemoveActive = true;
        }
        this.events.mousemove.push(func);
    };
    Mouse.prototype.up = function (func) {
        if (!this.events.mouseupActive) {
            this.initEvent('mouseup');
            this.events.mouseupActive = true;
        }
    };
    Mouse.prototype.down = function (func) {
        if (!this.events.mousedownActive) {
            this.initEvent('mousedown');
            this.events.mousedownActive = true;
        }
    };
    return Mouse;
}(Event_1["default"]));
exports["default"] = Mouse;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Event_1 = __webpack_require__(8);
var KeyBoard = /** @class */ (function (_super) {
    __extends(KeyBoard, _super);
    function KeyBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keys = [];
        return _this;
    }
    KeyBoard.prototype.press = function (key, func) {
        var _this = this;
        var func2 = function (self, event) {
            // console.log(event.key === key)
            // console.log(event.key, key)
            if (event.key === key) {
                // console.log(func)
                func(_this, event);
            }
        };
        if (!this.events.keypressActive) {
            this.events.keypressActive = true;
            this.initEvent('keypress');
        }
        this.events.keypress.push(func2);
    };
    KeyBoard.prototype.down = function (key, func) {
        var _this = this;
        func = function (self, event) {
            if (event.key === key)
                func(_this, event);
        };
        if (!this.events.keydownActive) {
            this.events.keydownActive = true;
            this.initEvent('keydown');
        }
        this.events.keydown.push(func);
    };
    KeyBoard.prototype.up = function (key, func) {
        var _this = this;
        var func2 = function (self, event) {
            if (event.key === key)
                func(_this, event);
        };
        if (!this.events.keyupActive) {
            this.events.keyupActive = true;
            this.initEvent('keyup');
        }
        this.events.keyup.push(func2);
    };
    return KeyBoard;
}(Event_1["default"]));
exports["default"] = KeyBoard;


/***/ })
/******/ ]);
});
},{}],56:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var ScriptManager = /** @class */function () {
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
}();
exports["default"] = ScriptManager;
},{}],57:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var dibujo_1 = require("dibujo");
var AnimationComponent = /** @class */function () {
    function AnimationComponent(config) {
        this.src = config.src;
        this.loop = config.loop;
        this.size = config.size ? config.size : 100;
        this.frameRate = config.frameRate ? config.frameRate : 1000 / 60;
    }
    AnimationComponent.prototype.load = function (gameObject, Scene) {
        var animation = new dibujo_1.Animation(this.src, gameObject.Transform.scale, gameObject.Transform.position, this.frameRate, this.size);
        Scene.stage.add(animation);
    };
    return AnimationComponent;
}();
exports["default"] = AnimationComponent;
},{"dibujo":26}],58:[function(require,module,exports) {
"use strict";
//import id from '../utils/id'

exports.__esModule = true;
var Identifier = /** @class */function () {
    function Identifier(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    return Identifier;
}();
exports["default"] = Identifier;
},{}],25:[function(require,module,exports) {
var define;
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
},{}],59:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var vector_class_1 = require("vector_class");
var Transform = /** @class */function () {
    function Transform(configuration) {
        this.position = new vector_class_1.Vector2D(0, 0);
        this.scale = new vector_class_1.Vector2D(1, 1);
        this.rotation = 0;
        if (configuration) {
            if (configuration.position) this.position = configuration.position;
            if (configuration.rotation) this.rotation = configuration.rotation;
            if (configuration.scale) this.scale = configuration.scale;
        }
    }
    Transform.prototype.rotate = function (rotation) {
        this.rotation += rotation;
    };
    Transform.prototype.setPosition = function (x, y) {
        this.position = new vector_class_1.Vector2D(x, y);
    };
    Transform.prototype.globalTranslate = function (x, y) {
        this.position.add(new vector_class_1.Vector2D(x, y));
    };
    Transform.prototype.translate = function (x, y) {
        var translationY = vector_class_1.Vector2D.angleMagnitude(this.rotation, y);
        var translationX = vector_class_1.Vector2D.angleMagnitude(this.rotation + Math.PI / 2, x);
        this.position.add(new vector_class_1.Vector2D(translationY[0], translationY[1]));
        this.position.add(new vector_class_1.Vector2D(translationX[0], translationX[1]));
    };
    return Transform;
}();
exports["default"] = Transform;
},{"vector_class":25}],60:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var dibujo_1 = __importDefault(require("dibujo"));
var vector_class_1 = require("vector_class");
var SpriteComponent = /** @class */function () {
    function SpriteComponent(src) {
        this.src = src;
    }
    SpriteComponent.prototype.load = function (gameObject, Scene) {
        console.log(this.src, gameObject.Transform.position, gameObject.Transform.scale, gameObject.Transform.rotation);
        this.sprite = new dibujo_1["default"](this.src, gameObject.Transform.position, gameObject.Transform.scale, gameObject.Transform.rotation, new vector_class_1.Vector2D(0, 0));
        Scene.stage.add(this.sprite);
    };
    return SpriteComponent;
}();
exports["default"] = SpriteComponent;
},{"dibujo":26,"vector_class":25}],36:[function(require,module,exports) {
var define;
!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.DibujoJs=i():t.DibujoJs=i()}(window,function(){return function(t){var i={};function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=t,o.c=i,o.d=function(t,i,n){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)o.d(n,e,function(i){return t[i]}.bind(null,e));return n},o.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="",o(o.s=10)}([function(t,i,o){!function(i,o){t.exports=o()}(0,function(){return function(t){var i={};function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=t,o.c=i,o.d=function(t,i,n){o.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="",o(o.s=0)}([function(t,i,o){"use strict";var n=o(1);i.Vector2D=n.default;var e=o(2);i.Vector3D=e.default},function(t,i,o){"use strict";var n=function(){function t(t,i){this.x=t,this.y=i}return t.prototype.add=function(t){this.x+=t.x,this.y+=t.y},t.prototype.sub=function(t){this.x-=t.x,this.y-=t.y},t.prototype.mult=function(t){this.x*=t,this.y*=t},t.prototype.div=function(t){this.x/=t,this.y/=t},t.prototype.inverse=function(){this.x*=-1,this.y*=-1},t.prototype.mag=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.distance=function(i){return t.sub(this,i).mag()},t.prototype.angle=function(){return Math.atan2(this.y,this.x)},t.prototype.copy=function(){return new t(this.x,this.y)},t.prototype.normalize=function(){this.div(this.mag())},t.prototype.setMag=function(t){this.normalize(),this.mult(t)},t.prototype.setAngle=function(t){var i=this.mag();this.x=i*Math.cos(t),this.y=i*Math.sin(t)},t.prototype.addAngle=function(t){this.setAngle(this.angle()+t)},t.prototype.limit=function(t){this.mag()>t&&this.setMag(t)},t.prototype.moveTowards=function(i,o,n){if(this.distance(i)>n){var e=t.normalize(i);e.mult(o),this.add(e)}},t.prototype.zero=function(){this.x=0,this.y=0},t.add=function(i,o){return new t(i.x+o.x,i.y+o.y)},t.sub=function(i,o){return new t(i.x-o.x,i.y-o.y)},t.mult=function(i,o){return new t(i.x*o,i.y*o)},t.div=function(i,o){return new t(i.x/o,i.y/o)},t.inverse=function(i){return new t(-1*i.x,-1*i.y)},t.distance=function(t,i){return this.sub(t,i).mag()},t.normalize=function(t){return this.div(t,t.mag())},t.cross=function(t,i){return t.x*i.y-i.x*t.y},t.random=function(i,o){return Math.random()>.5?new t(i*Math.random(),o*Math.random()):new t(-i*Math.random(),-o*Math.random())},t}();i.__esModule=!0,i.default=n},function(t,i,o){"use strict";var n=function(){function t(t,i,o){this.x=t,this.y=i,this.z=o}return t.prototype.add=function(t){this.x+=t.x,this.y+=t.y,this.z+=t.z},t.prototype.sub=function(t){this.x-=t.x,this.y-=t.y,this.z-=t.z},t.prototype.mult=function(t){this.x*=t,this.y*=t,this.z*=t},t.prototype.div=function(t){this.x/=t,this.y/=t,this.z/=t},t.prototype.inverse=function(){this.x*=-1,this.y*=-1,this.z*=-1},t.prototype.mag=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},t.prototype.distance=function(i){return t.sub(this,i).mag()},t.prototype.angle=function(){return Math.atan2(this.y,this.x)},t.prototype.copy=function(){return new t(this.x,this.y,this.z)},t.prototype.normalize=function(){this.div(this.mag())},t.prototype.setMag=function(t){this.normalize(),this.mult(t)},t.prototype.setAngle=function(t){var i=this.mag();this.x=i*Math.cos(t),this.y=i*Math.sin(t)},t.prototype.addAngle=function(t){this.setAngle(this.angle()+t)},t.prototype.limit=function(t){this.mag()>t&&this.setMag(t)},t.prototype.moveTowards=function(i,o,n){if(this.distance(i)>n){var e=t.normalize(i);e.mult(o),this.add(e)}},t.prototype.zero=function(){this.x=0,this.y=0,this.z=0},t.add=function(i,o){return new t(i.x+o.x,i.y+o.y,i.z+o.z)},t.sub=function(i,o){return new t(i.x-o.x,i.y-o.y,i.z-o.z)},t.mult=function(i,o){return new t(i.x*o,i.y*o,i.z*o)},t.div=function(i,o){return new t(i.x/o,i.y/o,i.z/o)},t.inverse=function(i){return new t(-1*i.x,-1*i.y,-1*i.z)},t.distance=function(t,i){return this.sub(t,i).mag()},t.normalize=function(t){return this.div(t,t.mag())},t.cross=function(t,i){return t.x*i.y-i.x*t.y},t.random=function(i,o,n){return Math.random()>.5?new t(i*Math.random(),o*Math.random(),n*Math.random()):new t(-i*Math.random(),-o*Math.random(),-n*Math.random())},t}();i.__esModule=!0,i.default=n}])})},function(t,i,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o])};return function(i,o){function n(){this.constructor=i}t(i,o),i.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();i.__esModule=!0;var e=o(0),s=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return n(i,t),i.prototype.separate=function(t,i){var o=e.Vector2D.normalize(t);o.mult(this.radius+i.radius),o.sub(t),this.position.add(o)},i.prototype.checkCollision=function(t){var i=e.Vector2D.sub(this.position,t.position);if(i.mag()<this.radius+t.radius&&i.mag())return i},i.prototype.collision=function(t){var i=this.checkCollision(t);return!!i&&(this.separate(i,t),!0)},i}(o(7).default);i.default=s},function(t,i,o){"use strict";i.__esModule=!0;var n=o(0),e=function(){return function(t,i){this.position=new n.Vector2D(0,0),this.size=new n.Vector2D(10,10),this.position=t,this.size=i}}();i.default=e},function(t,i,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o])};return function(i,o){function n(){this.constructor=i}t(i,o),i.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();i.__esModule=!0;var e=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return n(i,t),i.prototype.check=function(t){return this.position.x<t.position.x+t.size.x&&this.position.x+this.size.x>t.position.x&&this.position.y<t.position.y+t.size.y&&this.size.y+this.position.y>t.position.y},i}(o(2).default);i.default=e},function(t,i,o){"use strict";i.__esModule=!0;var n=function(){function t(){this.maxPositionX=window.innerWidth,this.minPositionX=0,this.maxPositionY=window.innerHeight,this.minPositionY=0,this.particles=[]}return t.prototype.setBounds=function(t,i,o,n){this.maxPositionX=t,this.minPositionX=i,this.maxPositionY=o,this.minPositionY=n},t.prototype.add=function(t){this.particles.push(t)},t.prototype.remove=function(t){this.particles.slice(this.particles.indexOf(t),1)},t.prototype.update=function(){var t=this;this.particles.forEach(function(i){i.dynamic&&(t.insideWorldBounds(i),i.update()),t.particles.forEach(function(t){i.check(t)})})},t.prototype.insideWorldBounds=function(t){t.position.x+t.radius>this.maxPositionX?(t.position.x=this.maxPositionX-t.radius,t.velocity.x*=-1):t.position.x-t.radius<this.minPositionX&&(t.position.x=this.minPositionX+t.radius,t.velocity.x*=-1),t.position.y+t.radius>this.maxPositionY?(t.position.y=this.maxPositionY-t.radius,t.velocity.y*=-1):t.position.y-t.radius<this.minPositionY&&(t.position.y=this.minPositionY+t.radius,t.velocity.y*=-1)},t}();i.default=n},function(t,i,o){"use strict";i.__esModule=!0;var n=o(4);i.World=n.default;var e=o(3);i.RectCollider=e.default},function(t,i,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o])};return function(i,o){function n(){this.constructor=i}t(i,o),i.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();i.__esModule=!0;var e=o(0),s=function(t){function i(i,o,n){var s=t.call(this,i,n)||this;return s.velocity=new e.Vector2D(0,0),s.acceleration=new e.Vector2D(0,0),s.restitution=1,s.dynamic=!0,s.mass=Math.PI*Math.pow(s.radius,2),s.restitution=o,s}return n(i,t),i.prototype.addForce=function(t){this.acceleration.add(t)},i.prototype.momentum=function(){return e.Vector2D.mult(this.velocity,this.mass)},i.prototype.inelasticCollision=function(t){var i=this.velocity,o=t.velocity,n=t.momentum();n.add(this.momentum());var s=this.mass+t.mass;this.velocity=e.Vector2D.sub(o,i),this.velocity.mult(this.restitution*t.mass),this.velocity.add(n),this.velocity.div(s),t.velocity=e.Vector2D.sub(i,o),t.velocity.mult(t.restitution*this.mass),t.velocity.add(n),t.velocity.div(s)},i.prototype.update=function(){this.acceleration.div(this.mass),this.velocity.add(this.acceleration),this.position.add(this.velocity),this.acceleration.zero()},i.prototype.check=function(i){t.prototype.collision.call(this,i)&&(i.dynamic?this.inelasticCollision(i):this.velocity.inverse)},i}(o(1).default);i.default=s},function(t,i,o){"use strict";i.__esModule=!0;var n=o(0),e=function(){return function(t,i){this.position=new n.Vector2D(0,0),this.radius=5,this.position=t,this.radius=i}}();i.default=e},function(t,i,o){"use strict";i.__esModule=!0;var n=function(){function t(){this.maxPositionX=window.innerWidth,this.minPositionX=0,this.maxPositionY=window.innerHeight,this.minPositionY=0,this.dynamicParticles=[],this.particles=[]}return t.prototype.setBounds=function(t,i,o,n){this.maxPositionX=t,this.minPositionX=i,this.maxPositionY=o,this.minPositionY=n},t.prototype.add=function(t){this.particles.push(t),t.dynamic&&this.dynamicParticles.push(t)},t.prototype.remove=function(t){},t.prototype.insideWorldBounds=function(t){t.position.x+t.radius>this.maxPositionX?(t.position.x=this.maxPositionX-t.radius,t.velocity.x*=-1):t.position.x-t.radius<this.minPositionX&&(t.position.x=this.minPositionX+t.radius,t.velocity.x*=-1),t.position.y+t.radius>this.maxPositionY?(t.position.y=this.maxPositionY-t.radius,t.velocity.y*=-1):t.position.y-t.radius<this.minPositionY&&(t.position.y=this.minPositionY+t.radius,t.velocity.y*=-1)},t.prototype.update=function(){var t=this;this.dynamicParticles.forEach(function(i){i.update(),t.particles.forEach(function(t){return i.check(t)})})},t}();i.default=n},function(t,i,o){"use strict";i.__esModule=!0;var n=o(8);i.World=n.default;var e=o(1);i.Collider=e.default;var s=o(6);i.Dynamic=s.default},function(t,i,o){"use strict";i.__esModule=!0;var n=o(9);i.CircleSystem=n;var e=o(5);i.RectSystem=e}])});
},{}],61:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var vector_class_1 = require("vector_class");
var fisica_1 = require("fisica");
var Collider = /** @class */function () {
    function Collider(configuration) {
        this.restitution = configuration.restitution;
        this.size = configuration.size;
        this.static = configuration.static;
    }
    Collider.prototype.load = function (gameObject, Scene) {
        if (this.size === 'fit') {
            if (this.static) {
                if (gameObject.Components.Sprite) {
                    this.collider = new fisica_1.Rect.Collider(gameObject.Transform.position, gameObject.Transform.scale);
                } else {
                    this.collider = new fisica_1.Rect.Collider(gameObject.Transform.position, new vector_class_1.Vector2D(50, 50) /*
                                                                                                                                  gameObject.sprite.getSize()*/);
                }
            } else {
                this.collider = new fisica_1.Rect.Dynamic(gameObject.Transform.position, this.restitution, new vector_class_1.Vector2D(50, 50)
                /*
                gameObject.sprite.getSize()
                */
                );
            }
        } else {
            if (this.static) {
                this.collider = new fisica_1.Rect.Collider(gameObject.Transform.position, this.size);
            } else {
                this.collider = new fisica_1.Rect.Dynamic(gameObject.Transform.position, this.restitution, this.size);
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
}();
exports["default"] = Collider;
},{"vector_class":25,"fisica":36}],57:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var ScriptComponent_1 = __importDefault(require("./ScriptComponent"));
exports.Script = ScriptComponent_1["default"];
var AnimationComponent_1 = __importDefault(require("./AnimationComponent"));
exports.Animation = AnimationComponent_1["default"];
var IdentifierComponent_1 = __importDefault(require("./IdentifierComponent"));
exports.Identifier = IdentifierComponent_1["default"];
var TransformComponent_1 = __importDefault(require("./TransformComponent"));
exports.Transform = TransformComponent_1["default"];
var SpriteComponent_1 = __importDefault(require("./SpriteComponent"));
exports.Sprite = SpriteComponent_1["default"];
var ColliderComponent_1 = __importDefault(require("./ColliderComponent"));
exports.Collider = ColliderComponent_1["default"];
},{"./ScriptComponent":56,"./AnimationComponent":57,"./IdentifierComponent":58,"./TransformComponent":59,"./SpriteComponent":60,"./ColliderComponent":61}],39:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var vector_class_1 = require("vector_class");
var Transform = /** @class */function () {
    function Transform(configuration) {
        this.position = new vector_class_1.Vector2D(0, 0);
        this.scale = new vector_class_1.Vector2D(1, 1);
        this.rotation = 0;
        if (configuration) {
            if (configuration.position) this.position = configuration.position;
            if (configuration.rotation) this.rotation = configuration.rotation;
            if (configuration.scale) this.scale = configuration.scale;
        }
    }
    Transform.prototype.rotate = function (rotation) {
        this.rotation += rotation;
    };
    Transform.prototype.setPosition = function (x, y) {
        this.position = new vector_class_1.Vector2D(x, y);
    };
    Transform.prototype.globalTranslate = function (x, y) {
        this.position.add(new vector_class_1.Vector2D(x, y));
    };
    Transform.prototype.translate = function (x, y) {
        var translationY = vector_class_1.Vector2D.angleMagnitude(this.rotation, y);
        var translationX = vector_class_1.Vector2D.angleMagnitude(this.rotation + Math.PI / 2, x);
        this.position.add(new vector_class_1.Vector2D(translationY[0], translationY[1]));
        this.position.add(new vector_class_1.Vector2D(translationX[0], translationX[1]));
    };
    return Transform;
}();
exports["default"] = Transform;
},{"vector_class":25}],25:[function(require,module,exports) {
"use strict";
//import id from '../utils/id'

exports.__esModule = true;
var Identifier = /** @class */function () {
    function Identifier(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    return Identifier;
}();
exports["default"] = Identifier;
},{}],41:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var ScriptManager = /** @class */function () {
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
}();
exports["default"] = ScriptManager;
},{}],47:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
console.log('gameobject');
console.log('gmobj 2');
var TransformComponent_1 = __importDefault(require("../Components/TransformComponent"));
console.log('gmobj 2');
var IdentifierComponent_1 = __importDefault(require("../Components/IdentifierComponent"));
console.log('gmobj 2');
var ScriptComponent_1 = __importDefault(require("../Components/ScriptComponent"));
console.log('gmobj 2');
var GameObject = /** @class */function () {
    function GameObject(components) {
        this.Transform = new TransformComponent_1["default"]();
        this.Identifier = new IdentifierComponent_1["default"]();
        this.Script = new ScriptComponent_1["default"](this);
        this.Components = components;
    }
    GameObject.prototype.run = function (name, params) {
        this.Script.run(name, params);
    };
    GameObject.prototype.destroy = function () {
        this.Components.forEach(function (component) {
            component.destroy();
        });
        this.Scene.remove(this);
    };
    return GameObject;
}();
exports["default"] = GameObject;
},{"../Components/TransformComponent":39,"../Components/IdentifierComponent":25,"../Components/ScriptComponent":41}],53:[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var Component = __importStar(require("./components/components"));
var GameObject_1 = __importDefault(require("./Managers/GameObject"));
function load(configuration) {
    var result = {};
    var Transform;
    var Script;
    if (configuration) {
        for (var _i = 0, _a = Object.keys(configuration); _i < _a.length; _i++) {
            var component = _a[_i];
            if (component === 'Transform') {
                Transform = new Component[component](configuration[component]);
            } else if (component === 'Script') {
                Script = configuration[component];
            } else {
                result[component] = new Component[component](configuration[component]);
            }
        }
    }
    var gm = new GameObject_1["default"](result);
    gm['Transform'].position = Transform.position;
    gm['Transform'].rotation = Transform.rotation;
    gm['Transform'].scale = Transform.scale;
    if (Script) {
        gm.Script.one(Script);
    }
    return gm;
}
exports["default"] = load;
},{"./components/components":57,"./Managers/GameObject":47}],48:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
var __importStar = this && this.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
exports.__esModule = true;
var loader_1 = __importDefault(require("../loader"));
var dibujo_1 = require("dibujo");
var fisica = __importStar(require("fisica"));
var GameScene = /** @class */function () {
    function GameScene(configuration) {
        this.paused = false;
        this.background = '#000000';
        this.gameObjects = [];
        this.world = new fisica.Rect.World(config.gravity);
        if (config) {
            if (config.background) {
                this.background = config.background;
            }
            if (config.manager) {
                this.stage = new dibujo_1.Scene(config.manager);
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
                if (gameObject.Identifier[property] === value) {
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
        this.world.update();
        this.stage.update();
        this.run('update');
    };
    return GameScene;
}();
exports["default"] = GameScene;
},{"../loader":53,"dibujo":26,"fisica":36}],23:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var dibujo_1 = require("dibujo");
var GameScene_1 = __importDefault(require("./GameScene"));
var vector_class_1 = require("vector_class");
/**
 * has 3 optional parameters in the configuration
 * id the id of the canvas
 * width and height
 */
var GameManager = /** @class */function () {
    function GameManager(configuration) {
        var id = configuration.id ? configuration.id : undefined;
        var width = configuration.width ? configuration.width : undefined;
        var height = configuration.height ? configuration.height : undefined;
        this.render = new dibujo_1.Render(id, width, height);
        this.gameScene = new GameScene_1["default"](this.render);
        this.initEvents();
    }
    GameManager.prototype.initEvents = function () {
        var _this = this;
        var keys = {};
        setInterval(function () {
            Object.keys(keys).some(function (key) {
                if (keys[key]) {
                    if (!_this.gameScene.paused) {
                        _this.gameScene.run('keyPress', [keys]);
                    }
                    return true;
                }
            });
        }, 20);
        document.addEventListener('mousedown', function (event) {
            if (!this.gameScene.paused) {
                this.gameScene.run('globalMouseDown', [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
                this.gameScene.runMouseDown(event, [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
            }
        });
        document.addEventListener('mousemove', function (event) {
            if (!this.gameScene.paused) {
                this.gameScene.run('globalMouseMove', [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
            }
        });
        document.addEventListener('mouseup', function (event) {
            if (!this.gameScene.paused) {
                this.gameScene.run('globalMouseUp', [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
            }
        });
        document.addEventListener('keydown', function (event) {
            keys[event.key] = true;
            if (!this.gameScene.paused) {
                this.gameScene.run('keyDown', [event.key]);
            }
        });
        document.addEventListener('keyup', function (event) {
            keys[event.key] = false;
            if (!this.gameScene.paused) {
                this.gameScene.run('keyUp', [event.key]);
            }
        });
    };
    return GameManager;
}();
/*
getTranslation(): Vector2D {
  return this.gameScene.stage.translation
}

start(): void {
  setInterval(() => {
    this.gameScene.update()
  })
}
*/
function mouseDown(manager, mouse) {
    var translation = manager.gameScene.stage.translation;
    this.gameObjects.forEach(function (gameObject) {
        if (gameObject.collider) {
            if (mouse.x > gameObject.Transform.position.x + translation.x && mouse.x < gameObject.Transform.position.x + translation.x + gameObject.collider.size.x && mouse.y > gameObject.Transform.position.y + translation.y && mouse.y < gameObject.Transform.position.y + translation.y + gameObject.collider.size.y) {
                gameObject.run('mouseDown', mouse);
            }
        }
    });
}
exports["default"] = GameManager;
},{"dibujo":26,"./GameScene":48,"vector_class":25}],44:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
console.log('hola');
var GameManager_1 = __importDefault(require("./Managers/GameManager"));
var mg = new GameManager_1["default"]();
console.log(mg);
/*
export {
  Graphic,
  Vector2D,
  GameObject,
  Scene,
  Manager,
  Color
}
*/
},{"./Managers/GameManager":23}],8:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61180' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[8,44], null)
//# sourceMappingURL=/lienzo.6a863ef6.map