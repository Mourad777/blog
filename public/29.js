(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/admin/Loader/Loader.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/admin/Loader/Loader.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lds-dual-ring {\r\n    display: inline-block;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-dual-ring:after {\r\n    content: \" \";\r\n    display: block;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border-radius: 50%;\r\n    border: 6px solid #3f51b5;\r\n    border-color: #3f51b5 transparent #3f51b5 transparent;\r\n    -webkit-animation: lds-dual-ring 1.2s linear infinite;\r\n            animation: lds-dual-ring 1.2s linear infinite;\r\n  }\r\n  @-webkit-keyframes lds-dual-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-dual-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  ", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/admin/Loader/Loader.css":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/Loader/Loader.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Loader.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/admin/Loader/Loader.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/admin/Loader/Loader.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/Loader/Loader.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.css */ "./resources/js/components/admin/Loader/Loader.css");
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loader_css__WEBPACK_IMPORTED_MODULE_1__);



var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-dual-ring"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./resources/js/pages/admin/categories/Categories.jsx":
/*!************************************************************!*\
  !*** ./resources/js/pages/admin/categories/Categories.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blog/utility */ "./resources/js/pages/blog/utility.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _blog_StyledComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blog/StyledComponents */ "./resources/js/pages/blog/StyledComponents.js");
/* harmony import */ var _components_admin_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/admin/Loader/Loader */ "./resources/js/components/admin/Loader/Loader.jsx");
/* harmony import */ var _util_helper_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/helper-functions */ "./resources/js/pages/admin/util/helper-functions.js");
/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/api */ "./resources/js/pages/admin/util/api.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Categories = function Categories(_ref) {
  var winSize = _ref.winSize;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      categories = _useState2[0],
      setCategories = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      categoryEditing = _useState4[0],
      setCategoryEditing = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      newCategory = _useState6[0],
      setNewCategory = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      existingCategory = _useState8[0],
      setExistingCategory = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isLoading = _useState10[0],
      setIsLoading = _useState10[1];

  var fetchCategories = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var categoriesResponse, processedCategories;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.next = 3;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_8__["getCategories"])();

            case 3:
              categoriesResponse = _context.sent;
              processedCategories = Object(_util_helper_functions__WEBPACK_IMPORTED_MODULE_7__["processCategories"])(categoriesResponse.data);
              setCategories(processedCategories);
              setIsLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchCategories() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchCategories();
  }, []);

  var handleNewCategory = function handleNewCategory(e) {
    setNewCategory(e.target.value);
  };

  var handleExistingCategory = function handleExistingCategory(e) {
    setExistingCategory(e.target.value);
  };

  var handleEditCategory = function handleEditCategory(id) {
    setCategoryEditing(id);
    setExistingCategory(categories.find(function (c) {
      return c._id === id;
    }).text);
  };

  var handleDeleteCategory = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_8__["deleteCategory"])(id, setIsLoading);

            case 2:
              fetchCategories();
              setIsLoading(false);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDeleteCategory(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var submitNewCategory = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var formData, newCategoryResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              formData = new FormData();
              formData.append('name', newCategory);
              setIsLoading(true);
              _context3.prev = 3;
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_blog_utility__WEBPACK_IMPORTED_MODULE_2__["AppUrl"], "api/categories/save"), formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 6:
              newCategoryResponse = _context3.sent;
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](3);
              console.log('New category response error', _context3.t0);
              setIsLoading(false);

            case 13:
              console.log('New category response', newCategoryResponse);
              setIsLoading(false);
              setNewCategory('');
              fetchCategories();

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 9]]);
    }));

    return function submitNewCategory() {
      return _ref4.apply(this, arguments);
    };
  }();

  var updateExistingCategory = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
      var formData, updateCategoryResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              formData = new FormData();
              formData.append('name', existingCategory);
              setIsLoading(true);
              _context4.prev = 3;
              _context4.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_blog_utility__WEBPACK_IMPORTED_MODULE_2__["AppUrl"], "api/categories/update/").concat(id), formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 6:
              updateCategoryResponse = _context4.sent;
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](3);
              console.log('Update category response error', _context4.t0);
              setIsLoading(false);

            case 13:
              console.log('Update category response', updateCategoryResponse);
              setIsLoading(false);
              setExistingCategory('');
              fetchCategories();
              setCategoryEditing(null);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 9]]);
    }));

    return function updateExistingCategory(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleCancelEdit = function handleCancelEdit() {
    setCategoryEditing(null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      maxWidth: 800,
      position: 'relative'
    }
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 5,
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: '1.2em'
    }
  }, "New Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["StyledFormTextInput"], {
    disabled: isLoading,
    style: {
      marginTop: 10
    },
    value: newCategory,
    onChange: handleNewCategory,
    placeholder: "New Category"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["StyledSubmitButton"], {
    disabled: isLoading,
    onClick: submitNewCategory,
    style: {
      width: 100,
      margin: '20px 0'
    }
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], null, categories.map(function (c, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
      style: {
        padding: 0
      },
      key: "category[".concat(c._id, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: i % 2 === 0 ? '#f8fafc' : 'rgb(242,242,242)',
        padding: 10
      } // onClick={() => handleMessage(m.id)}

    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'left',
        padding: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        padding: '10px 0',
        fontSize: '1.1em',
        width: 150,
        marginRight: 10
      }
    }, categoryEditing === c._id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["StyledFormTextInput"], {
      disabled: isLoading,
      value: existingCategory,
      onChange: handleExistingCategory,
      placeholder: "Category"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, c.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["StyledBlueButton"], {
      disabled: isLoading,
      style: {
        maxHeight: 37
      },
      onClick: categoryEditing === c._id ? function () {
        return updateExistingCategory(c._id);
      } : function () {
        return handleEditCategory(c._id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      style: {
        fontSize: '0.9em'
      },
      name: categoryEditing === c._id ? 'checkmark' : 'edit outline',
      size: "large"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_5__["StyledRedButton"], {
      disabled: isLoading,
      style: {
        maxHeight: 37
      },
      onClick: categoryEditing === c._id ? function () {
        return handleCancelEdit();
      } : function () {
        return handleDeleteCategory(c._id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      style: {
        fontSize: '0.9em'
      },
      name: categoryEditing === c._id ? 'x' : 'trash alternate outline',
      size: "large"
    })))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ })

}]);