(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/pages/blog/global-styles/tinymceReadonly.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/pages/blog/global-styles/tinymceReadonly.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tox-tinymce {\r\n    border:none !important;\r\n    height: 100%;\r\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/pages/blog/Posts/Post.jsx":
/*!************************************************!*\
  !*** ./resources/js/pages/blog/Posts/Post.jsx ***!
  \************************************************/
/*! exports provided: Replies, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replies", function() { return Replies; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledComponents */ "./resources/js/pages/blog/StyledComponents.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility */ "./resources/js/pages/blog/utility.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_styles_tinymceReadonly_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global-styles/tinymceReadonly.css */ "./resources/js/pages/blog/global-styles/tinymceReadonly.css");
/* harmony import */ var _global_styles_tinymceReadonly_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_global_styles_tinymceReadonly_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-avatar */ "./node_modules/react-avatar/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Replies = function Replies(_ref) {
  var comment = _ref.comment,
      setReplyComment = _ref.setReplyComment;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, (comment.replies || []).map(function (reply) {
    if (!reply.is_approved) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginLeft: 30
      },
      key: reply.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: 'flex',
        margin: '20px 0'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: 60,
        borderLeft: '5px solid #cecece',
        paddingLeft: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: 60,
      md5Email: reply.encryptedEmail,
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
    }, reply.user), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
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
    }, reply.content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledBlueButton"], {
      onClick: function onClick() {
        return setReplyComment(reply);
      },
      icon: "image"
    }, "Reply"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Replies, {
      setReplyComment: setReplyComment,
      comment: reply
    }));
  }));
};

var Post = function Post(_ref2) {
  var winSize = _ref2.winSize;
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useParams"])();
  var selectedPost = params.postId;
  var postContainer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      comments = _useState2[0],
      setComments = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      post = _useState4[0],
      setPost = _useState4[1];

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

  var handleName = function handleName(e) {
    setName(e.target.value);
  };

  var handleEmail = function handleEmail(e) {
    setEmail(e.target.value);
  };

  var handleComment = function handleComment(e) {
    setComment(e.target.value);
  };

  var submitComment = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var formData, commentsRes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append('name', name);
              formData.append('email', email);
              formData.append('post_id', selectedPost);
              formData.append('content', content);
              formData.append('comment_type', 'post');

              if (replyComment) {
                formData.append('comment_id', replyComment.id);
              }

              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(_utility__WEBPACK_IMPORTED_MODULE_4__["AppUrl"], "api/comments/save"), formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }).then(function (res) {
                return console.log('res', res.data);
              })["catch"](function (e) {
                return console.log('error', e);
              });

            case 9:
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_utility__WEBPACK_IMPORTED_MODULE_4__["AppUrl"], "api/comments/post/").concat(selectedPost));

            case 11:
              commentsRes = _context.sent;
              setComments(commentsRes.data);
              setComment('');
              setName('');
              setEmail('');
              setReplyComment('');

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitComment() {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var triggers = gsap_all__WEBPACK_IMPORTED_MODULE_9__["ScrollTrigger"].getAll();
    triggers.forEach(function (tr) {
      tr.kill();
    });

    var getPost = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var postRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_utility__WEBPACK_IMPORTED_MODULE_4__["AppUrl"], "api/posts/").concat(selectedPost));

              case 2:
                postRes = _context2.sent;
                console.log('postRes', postRes);
                setPost(postRes.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getPost() {
        return _ref4.apply(this, arguments);
      };
    }();

    getPost();

    var getComments = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var commentsRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(_utility__WEBPACK_IMPORTED_MODULE_4__["AppUrl"], "api/comments/post/").concat(selectedPost));

              case 2:
                commentsRes = _context3.sent;
                console.log('commentsRes.data', commentsRes.data);
                setComments(commentsRes.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getComments() {
        return _ref5.apply(this, arguments);
      };
    }();

    getComments();
  }, []);
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      fontFamily: "Merriweather",
      color: 'white'
    }
  }, post.title)), !!post.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: post.image,
    style: {
      width: '100%',
      maxHeight: 400,
      objectFit: 'cover',
      position: 'absolute'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: postContainer,
    style: {
      width: '100%',
      height: '100%',
      background: '#fff',
      padding: '40px 20px',
      maxWidth: 600,
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    content: "Home",
    onClick: function onClick() {
      history.push('/');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: 'center',
      margin: '20px 0',
      fontSize: '1.5em',
      fontFamily: "Merriweather",
      color: '#afafaf'
    }
  }, "Posted on ".concat(new Date(post.created_at).toLocaleDateString(), " ").concat(!!post.author ? 'by ' + post.author : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: "<style>\n            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');\n            @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');\n            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\n            img {\n                max-width:100%;\n                object-fit:cover;\n            }\n            </style>" + post.content
    }
  }), comments.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontSize: '2.5em',
      marginTop: 30
    }
  }, replyComment ? 'Comment' : 'Comments'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, replyComment.content)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], null, (comments || []).map(function (item) {
    if (!item.is_approved) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    }, item.content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledBlueButton"], {
      onClick: function onClick() {
        return setReplyComment(item);
      },
      icon: "image"
    }, "Reply"), (item.replies || []).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginLeft: 20,
        marginTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Replies, {
      comment: item,
      setReplyComment: setReplyComment
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      fontSize: '2em',
      display: 'block',
      margin: '40px 0 30px 0'
    }
  }, replyComment.content ? "Reply to ".concat(replyComment.user) : 'Leave a Comment'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["TextArea"], {
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
  }, "Full Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledFormTextInput"], {
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
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledFormTextInput"], {
    value: email,
    onChange: handleEmail,
    placeholder: "E-mail"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: '40px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledBlueButton"], {
    onClick: submitComment,
    icon: "image"
  }, "Submit"), replyComment.content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["StyledRedButton"], {
    onClick: function onClick() {
      return setReplyComment('');
    },
    icon: "image"
  }, "Cancel Reply")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./resources/js/pages/blog/global-styles/tinymceReadonly.css":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/blog/global-styles/tinymceReadonly.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./tinymceReadonly.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/pages/blog/global-styles/tinymceReadonly.css");

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