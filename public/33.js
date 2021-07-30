(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./resources/js/pages/blog/Category/Category.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/pages/blog/Category/Category.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _Photos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Photos */ "./resources/js/pages/blog/Category/Photos.jsx");
/* harmony import */ var _Countries_country_codes_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Countries/country-codes.json */ "./resources/js/pages/blog/Countries/country-codes.json");
var _Countries_country_codes_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../Countries/country-codes.json */ "./resources/js/pages/blog/Countries/country-codes.json", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _admin_util_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin/util/api */ "./resources/js/pages/admin/util/api.js");
/* harmony import */ var _public_assets_video_icon_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../public/assets/video-icon.jpg */ "./public/assets/video-icon.jpg");
/* harmony import */ var _public_assets_video_icon_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_video_icon_jpg__WEBPACK_IMPORTED_MODULE_11__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function capitalize(str) {
  var capStr = str.charAt(0).toUpperCase() + str.slice(1);
  return capStr;
}

var Country = function Country(_ref) {
  var winSize = _ref.winSize,
      height = _ref.height;
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  var countryIso = params.country;
  var selectedCategory = params.categoryId;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      photos = _useState4[0],
      setPhotos = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      videos = _useState6[0],
      setVideos = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      countryThumbnails = _useState10[0],
      setCountryThumbnails = _useState10[1];

  var getInitialData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!countryIso) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return Object(_admin_util_api__WEBPACK_IMPORTED_MODULE_10__["getCountryThumbnails"])(setCountryThumbnails, setIsLoading);

            case 3:
              _context.next = 5;
              return Object(_admin_util_api__WEBPACK_IMPORTED_MODULE_10__["getCategoryContent"])(countryIso, selectedCategory, setPosts, setPhotos, setVideos);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getInitialData() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var triggers = gsap_all__WEBPACK_IMPORTED_MODULE_6__["ScrollTrigger"].getAll();
    triggers.forEach(function (tr) {
      tr.kill();
    });
    getInitialData();
  }, []);
  var videoContainerWidth;

  if (winSize === 1) {
    videoContainerWidth = 300;
  }

  if (winSize === 2) {
    videoContainerWidth = 650;
  }

  if (winSize >= 3) {
    videoContainerWidth = 800;
  }

  var postColumns, gridWidth;

  if (winSize > 2 && posts.length > 2) {
    postColumns = 'repeat(3, 1fr)';
    gridWidth = 800;
  }

  if (winSize === 2 || posts.length === 2) {
    postColumns = 'repeat(2, 1fr)';
    gridWidth = 650;
  }

  if (winSize === 1 || posts.length === 1) {
    postColumns = 'repeat(1, 1fr)';
    gridWidth = 300;
  }

  var countryThumbnail = (countryThumbnails.find(function (t) {
    return t.country === countryIso;
  }) || {}).image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: '100%',
      width: '100%',
      background: '#ece7e2',
      minHeight: '100vh',
      paddingBottom: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 300,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      zIndex: 1,
      top: 50,
      left: '50%',
      transform: 'translateX(-50%)',
      position: 'absolute',
      background: 'rgb(0,0,0,0.6)',
      borderRadius: 2,
      padding: 20,
      minWidth: 300
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: 'center',
      margin: '20px 0',
      fontSize: winSize === 1 ? '2em' : '2.5em',
      fontFamily: "Mulish",
      color: 'white'
    }
  }, capitalize(_Countries_country_codes_json__WEBPACK_IMPORTED_MODULE_8__[countryIso] || selectedCategory))), !!countryThumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: countryThumbnail,
    style: {
      width: '100%',
      maxHeight: 400,
      objectFit: 'cover',
      position: 'absolute'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    content: "Home",
    onClick: function onClick() {
      history.push('/');
    }
  })), posts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "posts-category-container",
    style: {
      padding: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgb(218, 173, 134)',
      fontSize: '3em',
      fontFamily: 'Mulish'
    }
  }, "Posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid',
      maxWidth: gridWidth,
      margin: '0 auto',
      gridGap: '3rem',
      gridTemplateColumns: postColumns
    }
  }, posts.map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: p.title,
      onClick: function onClick() {
        return history.push("/post/".concat(p.id));
      },
      style: {
        borderRadius: 5,
        background: '#fff',
        height: '50vh',
        minHeight: 330,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: '25%',
        padding: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontFamily: 'Mulish',
        fontWeight: 600,
        // color: '#daad86',
        textAlign: 'center',
        fontSize: '1.5em',
        maxWidth: '100%'
      }
    }, p.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: '40%',
        background: '#e2e2e2'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: p.image,
      style: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        fontStyle: 'italic',
        color: '#8b8b8b',
        padding: 10,
        textAlign: 'center'
      }
    }, moment__WEBPACK_IMPORTED_MODULE_9___default()(new Date(p.created_at).getTime()).format("MMMM DD YYYY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        padding: 10
      }
    }, !!p.summary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontFamily: 'Mulish'
      }
    }, " ", "".concat(p.summary.substring(0, 100), " ").concat(p.summary.length > 99 ? '...' : ''))));
  }))), photos.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "photo-category-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Photos__WEBPACK_IMPORTED_MODULE_7__["default"], {
    winSize: winSize,
    height: height,
    photos: photos
  })), videos.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "video-category-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgb(218, 173, 134)',
      fontSize: '3em',
      fontFamily: 'Mulish',
      paddingTop: 30
    }
  }, "Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, videos.map(function (v) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "video[".concat(v.id, "]"),
      style: {
        background: '#fff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: winSize === 1 ? 'column' : 'row',
        borderRadius: 5,
        maxWidth: videoContainerWidth,
        margin: 'auto',
        color: 'rgb(0,0,0)',
        cursor: 'pointer',
        marginBottom: 20
      },
      onClick: function onClick() {
        return history.push("/video/".concat(v.id));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        width: winSize === 1 ? '100%' : '50%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: v.thumbnail || _public_assets_video_icon_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
      style: {
        objectFit: 'cover',
        width: '100%',
        borderRadius: winSize === 1 ? '5px 5px 0 0' : '5px 0 0 5px'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: 10,
        height: winSize === 1 ? 200 : '100%',
        width: winSize === 1 ? '100%' : '50%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '1.5em',
        textAlign: 'center',
        margin: 0
      }
    }, v.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontStyle: 'italic',
        color: '#8b8b8b',
        padding: 10,
        textAlign: 'center'
      }
    }, moment__WEBPACK_IMPORTED_MODULE_9___default()(new Date(v.created_at).getTime()).format("MMMM DD YYYY"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        textAlign: 'center'
      }
    }, v.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Country);

