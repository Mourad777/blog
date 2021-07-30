(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/pages/admin/create-post/editor.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/pages/admin/create-post/editor.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);", ""]);

// module
exports.push([module.i, "/* .tox-tinymce {\r\n    height: 400px !important;\r\n} */\r\n\r\n.tox-statusbar {\r\n    visibility: hidden !important;\r\n    background-color: white;\r\n}\r\n\r\n", ""]);

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

/***/ "./resources/js/pages/admin/create-post/CreatePost.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/pages/admin/create-post/CreatePost.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var _blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blog/StyledComponents */ "./resources/js/pages/blog/StyledComponents.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.css */ "./resources/js/pages/admin/create-post/editor.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _blog_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blog/utility */ "./resources/js/pages/blog/utility.js");
/* harmony import */ var _util_countries_iso__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/countries-iso */ "./resources/js/pages/admin/util/countries-iso.jsx");
/* harmony import */ var _components_TagInput_TagInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/TagInput/TagInput */ "./resources/js/components/TagInput/TagInput.jsx");
/* harmony import */ var _util_helper_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/helper-functions */ "./resources/js/pages/admin/util/helper-functions.js");
/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/api */ "./resources/js/pages/admin/util/api.js");
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













var fontStyles = "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago;Merriweather=merriweather; Montserrat=montserrat; Quicksand=quicksand; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats";

