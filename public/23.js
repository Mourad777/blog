(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/js/pages/blog/Videos/Video.jsx":
/*!**************************************************!*\
  !*** ./resources/js/pages/blog/Videos/Video.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility */ "./resources/js/pages/blog/utility.js");
/* harmony import */ var _Posts_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Posts/Post */ "./resources/js/pages/blog/Posts/Post.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StyledComponents */ "./resources/js/pages/blog/StyledComponents.js");
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-avatar */ "./node_modules/react-avatar/es/index.js");
/* harmony import */ var _admin_util_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin/util/api */ "./resources/js/pages/admin/util/api.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Video = function Video(_ref) {
  var winSize = _ref.winSize;
  var params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var selectedVideo = params.videoId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      video = _useState2[0],
      setVideo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      comments = _useState4[0],
      setComments = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      content = _useState8[0],
      setComment = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      email = _useState10[0],
      setEmail = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      replyComment = _useState12[0],
      setReplyComment = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isLoading = _useState14[0],
      setIsLoading = _useState14[1];

  var handleName = function handleName(e) {
    setName(e.target.value);
  };

  var handleEmail = function handleEmail(e) {
    setEmail(e.target.value);
  };

  var handleComment = function handleComment(e) {
    setComment(e.target.value);
  };

  var getInitialData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_admin_util_api__WEBPACK_IMPORTED_MODULE_10__["getVideo"])(selectedVideo, setVideo, setIsLoading);

            case 2:
              _context.next = 4;
              return Object(_admin_util_api__WEBPACK_IMPORTED_MODULE_10__["getComments"])(selectedVideo, 'video', setComments, setIsLoading);

            case 4:
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
    getInitialData();
    var triggers = gsap_all__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"].getAll();
    triggers.forEach(function (tr) {
      tr.kill();
    });
  }, []);

  var submitComment = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var formData, videoUploadResponse, commentsRes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              formData = new FormData();
              formData.append('name', name);
              formData.append('email', email);
              formData.append('video_id', selectedVideo);
              formData.append('content', content);
              formData.append('comment_type', 'video');

              if (replyComment) {
                formData.append('comment_id', replyComment.id);
              }

              _context2.next = 9;
              return axios.post("".concat(_utility__WEBPACK_IMPORTED_MODULE_5__["AppUrl"], "api/comments/save"), formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }).then(function (res) {
                return console.log('res', res.data);
              })["catch"](function (e) {
                return console.log('error', e);
              });

            case 9:
              videoUploadResponse = _context2.sent;
              console.log('Video Upload Response', videoUploadResponse);
              _context2.next = 13;
              return axios.get("".concat(_utility__WEBPACK_IMPORTED_MODULE_5__["AppUrl"], "api/comments/video/").concat(selectedVideo));

            case 13:
              commentsRes = _context2.sent;
              setComments(commentsRes.data);
              setComment('');
              setName('');
              setEmail('');
              setReplyComment('');

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function submitComment() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: '#ece7e2',
      height: '100%',
      width: '100%',
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
  }, video.title)), !!video.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: video.thumbnail,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    content: "Home",
    onClick: function onClick() {
      history.push('/');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      maxWidth: 800,
      // display: 'flex',
      // justifyContent: 'space-around',
      margin: 'auto'
    },
    className: "player-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
    controls: true,
    width: "100%",
    height: "100%",
    url: video.src
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: 20,
      background: '#fff',
      margin: '10px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontSize: '1.2em',
      fontFamily: 'Mulish'
    }
  }, video.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: '#fff',
      padding: 10,
      maxWidth: 800,
      margin: 'auto'
    },
    className: "video-comments-container"
  }, comments.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontSize: '2.5em',
      marginTop: 30,
      textAlign: 'center'
    }
  }, replyComment ? 'Comment' : 'Comments'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    style: {
      paddingBottom: 20
    }
  }, replyComment ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      margin: '20px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: 60
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: 100,
    md5Email: replyComment.encryptedEmail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    readOnly: true,
    rows: "3",
    cols: "50",
    style: {
      fontWeight: 600,
      border: 'none',
      background: '#efefef',
      fontFamily: 'Mulish',
      fontSize: '1.1em',
      lineHeight: 1.8,
      marginLeft: 20
    }
  }, replyComment.content)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"], null, (comments || []).map(function (item) {
    if (!item.is_approved) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["List"].Item, {
      style: {
        marginTop: 20
      },
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex',
        marginBottom: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: 60
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: 60,
      md5Email: item.encryptedEmail,
      round: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        padding: '0 20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'block',
        fontSize: '1.6em',
        fontWeight: 'bold',
        marginBottom: 10,
        lineHeight: 1.1
      }
    }, item.user), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      readOnly: true,
      rows: "4",
      cols: "50",
      style: {
        fontWeight: 600,
        border: 'none',
        background: '#efefef',
        fontFamily: 'Mulish',
        fontSize: '1.1em',
        lineHeight: 1.8
      }
    }, item.content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_8__["StyledBlueButton"], {
      onClick: function onClick() {
        return setReplyComment(item);
      },
      icon: "image"
    }, "Reply"), (item.replies || []).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginLeft: 20,
        marginTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Posts_Post__WEBPACK_IMPORTED_MODULE_6__["Replies"], {
      comment: item,
      setReplyComment: setReplyComment
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '2em',
      display: 'block',
      margin: '40px 0 30px 0'
    }
  }, replyComment.content ? "Reply to ".concat(replyComment.user) : 'Leave a Comment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["TextArea"], {
    value: content,
    onChange: handleComment,
    placeholder: "Comment",
    style: {
      minHeight: 100,
      width: '100%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "Full Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_8__["StyledFormTextInput"], {
    value: name,
    onChange: handleName,
    placeholder: "Full Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '1.2em'
    }
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_8__["StyledFormTextInput"], {
    value: email,
    onChange: handleEmail,
    placeholder: "E-mail"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: '40px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_8__["StyledBlueButton"], {
    onClick: submitComment,
    icon: "image"
  }, "Submit"), replyComment.content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_8__["StyledRedButton"], {
    onClick: function onClick() {
      return setReplyComment('');
    },
    icon: "image"
  }, "Cancel Reply")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ })

}]);