/***/ }),

/***/ "./resources/js/pages/blog/Category/Photos.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/pages/blog/Category/Photos.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function PhotoGallery(_ref) {
  var winSize = _ref.winSize,
      height = _ref.height,
      photos = _ref.photos;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentImage = _useState2[0],
      setCurrentImage = _useState2[1];

  var handleIndexChange = function handleIndexChange(value) {// setCurrentImage(value.curIndex)
  };

  var handleDragStart = function handleDragStart(e) {
    return e.preventDefault();
  };

  var galleryWidth;
  if (winSize === 1) galleryWidth = '100%';
  if (winSize === 2) galleryWidth = '50%';
  if (winSize > 2) galleryWidth = '30%';
  var items = photos.map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: p.src,
      onClick: function onClick() {
        return history.push("/photo/".concat(p.id));
      },
      style: {
        objectFit: 'contain',
        width: '100%',
        cursor: 'pointer'
      },
      onDragStart: handleDragStart
    }));
  });
  var isLargeMobileLandscape = false;

  if (winSize === 2 && height < 420) {
    isLargeMobileLandscape = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      background: '#daad86',
      padding: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative',
      margin: 'auto',
      maxWidth: isLargeMobileLandscape ? 200 : 600
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgb(236, 231, 226)',
      fontSize: '3em',
      fontFamily: 'Mulish',
      paddingTop: 30
    }
  }, "Photos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    disableDotsControls: items.length > 10 ? true : false,
    canAutoPlay: true,
    isAutoPlaying: true,
    onSlideChanged: handleIndexChange,
    items: items
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PhotoGallery);

