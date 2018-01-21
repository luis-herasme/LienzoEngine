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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Scene_1 = __webpack_require__(9);
exports.Scene = Scene_1["default"];
var Render_1 = __webpack_require__(19);
exports.Render = Render_1["default"];
var Sprite_1 = __webpack_require__(20);
exports.Sprite = Sprite_1["default"];
var Graphic_1 = __webpack_require__(2);
exports.Graphic = Graphic_1["default"];
var gObject_1 = __webpack_require__(21);
exports.gObject = gObject_1["default"];
var Animation_1 = __webpack_require__(22);
exports.Animation = Animation_1["default"];
var Color_1 = __webpack_require__(10);
exports.Color = Color_1["default"];


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GameObject_1 = __webpack_require__(4);
exports.GameObject = GameObject_1["default"];
var Scene_1 = __webpack_require__(11);
exports.Scene = Scene_1["default"];
var Manager_1 = __webpack_require__(25);
exports.Manager = Manager_1["default"];
var Vector2D_1 = __webpack_require__(28);
var Color_1 = __webpack_require__(10);
exports.Color = Color_1["default"];
var Graphic_1 = __webpack_require__(2);
exports.Graphic = Graphic_1["default"];
var Vector = Vector2D_1["default"];
exports.Vector = Vector;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(5);
var index_2 = __webpack_require__(1);
var Vector2D_1 = __webpack_require__(28);
var ScriptManager_1 = __webpack_require__(23);
var Transform_1 = __webpack_require__(24);
function id() {
    var ID = '';
    for (var i = 0; i < 10; i++) {
        ID += Math.round(Math.random() * 100);
    }
    return ID;
}
var GameObject = (function () {
    function GameObject(components) {
        var _this = this;
        this.ScriptManager = new ScriptManager_1["default"](this);
        this.transform = new Transform_1["default"]();
        this.id = id();
        this.graphics = [];
        Object.keys(components).forEach(function (component) { return _this.add(component, components[component]); });
    }
    GameObject.prototype.add = function (componentType, data) {
        if (componentType === 'graphics') {
            this.addGraphics(data);
        }
        else if (componentType === 'collider') {
            this.setCollider(data);
        }
        else if (componentType === 'scripts') {
            this.addScripts(data);
        }
        else if (componentType === 'script') {
            this.behavior(data);
        }
        else if (componentType === 'position') {
            this.transform.position = data;
        }
        else if (componentType === 'static') {
            this.static = true;
        }
        else if (componentType === 'scale') {
            this.transform.scale = data;
        }
        else if (componentType === 'name') {
            this.name = data;
        }
        else if (componentType === 'sprite') {
            this.sprite = data;
        }
        else if (componentType === 'spriteSheet') {
            this.sprite = {
                data: data,
                animation: true
            };
        }
    };
    GameObject.prototype.load = function () {
        var _this = this;
        if (this.sprite) {
            if (this.sprite.animation) {
                var sprite = new index_2.Animation(this.sprite.data.src, this.transform.scale, this.transform.position, 100, this.sprite.data.size);
                this.graphics.push(sprite);
                this.sprite = sprite;
            }
            else {
                var sprite = new index_2.Sprite(this.sprite, this.transform.position, this.transform.scale, 0, new Vector2D_1["default"](0, 0));
                this.graphics.push(sprite);
                this.sprite = sprite;
            }
        }
        if (this.collider) {
            if (this.collider === 'fit') {
                var collider = new index_1.Rect.Dynamic(this.transform.position, 0.25, this.sprite.getSize());
                collider.gameObject = this;
                collider.position = this.transform.position;
                this.collider = collider;
            }
            else {
                var collider = new index_1.Rect.Dynamic(this.transform.position, 0.25, this.collider);
                if (!this.sprite.animation) {
                    this.sprite.scale = new Vector2D_1["default"](this.collider.x / this.sprite.image.width, this.collider.y / this.sprite.image.height);
                }
                collider.gameObject = this;
                collider.position = this.transform.position;
                this.collider = collider;
            }
            this.collider.collision = function (other) {
                _this.run('collision', [other]);
            };
        }
    };
    GameObject.prototype.addGraphics = function (graphics) {
        var _this = this;
        graphics.forEach(function (graphic) {
            graphic.gameObject = _this;
            _this.graphics.push(graphic);
        });
    };
    GameObject.prototype.setCollider = function (colliderSize) {
        this.collider = colliderSize;
    };
    GameObject.prototype.behavior = function (script) {
        this.ScriptManager.addOne(script);
    };
    GameObject.prototype.addScripts = function (scripts) {
        this.ScriptManager.add(scripts);
    };
    GameObject.prototype.setTransform = function (transform) {
        this.transform = transform;
    };
    GameObject.prototype.run = function (methodName, params) {
        this.ScriptManager.run(methodName, params);
    };
    GameObject.prototype.destroy = function () {
        this.scene.destroy(this);
    };
    return GameObject;
}());
exports.__esModule = true;
exports["default"] = GameObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Circle = __webpack_require__(13);
exports.Circle = Circle;
var Rect = __webpack_require__(16);
exports.Rect = Rect;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Circle_1 = __webpack_require__(14);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rect_1 = __webpack_require__(17);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
var Scene = (function () {
    function Scene() {
        this.following = false;
        this.translation = new Vector2D_1["default"](0, 0);
        this.childs = [];
    }
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(5);
var Dibujo = __webpack_require__(1);
var Scene = (function () {
    function Scene(config) {
        this.physicsWorld = new index_1.Rect.World();
        this.gameObjects = [];
        this.renderWorld = new Dibujo.Scene();
        this.paused = false;
        this.backgroundColor = '#000000';
        if (config) {
            this.physicsWorld = new index_1.Rect.World(config.gravity);
            if (config.backgroundColor)
                this.backgroundColor = config.backgroundColor;
            if (config.bounds)
                this.physicsWorld.setBounds(config.bounds);
        }
    }
    Scene.prototype.setRender = function (render) {
        this.renderWorld.renderer = render;
        this.renderWorld.context = render.context;
        this.renderWorld.smoth(false);
    };
    Scene.prototype.add = function (gameObject) {
        var _this = this;
        gameObject.load();
        if (gameObject.collider) {
            this.physicsWorld.add(gameObject.collider);
        }
        gameObject.graphics.forEach(function (graphic) {
            _this.renderWorld.add(graphic);
        });
        gameObject.scene = this;
        gameObject.run('init');
        this.gameObjects.push(gameObject);
    };
    Scene.prototype.findByName = function (name) {
        return this.gameObjects.find(function (gameObject) {
            if (gameObject.name === name)
                return gameObject;
            return false;
        });
    };
    Scene.prototype.update = function () {
        this.renderWorld.clear(this.backgroundColor);
        this.physicsWorld.update();
        this.renderWorld.update();
        this.run('update');
    };
    Scene.prototype.run = function (method, data) {
        this.gameObjects.forEach(function (gameObject) { return gameObject.run(method, data); });
    };
    Scene.prototype.runMouseDown = function (mouse) {
        var translation = this.renderWorld.translation;
        this.gameObjects.forEach(function (gameObject) {
            if (gameObject.collider) {
                if (mouse.x > gameObject.transform.position.x + translation.x &&
                    mouse.x < gameObject.transform.position.x + translation.x + gameObject.collider.size.x &&
                    mouse.y > gameObject.transform.position.y + translation.y &&
                    mouse.y < gameObject.transform.position.y + translation.y + gameObject.collider.size.y) {
                    gameObject.run('mouseDown', mouse);
                }
            }
        });
    };
    Scene.prototype.destroy = function (gameObject) {
        this.gameObjects = this.gameObjects.filter(function (go) { return gameObject.id !== go.id; });
        if (gameObject.collider) {
            this.physicsWorld.remove(gameObject.collider);
        }
        if (gameObject.sprite) {
            this.renderWorld.remove(gameObject.sprite);
        }
    };
    return Scene;
}());
exports.__esModule = true;
exports["default"] = Scene;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lienzo_1 = __webpack_require__(3);
var character_1 = __webpack_require__(27);
var manager = new lienzo_1.Manager();
manager.setScene(new lienzo_1.Scene({
    gravity: new lienzo_1.Vector(0, 500),
    system: 'Rect',
    backgroundColor: '#9FE6FF'
}));
// BACKGROUND
for (var i = 0; i < 100; i++) {
    manager.add({
        position: new lienzo_1.Vector(i * 1920, -100),
        sprite: 'assets/bg.png'
    });
}
manager.add(character_1["default"]);
manager.scene.renderWorld.follow(manager.scene.findByName('character'));
// Clouds
manager.add({
    position: new lienzo_1.Vector(0, 0),
    scale: new lienzo_1.Vector(0.5, 0.5),
    sprite: 'assets/clouds.png',
    script: {
        update: function () {
            this.transform.position.x += 5;
        }
    }
});
// Grass
for (var i = 0; i < 100; i++) {
    manager.add({
        position: new lienzo_1.Vector(i * 1680, manager.getHeight() - 224),
        scale: new lienzo_1.Vector(5, 2),
        sprite: 'assets/grass.png',
        collider: 'fit',
        static: true
    });
}
for (var i = 0; i < 25; i++) {
    // Coins
    manager.add({
        position: new lienzo_1.Vector(i * 500, 600),
        collider: 'fit',
        static: true,
        scale: new lienzo_1.Vector(0.5, 0.5),
        spriteSheet: {
            src: 'assets/coin.png',
            size: new lienzo_1.Vector(700 / 6, 200)
        },
        script: {
            collision: function (other) {
                if (other.gameObject.name === 'character') {
                    other.gameObject.coins++;
                    this.destroy();
                }
            }
        }
    });
    // Captus
    manager.add({
        position: new lienzo_1.Vector(i * (500 * (Math.random() + 0.5)), manager.getHeight() - 224 - (256 * 0.75)),
        collider: 'fit',
        static: true,
        scale: new lienzo_1.Vector(0.75, 0.75),
        sprite: 'assets/cactus.png',
        script: {
            collision: function (other) {
                if (other.gameObject.name === 'character') {
                    other.gameObject.health--;
                    this.destroy();
                }
            }
        }
    });
}
// Slime
manager.add({
    position: new lienzo_1.Vector(600, 250),
    collider: new lienzo_1.Vector(100, 50),
    sprite: 'assets/Slime.png',
    script: {
        update: function () {
            this.collider.addForce(new lienzo_1.Vector(80, 0));
        }
    }
});
// Blocks
for (var i = 0; i < 5; i++) {
    manager.add({
        position: new lienzo_1.Vector(300 + i * 70, 300 - 70),
        collider: new lienzo_1.Vector(70, 70),
        sprite: 'assets/malo.png',
        static: true
    });
}
manager.add({
    position: new lienzo_1.Vector(1300 + 5 * 70, 710 - 5 * 70 - 70),
    collider: new lienzo_1.Vector(70, 70),
    sprite: 'assets/malo.png',
    static: true,
    script: {
        update: function () {
            this.transform.position.x += 0.1;
        }
    }
});
manager.start();


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Collider_1 = __webpack_require__(6);
exports.Collider = Collider_1["default"];
var Dynamic_1 = __webpack_require__(15);
exports.Dynamic = Dynamic_1["default"];
// import Trigger from './Trigger'
var World_1 = __webpack_require__(7);
exports.World = World_1["default"];


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
function id() {
    var ID = '';
    for (var i = 0; i < 10; i++) {
        ID += Math.round(Math.random() * 100);
    }
    return ID;
}
var Circle = (function () {
    function Circle(position, radius) {
        this.position = new Vector2D_1["default"](0, 0);
        this.radius = 5;
        this.position = position;
        this.radius = radius;
        this.id = id();
    }
    return Circle;
}());
exports.__esModule = true;
exports["default"] = Circle;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vector2D_1 = __webpack_require__(28);
var Collider_1 = __webpack_require__(6);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var World_1 = __webpack_require__(7);
exports.World = World_1["default"];
var Collider_1 = __webpack_require__(8);
exports.Collider = Collider_1["default"];
var Dynamic_1 = __webpack_require__(18);
exports.Dynamic = Dynamic_1["default"];


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vector2D_1 = __webpack_require__(28);
var Collider_1 = __webpack_require__(8);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
var Scene_1 = __webpack_require__(9);
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
        this.setScene(new Scene_1["default"]());
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global Image */

var Vector2D_1 = __webpack_require__(28);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Graphic_1 = __webpack_require__(2);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
var Animation = (function () {
    function Animation(src, scale, position, frameRate, size) {
        if (scale === void 0) { scale = new Vector2D_1["default"](1, 1); }
        if (position === void 0) { position = new Vector2D_1["default"](1, 1); }
        if (frameRate === void 0) { frameRate = 100; }
        if (size === void 0) { size = new Vector2D_1["default"](32, 32); }
        var _this = this;
        this.loop = true;
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ScriptManager = (function () {
    function ScriptManager(gameObject) {
        this.methods = {};
        this.gameObject = gameObject;
    }
    ScriptManager.prototype.add = function (scripts) {
        var _this = this;
        scripts.forEach(function (script) { return _this.addOne(script); });
    };
    ScriptManager.prototype.addOne = function (script) {
        var _this = this;
        Object.keys(script).forEach(function (method) {
            if (!_this.methods[method])
                _this.methods[method] = [];
            _this.methods[method].push(script[method].bind(_this.gameObject));
        });
    };
    ScriptManager.prototype.run = function (name, params) {
        if (this.methods[name]) {
            this.methods[name].forEach(function (method) {
                //if (params) {
                method.apply(void 0, params);
                /*} else {
                  method()
                }*/
            });
        }
    };
    return ScriptManager;
}());
exports.__esModule = true;
exports["default"] = ScriptManager;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
var Transform = (function () {
    function Transform(position, scale, rotation) {
        if (position === void 0) { position = new Vector2D_1["default"](0, 0); }
        if (scale === void 0) { scale = new Vector2D_1["default"](1, 1); }
        if (rotation === void 0) { rotation = 0; }
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var events_1 = __webpack_require__(26);
var Scene_1 = __webpack_require__(11);
var GameObject_1 = __webpack_require__(4);
var index_1 = __webpack_require__(1);
var Manager = (function () {
    function Manager(id, width, height) {
        this.render = new index_1.Render(id, width, height);
        this.setScene(new Scene_1["default"]());
        events_1["default"](this);
    }
    Manager.prototype.setScene = function (scene) {
        this.scene = scene;
        this.scene.setRender(this.render);
    };
    Manager.prototype.getWidth = function () {
        return this.render.getWidth();
    };
    Manager.prototype.getHeight = function () {
        return this.render.getHeight();
    };
    Manager.prototype.getTranslation = function () {
        return this.scene.renderWorld.translation;
    };
    Manager.prototype.run = function (method, data) {
        this.scene.run(method, data);
    };
    Manager.prototype.add = function (gameObject) {
        this.scene.add(new GameObject_1["default"](gameObject));
    };
    Manager.prototype.update = function () {
        this.scene.update();
        this.start();
    };
    Manager.prototype.start = function () {
        requestAnimationFrame(this.update.bind(this));
    };
    return Manager;
}());
exports.__esModule = true;
exports["default"] = Manager;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Vector2D_1 = __webpack_require__(28);
function initEvents(manager) {
    var keys = {};
    setInterval(function () {
        Object.keys(keys).some(function (key) {
            if (keys[key]) {
                if (!manager.scene.paused) {
                    manager.scene.run('keyPress', [keys]);
                }
                return true;
            }
        });
    }, 20);
    document.addEventListener('mousedown', function (event) {
        if (!manager.scene.paused) {
            manager.scene.run('globalMouseDown', [new Vector2D_1["default"](event.clientX, event.clientY)]);
            manager.scene.runMouseDown(event, [new Vector2D_1["default"](event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('mousemove', function (event) {
        if (!manager.scene.paused) {
            manager.scene.run('globalMouseMove', [new Vector2D_1["default"](event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('mouseup', function (event) {
        if (!manager.scene.paused) {
            manager.scene.run('globalMouseUp', [new Vector2D_1["default"](event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('keydown', function (event) {
        keys[event.key] = true;
        if (!manager.scene.paused) {
            manager.scene.run('keyDown', [event.key]);
        }
    });
    document.addEventListener('keyup', function (event) {
        keys[event.key] = false;
        if (!manager.scene.paused) {
            manager.scene.run('keyUp', [event.key]);
        }
    });
}
exports.__esModule = true;
exports["default"] = initEvents;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lienzo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lienzo__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'character',
  position: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, 0),
  scale: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](2, 2),
  collider: 'fit',

  spriteSheet: {
    src: 'assets/walk.png',
    size: new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](16, 28)
  },

  script: {
    init () {
      this.jump = true
      this.reversed = false
      this.coins = 0
      this.health = 30

      let x = new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Graphic"](function () {
        //this.rect(-this.position.x + 50, this.position.y + 50, 30 * 10, 30)
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

      setTimeout(() => {
        this.scene.renderWorld.remove(x)
      }, 1000)
    },

    collision: function () {
      // console.log('2x Ouch..')
    },

    keyPress (keys) {
      if (keys['ArrowRight']) {
        this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](1000, 0))
      }
      if (keys['ArrowLeft']) {
        this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](-1000, 0))
      }
      if (keys['ArrowDown']) {
        this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, 1000))
      }
      if (keys['ArrowUp']) {
        this.run('jump')
      }

      if (keys['d']) {
        this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](1000, 0))
      }
      if (keys['a']) {
        this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](-1000, 0))
      }
      if (keys['s']) {
        this.collider.addForce(new __WEBPACK_IMPORTED_MODULE_0__lienzo__["Vector"](0, 1000))
      }
      if (keys['w']) {
        this.run('jump')
      }
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
/* 28 */
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


/***/ })
/******/ ]);
});