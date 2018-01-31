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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runLogoAnimation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moveBcgLayer__ = __webpack_require__(2);



$(document).ready(() => {

    Object(__WEBPACK_IMPORTED_MODULE_0__runLogoAnimation__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__moveBcgLayer__["a" /* default */])($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-1'), 10);
    Object(__WEBPACK_IMPORTED_MODULE_1__moveBcgLayer__["a" /* default */])($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-2'), 10);
    Object(__WEBPACK_IMPORTED_MODULE_1__moveBcgLayer__["a" /* default */])($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-3'), 30);
    console.log('animacja działa? działa!');
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runLogoAnimation;
function runLogoAnimation() {

    $('.js-intro-bcg-shapes').show().removeClass('hidden');
    $('.js-main').removeClass('main--start');

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    var tl = new TimelineLite();

    //---------------
    // LOGO ANIMATION
    //---------------
    // logo vars
    var $fullLogos = $('#sketch > *, #logo-border, #logo-color, #subtitle');
    var $bgcColorLayers = $('#dev-bcg-intro-color > *');
    var $bcgColor1 = $('#dev-bcg-intro-color #bcg-1, #dev-bcg-intro-color #bcg-1-float-1, #dev-bcg-intro-color #bcg-1-float-2, #dev-bcg-intro-color #bcg-1-float-3, #dev-bcg-intro-color #bcg-1-float-4, #dev-bcg-intro-color #bcg-1-float-5');
    var $bcgColor2 = $('#dev-bcg-intro-color #bcg-2, #dev-bcg-intro-color #bcg-2-float-1, #dev-bcg-intro-color #bcg-2-float-2, #dev-bcg-intro-color #bcg-2-float-3, #dev-bcg-intro-color #bcg-2-float-4, #dev-bcg-intro-color #bcg-2-float-5');
    var $bcgColor3 = $('#dev-bcg-intro-color #bcg-3, #dev-bcg-intro-color #bcg-3-float-1, #dev-bcg-intro-color #bcg-3-float-2, #dev-bcg-intro-color #bcg-3-float-3');
    var $bcgColor4 = $('#dev-bcg-intro-color #bcg-4');
    var $blueBcg = $('.js-intro-bcg');
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

    tl.to($fullLogos, 0, { opacity: 0 }).to($blueBcg, 0, { opacity: 0 }).to($bgcColorLayers, 0, { opacity: 0, scale: 0, transformOrigin: 'center center' }).to($base1, 1, { opacity: 1, ease: Linear.easeOut }).to($base2, 1, { opacity: 1, ease: Linear.easeOut }).to($base3, 1, { opacity: 1, ease: Linear.easeOut }).to($lineSet1, .9, { opacity: 1, ease: Linear.easeOut }, '-=.1').to($lineSet2, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet3, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet4, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet5, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet6, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet7, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').to($lineSet8, .9, { opacity: 1, ease: Linear.easeOut }, '-=.3').addLabel('logoBorder', '+=1').to($logoBorder, 1, { opacity: 1, ease: Linear.easeOut }, 'logoBorder').addLabel('logoColor', '+=1.2').to($logoColor, 1, { opacity: 1, ease: Linear.easeOut }, 'logoColor').addLabel('sketchFade', '-=.5').to($logoBorder, .5, { opacity: 0 }).to($logoSketch, 2, { opacity: 0 }, 'sketchFade').to($('#subtitle'), .8, { opacity: 1 }, '-=1.6').to($bcgColor4, .1, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.4) }, '-=.4').to($bcgColor3, .2, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.4) }, '-=.3').to($bcgColor2, .2, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.4) }, '-=.2').to($bcgColor1, .2, { opacity: 1, scale: 1, ease: Back.easeOut.config(1.4) }, '-=.1').to($blueBcg, .2, { opacity: 1 }).to($('#dev-bcg-intro'), 0, { opacity: 0 }, '-=.4').to($('#bcg-3-float-3'), 100, { x: '+=1000', y: '+=500' }, '-=.2');
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = moveBcgLayer;
function moveBcgLayer(bcg, layer, movementStrength) {
    var window = $(document);
    var dx = 0; // number of px to move layer on X axis
    var dy = 0; // number of px to move layer on Y axis
    var factor = 1 / (3 * movementStrength);

    bcg.mousemove(function (event) {
        var newX = window.width() / 2 - event.clientX;
        var newY = window.height() / 2 - event.clientY;

        function moveSingleLayer() {
            if (Math.abs(dx) >= 100) {
                dx = 0;
            } else {
                dx = (newX - dx) * factor;
            }

            if (Math.abs(dy) >= 50) {
                dy = 0;
            } else {
                dy = (newY - dy) * factor;
            }

            var translate = 'translate(' + dx + 'px, ' + dy + 'px)';

            layer.css({
                '-webit-transform': translate,
                '-moz-transform': translate,
                'transform': translate
            });
        }

        moveSingleLayer();
    });
}

/***/ })
/******/ ]);