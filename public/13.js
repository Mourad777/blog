(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/TagInput/TagInput.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/TagInput/TagInput.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-tagsinput {\r\n    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;\r\n    margin: 0;\r\n    outline: 0;\r\n    -webkit-appearance: none;\r\n    /* tap-highlight-color: rgba(255,255,255,0); */\r\n    line-height: 1.21428571em;\r\n    padding: .67857143em 1em;\r\n    font-size: 1em;\r\n    background: #fff;\r\n    border: 1px solid rgba(34,36,38,.15);\r\n    color: rgba(0,0,0,.87);\r\n    border-radius: .28571429rem;\r\n    box-shadow: 0 0 0 0 transparent inset;\r\n    transition: color .1s ease,border-color .1s ease;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.react-tagsinput:focus {\r\n    color: rgba(0,0,0,.95);\r\n    border-color: #85b7d9;\r\n    border-radius: .28571429rem;\r\n    background: #fff;\r\n    box-shadow: 0 0 0 0 rgb(34 36 38 / 35%) inset;\r\n}", ""]);

// exports


/***/ }),

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

/***/ "./resources/js/components/TagInput/TagInput.css":
/*!*******************************************************!*\
  !*** ./resources/js/components/TagInput/TagInput.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./TagInput.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/TagInput/TagInput.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/TagInput/TagInput.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/TagInput/TagInput.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tagsinput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tagsinput */ "./node_modules/react-tagsinput/react-tagsinput.js");
/* harmony import */ var react_tagsinput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tagsinput__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tagsinput/react-tagsinput.css */ "./node_modules/react-tagsinput/react-tagsinput.css");
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TagInput_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TagInput.css */ "./resources/js/components/TagInput/TagInput.css");
/* harmony import */ var _TagInput_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TagInput_css__WEBPACK_IMPORTED_MODULE_3__);


 // If using WebPack and style-loader.



var TagInput = function TagInput(_ref) {
  var label = _ref.label,
      values = _ref.values,
      onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tagsinput__WEBPACK_IMPORTED_MODULE_1___default.a, {
    inputProps: {
      placeholder: "Add tag"
    },
    value: values,
    onChange: onChange
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TagInput);

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

/***/ "./resources/js/pages/admin/gallery/Gallery.jsx":
/*!******************************************************!*\
  !*** ./resources/js/pages/admin/gallery/Gallery.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var _GalleryItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GalleryItem */ "./resources/js/pages/admin/gallery/GalleryItem.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var SortablePhoto = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__["SortableElement"])(function (item) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GalleryItem__WEBPACK_IMPORTED_MODULE_3__["default"], item);
});
var SortableGallery = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__["SortableContainer"])(function (_ref) {
  var items = _ref.items,
      handleDetails = _ref.handleDetails,
      handleDelete = _ref.handleDelete;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
    photos: items,
    renderImage: function renderImage(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortablePhoto, _extends({
        handleDetails: handleDetails,
        handleDelete: handleDelete
      }, props));
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (SortableGallery);

/***/ }),

/***/ "./resources/js/pages/admin/gallery/GalleryItem.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/pages/admin/gallery/GalleryItem.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _blog_StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blog/StyledComponents */ "./resources/js/pages/blog/StyledComponents.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var imgWithClick = {
  cursor: "pointer"
}; //commentCount

var Photo = function Photo(_ref) {
  var index = _ref.index,
      onClick = _ref.onClick,
      photo = _ref.photo,
      margin = _ref.margin,
      direction = _ref.direction,
      top = _ref.top,
      left = _ref.left,
      handleDetails = _ref.handleDetails,
      handleDelete = _ref.handleDelete,
      galleryType = _ref.galleryType;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  var imgStyle = {
    margin: margin,
    padding: 10,
    objectFit: 'cover',
    width: 300,
    height: 300
  };

  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
    imgStyle.objectFit = 'cover';
  }

  var handleClick = function handleClick(event) {
    onClick(event, {
      photo: photo,
      index: index
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "".concat(galleryType === 'video' ? 'video' : 'photo', "[").concat(photo.id, "]"),
    style: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 400
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: onClick ? _objectSpread(_objectSpread({}, imgStyle), imgWithClick) : imgStyle,
    src: photo.src,
    onClick: onClick ? handleClick : null,
    alt: "img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledBlueButton"], {
    style: {
      width: '100%'
    },
    onClick: function onClick() {
      return handleDetails(photo);
    }
  }, "Details"), galleryType === 'video' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledBlueButton"], {
    style: {
      width: '100%'
    },
    onClick: function onClick() {
      return history.push("/admin/video/".concat(photo.id, "/comments"));
    }
  }, "Comments ", photo.commentCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledRedButton"], {
    style: {
      maxWidth: 100
    },
    onClick: function onClick() {
      return handleDelete(photo.id);
    }
  }, "Delete")));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./resources/js/pages/admin/images/Images.jsx":
