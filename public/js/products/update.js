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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/products/update.js":
/*!*****************************************!*\
  !*** ./resources/js/products/update.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Update = /*#__PURE__*/function () {
  function Update() {
    _classCallCheck(this, Update);

    var thisClass = this;
    $(document).ready(function () {
      thisClass.config();
      thisClass.listen();
    });
  }

  _createClass(Update, [{
    key: "config",
    value: function config() {
      this.elements = {
        inputTitle: $("input:text[name=title]"),
        inputDescription: $("input:text[name=description]"),
        inputPrice: $("input:text[name=price]"),
        btnSubmit: $(".btn-submit"),
        titleMessages: $('.title-messages'),
        descriptionMessages: $('.description-messages'),
        priceMessages: $('.price-messages')
      };
    }
  }, {
    key: "listen",
    value: function listen() {
      this.handleUpdateProduct();
    }
  }, {
    key: "handleUpdateProduct",
    value: function handleUpdateProduct() {
      var title = this.elements.inputTitle;
      var description = this.elements.inputDescription;
      var price = this.elements.inputPrice;
      var btnSubmit = this.elements.btnSubmit;
      var titleMessages = this.elements.titleMessages;
      var descriptionMessages = this.elements.descriptionMessages;
      var priceMessages = this.elements.priceMessages;
      btnSubmit.click(function () {
        var productId = $(this).data('productId');
        var url = "/api/update/".concat(productId);
        var csrfToken = btnSubmit.data('csrfToken');
        titleMessages.text('');
        descriptionMessages.text('');
        priceMessages.text('');
        $.ajax({
          type: 'PUT',
          url: url,
          data: {
            '_token': csrfToken,
            'title': title.val(),
            'description': description.val(),
            'price': price.val()
          }
        }).then(function (res) {
          if (res[0] != 0) {
            alert(res[1]);
            location.href = '/';
          } else {
            _.forEach(res[1], function (value, key) {
              if (key == 'title') {
                titleMessages.text(value).css('color', 'red');
              }

              if (key == 'description') {
                descriptionMessages.text(value).css('color', 'red');
              }

              if (key == 'price') {
                priceMessages.text(value).css('color', 'red');
              }
            });
          }
        });
      });
    }
  }]);

  return Update;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Update());

/***/ }),

/***/ 3:
/*!***********************************************!*\
  !*** multi ./resources/js/products/update.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/STU-ExLaravel/resources/js/products/update.js */"./resources/js/products/update.js");


/***/ })

/******/ });