var CreatePost = function CreatePost(_ref) {
  var isEditing = _ref.isEditing;
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["useParams"])();
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      country = _useState6[0],
      setCountry = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      author = _useState8[0],
      setAuthor = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      summary = _useState10[0],
      setSummary = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      content = _useState12[0],
      setContent = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      categories = _useState14[0],
      setCategories = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedCategories = _useState16[0],
      setSelectedCategories = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState18 = _slicedToArray(_useState17, 2),
      newCategory = _useState18[0],
      setNewCategory = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState20 = _slicedToArray(_useState19, 2),
      tags = _useState20[0],
      setTags = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Write something...'),
      _useState22 = _slicedToArray(_useState21, 2),
      initialContent = _useState22[0],
      setInitialContent = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState24 = _slicedToArray(_useState23, 2),
      isCommentsEnabled = _useState24[0],
      setIsCommentsEnabled = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState26 = _slicedToArray(_useState25, 2),
      isPublished = _useState26[0],
      setIsPublished = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState28 = _slicedToArray(_useState27, 2),
      isLoading = _useState28[0],
      setIsLoading = _useState28[1];

  var fileInputRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

  var handleTitle = function handleTitle(e) {
    setTitle(e.target.value);
  };

  var handleEditorContent = function handleEditorContent(e) {
    setContent(e.target.getContent());
  };

  var handleFileChange = function handleFileChange(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  var handleCountry = function handleCountry(e, _ref2) {
    var value = _ref2.value;
    e.preventDefault();
    setCountry(value);
  };

  var handleAuthor = function handleAuthor(e) {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  var handleSummary = function handleSummary(e) {
    e.preventDefault();
    setSummary(e.target.value);
  };

  var handleNewCategoryField = function handleNewCategoryField(e) {
    setNewCategory(e.target.value);
  };

  var handleComments = function handleComments() {
    setIsCommentsEnabled(!isCommentsEnabled);
  };

  var handlePublished = function handlePublished() {
    setIsPublished(!isPublished);
  };

  var getInitialData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var categoriesResponse, processedCategories, id, post;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_11__["getCategories"])();

            case 2:
              categoriesResponse = _context.sent;
              processedCategories = Object(_util_helper_functions__WEBPACK_IMPORTED_MODULE_10__["processCategories"])(categoriesResponse.data);
              setCategories(processedCategories);

              if (!isEditing) {
                _context.next = 21;
                break;
              }

              id = params.id;
              _context.next = 9;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_11__["initializePostForm"])(id, setIsLoading);

            case 9:
              post = _context.sent;
              setTitle(post.title || '');
              setAuthor(post.author || '');
              setSummary(post.summary || '');
              setIsPublished(!!parseInt(post.is_published));
              setIsCommentsEnabled(!!parseInt(post.is_comments_enabled));
              setSelectedCategories(post.categories.map(function (cat) {
                return cat.name;
              }));
              setCountry(post.country);
              if (post.tags) setTags(JSON.parse(post.tags));
              setInitialContent(post.content);
              setContent(post.content);
              setFile(post.aws_url);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getInitialData() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleNewCategorySubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var formData, categoriesResponse, processedCategories;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              formData = new FormData();
              formData.append('name', newCategory);
              _context2.next = 4;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_11__["submitNewCategory"])(formData, setIsLoading);

            case 4:
              _context2.next = 6;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_11__["getCategories"])();

            case 6:
              categoriesResponse = _context2.sent;
              processedCategories = Object(_util_helper_functions__WEBPACK_IMPORTED_MODULE_10__["processCategories"])(categoriesResponse.data);
              setCategories(processedCategories);
              setNewCategory('');

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleNewCategorySubmit() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleTags = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setTags(value);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleTags(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleForm = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e) {
      var formData, selectedCategoriesIds, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              formData = new FormData();

              if (file && !isEditing) {
                formData.append('image', file);
              }

              if (file && isEditing) {
                if (file instanceof File) {
                  //this will be an updated image
                  formData.append('image', file);
                } else {
                  //this will be the unchanged image
                  formData.append('image', 'sameImage');
                }
              }

              selectedCategoriesIds = categories.filter(function (cat) {
                return selectedCategories.includes(cat.text);
              }).map(function (cat) {
                return cat._id;
              });
              formData.append('title', title || '');
              formData.append('author', author || '');
              formData.append('summary', summary || '');
              formData.append('content', content || 'Write something...');
              formData.append('selected_categories', JSON.stringify(selectedCategoriesIds));
              formData.append('tags', JSON.stringify(tags));
              formData.append('country', country || '');
              formData.append('is_published', isPublished ? 1 : 0);
              formData.append('is_comments_enabled', isCommentsEnabled ? 1 : 0);
              url = "".concat(_blog_utility__WEBPACK_IMPORTED_MODULE_7__["AppUrl"], "api/posts/save");
              if (isEditing) url = "".concat(_blog_utility__WEBPACK_IMPORTED_MODULE_7__["AppUrl"], "api/posts/update/").concat(params.id);
              _context4.next = 18;
              return Object(_util_api__WEBPACK_IMPORTED_MODULE_11__["updatePostForm"])(url, formData, setIsLoading);

            case 18:
              history.push('/admin/posts');

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleForm(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getInitialData();
  }, []);

  var handleSelectedCategories = function handleSelectedCategories(e, _ref7) {
    var label = _ref7.label,
        checked = _ref7.checked;

    if (checked) {
      setSelectedCategories([].concat(_toConsumableArray(selectedCategories), [label]));
    } else {
      setSelectedCategories(selectedCategories.filter(function (el) {
        return el !== label;
      }));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: 'auto',
      maxWidth: 800
    }
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 5,
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_Loader_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, isEditing ? 'Edit Post' : 'New Post'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: title,
    onChange: handleTitle,
    placeholder: "Title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Author"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledFormTextInput"], {
    value: author,
    onChange: handleAuthor,
    placeholder: "Author"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledThumbnailPreview"], {
    file: file instanceof File ? URL.createObjectURL(file) : file
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledBlueButton"], {
    onClick: function onClick() {
      return fileInputRef.current.click();
    },
    icon: "image"
  }, "Upload Thumbnail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledRedButton"], {
    onClick: function onClick() {
      return setFile(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "trash icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: fileInputRef,
    type: "file",
    hidden: true,
    onChange: handleFileChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
    options: _util_countries_iso__WEBPACK_IMPORTED_MODULE_8__["countries"],
    onChange: handleCountry,
    value: country
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
    onChange: handleNewCategoryField,
    placeholder: "New Category"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledBlueButton"], {
    onClick: handleNewCategorySubmit,
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
  }, "Tags"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TagInput_TagInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    values: tags,
    onChange: handleTags
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 200,
      padding: 20,
      fontSize: '1.2em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      marginRight: 10
    }
  }, "Published"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: !!isPublished,
    onChange: function onChange() {
      return handlePublished();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 200,
      padding: 20,
      fontSize: '1.2em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      marginRight: 10
    }
  }, "Comments Enabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: !!isCommentsEnabled,
    onChange: function onChange() {
      return handleComments();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["TextArea"], {
    value: summary,
    onChange: handleSummary,
    style: {
      minHeight: 100,
      width: '100%'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
    initialValue: initialContent,
    apiKey: "lmbdxengrz1nuue2c1bunerjwmcqgvzoptjjdr3w0o1imj5n",
    init: {
      plugins: 'link image code autoresize',
      toolbar: 'insert undo redo | bold italic | alignleft aligncenter alignright | code',
      images_upload_handler: _util_api__WEBPACK_IMPORTED_MODULE_11__["editor_photo_upload_handler"],
      content_style: "@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');\n                             @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');\n                             @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\n                             img {\n                                 max-width:100%;\n                                 object-fit:cover;\n                             }\n                            ",
      font_formats: fontStyles
    },
    onChange: handleEditorContent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["StyledSubmitButton"], {
    onClick: handleForm
  }, isEditing ? 'Update' : 'Post')));
};

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./resources/js/pages/admin/create-post/editor.css":
/*!*********************************************************!*\
  !*** ./resources/js/pages/admin/create-post/editor.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./editor.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/pages/admin/create-post/editor.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);