/*!****************************************************!*\
  !*** ./resources/js/pages/admin/images/Images.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blog/StyledComponents */ "./resources/js/pages/blog/StyledComponents.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _util_countries_iso__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/countries-iso */ "./resources/js/pages/admin/util/countries-iso.jsx");
/* harmony import */ var _components_TagInput_TagInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/TagInput/TagInput */ "./resources/js/components/TagInput/TagInput.jsx");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(exif_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-calendar-react */ "./node_modules/semantic-ui-calendar-react/dist/commonjs/index.js");
/* harmony import */ var semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_helper_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/helper-functions */ "./resources/js/pages/admin/util/helper-functions.js");
/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/api */ "./resources/js/pages/admin/util/api.js");
/* harmony import */ var _gallery_Gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gallery/Gallery */ "./resources/js/pages/admin/gallery/Gallery.jsx");
/* harmony import */ var _components_admin_Loader_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/admin/Loader/Loader */ "./resources/js/components/admin/Loader/Loader.jsx");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function PhotoGallery() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedPhoto = _useState6[0],
      setSelectedPhoto = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      title = _useState8[0],
      setTitle = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      photographer = _useState10[0],
      setPhotographer = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      camera = _useState12[0],
      setCamera = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState14 = _slicedToArray(_useState13, 2),
      lens = _useState14[0],
      setLens = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState16 = _slicedToArray(_useState15, 2),
      focalLength = _useState16[0],
      setFocalLength = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState18 = _slicedToArray(_useState17, 2),
      iso = _useState18[0],
      setIso = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState20 = _slicedToArray(_useState19, 2),
      shutterSpeed = _useState20[0],
      setShutterSpeed = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState22 = _slicedToArray(_useState21, 2),
      aperture = _useState22[0],
      setAperture = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState24 = _slicedToArray(_useState23, 2),
      description = _useState24[0],
      setDescription = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState26 = _slicedToArray(_useState25, 2),
      dateTaken = _useState26[0],
      setDateTaken = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState28 = _slicedToArray(_useState27, 2),
      tags = _useState28[0],
      setTags = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState30 = _slicedToArray(_useState29, 2),
      country = _useState30[0],
      setCountry = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState32 = _slicedToArray(_useState31, 2),
      categories = _useState32[0],
      setCategories = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState34 = _slicedToArray(_useState33, 2),
      selectedCategories = _useState34[0],
      setSelectedCategories = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState36 = _slicedToArray(_useState35, 2),
      newCategory = _useState36[0],
      setNewCategory = _useState36[1];

  var fileInputRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

  var onSortEnd = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var oldIndex, newIndex, reArrangedPhotos;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              oldIndex = _ref.oldIndex, newIndex = _ref.newIndex;
              reArrangedPhotos = array_move__WEBPACK_IMPORTED_MODULE_2___default()(items, oldIndex, newIndex);
              setItems(reArrangedPhotos); //update order

              Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["updateOrder"])(reArrangedPhotos, 'photo_gallery_order');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSortEnd(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getInitialData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var categoriesResponse, processedCategories;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["getCategories"])();

            case 2:
              categoriesResponse = _context2.sent;
              processedCategories = Object(_util_helper_functions__WEBPACK_IMPORTED_MODULE_9__["processCategories"])(categoriesResponse.data);
              setCategories(processedCategories);
              Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["getPhotos"])(setItems, setIsLoading);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getInitialData() {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getInitialData();
  }, []);

  var handleDate = function handleDate(event, _ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    setDateTaken(value);
  };

  var handleImageUpload = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e) {
      var file, newPhotoFormData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              file = e.target.files[0];
              newPhotoFormData = new FormData();
              newPhotoFormData.append('image', file);
              exif_js__WEBPACK_IMPORTED_MODULE_7___default.a.getData(file, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                var photoMetaData, isMetaDataEmpty, _this$exifdata, Make, Model, Lens, _this$exifdata$FocalL, FocalLength, _this$exifdata$FNumbe, FNumber, _this$exifdata$Exposu, ExposureTime, ISOSpeedRatings, DateTime, newArray, _newArray;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        photoMetaData = this.exifdata;
                        isMetaDataEmpty = photoMetaData && Object.keys(photoMetaData).length === 0 && photoMetaData.constructor === Object;

                        if (isMetaDataEmpty) {
                          _context3.next = 19;
                          break;
                        }

                        _this$exifdata = this.exifdata, Make = _this$exifdata.Make, Model = _this$exifdata.Model, Lens = _this$exifdata.undefined, _this$exifdata$FocalL = _this$exifdata.FocalLength, FocalLength = _this$exifdata$FocalL === void 0 ? {} : _this$exifdata$FocalL, _this$exifdata$FNumbe = _this$exifdata.FNumber, FNumber = _this$exifdata$FNumbe === void 0 ? {} : _this$exifdata$FNumbe, _this$exifdata$Exposu = _this$exifdata.ExposureTime, ExposureTime = _this$exifdata$Exposu === void 0 ? {} : _this$exifdata$Exposu, ISOSpeedRatings = _this$exifdata.ISOSpeedRatings, DateTime = _this$exifdata.DateTime;
                        newPhotoFormData.append('camera', Make + ' ' + Model);
                        newPhotoFormData.append('lens', Lens);
                        newPhotoFormData.append('focal_length', "".concat(FocalLength.numerator / FocalLength.denominator, "mm"));
                        newPhotoFormData.append('aperture', 'f' + FNumber.numerator / FNumber.denominator);
                        newPhotoFormData.append('shutter_speed', "".concat(ExposureTime.numerator, "/").concat(ExposureTime.denominator, "s"));
                        newPhotoFormData.append('iso', ISOSpeedRatings);
                        newPhotoFormData.append('date_taken', DateTime);
                        _context3.next = 13;
                        return Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["uploadPhoto"])(newPhotoFormData, items, setIsLoading);

                      case 13:
                        newArray = _context3.sent;
                        setItems(newArray);
                        Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["updateOrder"])(newArray, 'photo_gallery_order');
                        handleImageDetails(newArray[0]);
                        _context3.next = 25;
                        break;

                      case 19:
                        _context3.next = 21;
                        return Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["uploadPhoto"])(newPhotoFormData, items, setIsLoading);

                      case 21:
                        _newArray = _context3.sent;
                        setItems(_newArray);
                        Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["updateOrder"])(_newArray, 'photo_gallery_order');
                        handleImageDetails(_newArray[0]);

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              })));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleImageUpload(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleImageDetails = function handleImageDetails(photo) {
    setCamera(photo.camera || '');
    setLens(photo.lens || '');
    setFocalLength(photo.focal_length || '');
    setShutterSpeed(photo.shutter_speed || '');
    setIso(photo.iso || '');
    setAperture(photo.aperture || '');
    setTitle(photo.title || '');
    setPhotographer(photo.photographer || '');
    setDescription(photo.description || '');
    setDateTaken(photo.date_taken || '');
    setTags(Array.isArray(JSON.parse(photo.tags ? photo.tags : '""')) ? JSON.parse(photo.tags) : []);
    setSelectedCategories((photo.categories || []).map(function (cat) {
      return cat.name;
    }));
    setCountry(photo.country);
    setSelectedPhoto(photo);
  };

  var submitImageDetails = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var selectedCategoriesIds, formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              selectedCategoriesIds = categories.filter(function (cat) {
                return selectedCategories.includes(cat.text);
              }).map(function (cat) {
                return cat._id;
              });
              formData = new FormData();
              formData.append('title', title || '');
              formData.append('photographer', photographer || '');
              formData.append('description', description || '');
              formData.append('camera', camera || '');
              formData.append('lens', lens || '');
              formData.append('focal_length', focalLength || '');
              formData.append('shutter_speed', shutterSpeed || '');
              formData.append('iso', iso || '');
              formData.append('aperture', aperture || '');
              formData.append('tags', JSON.stringify(tags));
              formData.append('country', country || '');
              formData.append('date_taken', dateTaken || '');
              formData.append('selected_categories', JSON.stringify(selectedCategoriesIds));
              Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["updatePhotoDetails"])(selectedPhoto.id, formData, setIsLoading);
              setSelectedPhoto(null);
              Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["getPhotos"])(setItems, setIsLoading);

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function submitImageDetails() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleSelectedCategories = function handleSelectedCategories(e, _ref8) {
    var label = _ref8.label,
        checked = _ref8.checked;

    if (checked) {
      setSelectedCategories([].concat(_toConsumableArray(selectedCategories), [label]));
    } else {
      setSelectedCategories(selectedCategories.filter(function (el) {
        return el !== label;
      }));
    }
  };

  var submitCategory = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var categoriesResponse, processedCategories;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setNewCategory(newCategory, setIsLoading);
              _context6.next = 3;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["getCategories"])();

            case 3:
              categoriesResponse = _context6.sent;
              processedCategories = Object(_util_helper_functions__WEBPACK_IMPORTED_MODULE_9__["processCategories"])(categoriesResponse.data);
              setCategories(processedCategories);
              setNewCategory('');

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function submitCategory() {
      return _ref9.apply(this, arguments);
    };
  }();

  var handleDeleteImage = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
      var newArray;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["deletePhoto"])(id, setIsLoading);

            case 2:
              // //update order 
              newArray = items.filter(function (p) {
                return p.id !== id;
              });
              Object(_util_api__WEBPACK_IMPORTED_MODULE_10__["updateOrder"])(newArray, 'photo_gallery_order');
              setItems(newArray);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function handleDeleteImage(_x3) {
      return _ref10.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 5,
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_Loader_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: 'center'
    }
  }, "Photo Gallery"), selectedPhoto ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      maxWidth: 500,
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: {
      maxWidth: 500,
      width: '100%'
    },
    src: selectedPhoto.src
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: "Title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Photographer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: photographer,
    onChange: function onChange(e) {
      return setPhotographer(e.target.value);
    },
    placeholder: "Photographer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    placeholder: "Description"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Date Taken"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      paddingLeft: 38
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_8__["DateInput"], {
    name: "date",
    placeholder: "Date Taken",
    value: dateTaken,
    iconPosition: "left",
    onChange: handleDate,
    dateFormat: "YYYY-MM-DD"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Camera"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: camera,
    onChange: function onChange(e) {
      return setCamera(e.target.value);
    },
    placeholder: "Camera"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Lens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: lens,
    onChange: function onChange(e) {
      return setLens(e.target.value);
    },
    placeholder: "Lens"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Focal Length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: focalLength,
    onChange: function onChange(e) {
      return setFocalLength(e.target.value);
    },
    placeholder: "Focal Length"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Shutter Speed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: shutterSpeed,
    onChange: function onChange(e) {
      return setShutterSpeed(e.target.value);
    },
    placeholder: "Shutter Speed"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Aperture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: aperture,
    onChange: function onChange(e) {
      return setAperture(e.target.value);
    },
    placeholder: "Aperture"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Iso"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: iso,
    onChange: function onChange(e) {
      return setIso(e.target.value);
    },
    placeholder: "Iso"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Tags"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TagInput_TagInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    values: tags,
    onChange: function onChange(value) {
      return setTags(value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Create a new category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: newCategory,
    onChange: function onChange(e) {
      return setNewCategory(e.target.value);
    },
    placeholder: "New Category"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledBlueButton"], {
    disabled: !newCategory,
    onClick: submitCategory,
    icon: "image"
  }, "Create Category"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    basic: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Categories: ", selectedCategories.length > 0 ? selectedCategories.join(", ") : "empty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    item: true,
    simple: true,
    text: "Select categories"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, null, categories.map(function (cat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
      key: cat._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      label: cat.text,
      checked: selectedCategories.includes(cat.text),
      onChange: handleSelectedCategories
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    clearable: true,
    placeholder: "Select Country",
    fluid: true,
    search: true,
    selection: true,
    options: _util_countries_iso__WEBPACK_IMPORTED_MODULE_5__["countries"],
    onChange: function onChange(e, _ref11) {
      var value = _ref11.value;
      return setCountry(value);
    },
    value: country
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledSubmitButton"], {
    onClick: function onClick() {
      return submitImageDetails();
    },
    icon: "image"
  }, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledRedButton"], {
    style: {
      maxWidth: 100
    },
    onClick: function onClick() {
      return setSelectedPhoto(null);
    }
  }, "Cancel"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledBlueButton"], {
    onClick: function onClick() {
      return fileInputRef.current.click();
    },
    icon: "image"
  }, "Upload Photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: fileInputRef,
    type: "file",
    hidden: true,
    onChange: handleImageUpload
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gallery_Gallery__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleDetails: handleImageDetails,
    handleDelete: handleDeleteImage,
    items: items,
    onSortEnd: onSortEnd,
    axis: "xy",
    galleryType: "photo"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PhotoGallery);

/***/ })

}]);