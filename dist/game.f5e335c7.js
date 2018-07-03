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
})({65:[function(require,module,exports) {
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
},{}],45:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var vector_class_1 = __importDefault(require("vector_class"));
var Transform = /** @class */function () {
    function Transform(configuration) {
        this.position = new vector_class_1["default"](0, 0);
        this.scale = new vector_class_1["default"](1, 1);
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
        this.position = new vector_class_1["default"](x, y);
    };
    Transform.prototype.globalTranslate = function (x, y) {
        this.position.add(new vector_class_1["default"](x, y));
    };
    Transform.prototype.translate = function (x, y) {
        var translationY = vector_class_1["default"].angleMagnitude(this.rotation, y);
        var translationX = vector_class_1["default"].angleMagnitude(this.rotation + Math.PI / 2, x);
        this.position.add(new vector_class_1["default"](translationY[0], translationY[1]));
        this.position.add(new vector_class_1["default"](translationX[0], translationX[1]));
    };
    return Transform;
}();
exports["default"] = Transform;
},{"vector_class":65}],63:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
function id() {
    var ID = '';
    for (var i = 0; i < 10; i++) {
        ID += Math.round(Math.random() * 100);
    }
    return ID;
}
exports["default"] = id;
},{}],46:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var id_1 = __importDefault(require("../utils/id"));
var Identifier = /** @class */function () {
    function Identifier(name, tags) {
        this.id = id_1["default"]();
        this.name = name;
        this.tags = tags;
    }
    return Identifier;
}();
exports["default"] = Identifier;
},{"../utils/id":63}],47:[function(require,module,exports) {
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
},{}],31:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var TransformComponent_1 = __importDefault(require("../Components/TransformComponent"));
var IdentifierComponent_1 = __importDefault(require("../Components/IdentifierComponent"));
var ScriptComponent_1 = __importDefault(require("../Components/ScriptComponent"));
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
},{"../Components/TransformComponent":45,"../Components/IdentifierComponent":46,"../Components/ScriptComponent":47}],53:[function(require,module,exports) {
var define;
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
},{}],54:[function(require,module,exports) {
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
},{}],69:[function(require,module,exports) {
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
},{}],70:[function(require,module,exports) {
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
},{"dibujo":54}],71:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var id_1 = __importDefault(require("../utils/id"));
var Identifier = /** @class */function () {
    function Identifier(name, tags) {
        this.id = id_1["default"]();
        this.name = name;
        this.tags = tags;
    }
    return Identifier;
}();
exports["default"] = Identifier;
},{"../utils/id":63}],72:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var vector_class_1 = __importDefault(require("vector_class"));
var Transform = /** @class */function () {
    function Transform(configuration) {
        this.position = new vector_class_1["default"](0, 0);
        this.scale = new vector_class_1["default"](1, 1);
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
        this.position = new vector_class_1["default"](x, y);
    };
    Transform.prototype.globalTranslate = function (x, y) {
        this.position.add(new vector_class_1["default"](x, y));
    };
    Transform.prototype.translate = function (x, y) {
        var translationY = vector_class_1["default"].angleMagnitude(this.rotation, y);
        var translationX = vector_class_1["default"].angleMagnitude(this.rotation + Math.PI / 2, x);
        this.position.add(new vector_class_1["default"](translationY[0], translationY[1]));
        this.position.add(new vector_class_1["default"](translationX[0], translationX[1]));
    };
    return Transform;
}();
exports["default"] = Transform;
},{"vector_class":65}],73:[function(require,module,exports) {
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
},{"dibujo":54,"vector_class":65}],74:[function(require,module,exports) {
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
},{"vector_class":65,"fisica":53}],61:[function(require,module,exports) {
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
},{"./ScriptComponent":69,"./AnimationComponent":70,"./IdentifierComponent":71,"./TransformComponent":72,"./SpriteComponent":73,"./ColliderComponent":74}],48:[function(require,module,exports) {
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
var Component = __importStar(require("../components/components"));
var GameObject_1 = __importDefault(require("../Managers/GameObject"));
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
},{"../components/components":61,"../Managers/GameObject":31}],32:[function(require,module,exports) {
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
var fisica = __importStar(require("fisica"));
var dibujo_1 = require("dibujo");
var loader_1 = __importDefault(require("../utils/loader"));
console.log(fisica);
var GameScene = /** @class */function () {
    function GameScene(config) {
        this.world = new Rect.World();
        this.background = '#000000';
        this.paused = false;
        this.gameObjects = [];
        this.world = new Rect.World(config.gravity);
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
},{"fisica":53,"dibujo":54,"../utils/loader":48}],33:[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var vector_class_1 = require("vector_class");
var dibujo_1 = require("dibujo");
var GameManager = /** @class */function (_super) {
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
}(dibujo_1.Render);
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
            manager.gameScene.run('globalMouseDown', [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
            manager.gameScene.runMouseDown(event, [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('mousemove', function (event) {
        if (!manager.gameScene.paused) {
            manager.gameScene.run('globalMouseMove', [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
        }
    });
    document.addEventListener('mouseup', function (event) {
        if (!manager.gameScene.paused) {
            manager.gameScene.run('globalMouseUp', [new vector_class_1.Vector2D(event.clientX, event.clientY)]);
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
            if (mouse.x > gameObject.Transform.position.x + translation.x && mouse.x < gameObject.Transform.position.x + translation.x + gameObject.collider.size.x && mouse.y > gameObject.Transform.position.y + translation.y && mouse.y < gameObject.Transform.position.y + translation.y + gameObject.collider.size.y) {
                gameObject.run('mouseDown', mouse);
            }
        }
    });
}
},{"vector_class":65,"dibujo":54}],34:[function(require,module,exports) {
"use strict";

exports.__esModule = true;
function getNumber(number) {
    return number * Math.random() * symbol();
}
exports.getNumber = getNumber;
function symbol(probability) {
    if (probability === void 0) {
        probability = 0.5;
    }
    if (Math.random() < probability) {
        return -1;
    } else {
        return 1;
    }
}
exports.symbol = symbol;
function random(finish, start) {
    if (finish === void 0) {
        finish = 1;
    }
    if (start === void 0) {
        start = 0;
    }
    return Math.random() * (finish - start) + start;
}
exports.random = random;
function randomList(len, finish, start) {
    if (len === void 0) {
        len = 2;
    }
    if (finish === void 0) {
        finish = 1;
    }
    if (start === void 0) {
        start = 0;
    }
    var list = [];
    for (var i = 0; i < len; i++) {
        list.push(random(finish, start));
    }
    return list;
}
exports.randomList = randomList;
function randomMatrix(finish, start, width, heigth) {
    if (finish === void 0) {
        finish = 1;
    }
    if (start === void 0) {
        start = 0;
    }
    if (width === void 0) {
        width = 2;
    }
    if (heigth === void 0) {
        heigth = 2;
    }
    var list = [];
    for (var i = 0; i < heigth; i++) {
        list.push(randomList(width, finish, start));
    }
    return list;
}
exports.randomMatrix = randomMatrix;
function noise(resolution, len, finish, start) {
    if (resolution === void 0) {
        resolution = 3;
    }
    if (len === void 0) {
        len = 10;
    }
    if (finish === void 0) {
        finish = 1;
    }
    if (start === void 0) {
        start = 0;
    }
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
},{}],13:[function(require,module,exports) {
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
var GameObject_1 = __importDefault(require("./Managers/GameObject"));
exports.GameObject = GameObject_1["default"];
var GameScene_1 = __importDefault(require("./Managers/GameScene"));
exports.Scene = GameScene_1["default"];
var GameManager_1 = __importDefault(require("./Managers/GameManager"));
exports.Manager = GameManager_1["default"];
var vector_class_1 = require("vector_class");
var dibujo_1 = require("dibujo");
exports.Color = dibujo_1.Color;
var dibujo_2 = require("dibujo");
exports.Graphic = dibujo_2.Graphic;
var number = __importStar(require("./utils/number"));
exports.number = number;
var Vector = vector_class_1.Vector2D;
exports.Vector = Vector;
},{"./Managers/GameObject":31,"./Managers/GameScene":32,"./Managers/GameManager":33,"vector_class":65,"dibujo":54,"./utils/number":34}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lienzo = require('../../lienzo');

exports.default = {
  Identifier: {
    name: 'character'
  },

  Transform: {
    position: new _lienzo.Vector(0, 0),
    scale: new _lienzo.Vector(2, 2)
  },

  Collider: {
    size: 'fit'
  },

  Animation: {
    src: 'assets/walk.png',
    frameRate: 100,
    size: new _lienzo.Vector(16, 28)
  },

  Script: {
    /*
    init () {
    this.jump = true
    this.coins = 0
    this.health = 30
    let x = new Graphic(function () {
    this.text(`Monedas: ${this.gameObject.coins}`, -this.position.x + 50, this.position.y + 75, { fillStyle: '#FFF', font: 'bold 34px Helvetica', lineWidth: 1 }, true)
    }, new Vector(0, 0))
    x.gameObject = this
    this.scene.stage.add(x)
    let health = new Graphic(function () {
    this.rect(this.position.x, this.position.y - 15, 90, 10, '#000')
    this.rect(this.position.x, this.position.y - 15, this.gameObject.health * 3, 10, '#F00')
    this.text(`Health ${this.gameObject.health}`, this.position.x, this.position.y - 20, { fillStyle: '#000', font: 'bold 16px Arial' })
    }, this.transform.position)
    health.gameObject = this
    this.scene.stage.add(health)
    },
    mouseDown (mouse) {
    let x = new Graphic(function () {
    this.rect(this.position.x, this.position.y - 25, 30 * 10, 30)
    this.text(`Monedas ${this.gameObject.coins}`, this.position.x, this.position.y, { fillStyle: '#f00', font: '34px Arial bold' })
    }, this.transform.position)
    x.gameObject = this
    this.scene.stage.add(x)
    setTimeout(() => this.scene.stage.remove(x), 1000)
    },
    */
    keyPress: function keyPress(keys) {
      if (keys['d']) this.Components.Collider.collider.addForce(new _lienzo.Vector(1000, 0));
      if (keys['a']) this.Components.Collider.collider.addForce(new _lienzo.Vector(-1000, 0));
      if (keys['s']) this.Components.Collider.collider.addForce(new _lienzo.Vector(0, 1000));
      if (keys['w']) this.Components.Collider.collider.addForce(new _lienzo.Vector(0, -1000));
    },
    update: function update() {
      console.log('hola');
      if (this.Transform.position.y > window.innerHeight) {
        console.log('U lose');
      }
    },
    jump: function jump() {
      var _this = this;

      if (this.jump) {
        this.jump = false;
        this.collider.addForce(new _lienzo.Vector(0, -40000));
        setTimeout(function () {
          _this.jump = true;
        }, 1500);
      }
    }
  }
};
},{"../../lienzo":13}],18:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lienzo = require('../../lienzo');

exports.default = {
  Transform: {
    position: new _lienzo.Vector(500, 600),
    scale: new _lienzo.Vector(0.5, 0.5)
  },
  Collider: {
    size: 'fit',
    static: true
  },
  Animation: {
    src: 'assets/coin.png',
    frameRate: 100,
    size: new _lienzo.Vector(700 / 6, 200)
  },
  Script: {
    collision: function collision(other) {
      if (other.gameObject.name === 'character') {
        other.gameObject.coins++;
        this.destroy();
      }
    }
  }
};
},{"../../lienzo":13}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lienzo = require('../../lienzo');

exports.default = {
  Transform: {
    position: new _lienzo.Vector(0, 500),
    scale: new _lienzo.Vector(5, 2)
  },
  Collider: {
    size: 'fit',
    static: true
  },
  Sprite: 'assets/grass.png'
};
},{"../../lienzo":13}],20:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lienzo = require('../../lienzo');

exports.default = {
  Transform: {
    position: new _lienzo.Vector(600, 250),
    scale: new _lienzo.Vector(0.5, 0.5)
  },
  Collider: {
    size: new _lienzo.Vector(100, 50)
  },
  Sprite: 'assets/Slime.png',
  Script: {
    update: function update() {
      // this.collider.addForce(new Vector(80, 0))
    }
  }
};
},{"../../lienzo":13}],21:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lienzo = require('../../lienzo');

exports.default = {
  Transform: {
    position: new _lienzo.Vector(0, 0),
    scale: new _lienzo.Vector(0.5, 0.5)
  },
  Sprite: 'assets/clouds.png',
  Script: {
    update: function update() {
      this.Transform.position.x += 5;
    }
  }
};
},{"../../lienzo":13}],22:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Transform: {
    position: 'fixed'
  },
  Sprite: 'assets/bg.png'
};
},{}],8:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
console.log('hola');
var lienzo_1 = require("../lienzo");
// Prefabs
var character_1 = __importDefault(require("./Prefabs/character"));
var coins_1 = __importDefault(require("./Prefabs/coins"));
var grass_1 = __importDefault(require("./Prefabs/grass"));
var slime_1 = __importDefault(require("./Prefabs/slime"));
var clouds_1 = __importDefault(require("./Prefabs/clouds"));
var background_1 = __importDefault(require("./Prefabs/background"));
var scene = new lienzo_1.Scene({
    system: 'Rect',
    background: '#9FE6FF',
    gravity: new lienzo_1.Vector(0, 0),
    gameObjects: [character_1["default"], coins_1["default"], grass_1["default"], slime_1["default"], clouds_1["default"], background_1["default"]]
});
var manager = new lienzo_1.Manager();
manager.setScene(scene);
scene.add([background_1["default"], character_1["default"], coins_1["default"], grass_1["default"], slime_1["default"], clouds_1["default"]]);
manager.start();
},{"../lienzo":13,"./Prefabs/character":17,"./Prefabs/coins":18,"./Prefabs/grass":19,"./Prefabs/slime":20,"./Prefabs/clouds":21,"./Prefabs/background":22}],41:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51021' + '/');
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
},{}]},{},[41,8], null)
//# sourceMappingURL=/game.f5e335c7.map