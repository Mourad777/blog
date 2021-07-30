(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/js/components/blog/Photo/CameraInfo.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/blog/Photo/CameraInfo.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_blog_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/blog/svgs */ "./resources/js/pages/blog/svgs.js");



var CameraInfo = function CameraInfo(_ref) {
  var photo = _ref.photo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      color: 'rgb(255, 255, 255)',
      background: 'rgb(36,36,36)',
      margin: 10,
      opacity: 0.6,
      borderRadius: 10,
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 200,
      padding: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_blog_svgs__WEBPACK_IMPORTED_MODULE_1__["Camera"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginLeft: 10
    }
  }, "Camera ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, !!photo.camera && !photo.camera.includes('undefined') ? photo.camera : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 200,
      padding: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_blog_svgs__WEBPACK_IMPORTED_MODULE_1__["Lens"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginLeft: 10
    }
  }, "Lens ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, !!photo.lens && !photo.lens.includes('undefined') && photo.lens.includes('mm') && !photo.lens.includes(',') && !photo.camera.toLowerCase().includes('gopro') && !photo.lens.includes('000') ? (photo.lens || '').substring(0, 18) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 200,
      padding: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_blog_svgs__WEBPACK_IMPORTED_MODULE_1__["FocalLength"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginLeft: 10
    }
  }, "Focal Length ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, !!photo.focal_length && !photo.focal_length.includes('NaN') ? photo.focal_length : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 200,
      padding: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_blog_svgs__WEBPACK_IMPORTED_MODULE_1__["Aperture"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginLeft: 10
    }
  }, "Aperture ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, !!photo.aperture && !photo.aperture.includes('NaN') && !photo.aperture.includes('f0') ? photo.aperture : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 200,
      padding: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_blog_svgs__WEBPACK_IMPORTED_MODULE_1__["ShutterSpeed"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginLeft: 10
    }
  }, "Shutter ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, !!photo.shutter_speed && !photo.shutter_speed.includes('undefined') ? photo.shutter_speed : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 200,
      padding: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_blog_svgs__WEBPACK_IMPORTED_MODULE_1__["Iso"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginLeft: 10
    }
  }, "Iso ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, !!photo.iso && !photo.iso.includes('undefined') ? photo.iso : ''))));
};

/* harmony default export */ __webpack_exports__["default"] = (CameraInfo);

/***/ }),

/***/ "./resources/js/pages/blog/Photos/Photo.jsx":
/*!**************************************************!*\
  !*** ./resources/js/pages/blog/Photos/Photo.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svgs */ "./resources/js/pages/blog/svgs.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility */ "./resources/js/pages/blog/utility.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _admin_util_countries_iso__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/util/countries-iso */ "./resources/js/pages/admin/util/countries-iso.jsx");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_blog_Photo_CameraInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/blog/Photo/CameraInfo */ "./resources/js/components/blog/Photo/CameraInfo.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Photo = function Photo(_ref) {
  var winSize = _ref.winSize;
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["useParams"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      photo = _useState2[0],
      setPhoto = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isHideCameraInfo = _useState4[0],
      setisHideCameraInfo = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var getPhoto = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var photoResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_utility__WEBPACK_IMPORTED_MODULE_6__["AppUrl"], "api/photo/").concat(params.photoId));

              case 2:
                photoResponse = _context.sent;
                console.log('photo response', photoResponse);
                setPhoto(photoResponse.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getPhoto() {
        return _ref2.apply(this, arguments);
      };
    }();

    getPhoto();
    var triggers = gsap_all__WEBPACK_IMPORTED_MODULE_9__["ScrollTrigger"].getAll();
    triggers.forEach(function (tr) {
      tr.kill();
    });
  }, []);

  var handleCameraInfo = function handleCameraInfo(e) {
    setisHideCameraInfo(!isHideCameraInfo);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: '#ece7e2',
      height: '100%',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      opacity: photo ? 1 : 0,
      transition: "opacity 1s ease-in",
      width: "100vw",
      height: "100%",
      zIndex: 10,
      position: "fixed",
      top: 0,
      right: 0,
      backgroundColor: "rgb(218, 173, 134)"
    },
    className: "photo-preview-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    content: "Home",
    onClick: function onClick() {
      history.push('/');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      left: 0,
      margin: winSize === 1 ? "auto" : "",
      right: winSize === 1 ? 0 : "",
      position: "absolute",
      height: "100%",
      width: "100vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: '30px 30px 0 30px'
    },
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "image",
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'black',
      position: 'relative'
    }
  }, !isHideCameraInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_blog_Photo_CameraInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
    photo: photo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: {
      border: "10px solid white",
      height: '60vh',
      width: winSize === 1 ? "100%" : winSize === 2 ? 500 : 800,
      objectFit: "contain"
    },
    src: photo.src,
    alt: ""
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "extra-img-info-container",
    style: {
      color: 'white',
      background: '#daad86'
    }
  }, photo.photographer && photo.date_taken && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: "#fff4e1"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    style: {
      fontStyle: 'italic'
    },
    variant: "subtitle1"
  }, "Taken by ", photo.photographer, " ", photo.date_taken ? ' on ' + new Date(photo.date_taken).toDateString() : '')), !photo.photographer && photo.date_taken && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: "#fff4e1"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    style: {
      fontStyle: 'italic'
    },
    variant: "subtitle1"
  }, "Taken on ", new Date(photo.date_taken).toDateString())), !photo.photographer && !photo.date_taken && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: "#fff4e1"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    style: {
      fontStyle: 'italic'
    },
    variant: "subtitle1"
  }, "Taken by ", photo.photographer, " ")), photo.country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return history.push("/destination/".concat(photo.country));
    },
    style: {
      display: 'flex',
      color: "#fff4e1",
      background: '#DAAD86',
      padding: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svgs__WEBPACK_IMPORTED_MODULE_2__["Location"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "body1"
  }, _admin_util_countries_iso__WEBPACK_IMPORTED_MODULE_8__["countries"].find(function (c) {
    return c.value === photo.country;
  }).text)), photo.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "h5"
  }, photo.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "h6"
  }, photo.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: "100%",
      backgroundColor: "rgb(218, 173, 134)",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: "white",
      paddingLeft: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    className: "photo-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
    checked: isHideCameraInfo,
    onChange: handleCameraInfo,
    toggle: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: '#fff',
      marginLeft: 10,
      fontSize: '1.2em'
    }
  }, "Hide camera info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      width: 200,
      cursor: "pointer",
      padding: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svgs__WEBPACK_IMPORTED_MODULE_2__["DownArrow"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      marginLeft: 33,
      fontSize: '1.2em'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: {
      color: '#fff'
    },
    href: photo.src,
    download: true
  }, "Download")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ })

}]);