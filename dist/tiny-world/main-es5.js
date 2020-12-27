function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/c-card/c-card.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/c-card/c-card.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntitiesCardPracticeCCardCCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"c_card\">\n  <div class=\"c_top\">\n    <div class=\"img\">\n      <img [src]=this.personData.imgurl>\n    </div>\n    <div class=\"city\">{{this.personData.city}}</div>\n  </div>\n  <div class=\"c_bott\">\n    <div class=\"cname\">{{this.personData.name}}</div>\n    <div class=\"card_info\">{{this.personData.info}}</div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/card-demo/card-demo.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/card-demo/card-demo.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntitiesCardPracticeCardDemoCardDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg\">\n  <div class=\"title\">\n    <div class=\"text_bc\">OUR TEAM\n      <div class=\"title_text\">師資團隊</div>\n    </div>\n  </div>\n  <div class=\"page\">\n    <div class=\"line\">\n      <div class=\"pageBlock\">1/5</div>\n    </div>\n  </div>\n  <div class=\"role\">\n    <div class=\"left\">\n      <app-side-card [personData]= \"leftMemDat\"></app-side-card>\n    </div>\n    <div class=\"cside\">\n      <div class=\"arror\" (click)=\"this.infoChange('left')\"><</div>\n      <app-c-card [personData]= \"cenMemDat\"></app-c-card>\n      <div class=\"arror\" (click)=\"this.infoChange('right')\">></div>\n    </div>\n    <div class=\"right\">\n      <app-side-card [personData]= \"rightMemDat\"></app-side-card>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/side-card/side-card.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/side-card/side-card.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntitiesCardPracticeSideCardSideCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card_top\">\n    <div class=\"name\">{{this.personData.name}}</div>\n    <div class=\"city\">{{this.personData.city}}</div>\n  </div>\n  <div class=\"card_photo\">\n    <img [src]=this.personData.imgurl>\n  </div>\n  <div class=\"card_info\">\n    {{this.personData.info}}\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/formBuilderPractice/form-bu/form-bu.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/formBuilderPractice/form-bu/form-bu.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEntitiesFormBuilderPracticeFormBuFormBuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>form-bu works!</p>\n<p>data1: {{this.data1}}</p>\n<button (click)=\"this.addData1()\">增加data1</button>\n<p>data2: {{this.data2}}</p>\n<button (click)=\"this.addData2()\" (change)=\"this.mm()\">增加data2</button>\n<p>相乘結果:{{this.mm()}}</p>\n<p>{{mm2()}}</p>\n<a routerLink=\"card\">按我</a>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _entities_formBuilderPractice_form_bu_form_bu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entities/formBuilderPractice/form-bu/form-bu.component */
    "./src/app/entities/formBuilderPractice/form-bu/form-bu.component.ts");
    /* harmony import */


    var _entities_cardPractice_card_demo_card_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./entities/cardPractice/card-demo/card-demo.component */
    "./src/app/entities/cardPractice/card-demo/card-demo.component.ts");

    var routes = [{
      path: '',
      component: _entities_formBuilderPractice_form_bu_form_bu_component__WEBPACK_IMPORTED_MODULE_3__["FormBuComponent"]
    }, {
      path: 'card',
      component: _entities_cardPractice_card_demo_card_demo_component__WEBPACK_IMPORTED_MODULE_4__["CardDemoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'tiny-world';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _entities_cardPractice_side_card_side_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./entities/cardPractice/side-card/side-card.component */
    "./src/app/entities/cardPractice/side-card/side-card.component.ts");
    /* harmony import */


    var _entities_cardPractice_c_card_c_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./entities/cardPractice/c-card/c-card.component */
    "./src/app/entities/cardPractice/c-card/c-card.component.ts");
    /* harmony import */


    var _entities_formBuilderPractice_form_bu_form_bu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./entities/formBuilderPractice/form-bu/form-bu.component */
    "./src/app/entities/formBuilderPractice/form-bu/form-bu.component.ts");
    /* harmony import */


    var _entities_cardPractice_card_demo_card_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./entities/cardPractice/card-demo/card-demo.component */
    "./src/app/entities/cardPractice/card-demo/card-demo.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _entities_cardPractice_side_card_side_card_component__WEBPACK_IMPORTED_MODULE_6__["SideCardComponent"], _entities_cardPractice_c_card_c_card_component__WEBPACK_IMPORTED_MODULE_7__["CCardComponent"], _entities_formBuilderPractice_form_bu_form_bu_component__WEBPACK_IMPORTED_MODULE_8__["FormBuComponent"], _entities_cardPractice_card_demo_card_demo_component__WEBPACK_IMPORTED_MODULE_9__["CardDemoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/entities/cardPractice/c-card/c-card.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/entities/cardPractice/c-card/c-card.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntitiesCardPracticeCCardCCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".c_card{\r\n  position: relative;\r\n  width:25vw;\r\n  height: 350px\r\n}\r\n\r\n.c_card .c_top{\r\n  position: relative;\r\n}\r\n\r\n.c_card .c_top .city{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 20px;\r\n  display: flex;\r\n  align-items:center;\r\n  justify-content: center;\r\n  width: 61.15px;\r\n  padding: 2px 0;\r\n  z-index: 1;\r\n}\r\n\r\n.c_card .c_top .img{\r\n  position: absolute;\r\n}\r\n\r\n.c_card .c_top .img img{\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.c_card .c_bott{\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  top:130%;\r\n  right: 0;\r\n}\r\n\r\n.c_card .c_bott .card_info{\r\n  display: flex;\r\n  align-items:center;\r\n  justify-content: center;\r\n}\r\n\r\n.city{\r\n  background-color: #C9D4C8;\r\n  padding: 2px 10px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXRpZXMvY2FyZFByYWN0aWNlL2MtY2FyZC9jLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NhcmRQcmFjdGljZS9jLWNhcmQvYy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY19jYXJke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoyNXZ3O1xyXG4gIGhlaWdodDogMzUwcHhcclxufVxyXG5cclxuLmNfY2FyZCAuY190b3B7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY19jYXJkIC5jX3RvcCAuY2l0eXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA2MS4xNXB4O1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jX2NhcmQgLmNfdG9wIC5pbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY19jYXJkIC5jX3RvcCAuaW1nIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG4uY19jYXJkIC5jX2JvdHR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdG9wOjEzMCU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jX2NhcmQgLmNfYm90dCAuY2FyZF9pbmZve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2l0eXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzlENEM4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/entities/cardPractice/c-card/c-card.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/entities/cardPractice/c-card/c-card.component.ts ***!
    \******************************************************************/

  /*! exports provided: CCardComponent */

  /***/
  function srcAppEntitiesCardPracticeCCardCCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CCardComponent", function () {
      return CCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CCardComponent = /*#__PURE__*/function () {
      function CCardComponent() {
        _classCallCheck(this, CCardComponent);
      }

      _createClass(CCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.personData);
        }
      }]);

      return CCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CCardComponent.prototype, "personData", void 0);
    CCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-c-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./c-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/c-card/c-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./c-card.component.css */
      "./src/app/entities/cardPractice/c-card/c-card.component.css"))["default"]]
    })], CCardComponent);
    /***/
  },

  /***/
  "./src/app/entities/cardPractice/card-demo/card-demo.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/entities/cardPractice/card-demo/card-demo.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntitiesCardPracticeCardDemoCardDemoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg{\r\n  background-color: rgb(221, 221, 221);\r\n  padding: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  z-index:-1;\r\n}\r\n\r\n.title{\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 15%;\r\n}\r\n\r\n.title .text_bc{\r\n  position: relative;\r\n  top:25%;\r\n  font-size:56px;\r\n  height: 56px;\r\n  color:#fff;\r\n\r\n}\r\n\r\n.title .text_bc .title_text{\r\n  position: absolute;\r\n  top:10%;\r\n  left:0;\r\n  bottom: 0;\r\n  right:0;\r\n  text-align: center;\r\n  font-size:26px;\r\n  line-height: 56px;\r\n  color:#000;\r\n  z-index:1;\r\n}\r\n\r\n.page{\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 10%;\r\n}\r\n\r\n.page .line{\r\n  position: relative;\r\n  background-color: #000;\r\n  height: 1px;\r\n  width:250px;\r\n  top:50%;\r\n}\r\n\r\n.page .line .pageBlock{\r\n  position: absolute;\r\n  top:0;\r\n  left:40%;\r\n  bottom: 0;\r\n  right:40%;\r\n  text-align: center;\r\n  line-height: 1px;\r\n  background-color: rgb(221, 221, 221);\r\n\r\n}\r\n\r\n.role{\r\n  display: flex;\r\n  height: 75%;\r\n  font-family: 微軟正黑體;\r\n  padding: 0 200px 0 200px;\r\n}\r\n\r\n.role .left{\r\n  width: 25%;\r\n}\r\n\r\n.role .cside{\r\n  width: 50%;\r\n  display: flex;\r\n}\r\n\r\n.role .right{\r\n  width: 25%;\r\n}\r\n\r\n.cside{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.arror{\r\n  margin-top:45%;\r\n  width:40px;\r\n  height:40px;\r\n  background-color: #f0f0f0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content:center;\r\n  font-size: 24px;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXRpZXMvY2FyZFByYWN0aWNlL2NhcmQtZGVtby9jYXJkLWRlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVOztBQUVaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUdBO0VBQ0UsVUFBVTtBQUNaOztBQUlBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9lbnRpdGllcy9jYXJkUHJhY3RpY2UvY2FyZC1kZW1vL2NhcmQtZGVtby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgei1pbmRleDotMTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbi50aXRsZSAudGV4dF9iY3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOjI1JTtcclxuICBmb250LXNpemU6NTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuXHJcbn1cclxuXHJcbi50aXRsZSAudGV4dF9iYyAudGl0bGVfdGV4dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjEwJTtcclxuICBsZWZ0OjA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZToyNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gIGNvbG9yOiMwMDA7XHJcbiAgei1pbmRleDoxO1xyXG59XHJcblxyXG4ucGFnZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4ucGFnZSAubGluZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDoyNTBweDtcclxuICB0b3A6NTAlO1xyXG59XHJcblxyXG4ucGFnZSAubGluZSAucGFnZUJsb2Nre1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjQwJTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6NDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuXHJcbn1cclxuXHJcbi5yb2xle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgZm9udC1mYW1pbHk6IOW+rui7n+ato+m7kemrlDtcclxuICBwYWRkaW5nOiAwIDIwMHB4IDAgMjAwcHg7XHJcbn1cclxuXHJcbi5yb2xlIC5sZWZ0e1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5yb2xlIC5jc2lkZXtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG4ucm9sZSAucmlnaHR7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuXHJcblxyXG4uY3NpZGV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm9ye1xyXG4gIG1hcmdpbi10b3A6NDUlO1xyXG4gIHdpZHRoOjQwcHg7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/entities/cardPractice/card-demo/card-demo.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/entities/cardPractice/card-demo/card-demo.component.ts ***!
    \************************************************************************/

  /*! exports provided: CardDemoComponent */

  /***/
  function srcAppEntitiesCardPracticeCardDemoCardDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardDemoComponent", function () {
      return CardDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardDemoComponent = /*#__PURE__*/function () {
      function CardDemoComponent() {
        _classCallCheck(this, CardDemoComponent);

        var jsonData = [{
          "id": 1,
          "name": "林雲尻老師",
          "city": "新北市",
          "info": "帥帥小喳喳",
          "imgurl": "https://www.descalp.com/archive/image/model/images/te-5.jpg"
        }, {
          "id": 2,
          "name": "齊智豪老師",
          "city": "新北市",
          "info": "帥帥不喳喳",
          "imgurl": "https://www.descalp.com/archive/image/model/images/te-1.jpg"
        }, {
          "id": 3,
          "name": "可愛小子愈",
          "city": "新北市",
          "info": "可愛到不行",
          "imgurl": "https://www.descalp.com/archive/image/model/images/te-2.jpg"
        }, {
          "id": 2,
          "name": "齊智豪66師",
          "city": "新北市",
          "info": "帥帥不喳喳",
          "imgurl": "https://www.descalp.com/archive/image/model/images/te-4.jpg"
        }];
        this.memberList = jsonData;
      }

      _createClass(CardDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.memberList);
          this.mainMemID = 1;
          this.giveChild(this.mainMemID);
        }
      }, {
        key: "giveChild",
        value: function giveChild(id) {
          var listSiz = this.memberList.length;
          this.cenMemDat = this.memberList[id];

          if (id === 0) {
            this.leftMemDat = this.memberList[listSiz - 1];
            this.rightMemDat = this.memberList[1];
          } else if (id === listSiz - 1) {
            this.leftMemDat = this.memberList[id - 1];
            this.rightMemDat = this.memberList[0];
          } else {
            this.leftMemDat = this.memberList[id - 1];
            this.rightMemDat = this.memberList[id + 1];
          }
        }
      }, {
        key: "infoChange",
        value: function infoChange(side) {
          var listSiz = this.memberList.length;

          if (side === 'left') {
            this.mainMemID = this.mainMemID - 1;

            if (this.mainMemID === -1) {
              this.mainMemID = listSiz - 1;
            }
          }

          if (side === 'right') {
            this.mainMemID = this.mainMemID + 1;

            if (this.mainMemID === listSiz) {
              this.mainMemID = 0;
            }
          }

          console.log(this.mainMemID);
          this.giveChild(this.mainMemID);
        }
      }]);

      return CardDemoComponent;
    }();

    CardDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-demo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-demo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/card-demo/card-demo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-demo.component.css */
      "./src/app/entities/cardPractice/card-demo/card-demo.component.css"))["default"]]
    })], CardDemoComponent);
    /***/
  },

  /***/
  "./src/app/entities/cardPractice/side-card/side-card.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/entities/cardPractice/side-card/side-card.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntitiesCardPracticeSideCardSideCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\r\n  padding-top: 30%;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  width: 15vw;\r\n\r\n}\r\n\r\n.card .card_top{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.card .card_top .name{\r\n  top: 60%;\r\n}\r\n\r\n.card .card_top .city{\r\n  top: 60%;\r\n}\r\n\r\n.card .card_photo{\r\n  height: 50%;\r\n  width:100%;\r\n}\r\n\r\n.card .card_photo img{\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.card .card_info{\r\n  padding-top: 20px;\r\n  width:100%;\r\n}\r\n\r\n.city{\r\n  background-color: #C9D4C8;\r\n  padding: 2px 10px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXRpZXMvY2FyZFByYWN0aWNlL3NpZGUtY2FyZC9zaWRlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lbnRpdGllcy9jYXJkUHJhY3RpY2Uvc2lkZS1jYXJkL3NpZGUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZy10b3A6IDMwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDE1dnc7XHJcblxyXG59XHJcblxyXG4uY2FyZCAuY2FyZF90b3B7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkX3RvcCAubmFtZXtcclxuICB0b3A6IDYwJTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmRfdG9wIC5jaXR5e1xyXG4gIHRvcDogNjAlO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZF9waG90b3tcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZF9waG90byBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZF9pbmZve1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5jaXR5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDOUQ0Qzg7XHJcbiAgcGFkZGluZzogMnB4IDEwcHhcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/entities/cardPractice/side-card/side-card.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/entities/cardPractice/side-card/side-card.component.ts ***!
    \************************************************************************/

  /*! exports provided: SideCardComponent */

  /***/
  function srcAppEntitiesCardPracticeSideCardSideCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideCardComponent", function () {
      return SideCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SideCardComponent = /*#__PURE__*/function () {
      function SideCardComponent() {
        _classCallCheck(this, SideCardComponent);
      }

      _createClass(SideCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.personData);
        }
      }]);

      return SideCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SideCardComponent.prototype, "personData", void 0);
    SideCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/cardPractice/side-card/side-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-card.component.css */
      "./src/app/entities/cardPractice/side-card/side-card.component.css"))["default"]]
    })], SideCardComponent);
    /***/
  },

  /***/
  "./src/app/entities/formBuilderPractice/form-bu/form-bu.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/entities/formBuilderPractice/form-bu/form-bu.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEntitiesFormBuilderPracticeFormBuFormBuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2Zvcm1CdWlsZGVyUHJhY3RpY2UvZm9ybS1idS9mb3JtLWJ1LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/entities/formBuilderPractice/form-bu/form-bu.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/entities/formBuilderPractice/form-bu/form-bu.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FormBuComponent */

  /***/
  function srcAppEntitiesFormBuilderPracticeFormBuFormBuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBuComponent", function () {
      return FormBuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormBuComponent = /*#__PURE__*/function () {
      function FormBuComponent() {
        _classCallCheck(this, FormBuComponent);

        this.data1 = 0;
        this.data2 = 0;
        this.data = 0;
      }

      _createClass(FormBuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.data1;
          // this.data2;
        }
      }, {
        key: "addData1",
        value: function addData1() {
          this.data1++;
        }
      }, {
        key: "addData2",
        value: function addData2() {
          this.data2++;
        }
      }, {
        key: "mm",
        value: function mm() {
          var a = this.data1 * 10;
          var b = this.data2 * this.data2;
          console.log(a, b);
          console.log(a * b);
          return a * b;
        }
      }, {
        key: "mm2",
        value: function mm2() {
          return this.mm() * this.mm();
        }
      }, {
        key: "myfunc",
        value: function myfunc() {
          console.log('梓毓被愛了');
        }
      }]);

      return FormBuComponent;
    }();

    FormBuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-bu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-bu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/formBuilderPractice/form-bu/form-bu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-bu.component.css */
      "./src/app/entities/formBuilderPractice/form-bu/form-bu.component.css"))["default"]]
    })], FormBuComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\David Huang\Desktop\practice_dvd\tiny-world\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map