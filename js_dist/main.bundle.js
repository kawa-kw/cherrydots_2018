/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/js_dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runLogoAnimation__ = __webpack_require__(2);


$(document).ready(() => {

    Object(__WEBPACK_IMPORTED_MODULE_0__runLogoAnimation__["a" /* default */])();
    console.log('animacja działa? działa!');
});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runLogoAnimation;
function runLogoAnimation() {

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    var tl = new TimelineLite();

    //---------------
    // LOGO ANIMATION
    //---------------
    // logo vars
    var $fullLogos = $('#sketch > *, #logo-border, #logo-color, #dev-bcg-intro-color');
    var $logoSketch = $('#sketch');
    var $base1 = $('#base1');
    var $base2 = $('#base2');
    var $base3 = $('#base3');
    var $lineSet1 = $('#line2, #line20, #line22, #line14');
    var $lineSet2 = $('#line4, #line30, #line12, #line15');
    var $lineSet3 = $('#line10, #line23, #line24, #line16');
    var $lineSet4 = $('#line13, #line27, #line29, #line21');
    var $lineSet5 = $('#line1, #line3, #line5, #line25');
    var $lineSet6 = $('#line9, #line19, #line28');
    var $lineSet7 = $('#line6, #line7, #line8, #line31');
    var $lineSet8 = $('#line11, #line17, #line18, #line26');
    var $logoBorder = $('#logo-border');
    var $logoColor = $('#logo-color');

    tl.to($fullLogos, 0, { opacity: 0 }).to($base1, 1, { opacity: 1, ease: Linear.easeOut }).to($base2, 1, { opacity: 1, ease: Linear.easeOut }).to($base3, 1, { opacity: 1, ease: Linear.easeOut }).to($lineSet1, .9, { opacity: 1, ease: Linear.easeOut }, '-=.1').to($lineSet2, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet3, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet4, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet5, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet6, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet7, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet8, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').addLabel('logoBorder', '+=2').to($logoBorder, 2, { opacity: 1, ease: Linear.easeOut }, 'logoBorder').addLabel('logoColor', '+=2.5').to($logoColor, 2, { opacity: 1, ease: Linear.easeOut }, 'logoColor').addLabel('sketchFade', '-=.5').to($logoBorder, .5, { opacity: 0 }).to($logoSketch, 3, { opacity: 0 }, 'sketchFade');
};

/***/ })
/******/ ]);