/***/ }),

/***/ "./resources/js/pages/blog/Countries/country-codes.json":
/*!**************************************************************!*\
  !*** ./resources/js/pages/blog/Countries/country-codes.json ***!
  \**************************************************************/
/*! exports provided: AF, AX, AL, DZ, AS, AD, AO, AI, AQ, AG, AR, AM, AW, AU, AT, AZ, BS, BH, BD, BB, BY, BE, BZ, BJ, BM, BT, BO, BA, BW, BV, BR, IO, BN, BG, BF, BI, KH, CM, CA, CV, KY, CF, TD, CL, CN, CX, CC, CO, KM, CG, CD, CK, CR, CI, HR, CU, CY, CZ, DK, DJ, DM, DO, EC, EG, SV, GQ, ER, EE, ET, FK, FO, FJ, FI, FR, GF, PF, TF, GA, GM, GE, DE, GH, GI, GR, GL, GD, GP, GU, GT, GG, GN, GW, GY, HT, HM, VA, HN, HK, HU, IS, IN, ID, IR, IQ, IE, IM, IL, IT, JM, JP, JE, JO, KZ, KE, KI, KR, KP, KW, KG, LA, LV, LB, LS, LR, LY, LI, LT, LU, MO, MK, MG, MW, MY, MV, ML, MT, MH, MQ, MR, MU, YT, MX, FM, MD, MC, MN, ME, MS, MA, MZ, MM, NA, NR, NP, NL, AN, NC, NZ, NI, NE, NG, NU, NF, MP, NO, OM, PK, PW, PS, PA, PG, PY, PE, PH, PN, PL, PT, PR, QA, RE, RO, RU, RW, BL, SH, KN, LC, MF, PM, VC, WS, SM, ST, SA, SN, RS, SC, SL, SG, SK, SI, SB, SO, ZA, GS, ES, LK, SD, SR, SJ, SZ, SE, CH, SY, TW, TJ, TZ, TH, TL, TG, TK, TO, TT, TN, TR, TM, TC, TV, UG, UA, AE, GB, US, UM, UY, UZ, VU, VE, VN, VG, VI, WF, EH, YE, ZM, ZW, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AF\":\"Afghanistan\",\"AX\":\"Aland Islands\",\"AL\":\"Albania\",\"DZ\":\"Algeria\",\"AS\":\"American Samoa\",\"AD\":\"Andorra\",\"AO\":\"Angola\",\"AI\":\"Anguilla\",\"AQ\":\"Antarctica\",\"AG\":\"Antigua And Barbuda\",\"AR\":\"Argentina\",\"AM\":\"Armenia\",\"AW\":\"Aruba\",\"AU\":\"Australia\",\"AT\":\"Austria\",\"AZ\":\"Azerbaijan\",\"BS\":\"Bahamas\",\"BH\":\"Bahrain\",\"BD\":\"Bangladesh\",\"BB\":\"Barbados\",\"BY\":\"Belarus\",\"BE\":\"Belgium\",\"BZ\":\"Belize\",\"BJ\":\"Benin\",\"BM\":\"Bermuda\",\"BT\":\"Bhutan\",\"BO\":\"Bolivia\",\"BA\":\"Bosnia And Herzegovina\",\"BW\":\"Botswana\",\"BV\":\"Bouvet Island\",\"BR\":\"Brazil\",\"IO\":\"British Indian Ocean Territory\",\"BN\":\"Brunei Darussalam\",\"BG\":\"Bulgaria\",\"BF\":\"Burkina Faso\",\"BI\":\"Burundi\",\"KH\":\"Cambodia\",\"CM\":\"Cameroon\",\"CA\":\"Canada\",\"CV\":\"Cape Verde\",\"KY\":\"Cayman Islands\",\"CF\":\"Central African Republic\",\"TD\":\"Chad\",\"CL\":\"Chile\",\"CN\":\"China\",\"CX\":\"Christmas Island\",\"CC\":\"Cocos (Keeling) Islands\",\"CO\":\"Colombia\",\"KM\":\"Comoros\",\"CG\":\"Congo\",\"CD\":\"Congo, Democratic Republic\",\"CK\":\"Cook Islands\",\"CR\":\"Costa Rica\",\"CI\":\"Cote D\\\"Ivoire\",\"HR\":\"Croatia\",\"CU\":\"Cuba\",\"CY\":\"Cyprus\",\"CZ\":\"Czech Republic\",\"DK\":\"Denmark\",\"DJ\":\"Djibouti\",\"DM\":\"Dominica\",\"DO\":\"Dominican Republic\",\"EC\":\"Ecuador\",\"EG\":\"Egypt\",\"SV\":\"El Salvador\",\"GQ\":\"Equatorial Guinea\",\"ER\":\"Eritrea\",\"EE\":\"Estonia\",\"ET\":\"Ethiopia\",\"FK\":\"Falkland Islands (Malvinas)\",\"FO\":\"Faroe Islands\",\"FJ\":\"Fiji\",\"FI\":\"Finland\",\"FR\":\"France\",\"GF\":\"French Guiana\",\"PF\":\"French Polynesia\",\"TF\":\"French Southern Territories\",\"GA\":\"Gabon\",\"GM\":\"Gambia\",\"GE\":\"Georgia\",\"DE\":\"Germany\",\"GH\":\"Ghana\",\"GI\":\"Gibraltar\",\"GR\":\"Greece\",\"GL\":\"Greenland\",\"GD\":\"Grenada\",\"GP\":\"Guadeloupe\",\"GU\":\"Guam\",\"GT\":\"Guatemala\",\"GG\":\"Guernsey\",\"GN\":\"Guinea\",\"GW\":\"Guinea-Bissau\",\"GY\":\"Guyana\",\"HT\":\"Haiti\",\"HM\":\"Heard Island & Mcdonald Islands\",\"VA\":\"Holy See (Vatican City State)\",\"HN\":\"Honduras\",\"HK\":\"Hong Kong\",\"HU\":\"Hungary\",\"IS\":\"Iceland\",\"IN\":\"India\",\"ID\":\"Indonesia\",\"IR\":\"Iran, Islamic Republic Of\",\"IQ\":\"Iraq\",\"IE\":\"Ireland\",\"IM\":\"Isle Of Man\",\"IL\":\"Israel\",\"IT\":\"Italy\",\"JM\":\"Jamaica\",\"JP\":\"Japan\",\"JE\":\"Jersey\",\"JO\":\"Jordan\",\"KZ\":\"Kazakhstan\",\"KE\":\"Kenya\",\"KI\":\"Kiribati\",\"KR\":\"Korea\",\"KP\":\"North Korea\",\"KW\":\"Kuwait\",\"KG\":\"Kyrgyzstan\",\"LA\":\"Lao People\\\"s Democratic Republic\",\"LV\":\"Latvia\",\"LB\":\"Lebanon\",\"LS\":\"Lesotho\",\"LR\":\"Liberia\",\"LY\":\"Libyan Arab Jamahiriya\",\"LI\":\"Liechtenstein\",\"LT\":\"Lithuania\",\"LU\":\"Luxembourg\",\"MO\":\"Macao\",\"MK\":\"Macedonia\",\"MG\":\"Madagascar\",\"MW\":\"Malawi\",\"MY\":\"Malaysia\",\"MV\":\"Maldives\",\"ML\":\"Mali\",\"MT\":\"Malta\",\"MH\":\"Marshall Islands\",\"MQ\":\"Martinique\",\"MR\":\"Mauritania\",\"MU\":\"Mauritius\",\"YT\":\"Mayotte\",\"MX\":\"Mexico\",\"FM\":\"Micronesia, Federated States Of\",\"MD\":\"Moldova\",\"MC\":\"Monaco\",\"MN\":\"Mongolia\",\"ME\":\"Montenegro\",\"MS\":\"Montserrat\",\"MA\":\"Morocco\",\"MZ\":\"Mozambique\",\"MM\":\"Myanmar\",\"NA\":\"Namibia\",\"NR\":\"Nauru\",\"NP\":\"Nepal\",\"NL\":\"Netherlands\",\"AN\":\"Netherlands Antilles\",\"NC\":\"New Caledonia\",\"NZ\":\"New Zealand\",\"NI\":\"Nicaragua\",\"NE\":\"Niger\",\"NG\":\"Nigeria\",\"NU\":\"Niue\",\"NF\":\"Norfolk Island\",\"MP\":\"Northern Mariana Islands\",\"NO\":\"Norway\",\"OM\":\"Oman\",\"PK\":\"Pakistan\",\"PW\":\"Palau\",\"PS\":\"Palestinian Territory, Occupied\",\"PA\":\"Panama\",\"PG\":\"Papua New Guinea\",\"PY\":\"Paraguay\",\"PE\":\"Peru\",\"PH\":\"Philippines\",\"PN\":\"Pitcairn\",\"PL\":\"Poland\",\"PT\":\"Portugal\",\"PR\":\"Puerto Rico\",\"QA\":\"Qatar\",\"RE\":\"Reunion\",\"RO\":\"Romania\",\"RU\":\"Russian Federation\",\"RW\":\"Rwanda\",\"BL\":\"Saint Barthelemy\",\"SH\":\"Saint Helena\",\"KN\":\"Saint Kitts And Nevis\",\"LC\":\"Saint Lucia\",\"MF\":\"Saint Martin\",\"PM\":\"Saint Pierre And Miquelon\",\"VC\":\"Saint Vincent And Grenadines\",\"WS\":\"Samoa\",\"SM\":\"San Marino\",\"ST\":\"Sao Tome And Principe\",\"SA\":\"Saudi Arabia\",\"SN\":\"Senegal\",\"RS\":\"Serbia\",\"SC\":\"Seychelles\",\"SL\":\"Sierra Leone\",\"SG\":\"Singapore\",\"SK\":\"Slovakia\",\"SI\":\"Slovenia\",\"SB\":\"Solomon Islands\",\"SO\":\"Somalia\",\"ZA\":\"South Africa\",\"GS\":\"South Georgia And Sandwich Isl.\",\"ES\":\"Spain\",\"LK\":\"Sri Lanka\",\"SD\":\"Sudan\",\"SR\":\"Suriname\",\"SJ\":\"Svalbard And Jan Mayen\",\"SZ\":\"Swaziland\",\"SE\":\"Sweden\",\"CH\":\"Switzerland\",\"SY\":\"Syrian Arab Republic\",\"TW\":\"Taiwan\",\"TJ\":\"Tajikistan\",\"TZ\":\"Tanzania\",\"TH\":\"Thailand\",\"TL\":\"Timor-Leste\",\"TG\":\"Togo\",\"TK\":\"Tokelau\",\"TO\":\"Tonga\",\"TT\":\"Trinidad And Tobago\",\"TN\":\"Tunisia\",\"TR\":\"Turkey\",\"TM\":\"Turkmenistan\",\"TC\":\"Turks And Caicos Islands\",\"TV\":\"Tuvalu\",\"UG\":\"Uganda\",\"UA\":\"Ukraine\",\"AE\":\"United Arab Emirates\",\"GB\":\"United Kingdom\",\"US\":\"United States\",\"UM\":\"United States Outlying Islands\",\"UY\":\"Uruguay\",\"UZ\":\"Uzbekistan\",\"VU\":\"Vanuatu\",\"VE\":\"Venezuela\",\"VN\":\"Vietnam\",\"VG\":\"Virgin Islands, British\",\"VI\":\"Virgin Islands, U.S.\",\"WF\":\"Wallis And Futuna\",\"EH\":\"Western Sahara\",\"YE\":\"Yemen\",\"ZM\":\"Zambia\",\"ZW\":\"Zimbabwe\"}");

/***/ })

}]);