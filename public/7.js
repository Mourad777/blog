(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-alice-carousel/lib/alice-carousel.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/react-alice-carousel/lib/alice-carousel.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alice-carousel .animated {\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.alice-carousel .animated-out {\n  z-index: 1; }\n\n.alice-carousel .fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    visibility: hidden; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    visibility: hidden; } }\n\n.alice-carousel {\n  position: relative;\n  width: 100%;\n  margin: auto;\n  direction: ltr; }\n\n.alice-carousel__wrapper {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto; }\n\n.alice-carousel__stage {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden; }\n  .alice-carousel__stage-item {\n    position: relative;\n    display: inline-block;\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    vertical-align: top;\n    white-space: normal;\n    line-height: 0; }\n    .alice-carousel__stage-item * {\n      line-height: initial; }\n    .alice-carousel__stage-item.__hidden {\n      opacity: 0;\n      overflow: hidden; }\n\n.alice-carousel__prev-btn,\n.alice-carousel__next-btn {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 10px 5px; }\n  .alice-carousel__prev-btn [data-area]::after,\n  .alice-carousel__next-btn [data-area]::after {\n    position: relative;\n    content: attr(data-area);\n    text-transform: capitalize; }\n\n.alice-carousel__prev-btn {\n  text-align: right; }\n\n.alice-carousel__prev-btn-item,\n.alice-carousel__next-btn-item {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px;\n  margin: 0;\n  color: #465798; }\n  .alice-carousel__prev-btn-item:hover,\n  .alice-carousel__next-btn-item:hover {\n    color: darkred; }\n  .alice-carousel__prev-btn-item.__inactive,\n  .alice-carousel__next-btn-item.__inactive {\n    opacity: 0.4;\n    pointer-events: none; }\n\n.alice-carousel__play-btn {\n  position: absolute;\n  top: 30px;\n  left: 20px;\n  display: inline-block; }\n  .alice-carousel__play-btn:hover {\n    cursor: pointer; }\n  .alice-carousel__play-btn-wrapper {\n    position: relative;\n    width: 32px;\n    height: 32px;\n    padding: 10px;\n    border-radius: 50%;\n    background-color: #fff; }\n\n.alice-carousel__play-btn-item {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background: transparent; }\n  .alice-carousel__play-btn-item::before, .alice-carousel__play-btn-item::after {\n    position: absolute;\n    pointer-events: none;\n    display: block;\n    width: 0;\n    height: 0;\n    content: '';\n    transition: all 0.4s linear;\n    border-width: 8px 0 8px 15px;\n    border-style: solid;\n    border-color: transparent;\n    border-left-color: #465798; }\n  .alice-carousel__play-btn-item::before {\n    left: 5px;\n    height: 14px; }\n  .alice-carousel__play-btn-item::after {\n    top: 7px;\n    left: 18px; }\n  .alice-carousel__play-btn-item.__pause::before, .alice-carousel__play-btn-item.__pause::after {\n    height: 30px;\n    border-width: 0 0 0 10px; }\n  .alice-carousel__play-btn-item.__pause::after {\n    top: 0;\n    left: 18px; }\n\n.alice-carousel__dots {\n  margin: 30px 3px 5px;\n  padding: 0;\n  list-style: none;\n  text-align: center; }\n  .alice-carousel__dots > li {\n    display: inline-block; }\n  .alice-carousel__dots-item:not(.__custom) {\n    width: 8px;\n    height: 8px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #e0e4fb; }\n    .alice-carousel__dots-item:not(.__custom):not(:last-child) {\n      margin-right: 20px; }\n    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {\n      background-color: #6e7ebc; }\n\n.alice-carousel__slide-info {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: inline-block;\n  padding: 5px 10px;\n  color: #465798;\n  border-radius: 5px;\n  background-color: rgba(224, 228, 251, 0.6); }\n  .alice-carousel__slide-info-item {\n    vertical-align: middle;\n    line-height: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/alice-carousel.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/alice-carousel.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./alice-carousel.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-alice-carousel/lib/alice-carousel.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/defaultProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/defaultProps.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultProps=void 0;var types_1=__webpack_require__(/*! ./types */ "./node_modules/react-alice-carousel/lib/types/index.js");exports.defaultProps={activeIndex:0,animationDuration:400,animationEasingFunction:"ease",animationType:types_1.AnimationType.SLIDE,autoHeight:!1,autoWidth:!1,autoPlay:!1,autoPlayControls:!1,autoPlayDirection:types_1.AutoplayDirection.LTR,autoPlayInterval:400,autoPlayStrategy:types_1.AutoPlayStrategy.DEFAULT,children:void 0,controlsStrategy:types_1.ControlsStrategy.DEFAULT,disableButtonsControls:!1,disableDotsControls:!1,disableSlideInfo:!0,infinite:!1,innerWidth:0,items:void 0,keyboardNavigation:!1,mouseTracking:!1,name:"",paddingLeft:0,paddingRight:0,responsive:void 0,swipeDelta:20,swipeExtraPadding:200,ssrSilentMode:!0,touchTracking:!0,touchMoveDefaultEvents:!0,onInitialized:function(){},onResized:function(){},onResizeEvent:void 0,onSlideChange:function(){},onSlideChanged:function(){}};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/react-alice-carousel.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __extends=function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__assign=function(){return(__assign=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__createBinding=Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){t[n=void 0===n?i:n]=e[i]},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.hasOwnProperty.call(t,i)&&__createBinding(e,t,i);return __setModuleDefault(e,t),e},__exportStar=function(t,e){for(var i in t)"default"===i||e.hasOwnProperty(i)||__createBinding(e,t,i)},__awaiter=function(t,a,r,l){return new(r=r||Promise)(function(i,e){function n(t){try{s(l.next(t))}catch(t){e(t)}}function o(t){try{s(l.throw(t))}catch(t){e(t)}}function s(t){var e;t.done?i(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(n,o)}s((l=l.apply(t,a||[])).next())})},__generator=function(i,n){var o,s,a,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,s&&(a=2&e[0]?s.return:e[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,e[1])).done)return a;switch(s=0,(e=a?[2&e[0],a.value]:e)[0]){case 0:case 1:a=e;break;case 4:return r.label++,{value:e[1],done:!1};case 5:r.label++,s=e[1],e=[0];continue;case 7:e=r.ops.pop(),r.trys.pop();continue;default:if(!(a=0<(a=r.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){r=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){r.label=e[1];break}if(6===e[0]&&r.label<a[1]){r.label=a[1],a=e;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(e);break}a[2]&&r.ops.pop(),r.trys.pop();continue}e=n.call(i,r)}catch(t){e=[6,t],s=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},__importDefault=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),vanilla_swipe_1=__importDefault(__webpack_require__(/*! vanilla-swipe */ "./node_modules/vanilla-swipe/lib/index.js")),defaultProps_1=__webpack_require__(/*! ./defaultProps */ "./node_modules/react-alice-carousel/lib/defaultProps.js"),Views=__importStar(__webpack_require__(/*! ./views */ "./node_modules/react-alice-carousel/lib/views/index.js")),Utils=__importStar(__webpack_require__(/*! ./utils */ "./node_modules/react-alice-carousel/lib/utils/index.js")),types_1=__webpack_require__(/*! ./types */ "./node_modules/react-alice-carousel/lib/types/index.js");__exportStar(__webpack_require__(/*! ./types */ "./node_modules/react-alice-carousel/lib/types/index.js"),exports);var AliceCarousel=function(e){function t(t){var s=e.call(this,t)||this;return s.swipeListener=null,s._handleKeyboardEvents=function(t){switch(t.code){case"Space":return s.props.autoPlay&&s._handlePlayPauseToggle();case"ArrowLeft":return s.slidePrev(t);case"ArrowRight":return s.slideNext(t)}},s._handleBeforeSlideEnd=function(o){return __awaiter(s,void 0,void 0,function(){var e,i,n;return __generator(this,function(t){switch(t.label){case 0:return(i=this.state,e=i.activeIndex,n=i.itemsCount,i=i.fadeoutAnimationProcessing,Utils.shouldRecalculateSlideIndex(e,n))?(n=Utils.getUpdateSlidePositionIndex(e,n),[4,this._handleUpdateSlidePosition(n)]):[3,2];case 1:return t.sent(),[3,4];case 2:return i?[4,this.setState({fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})]:[3,4];case 3:t.sent(),t.label=4;case 4:return this._handleSlideChanged(o),[2]}})})},s._handleMouseEnter=function(){var t=s.props.autoPlayStrategy;Utils.shouldCancelAutoPlayOnHover(t)&&s.state.isAutoPlaying&&(s.isHovered=!0,s._handlePause())},s._handleMouseLeave=function(){s.state.isAutoPlaying&&(s.isHovered=!1,s._handlePlay())},s._handlePause=function(){s._clearAutoPlayTimeout()},s._handlePlayPauseToggle=function(){return __awaiter(s,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=this.state.isAutoPlaying,this.hasUserAction=!0,[4,this.setState({isAutoPlaying:!e,isAutoPlayCanceledOnAction:!0})];case 1:return t.sent(),e?this._handlePause():this._handlePlay(),[2]}})})},s._setRootComponentRef=function(t){return s.rootElement=t},s._setStageComponentRef=function(t){return s.stageComponent=t},s._renderStageItem=function(t,e){var i=Utils.getRenderStageItemStyles(e,s.state),n=Utils.getRenderStageItemClasses(e,s.state);return react_1.default.createElement(Views.StageItem,{styles:i,className:n,key:"stage-item-"+e,item:t})},s._renderSlideInfo=function(){var t=s.props.renderSlideInfo,e=s.state,i=e.activeIndex,e=e.itemsCount;return react_1.default.createElement(Views.SlideInfo,{itemsCount:e,activeIndex:i,renderSlideInfo:t})},s.state=Utils.calculateInitialState(t,null),s.isHovered=!1,s.isAnimationDisabled=!1,s.isTouchMoveProcessStarted=!1,s.cancelTouchAnimations=!1,s.hasUserAction=!1,s.rootElement=null,s.rootComponentDimensions={},s.stageComponent=null,s.startTouchmovePosition=void 0,s.slideTo=s.slideTo.bind(s),s.slidePrev=s.slidePrev.bind(s),s.slideNext=s.slideNext.bind(s),s._handleTouchmove=s._handleTouchmove.bind(s),s._handleTouchend=s._handleTouchend.bind(s),s._handleDotClick=s._handleDotClick.bind(s),s._handleResize=s._handleResize.bind(s),s._handleResizeDebounced=Utils.debounce(s._handleResize,100),s}return __extends(t,e),t.prototype.componentDidMount=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this._setInitialState()];case 1:return t.sent(),this._addEventListeners(),this._setupSwipeHandlers(),this.props.autoPlay&&this._handlePlay(),[2]}})})},t.prototype.componentDidUpdate=function(t,e){var i=this.props,n=i.activeIndex,o=i.animationDuration,s=i.autoWidth,a=i.children,r=i.infinite,l=i.items,u=i.paddingLeft,d=i.paddingRight,h=i.responsive,c=i.swipeExtraPadding,p=i.mouseTracking,_=i.swipeDelta,m=i.touchTracking,i=i.touchMoveDefaultEvents;a&&t.children!==a?(e=e.activeIndex,e=__assign(__assign({},this.props),{activeIndex:e}),this._updateComponent(e)):t.autoWidth!==s||t.infinite!==r||t.items!==l||t.paddingLeft!==u||t.paddingRight!==d||t.responsive!==h||t.swipeExtraPadding!==c?this._updateComponent():(t.animationDuration!==o&&this.setState({animationDuration:o}),t.activeIndex!==n&&this.slideTo(n,types_1.EventType.UPDATE)),t.swipeDelta===_&&t.mouseTracking===p&&t.touchTracking===m&&t.touchMoveDefaultEvents===i||this._updateSwipeProps(),this.props.keyboardNavigation!==t.keyboardNavigation&&this._updateEventListeners()},t.prototype.componentWillUnmount=function(){this._cancelTimeoutAnimations(),this._removeEventListeners()},Object.defineProperty(t.prototype,"eventObject",{get:function(){var t=this.state,e=t.itemsInSlide,i=t.activeIndex,n=Utils.getSlideItemInfo(this.state),t=n.isNextSlideDisabled,n=n.isPrevSlideDisabled;return{item:i,slide:Utils.getActiveSlideIndex(t,this.state),itemsInSlide:e,isNextSlideDisabled:t,isPrevSlideDisabled:n,type:types_1.EventType.ACTION}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isFadeoutAnimationAllowed",{get:function(){var t=this.state.itemsInSlide,e=this.props,i=e.animationType,n=e.paddingLeft,o=e.paddingRight,s=e.autoWidth,e=e.autoHeight;return 1===t&&i===types_1.AnimationType.FADEOUT&&!(n||o||s||e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"touchmovePosition",{get:function(){return void 0!==this.startTouchmovePosition?this.startTouchmovePosition:this.state.translate3d},enumerable:!1,configurable:!0}),t.prototype.slideTo=function(t,e){var i,n,o;void 0===t&&(t=0),this._handlePause(),this.isFadeoutAnimationAllowed?(i=Utils.getUpdateSlidePositionIndex(t,this.state.itemsCount),n=Utils.getFadeoutAnimationPosition(i,this.state),o=Utils.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:i,fadeoutAnimationIndex:o,fadeoutAnimationPosition:n,eventType:e})):this._handleSlideTo({activeIndex:t,eventType:e})},t.prototype.slidePrev=function(t){this._handlePause(),t&&t.isTrusted&&(this.hasUserAction=!0);var e,i=this.state.activeIndex-1;this.isFadeoutAnimationAllowed?(e=-this.state.stageWidth,t=Utils.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:i,fadeoutAnimationIndex:t,fadeoutAnimationPosition:e})):this._handleSlideTo({activeIndex:i})},t.prototype.slideNext=function(t){this._handlePause(),t&&t.isTrusted&&(this.hasUserAction=!0);var e,i=this.state.activeIndex+1;this.isFadeoutAnimationAllowed?(e=this.state.stageWidth,t=Utils.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:i,fadeoutAnimationIndex:t,fadeoutAnimationPosition:e})):this._handleSlideTo({activeIndex:i})},t.prototype._addEventListeners=function(){window.addEventListener("resize",this._handleResizeDebounced),this.props.keyboardNavigation&&window.addEventListener("keyup",this._handleKeyboardEvents)},t.prototype._removeEventListeners=function(){this.swipeListener&&this.swipeListener.destroy(),window.removeEventListener("resize",this._handleResizeDebounced),window.removeEventListener("keyup",this._handleKeyboardEvents)},t.prototype._updateEventListeners=function(){this.props.keyboardNavigation?window.addEventListener("keyup",this._handleKeyboardEvents):window.removeEventListener("keyup",this._handleKeyboardEvents)},t.prototype._handleResize=function(o){return __awaiter(this,void 0,void 0,function(){var e,i,n;return __generator(this,function(t){switch(t.label){case 0:return(i=this.props.onResizeEvent,n=Utils.getElementDimensions(this.rootElement),(i||Utils.shouldHandleResizeEvent)(o,this.rootComponentDimensions,n))?(this._cancelTimeoutAnimations(),this.rootComponentDimensions=n,i=this.state,n=i.itemsCount,e=i.isAutoPlaying,i=Utils.getUpdateSlidePositionIndex(this.state.activeIndex,n),n=Utils.calculateInitialState(__assign(__assign({},this.props),{activeIndex:i}),this.stageComponent),i=Utils.getTranslate3dProperty(n.activeIndex,n),n=__assign(__assign({},n),{translate3d:i,isAutoPlaying:e}),Utils.animate(this.stageComponent,{position:-i}),[4,this.setState(n)]):[3,2];case 1:t.sent(),this._handleResized(),this.isAnimationDisabled=!1,e&&this._handlePlay(),t.label=2;case 2:return[2]}})})},t.prototype._handleTouchmove=function(t,e){var i=e.absY,n=e.absX,o=e.deltaX,s=this.props.swipeDelta,a=this.state,r=a.swipeShiftValue,l=a.swipeLimitMin,u=a.swipeLimitMax,e=a.infinite,a=a.fadeoutAnimationProcessing;if(this.hasUserAction=!0,!(a||!this.isTouchMoveProcessStarted&&Utils.isVerticalTouchmoveDetected(n,i,s))){this.isTouchMoveProcessStarted||(this._cancelTimeoutAnimations(),this._setTouchmovePosition(),this.isAnimationDisabled=!0,this.isTouchMoveProcessStarted=!0,this._handleSlideChange());var d=Utils.getTouchmoveTranslatePosition(o,this.touchmovePosition);if(!1===e)return l<d||d<-u?void 0:void Utils.animate(this.stageComponent,{position:d});if(Utils.shouldRecalculateSwipePosition(d,l,u))try{!function t(){Utils.getIsLeftDirection(o)?d+=r:d+=-r;Utils.shouldRecalculateSwipePosition(d,l,u)&&t()}()}catch(t){Utils.debug(t)}Utils.animate(this.stageComponent,{position:d})}},t.prototype._handleTouchend=function(t,e){var i,n,o=e.deltaX;this._clearTouchmovePosition(),this.isTouchMoveProcessStarted&&(this.isTouchMoveProcessStarted=!1,i=this.state.animationDuration,n=this.props.animationEasingFunction,e=Utils.getTranslateXProperty(this.stageComponent),e=Utils.getSwipeTouchendPosition(this.state,o,e),Utils.animate(this.stageComponent,{position:e,animationDuration:i,animationEasingFunction:n}),this._handleBeforeTouchEnd(e))},t.prototype._handleBeforeTouchEnd=function(o){var t=this,e=this.state.animationDuration;this.touchEndTimeoutId=setTimeout(function(){return __awaiter(t,void 0,void 0,function(){var e,i,n;return __generator(this,function(t){switch(t.label){case 0:return e=Utils.getSwipeTouchendIndex(o,this.state),i=Utils.getTranslate3dProperty(e,this.state),Utils.animate(this.stageComponent,{position:-i}),n=Utils.getTransitionProperty(),[4,this.setState({activeIndex:e,translate3d:i,transition:n})];case 1:return t.sent(),[4,this._handleSlideChanged()];case 2:return t.sent(),[2]}})})},e)},t.prototype._handleSlideTo=function(t){var e=t.activeIndex,a=void 0===e?0:e,e=t.fadeoutAnimationIndex,r=void 0===e?null:e,e=t.fadeoutAnimationPosition,l=void 0===e?null:e,u=t.eventType;return __awaiter(this,void 0,void 0,function(){var e,i,n,o,s=this;return __generator(this,function(t){switch(t.label){case 0:return(o=this.props,n=o.infinite,i=o.animationEasingFunction,e=this.state,o=e.itemsCount,e=e.animationDuration,this.isAnimationDisabled||this.state.activeIndex===a||!n&&Utils.shouldCancelSlideAnimation(a,o))?[2]:(this.isAnimationDisabled=!0,this._cancelTimeoutAnimations(),this._handleSlideChange(u),n=!1,o=Utils.getTranslate3dProperty(a,this.state),i=null!==r&&null!==l?(n=!0,Utils.getTransitionProperty()):Utils.getTransitionProperty({animationDuration:e,animationEasingFunction:i}),[4,this.setState({activeIndex:a,transition:i,translate3d:o,animationDuration:e,fadeoutAnimationIndex:r,fadeoutAnimationPosition:l,fadeoutAnimationProcessing:n})]);case 1:return t.sent(),this.slideEndTimeoutId=setTimeout(function(){return s._handleBeforeSlideEnd(u)},e),[2]}})})},t.prototype._handleUpdateSlidePosition=function(o){return __awaiter(this,void 0,void 0,function(){var e,i,n;return __generator(this,function(t){switch(t.label){case 0:return e=this.state.animationDuration,i=Utils.getTranslate3dProperty(o,this.state),n=Utils.getTransitionProperty({animationDuration:0}),[4,this.setState({activeIndex:o,translate3d:i,transition:n,animationDuration:e,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})];case 1:return t.sent(),[2]}})})},t.prototype._handleResized=function(){this.props.onResized&&this.props.onResized(__assign(__assign({},this.eventObject),{type:types_1.EventType.RESIZE}))},t.prototype._handleSlideChange=function(t){this.props.onSlideChange&&(t=t?__assign(__assign({},this.eventObject),{type:t}):this.eventObject,this.props.onSlideChange(t))},t.prototype._handleSlideChanged=function(s){return __awaiter(this,void 0,void 0,function(){var e,i,n,o;return __generator(this,function(t){switch(t.label){case 0:return i=this.state,o=i.isAutoPlaying,e=i.isAutoPlayCanceledOnAction,n=this.props,i=n.autoPlayStrategy,n=n.onSlideChanged,Utils.shouldCancelAutoPlayOnAction(i)&&this.hasUserAction&&!e?[4,this.setState({isAutoPlayCanceledOnAction:!0,isAutoPlaying:!1})]:[3,2];case 1:return t.sent(),[3,3];case 2:o&&this._handlePlay(),t.label=3;case 3:return this.isAnimationDisabled=!1,n&&(o=s?__assign(__assign({},this.eventObject),{type:s}):this.eventObject,n(o)),[2]}})})},t.prototype._handleDotClick=function(t){this.hasUserAction=!0,this.slideTo(t)},t.prototype._handlePlay=function(){this._setAutoPlayInterval()},t.prototype._cancelTimeoutAnimations=function(){this._clearAutoPlayTimeout(),this._clearSlideEndTimeout(),this.clearTouchendTimeout()},t.prototype._clearAutoPlayTimeout=function(){clearTimeout(this.autoPlayTimeoutId),this.autoPlayTimeoutId=void 0},t.prototype._clearSlideEndTimeout=function(){clearTimeout(this.slideEndTimeoutId),this.slideEndTimeoutId=void 0},t.prototype.clearTouchendTimeout=function(){clearTimeout(this.touchEndTimeoutId),this.touchEndTimeoutId=void 0},t.prototype._clearTouchmovePosition=function(){this.startTouchmovePosition=void 0},t.prototype._setTouchmovePosition=function(){var t=Utils.getTranslateXProperty(this.stageComponent);this.startTouchmovePosition=-t},t.prototype._setInitialState=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=Utils.calculateInitialState(this.props,this.stageComponent),this.rootComponentDimensions=Utils.getElementDimensions(this.rootElement),[4,this.setState(e)];case 1:return t.sent(),this.props.onInitialized&&this.props.onInitialized(__assign(__assign({},this.eventObject),{type:types_1.EventType.INIT})),[2]}})})},t.prototype._setAutoPlayInterval=function(){var t=this,e=this.props,i=e.autoPlayDirection,e=e.autoPlayInterval;this.autoPlayTimeoutId=setTimeout(function(){t.isHovered||(i===types_1.AutoplayDirection.RTL?t.slidePrev({}):t.slideNext({}))},e)},t.prototype._setupSwipeHandlers=function(){this.swipeListener=new vanilla_swipe_1.default({element:this.rootElement,delta:this.props.swipeDelta,onSwiping:this._handleTouchmove,onSwiped:this._handleTouchend,rotationAngle:5,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents,preventTrackingOnMouseleave:!0}),this.swipeListener.init()},t.prototype._updateComponent=function(t){var e=this;void 0===t&&(t=this.props),this._cancelTimeoutAnimations(),this.isAnimationDisabled=!1,this.state.isAutoPlaying&&this._handlePlay(),this.setState({clones:Utils.createClones(t)}),requestAnimationFrame(function(){e.setState(Utils.calculateInitialState(t,e.stageComponent))})},t.prototype._updateSwipeProps=function(){this.swipeListener&&this.swipeListener.update({delta:this.props.swipeDelta,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents})},t.prototype._renderDotsNavigation=function(){var t=this.props,e=t.renderDotsItem,t=t.controlsStrategy;return react_1.default.createElement(Views.DotsNavigation,{state:this.state,onClick:this._handleDotClick,renderDotsItem:e,controlsStrategy:t})},t.prototype._renderPrevButton=function(){var t=this.props.renderPrevButton,e=Utils.getSlideItemInfo(this.state).isPrevSlideDisabled;return react_1.default.createElement(Views.PrevNextButton,{name:"prev",onClick:this.slidePrev,isDisabled:e,renderPrevButton:t})},t.prototype._renderNextButton=function(){var t=this.props.renderNextButton,e=Utils.getSlideItemInfo(this.state).isNextSlideDisabled;return react_1.default.createElement(Views.PrevNextButton,{name:"next",onClick:this.slideNext,isDisabled:e,renderNextButton:t})},t.prototype._renderPlayPauseButton=function(){var t=this.props.renderPlayPauseButton,e=this.state.isAutoPlaying;return react_1.default.createElement(Views.PlayPauseButton,{isPlaying:e,onClick:this._handlePlayPauseToggle,renderPlayPauseButton:t})},t.prototype.render=function(){var t=this.state,e=t.translate3d,i=t.clones,n=t.transition,o=t.canUseDom,s=Utils.shouldDisableDots(this.props,this.state),a=Utils.shouldDisableButtons(this.props,this.state),t=Utils.getRenderWrapperStyles(this.props,this.state,this.stageComponent),n=Utils.getRenderStageStyles({translate3d:e},{transition:n}),o=this.props.ssrSilentMode||o?"":types_1.Modifiers.SSR,o=Utils.concatClassnames(types_1.Classnames.ROOT,o);return react_1.default.createElement("div",{className:o},react_1.default.createElement("div",{ref:this._setRootComponentRef},react_1.default.createElement("div",{style:t,className:types_1.Classnames.WRAPPER,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave},react_1.default.createElement("ul",{style:n,className:types_1.Classnames.STAGE,ref:this._setStageComponentRef},i.map(this._renderStageItem)))),s?null:this._renderDotsNavigation(),a?null:this._renderPrevButton(),a?null:this._renderNextButton(),this.props.disableSlideInfo?null:this._renderSlideInfo(),this.props.autoPlayControls?this._renderPlayPauseButton():null)},t.defaultProps=defaultProps_1.defaultProps,t}(react_1.default.PureComponent);exports.default=AliceCarousel;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/types/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/types/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var EventType,AnimationType,AutoPlayStrategy,ControlsStrategy,AutoplayDirection,Classnames,Modifiers;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Modifiers=exports.Classnames=exports.AutoplayDirection=exports.ControlsStrategy=exports.AutoPlayStrategy=exports.AnimationType=exports.EventType=void 0,function(e){e.ACTION="action",e.INIT="init",e.RESIZE="resize",e.UPDATE="update"}(EventType=exports.EventType||(exports.EventType={})),function(e){e.FADEOUT="fadeout",e.SLIDE="slide"}(AnimationType=exports.AnimationType||(exports.AnimationType={})),function(e){e.DEFAULT="default",e.ALL="all",e.ACTION="action",e.NONE="none"}(AutoPlayStrategy=exports.AutoPlayStrategy||(exports.AutoPlayStrategy={})),function(e){e.DEFAULT="default",e.ALTERNATE="alternate",e.RESPONSIVE="responsive"}(ControlsStrategy=exports.ControlsStrategy||(exports.ControlsStrategy={})),function(e){e.RTL="rtl",e.LTR="ltr"}(AutoplayDirection=exports.AutoplayDirection||(exports.AutoplayDirection={})),function(e){e.ANIMATED="animated animated-out fadeOut",e.ROOT="alice-carousel",e.WRAPPER="alice-carousel__wrapper",e.STAGE="alice-carousel__stage",e.STAGE_ITEM="alice-carousel__stage-item",e.DOTS="alice-carousel__dots",e.DOTS_ITEM="alice-carousel__dots-item",e.PLAY_BTN="alice-carousel__play-btn",e.PLAY_BTN_ITEM="alice-carousel__play-btn-item",e.PLAY_BTN_WRAPPER="alice-carousel__play-btn-wrapper",e.SLIDE_INFO="alice-carousel__slide-info",e.SLIDE_INFO_ITEM="alice-carousel__slide-info-item",e.BUTTON_PREV="alice-carousel__prev-btn",e.BUTTON_PREV_WRAPPER="alice-carousel__prev-btn-wrapper",e.BUTTON_PREV_ITEM="alice-carousel__prev-btn-item",e.BUTTON_NEXT="alice-carousel__next-btn",e.BUTTON_NEXT_WRAPPER="alice-carousel__next-btn-wrapper",e.BUTTON_NEXT_ITEM="alice-carousel__next-btn-item"}(Classnames=exports.Classnames||(exports.Classnames={})),function(e){e.ACTIVE="__active",e.INACTIVE="__inactive",e.CLONED="__cloned",e.CUSTOM="__custom",e.PAUSE="__pause",e.SEPARATOR="__separator",e.SSR="__ssr",e.TARGET="__target"}(Modifiers=exports.Modifiers||(exports.Modifiers={}));

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/classnames.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/classnames.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(e,t,i,r){void 0===r&&(r=i),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,r){e[r=void 0===r?i:r]=t[i]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.hasOwnProperty.call(e,i)&&__createBinding(t,e,i);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.isClonedItem=exports.isTargetItem=exports.isActiveItem=exports.getRenderStageItemClasses=void 0;var Utils=__importStar(__webpack_require__(/*! . */ "./node_modules/react-alice-carousel/lib/utils/index.js")),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js");exports.getRenderStageItemClasses=function(e,t){void 0===e&&(e=0);var i=t.fadeoutAnimationIndex,r=exports.isActiveItem(e,t)?types_1.Modifiers.ACTIVE:"",n=exports.isClonedItem(e,t)?types_1.Modifiers.CLONED:"",t=exports.isTargetItem(e,t)?types_1.Modifiers.TARGET:"",i=e===i?types_1.Classnames.ANIMATED:"";return Utils.concatClassnames(types_1.Classnames.STAGE_ITEM,r,n,t,i)},exports.isActiveItem=function(e,t){void 0===e&&(e=0);var i=t.activeIndex,r=t.itemsInSlide,n=t.itemsOffset,s=t.infinite,o=t.autoWidth,t=Utils.getShiftIndex(r,n);if(o&&s)return e-t===i+n;t=i+t;return s?t<=e&&e<t+r:i<=e&&e<t},exports.isTargetItem=function(e,t){void 0===e&&(e=0);var i=t.activeIndex,r=t.itemsInSlide,n=t.itemsOffset,s=t.infinite,t=t.autoWidth,r=Utils.getShiftIndex(r,n);return s?t&&s?e-r===i+n:e===i+r:e===i},exports.isClonedItem=function(e,t){void 0===e&&(e=0);var i=t.itemsInSlide,r=t.itemsOffset,n=t.itemsCount,s=t.infinite,t=t.autoWidth;if(!s)return!1;if(t&&s)return e<i||n-1+i<e;r=Utils.getShiftIndex(i,r);return e<r||n-1+r<e};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/common.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/common.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){t[n=void 0===n?i:n]=e[i]},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.hasOwnProperty.call(t,i)&&__createBinding(e,t,i);return __setModuleDefault(e,t),e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculateInitialState=exports.getItemsInSlide=exports.getIsStageContentPartial=exports.concatClassnames=exports.canUseDOM=void 0;var Utils=__importStar(__webpack_require__(/*! . */ "./node_modules/react-alice-carousel/lib/utils/index.js"));exports.canUseDOM=function(){var t;try{return Boolean(null===(t=null===window||void 0===window?void 0:window.document)||void 0===t?void 0:t.createElement)}catch(t){return!1}},exports.concatClassnames=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")},exports.getIsStageContentPartial=function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=0),!(t=void 0===t?!1:t)&&i<=e},exports.getItemsInSlide=function(e,t){var i,n=1,o=t.responsive,a=t.autoWidth,r=void 0!==a&&a,a=t.infinite,a=void 0!==a&&a,t=t.innerWidth;return r?a?e:n:(!o||(a=Object.keys(o)).length&&(t||exports.canUseDOM())&&(i=t||window.innerWidth,a.forEach(function(t){Number(t)<i&&(n=Math.min(o[t].items,e)||n)})),n)},exports.calculateInitialState=function(t,e,i){void 0===i&&(i=!1);var n,o=t.animationDuration,a=void 0===o?0:o,r=t.infinite,s=void 0!==r&&r,l=t.autoPlay,d=void 0!==l&&l,u=t.autoWidth,c=void 0!==u&&u,f=Utils.createClones(t),m=Utils.getTransitionProperty(),p=Utils.getItemsCount(t),v=Utils.getItemsOffset(t),o=exports.getItemsInSlide(p,t),r=Utils.getStartIndex(t.activeIndex,p),l=Utils.getActiveIndex({startIndex:r,itemsCount:p,infinite:s}),u=Utils.getElementDimensions(e).width;n=(e=(r=c?(x=(n=Utils.createAutowidthTransformationSet(e,u,s)).coords,S=n.content,n.partial):(x=(g=Utils.createDefaultTransformationSet(f,u,o,s)).coords,S=g.content,g.partial),S),x);var g=Utils.getItemCoords(-o,n).position,S=Utils.getSwipeLimitMin({itemsOffset:v,transformationSet:n},t),x=Utils.getSwipeLimitMax({itemsCount:p,itemsOffset:v,itemsInSlide:o,transformationSet:n},t),t=Utils.getSwipeShiftValue(p,n);return{activeIndex:l,autoWidth:c,animationDuration:a,clones:f,infinite:s,itemsCount:p,itemsInSlide:o,itemsOffset:v,translate3d:Utils.getTranslate3dProperty(l,{itemsInSlide:o,itemsOffset:v,transformationSet:n,autoWidth:c,infinite:s}),stageWidth:u,stageContentWidth:e,initialStageHeight:0,isStageContentPartial:r,isAutoPlaying:Boolean(d),isAutoPlayCanceledOnAction:!1,transformationSet:n,transition:m,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1,swipeLimitMin:S,swipeLimitMax:x,swipeAllowedPositionMax:g,swipeShiftValue:t,canUseDom:i||exports.canUseDOM()}};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/controls.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/controls.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(t,e,o,s){void 0===s&&(s=o),Object.defineProperty(t,s,{enumerable:!0,get:function(){return e[o]}})}:function(t,e,o,s){t[s=void 0===s?o:s]=e[o]},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.hasOwnProperty.call(t,o)&&__createBinding(e,t,o);return __setModuleDefault(e,t),e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.shouldCancelAutoPlayOnHover=exports.shouldCancelAutoPlayOnAction=exports.getItemIndexForDotNavigation=exports.checkIsTheLastDotIndex=exports.getDotsNavigationLength=exports.hasDotForEachSlide=exports.isStrategy=exports.shouldDisableButtons=exports.shouldDisableDots=exports.shouldDisableControls=void 0;var types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js"),Utils=__importStar(__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"));function shouldDisableControls(t,e){var o=(t||{}).controlsStrategy,s=e||{},t=s.itemsInSlide,e=s.itemsCount,s=s.autoWidth;if(Utils.isStrategy(o,types_1.ControlsStrategy.RESPONSIVE))return!s&&t===e}function shouldDisableDots(t,e){return t.disableDotsControls||shouldDisableControls(t,e)}function shouldDisableButtons(t,e){return t.disableButtonsControls||!t.infinite&&shouldDisableControls(t,e)}exports.shouldDisableControls=shouldDisableControls,exports.shouldDisableDots=shouldDisableDots,exports.shouldDisableButtons=shouldDisableButtons,exports.isStrategy=function(t,e){return t&&t.includes(e)},exports.hasDotForEachSlide=function(t,e){return t||exports.isStrategy(e,types_1.ControlsStrategy.ALTERNATE)},exports.getDotsNavigationLength=function(t,e,o){return void 0===t&&(t=0),void 0===e&&(e=1),o?t:0!==Number(e)&&Math.ceil(t/e)||0},exports.checkIsTheLastDotIndex=function(t,e,o){return!e&&t===o-1},exports.getItemIndexForDotNavigation=function(t,e,o,s){return(e?o-s:t*s)||0},exports.shouldCancelAutoPlayOnAction=function(t){return(t=void 0===t?"":t)===types_1.AutoPlayStrategy.ACTION||t===types_1.AutoPlayStrategy.ALL},exports.shouldCancelAutoPlayOnHover=function(t){return(t=void 0===t?"":t)===types_1.AutoPlayStrategy.DEFAULT||t===types_1.AutoPlayStrategy.ALL};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/debug.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/debug.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function debug(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o]; true&&console.debug.apply(console,e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.debug=void 0,exports.debug=debug;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/elements.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/elements.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __assign=function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__createBinding=Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){t[n=void 0===n?r:n]=e[r]},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTransformMatrix=exports.getTranslateXProperty=exports.getTouchmoveTranslatePosition=exports.getTranslate3dProperty=exports.getRenderStageItemStyles=exports.getRenderStageStyles=exports.getTransitionProperty=exports.getRenderWrapperStyles=exports.animate=exports.shouldHandleResizeEvent=exports.getElementFirstChild=exports.getElementCursor=exports.getAutoheightProperty=exports.getElementDimensions=exports.getItemWidth=exports.createDefaultTransformationSet=exports.createAutowidthTransformationSet=exports.isElement=exports.createClones=exports.getItemsOffset=exports.getItemsCount=exports.getSlides=void 0;var Utils=__importStar(__webpack_require__(/*! . */ "./node_modules/react-alice-carousel/lib/utils/index.js"));function getElementDimensions(t){if(t&&t.getBoundingClientRect){t=t.getBoundingClientRect();return{width:t.width,height:t.height}}return{width:0,height:0}}function shouldHandleResizeEvent(t,e,r){return void 0===r&&(r={}),(e=void 0===e?{}:e).width!==r.width}function animate(t,e){var r=e||{},n=r.position,e=void 0===n?0:n,n=r.animationDuration,n=void 0===n?0:n,r=r.animationEasingFunction,r=void 0===r?"ease":r;return exports.isElement(t)&&(t.style.transition="transform "+n+"ms "+r+" 0ms",t.style.transform="translate3d("+e+"px, 0, 0)"),t}function getTranslateXProperty(t){t=getTransformMatrix(t),t=t&&t[4]||"";return Number(t)}function getTransformMatrix(t){return Utils.isElement(t)&&getComputedStyle(t).transform.match(/(-?[0-9.]+)/g)||[]}exports.getSlides=function(t){var e=t.children,t=t.items,t=void 0===t?[]:t;return e?e.length?e:[e]:t},exports.getItemsCount=function(t){return exports.getSlides(t).length},exports.getItemsOffset=function(t){var e=t.infinite,r=t.paddingRight,t=t.paddingLeft;return e&&(t||r)?1:0},exports.createClones=function(t){var e=exports.getSlides(t);if(!t.infinite)return e;var r=exports.getItemsCount(t),n=exports.getItemsOffset(t),i=Utils.getItemsInSlide(r,t),o=Math.min(i,r)+n,t=e.slice(0,o),o=e.slice(-o);return n&&i===r&&(i=e[0],r=e.slice(-1)[0],o.unshift(r),t.push(i)),o.concat(e,t)},exports.isElement=function(t){try{return t instanceof Element||t instanceof HTMLDocument}catch(t){return!1}},exports.createAutowidthTransformationSet=function(t,o,e){void 0===o&&(o=0),void 0===e&&(e=!1);var s=0,a=!0,r=[];return exports.isElement(t)&&(r=Array.from(t.children||[]).reduce(function(t,e,r){var n=0,i=r-1,r=t[i],e=getElementDimensions(null==e?void 0:e.firstChild).width,e=void 0===e?0:e;return a=(s+=e)<=o,r&&(n=0==i?r.width:r.width+r.position),t.push({position:n,width:e}),t},[]),e||(r=a?Utils.mapPartialCoords(r):(e=s-o,Utils.mapPositionCoords(r,e)))),{coords:r,content:s,partial:a}},exports.createDefaultTransformationSet=function(t,i,e,r){void 0===r&&(r=!1);var o=0,s=!0,n=[],a=exports.getItemWidth(i,e);return n=t.reduce(function(t,e,r){var n=0,r=t[r-1];return s=(o+=a)<=i,r&&(n=a+r.position||0),t.push({width:a,position:n}),t},[]),{coords:n=!r?s?Utils.mapPartialCoords(n):(r=o-i,Utils.mapPositionCoords(n,r)):n,content:o,partial:s}},exports.getItemWidth=function(t,e){return 0<e?t/e:t},exports.getElementDimensions=getElementDimensions,exports.getAutoheightProperty=function(t,e,r){e=exports.getElementCursor(e,r),r=exports.getElementFirstChild(t,e);if(exports.isElement(r)){t=getComputedStyle(r),e=parseFloat(t.marginTop),t=parseFloat(t.marginBottom);return Math.ceil(r.offsetHeight+e+t)}},exports.getElementCursor=function(t,e){var r=e.activeIndex,e=e.itemsInSlide;return t.infinite?r+e+Utils.getItemsOffset(t):r},exports.getElementFirstChild=function(t,e){t=t&&t.children||[];return t[e]&&t[e].firstChild||null},exports.shouldHandleResizeEvent=shouldHandleResizeEvent,exports.animate=animate,exports.getRenderWrapperStyles=function(t,e,r){var n=t||{},i=n.paddingLeft,o=n.paddingRight,s=n.animationDuration,e=n.autoHeight?exports.getAutoheightProperty(r,t,e):void 0;return{height:e,transition:e?"height "+s+"ms":void 0,paddingLeft:i+"px",paddingRight:o+"px"}},exports.getTransitionProperty=function(t){var e=t||{},t=e.animationDuration,e=e.animationEasingFunction;return"transform "+(void 0===t?0:t)+"ms "+(void 0===e?"ease":e)+" 0ms"},exports.getRenderStageStyles=function(t,e){t=(t||{}).translate3d,t="translate3d("+-(void 0===t?0:t)+"px, 0, 0)";return __assign(__assign({},e),{transform:t})},exports.getRenderStageItemStyles=function(t,e){var r=e.transformationSet,n=e.fadeoutAnimationIndex,i=e.fadeoutAnimationPosition,o=e.fadeoutAnimationProcessing,e=e.animationDuration,r=(r[t]||{}).width;return o&&n===t?{transform:"translateX("+i+"px)",animationDuration:e+"ms",width:r+"px"}:{width:r}},exports.getTranslate3dProperty=function(t,e){var r=t,n=e.infinite,i=e.itemsOffset,o=void 0===i?0:i,i=e.itemsInSlide,i=void 0===i?0:i,e=e.transformationSet;return((void 0===e?[]:e)[r=n?t+Utils.getShiftIndex(i,o):r]||{}).position||0},exports.getTouchmoveTranslatePosition=function(t,e){return-(e-Math.floor(t))},exports.getTranslateXProperty=getTranslateXProperty,exports.getTransformMatrix=getTransformMatrix;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){e[o=void 0===o?t:o]=r[t]},__exportStar=function(e,r){for(var t in e)"default"===t||r.hasOwnProperty(t)||__createBinding(r,e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__(/*! ./common */ "./node_modules/react-alice-carousel/lib/utils/common.js"),exports),__exportStar(__webpack_require__(/*! ./elements */ "./node_modules/react-alice-carousel/lib/utils/elements.js"),exports),__exportStar(__webpack_require__(/*! ./classnames */ "./node_modules/react-alice-carousel/lib/utils/classnames.js"),exports),__exportStar(__webpack_require__(/*! ./timers */ "./node_modules/react-alice-carousel/lib/utils/timers.js"),exports),__exportStar(__webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js"),exports),__exportStar(__webpack_require__(/*! ./debug */ "./node_modules/react-alice-carousel/lib/utils/debug.js"),exports),__exportStar(__webpack_require__(/*! ./render */ "./node_modules/react-alice-carousel/lib/utils/render.js"),exports),__exportStar(__webpack_require__(/*! ./controls */ "./node_modules/react-alice-carousel/lib/utils/controls.js"),exports),__exportStar(__webpack_require__(/*! ./mappers */ "./node_modules/react-alice-carousel/lib/utils/mappers.js"),exports);

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/mappers.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/mappers.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __assign=function(){return(__assign=Object.assign||function(o){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapPositionCoords=exports.mapPartialCoords=void 0,exports.mapPartialCoords=function(o){return o.map(function(o){return{width:o.width,position:0}})},exports.mapPositionCoords=function(o,t){return void 0===t&&(t=0),o.map(function(o){return o.position>t?__assign(__assign({},o),{position:t}):o})};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/math.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/math.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.isVerticalTouchmoveDetected=exports.getFadeoutAnimationPosition=exports.getFadeoutAnimationIndex=exports.getSwipeTouchendIndex=exports.getSwipeTouchendPosition=exports.getSwipeTransformationCursor=exports.getTransformationItemIndex=exports.getSwipeShiftValue=exports.getItemCoords=exports.getIsLeftDirection=exports.shouldRecalculateSwipePosition=exports.getSwipeLimitMax=exports.getSwipeLimitMin=exports.shouldCancelSlideAnimation=exports.shouldRecalculateSlideIndex=exports.getUpdateSlidePositionIndex=exports.getActiveIndex=exports.getStartIndex=exports.getShiftIndex=void 0,exports.getShiftIndex=function(t,e){return(t=void 0===t?0:t)+(e=void 0===e?0:e)},exports.getStartIndex=function(t,e){if(void 0===t&&(t=0),e=void 0===e?0:e){if(e<=t)return e-1;if(0<t)return t}return 0},exports.getActiveIndex=function(t){var e=t.startIndex,i=void 0===e?0:e,e=t.itemsCount,e=void 0===e?0:e,t=t.infinite;return void 0!==t&&t?i:exports.getStartIndex(i,e)},exports.getUpdateSlidePositionIndex=function(t,e){return t<0?e-1:e<=t?0:t},exports.shouldRecalculateSlideIndex=function(t,e){return t<0||e<=t},exports.shouldCancelSlideAnimation=function(t,e){return t<0||e<=t},exports.getSwipeLimitMin=function(t,e){var i=t.itemsOffset,o=void 0===i?0:i,i=t.transformationSet,t=void 0===i?[]:i,i=e.infinite,e=e.swipeExtraPadding,e=void 0===e?0:e;if(i)return(t[o]||{}).position;t=(t[0]||{}).width,t=void 0===t?0:t;return Math.min(e,t)},exports.getSwipeLimitMax=function(t,e){var i=e.infinite,o=e.swipeExtraPadding,n=void 0===o?0:o,r=t.itemsCount,e=void 0===r?1:r,o=t.itemsOffset,r=void 0===o?0:o,o=t.itemsInSlide,o=void 0===o?1:o,t=t.transformationSet,t=void 0===t?[]:t;return i?(t[e+exports.getShiftIndex(o,r)]||{}).position||0:exports.getItemCoords(-o,t).position+n},exports.shouldRecalculateSwipePosition=function(t,e,i){return-e<=t||Math.abs(t)>=i},exports.getIsLeftDirection=function(t){return(t=void 0===t?0:t)<0},exports.getItemCoords=function(t,e){return void 0===t&&(t=0),(e=void 0===e?[]:e).slice(t)[0]||{position:0,width:0}},exports.getSwipeShiftValue=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=[]),exports.getItemCoords(t,e).position},exports.getTransformationItemIndex=function(t,e){return void 0===e&&(e=0),(t=void 0===t?[]:t).findIndex(function(t){return t.position>=Math.abs(e)})},exports.getSwipeTransformationCursor=function(t,e,i){void 0===t&&(t=[]),void 0===e&&(e=0),void 0===i&&(i=0);e=exports.getTransformationItemIndex(t,e);return exports.getIsLeftDirection(i)?e:e-1},exports.getSwipeTouchendPosition=function(t,e,i){void 0===i&&(i=0);var o=t.infinite,n=t.autoWidth,r=t.isStageContentPartial,s=t.swipeAllowedPositionMax,t=t.transformationSet,e=exports.getSwipeTransformationCursor(t,i,e),t=exports.getItemCoords(e,t).position;if(!o){if(n&&r)return 0;if(s<t)return-s}return-t},exports.getSwipeTouchendIndex=function(t,e){var i=e.transformationSet,o=e.itemsInSlide,n=e.itemsOffset,r=e.itemsCount,s=e.infinite,d=e.isStageContentPartial,a=e.activeIndex,e=e.translate3d;if(!s&&(d||e===Math.abs(t)))return a;t=exports.getTransformationItemIndex(i,t);if(s){s=exports.getShiftIndex(o,n);return t<s?r-o-n+t:s+r<=t?t-(s+r):t-s}return t},exports.getFadeoutAnimationIndex=function(t){var e=t.infinite,i=t.activeIndex,t=t.itemsInSlide;return e?i+t:i},exports.getFadeoutAnimationPosition=function(t,e){var i=e.activeIndex,e=e.stageWidth;return t<i?(i-t)*-e||0:(t-i)*e||0},exports.isVerticalTouchmoveDetected=function(t,e,i){return t<(i=void 0===i?0:i)||t<.1*e};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/render.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/render.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSlideItemInfo=exports.getSlideInfo=exports.getSlideIndexForMultipleItems=exports.getSlideIndexForNonMultipleItems=exports.getActiveSlideDotsLength=exports.getActiveSlideIndex=void 0,exports.getActiveSlideIndex=function(e,t){var i=t||{},o=i.itemsInSlide,t=i.itemsCount,i=i.activeIndex+o;return 1===o?exports.getSlideIndexForNonMultipleItems(i,o,t):exports.getSlideIndexForMultipleItems(i,o,t,e)},exports.getActiveSlideDotsLength=function(e,t){if(void 0===t&&(t=1),(e=void 0===e?0:e)&&t){var i=Math.floor(e/t);return e%t==0?i-1:i}return 0},exports.getSlideIndexForNonMultipleItems=function(e,t,i){return e<t?i-t:i<e?0:e-1},exports.getSlideIndexForMultipleItems=function(e,t,i,o){var n=exports.getActiveSlideDotsLength(i,t);return e===i+t?0:o||e<t&&0!==e?n:0===e?i%t==0?n:n-1:0<t?Math.floor(e/t)-1:0},exports.getSlideInfo=function(e,t){void 0===t&&(t=0);e=(e=void 0===e?0:e)+1;return e<1?e=t:t<e&&(e=1),{item:e,itemsCount:t}},exports.getSlideItemInfo=function(e){var t=e||{},i=t.activeIndex,e=t.infinite;return t.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:!1===e&&0===i,isNextSlideDisabled:!1===e&&t.itemsCount-t.itemsInSlide<=i}};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/timers.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/timers.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function debounce(i,n){void 0===n&&(n=0);var u=void 0;return function(){for(var e=this,o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];u&&(clearTimeout(u),u=void 0),u=window.setTimeout(function(){i.apply(e,o),u=void 0},n)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=void 0,exports.debounce=debounce;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/DotsNavigation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/DotsNavigation.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(e,t,i,n){void 0===n&&(n=i),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,n){e[n=void 0===n?i:n]=t[i]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.hasOwnProperty.call(e,i)&&__createBinding(t,e,i);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.DotsNavigation=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),Utils=__importStar(__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js")),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js");exports.DotsNavigation=function(e){var a=e.state,o=e.onClick,s=e.onMouseEnter,l=e.onMouseLeave,t=e.controlsStrategy,u=e.renderDotsItem,c=a.itemsCount,d=a.itemsInSlide,f=a.infinite,e=a.autoWidth,_=a.activeIndex,m=Utils.getSlideItemInfo(a).isNextSlideDisabled,v=Utils.hasDotForEachSlide(e,t),p=Utils.getDotsNavigationLength(c,d,v);return react_1.default.createElement("ul",{className:types_1.Classnames.DOTS},Array.from({length:c}).map(function(e,t){if(t<p){var i=Utils.checkIsTheLastDotIndex(t,Boolean(f),p),n=Utils.getItemIndexForDotNavigation(t,i,c,d),r=Utils.getActiveSlideIndex(m,a);v&&((r=_)<0?r=c-1:c<=_&&(r=0),n=t);i=r===t?types_1.Modifiers.ACTIVE:"",r=u?types_1.Modifiers.CUSTOM:"",r=Utils.concatClassnames(types_1.Classnames.DOTS_ITEM,i,r);return react_1.default.createElement("li",{key:"dot-item-"+t,onMouseEnter:s,onMouseLeave:l,onClick:function(){return o(n)},className:r},u&&u({isActive:i,activeIndex:t}))}}))};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayPauseButton=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),Utils=__importStar(__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js")),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js");exports.PlayPauseButton=function(e){var t=e.isPlaying,a=e.onClick,e=e.renderPlayPauseButton;if("function"==typeof e)return react_1.default.createElement("div",{className:types_1.Classnames.PLAY_BTN,onClick:a},e({isPlaying:t}));t=t?types_1.Modifiers.PAUSE:"",t=Utils.concatClassnames(types_1.Classnames.PLAY_BTN_ITEM,t);return react_1.default.createElement("div",{className:types_1.Classnames.PLAY_BTN},react_1.default.createElement("div",{className:types_1.Classnames.PLAY_BTN_WRAPPER},react_1.default.createElement("div",{onClick:a,className:t})))};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/PrevNextButton.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/PrevNextButton.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrevNextButton=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),Utils=__importStar(__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js")),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js");exports.PrevNextButton=function(e){var t=e.name,a=e.isDisabled,r=e.onClick,s=e.renderPrevButton,n=e.renderNextButton;if("function"==typeof s)return react_1.default.createElement("div",{className:types_1.Classnames.BUTTON_PREV,onClick:r},s({isDisabled:a}));if("function"==typeof n)return react_1.default.createElement("div",{className:types_1.Classnames.BUTTON_NEXT,onClick:r},n({isDisabled:a}));e="prev"===t,s=e?"<":">",n=e?types_1.Classnames.BUTTON_PREV:types_1.Classnames.BUTTON_NEXT,t=e?types_1.Classnames.BUTTON_PREV_WRAPPER:types_1.Classnames.BUTTON_NEXT_WRAPPER,e=e?types_1.Classnames.BUTTON_PREV_ITEM:types_1.Classnames.BUTTON_NEXT_ITEM,a=a?types_1.Modifiers.INACTIVE:"",a=Utils.concatClassnames(e,a);return react_1.default.createElement("div",{className:n},react_1.default.createElement("div",{className:t},react_1.default.createElement("p",{className:a,onClick:r},react_1.default.createElement("span",{"data-area":s}))))};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/SlideInfo.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/SlideInfo.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SlideInfo=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),Utils=__importStar(__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js")),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js");exports.SlideInfo=function(e){var t=e.activeIndex,a=e.itemsCount,e=e.renderSlideInfo,t=Utils.getSlideInfo(t,a).item;if("function"==typeof e)return react_1.default.createElement("div",{className:types_1.Classnames.SLIDE_INFO},e({item:t,itemsCount:a}));e=Utils.concatClassnames(types_1.Classnames.SLIDE_INFO_ITEM,types_1.Modifiers.SEPARATOR);return react_1.default.createElement("div",{className:types_1.Classnames.SLIDE_INFO},react_1.default.createElement("span",{className:types_1.Classnames.SLIDE_INFO_ITEM},t),react_1.default.createElement("span",{className:e},"/"),react_1.default.createElement("span",{className:types_1.Classnames.SLIDE_INFO_ITEM},a))};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/StageItem.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/StageItem.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.StageItem=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));exports.StageItem=function(e){var t=e.item,r=e.className,e=e.styles;return react_1.default.createElement("li",{style:e,className:r},t)};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrevNextButton=exports.PlayPauseButton=exports.DotsNavigation=exports.StageItem=exports.SlideInfo=void 0;var SlideInfo_1=__webpack_require__(/*! ./SlideInfo */ "./node_modules/react-alice-carousel/lib/views/SlideInfo.js");Object.defineProperty(exports,"SlideInfo",{enumerable:!0,get:function(){return SlideInfo_1.SlideInfo}});var StageItem_1=__webpack_require__(/*! ./StageItem */ "./node_modules/react-alice-carousel/lib/views/StageItem.js");Object.defineProperty(exports,"StageItem",{enumerable:!0,get:function(){return StageItem_1.StageItem}});var DotsNavigation_1=__webpack_require__(/*! ./DotsNavigation */ "./node_modules/react-alice-carousel/lib/views/DotsNavigation.js");Object.defineProperty(exports,"DotsNavigation",{enumerable:!0,get:function(){return DotsNavigation_1.DotsNavigation}});var PlayPauseButton_1=__webpack_require__(/*! ./PlayPauseButton */ "./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js");Object.defineProperty(exports,"PlayPauseButton",{enumerable:!0,get:function(){return PlayPauseButton_1.PlayPauseButton}});var PrevNextButton_1=__webpack_require__(/*! ./PrevNextButton */ "./node_modules/react-alice-carousel/lib/views/PrevNextButton.js");Object.defineProperty(exports,"PrevNextButton",{enumerable:!0,get:function(){return PrevNextButton_1.PrevNextButton}});

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/vanilla-swipe/lib/utils/index.js"));

var _types = __webpack_require__(/*! ./types */ "./node_modules/vanilla-swipe/lib/types/index.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VanillaSwipe = /*#__PURE__*/function () {
  function VanillaSwipe(props) {
    _classCallCheck(this, VanillaSwipe);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "props", void 0);

    this.state = Utils.getInitialState();
    this.props = Utils.getInitialProps(props);
    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  _createClass(VanillaSwipe, [{
    key: "init",
    value: function init() {
      this.setupTouchListeners();
      this.setupMouseListeners();
    }
  }, {
    key: "update",
    value: function update(props) {
      var prevProps = this.props;
      var nextProps = Object.assign({}, prevProps, props);

      if (prevProps.element !== nextProps.element || prevProps.target !== nextProps.target) {
        this.destroy();
        this.props = nextProps;
        this.init();
        return;
      }

      this.props = nextProps;

      if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled || prevProps.preventTrackingOnMouseleave !== nextProps.preventTrackingOnMouseleave) {
        this.cleanupMouseListeners();
        nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
      }

      if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
        this.cleanupTouchListeners();
        nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cleanupMouseListeners();
      this.cleanupTouchListeners();
      this.state = Utils.getInitialState();
      this.props = Utils.getInitialProps();
    }
  }, {
    key: "setupTouchListeners",
    value: function setupTouchListeners() {
      var _this$props = this.props,
          element = _this$props.element,
          target = _this$props.target,
          touchTrackingEnabled = _this$props.touchTrackingEnabled;

      if (element && touchTrackingEnabled) {
        var listener = target || element;
        var isPassiveSupported = Utils.checkIsPassiveSupported();
        var options = Utils.getOptions(isPassiveSupported);
        listener.addEventListener('touchstart', this.handleSwipeStart, options);
        listener.addEventListener('touchmove', this.handleSwipeMove, options);
        listener.addEventListener('touchend', this.handleSwipeEnd, options);
      }
    }
  }, {
    key: "cleanupTouchListeners",
    value: function cleanupTouchListeners() {
      var _this$props2 = this.props,
          element = _this$props2.element,
          target = _this$props2.target;
      var listener = target || element;

      if (listener) {
        listener.removeEventListener('touchstart', this.handleSwipeStart);
        listener.removeEventListener('touchmove', this.handleSwipeMove);
        listener.removeEventListener('touchend', this.handleSwipeEnd);
      }
    }
  }, {
    key: "setupMouseListeners",
    value: function setupMouseListeners() {
      var _this$props3 = this.props,
          element = _this$props3.element,
          mouseTrackingEnabled = _this$props3.mouseTrackingEnabled,
          preventTrackingOnMouseleave = _this$props3.preventTrackingOnMouseleave;

      if (mouseTrackingEnabled && element) {
        element.addEventListener('mousedown', this.handleMouseDown);
        element.addEventListener('mousemove', this.handleMouseMove);
        element.addEventListener('mouseup', this.handleMouseUp);

        if (preventTrackingOnMouseleave) {
          element.addEventListener('mouseleave', this.handleMouseLeave);
        }
      }
    }
  }, {
    key: "cleanupMouseListeners",
    value: function cleanupMouseListeners() {
      var element = this.props.element;

      if (element) {
        element.removeEventListener('mousedown', this.handleMouseDown);
        element.removeEventListener('mousemove', this.handleMouseMove);
        element.removeEventListener('mouseup', this.handleMouseUp);
        element.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    }
  }, {
    key: "getEventData",
    value: function getEventData(e) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        directionDelta: 0
      };
      var rotationAngle = this.props.rotationAngle;
      var directionDelta = options.directionDelta;
      var movingPosition = Utils.calculateMovingPosition(e);
      var rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);
      return Utils.calculatePosition(this.state, {
        rotatePosition: rotatePosition,
        directionDelta: directionDelta
      });
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(e) {
      if (Utils.checkIsMoreThanSingleTouches(e)) return;
      var rotationAngle = this.props.rotationAngle;
      var movingPosition = Utils.calculateMovingPosition(e);

      var _Utils$rotateByAngle = Utils.rotateByAngle(movingPosition, rotationAngle),
          x = _Utils$rotateByAngle.x,
          y = _Utils$rotateByAngle.y;

      this.state = Utils.getInitialState({
        isSwiping: false,
        start: Date.now(),
        x: x,
        y: y
      });
    }
  }, {
    key: "handleSwipeMove",
    value: function handleSwipeMove(e) {
      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y,
          isSwiping = _this$state.isSwiping;
      if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;

      var _this$getEventData = this.getEventData(e),
          absX = _this$getEventData.absX,
          absY = _this$getEventData.absY,
          deltaX = _this$getEventData.deltaX,
          deltaY = _this$getEventData.deltaY,
          directionX = _this$getEventData.directionX,
          directionY = _this$getEventData.directionY,
          duration = _this$getEventData.duration,
          velocity = _this$getEventData.velocity;

      var _this$props4 = this.props,
          delta = _this$props4.delta,
          preventDefaultTouchmoveEvent = _this$props4.preventDefaultTouchmoveEvent,
          onSwipeStart = _this$props4.onSwipeStart,
          onSwiping = _this$props4.onSwiping;
      if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();
      if (absX < Number(delta) && absY < Number(delta) && !isSwiping) return;

      if (onSwipeStart && !isSwiping) {
        onSwipeStart(e, {
          deltaX: deltaX,
          deltaY: deltaY,
          absX: absX,
          absY: absY,
          directionX: directionX,
          directionY: directionY,
          duration: duration,
          velocity: velocity
        });
      }

      this.state.isSwiping = true;

      if (onSwiping) {
        onSwiping(e, {
          deltaX: deltaX,
          deltaY: deltaY,
          absX: absX,
          absY: absY,
          directionX: directionX,
          directionY: directionY,
          duration: duration,
          velocity: velocity
        });
      }
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(e) {
      var _this$props5 = this.props,
          onSwiped = _this$props5.onSwiped,
          onTap = _this$props5.onTap;

      if (this.state.isSwiping) {
        var directionDelta = this.props.directionDelta || 0;
        var position = this.getEventData(e, {
          directionDelta: directionDelta
        });
        onSwiped && onSwiped(e, position);
      } else {
        var _position = this.getEventData(e);

        onTap && onTap(e, _position);
      }

      this.state = Utils.getInitialState();
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var target = this.props.target;

      if (target) {
        if (target === e.target) {
          this.handleSwipeStart(e);
        }
      } else {
        this.handleSwipeStart(e);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      this.handleSwipeMove(e);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      var isSwiping = this.state.isSwiping;
      var target = this.props.target;

      if (target) {
        if (target === e.target || isSwiping) {
          this.handleSwipeEnd(e);
        }
      } else {
        this.handleSwipeEnd(e);
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(e) {
      var isSwiping = this.state.isSwiping;

      if (isSwiping) {
        this.handleSwipeEnd(e);
      }
    }
  }]);

  return VanillaSwipe;
}();

exports["default"] = VanillaSwipe;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/types/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Axis = exports.Direction = exports.TraceDirectionKey = void 0;
var TraceDirectionKey;
exports.TraceDirectionKey = TraceDirectionKey;

(function (TraceDirectionKey) {
  TraceDirectionKey["NEGATIVE"] = "NEGATIVE";
  TraceDirectionKey["POSITIVE"] = "POSITIVE";
  TraceDirectionKey["NONE"] = "NONE";
})(TraceDirectionKey || (exports.TraceDirectionKey = TraceDirectionKey = {}));

var Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction["TOP"] = "TOP";
  Direction["LEFT"] = "LEFT";
  Direction["RIGHT"] = "RIGHT";
  Direction["BOTTOM"] = "BOTTOM";
  Direction["NONE"] = "NONE";
})(Direction || (exports.Direction = Direction = {}));

var Axis;
exports.Axis = Axis;

(function (Axis) {
  Axis["X"] = "x";
  Axis["Y"] = "y";
})(Axis || (exports.Axis = Axis = {}));

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateDirection.js":
/*!********************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateDirection.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDirection = calculateDirection;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function calculateDirection(trace) {
  var direction;
  var negative = _types.TraceDirectionKey.NEGATIVE;
  var positive = _types.TraceDirectionKey.POSITIVE;
  var current = trace[trace.length - 1];
  var previous = trace[trace.length - 2] || 0;

  if (trace.every(function (i) {
    return i === 0;
  })) {
    return _types.TraceDirectionKey.NONE;
  }

  direction = current > previous ? positive : negative;

  if (current === 0) {
    direction = previous < 0 ? positive : negative;
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateDirectionDelta.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateDirectionDelta.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDirectionDelta = calculateDirectionDelta;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

var _ = __webpack_require__(/*! . */ "./node_modules/vanilla-swipe/lib/utils/index.js");

function calculateDirectionDelta(traceDirections) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var length = traceDirections.length;
  var i = length - 1;
  var direction = _types.TraceDirectionKey.NONE;

  for (; i >= 0; i--) {
    var current = traceDirections[i];
    var currentKey = (0, _.getDirectionKey)(current);
    var currentValue = (0, _.getDirectionValue)(current[currentKey]);
    var prev = traceDirections[i - 1] || {};
    var prevKey = (0, _.getDirectionKey)(prev);
    var prevValue = (0, _.getDirectionValue)(prev[prevKey]);
    var difference = (0, _.getDifference)(currentValue, prevValue);

    if (difference >= delta) {
      direction = currentKey;
      break;
    } else {
      direction = prevKey;
    }
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateDuration.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDuration = calculateDuration;

function calculateDuration() {
  var prevTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var nextTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return prevTime ? nextTime - prevTime : 0;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateMovingPosition = calculateMovingPosition;

function calculateMovingPosition(e) {
  if ('changedTouches' in e) {
    var touches = e.changedTouches && e.changedTouches[0];
    return {
      x: touches && touches.clientX,
      y: touches && touches.clientY
    };
  }

  return {
    x: e.clientX,
    y: e.clientY
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculatePosition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculatePosition.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePosition = calculatePosition;

var Utils = _interopRequireWildcard(__webpack_require__(/*! . */ "./node_modules/vanilla-swipe/lib/utils/index.js"));

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function calculatePosition(state, options) {
  var start = state.start,
      x = state.x,
      y = state.y,
      traceX = state.traceX,
      traceY = state.traceY;
  var rotatePosition = options.rotatePosition,
      directionDelta = options.directionDelta;
  var deltaX = rotatePosition.x - x;
  var deltaY = y - rotatePosition.y;
  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);
  Utils.updateTrace(traceX, deltaX);
  Utils.updateTrace(traceY, deltaY);
  var directionX = Utils.resolveDirection(traceX, _types.Axis.X, directionDelta);
  var directionY = Utils.resolveDirection(traceY, _types.Axis.Y, directionDelta);
  var duration = Utils.calculateDuration(start, Date.now());
  var velocity = Utils.calculateVelocity(absX, absY, duration);
  return {
    absX: absX,
    absY: absY,
    deltaX: deltaX,
    deltaY: deltaY,
    directionX: directionX,
    directionY: directionY,
    duration: duration,
    positionX: rotatePosition.x,
    positionY: rotatePosition.y,
    velocity: velocity
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateTraceDirections.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateTraceDirections.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTraceDirections = calculateTraceDirections;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function calculateTraceDirections() {
  var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ticks = [];
  var positive = _types.TraceDirectionKey.POSITIVE;
  var negative = _types.TraceDirectionKey.NEGATIVE;
  var i = 0;
  var tick = [];
  var direction = _types.TraceDirectionKey.NONE;

  for (; i < trace.length; i++) {
    var current = trace[i];
    var prev = trace[i - 1];

    if (tick.length) {
      var currentDirection = current > prev ? positive : negative;

      if (direction === _types.TraceDirectionKey.NONE) {
        direction = currentDirection;
      }

      if (currentDirection === direction) {
        tick.push(current);
      } else {
        ticks.push(_defineProperty({}, direction, tick.slice()));
        tick = [];
        tick.push(current);
        direction = currentDirection;
      }
    } else {
      if (current !== 0) {
        direction = current > 0 ? positive : negative;
      }

      tick.push(current);
    }
  }

  if (tick.length) {
    ticks.push(_defineProperty({}, direction, tick));
  }

  return ticks;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateVelocity = calculateVelocity;

function calculateVelocity(x, y, time) {
  var magnitude = Math.sqrt(x * x + y * y);
  return magnitude / (time || 1);
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsMoreThanSingleTouches = void 0;

var checkIsMoreThanSingleTouches = function checkIsMoreThanSingleTouches(e) {
  return Boolean(e.touches && e.touches.length > 1);
};

exports.checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsPassiveSupported = checkIsPassiveSupported;
exports.noop = void 0;

var _createOptions = __webpack_require__(/*! ./createOptions */ "./node_modules/vanilla-swipe/lib/utils/createOptions.js");

function checkIsPassiveSupported() {
  var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var proxy = {
    isPassiveSupported: isPassiveSupported
  };

  try {
    var options = (0, _createOptions.createOptions)(proxy);
    window.addEventListener('checkIsPassiveSupported', noop, options);
    window.removeEventListener('checkIsPassiveSupported', noop, options);
  } catch (err) {}

  return proxy.isPassiveSupported;
}

var noop = function noop() {};

exports.noop = noop;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/common.js":
/*!********************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/common.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveAxisDirection = exports.getDifference = exports.getDirectionValue = exports.getDirectionKey = void 0;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

var getDirectionKey = function getDirectionKey() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = Object.keys(object).toString();

  switch (key) {
    case _types.TraceDirectionKey.POSITIVE:
      return _types.TraceDirectionKey.POSITIVE;

    case _types.TraceDirectionKey.NEGATIVE:
      return _types.TraceDirectionKey.NEGATIVE;

    default:
      return _types.TraceDirectionKey.NONE;
  }
};

exports.getDirectionKey = getDirectionKey;

var getDirectionValue = function getDirectionValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return values[values.length - 1] || 0;
};

exports.getDirectionValue = getDirectionValue;

var getDifference = function getDifference() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.abs(x - y);
};

exports.getDifference = getDifference;

var resolveAxisDirection = function resolveAxisDirection(axis, key) {
  var negative = _types.Direction.LEFT;
  var positive = _types.Direction.RIGHT;
  var direction = _types.Direction.NONE;

  if (axis === _types.Axis.Y) {
    negative = _types.Direction.BOTTOM;
    positive = _types.Direction.TOP;
  }

  if (key === _types.TraceDirectionKey.NEGATIVE) {
    direction = negative;
  }

  if (key === _types.TraceDirectionKey.POSITIVE) {
    direction = positive;
  }

  return direction;
};

exports.resolveAxisDirection = resolveAxisDirection;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/createOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/createOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOptions = createOptions;

function createOptions() {
  var proxy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.defineProperty(proxy, 'passive', {
    get: function get() {
      this.isPassiveSupported = true;
      return true;
    },
    enumerable: true
  });
  return proxy;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getInitialProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getInitialProps.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialProps = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getInitialProps = function getInitialProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    element: null,
    delta: 10,
    directionDelta: 0,
    rotationAngle: 0,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    preventTrackingOnMouseleave: false
  }, props);
};

exports.getInitialProps = getInitialProps;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getInitialState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getInitialState.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialState = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getInitialState = function getInitialState() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    x: 0,
    y: 0,
    start: 0,
    isSwiping: false,
    traceX: [],
    traceY: []
  }, options);
};

exports.getInitialState = getInitialState;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getOptions.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getOptions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = getOptions;

function getOptions() {
  var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (isPassiveSupported) {
    return {
      passive: false
    };
  }

  return {};
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calculateDirection = __webpack_require__(/*! ./calculateDirection */ "./node_modules/vanilla-swipe/lib/utils/calculateDirection.js");

Object.keys(_calculateDirection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateDirection[key];
    }
  });
});

var _calculateDirectionDelta = __webpack_require__(/*! ./calculateDirectionDelta */ "./node_modules/vanilla-swipe/lib/utils/calculateDirectionDelta.js");

Object.keys(_calculateDirectionDelta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateDirectionDelta[key];
    }
  });
});

var _calculateDuration = __webpack_require__(/*! ./calculateDuration */ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js");

Object.keys(_calculateDuration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateDuration[key];
    }
  });
});

var _calculateMovingPosition = __webpack_require__(/*! ./calculateMovingPosition */ "./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js");

Object.keys(_calculateMovingPosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateMovingPosition[key];
    }
  });
});

var _calculatePosition = __webpack_require__(/*! ./calculatePosition */ "./node_modules/vanilla-swipe/lib/utils/calculatePosition.js");

Object.keys(_calculatePosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculatePosition[key];
    }
  });
});

var _calculateTraceDirections = __webpack_require__(/*! ./calculateTraceDirections */ "./node_modules/vanilla-swipe/lib/utils/calculateTraceDirections.js");

Object.keys(_calculateTraceDirections).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateTraceDirections[key];
    }
  });
});

var _calculateVelocity = __webpack_require__(/*! ./calculateVelocity */ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js");

Object.keys(_calculateVelocity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateVelocity[key];
    }
  });
});

var _checkIsMoreThanSingleTouches = __webpack_require__(/*! ./checkIsMoreThanSingleTouches */ "./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js");

Object.keys(_checkIsMoreThanSingleTouches).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIsMoreThanSingleTouches[key];
    }
  });
});

var _checkIsPassiveSupported = __webpack_require__(/*! ./checkIsPassiveSupported */ "./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js");

Object.keys(_checkIsPassiveSupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIsPassiveSupported[key];
    }
  });
});

var _common = __webpack_require__(/*! ./common */ "./node_modules/vanilla-swipe/lib/utils/common.js");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

var _createOptions = __webpack_require__(/*! ./createOptions */ "./node_modules/vanilla-swipe/lib/utils/createOptions.js");

Object.keys(_createOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createOptions[key];
    }
  });
});

var _getInitialState = __webpack_require__(/*! ./getInitialState */ "./node_modules/vanilla-swipe/lib/utils/getInitialState.js");

Object.keys(_getInitialState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getInitialState[key];
    }
  });
});

var _getInitialProps = __webpack_require__(/*! ./getInitialProps */ "./node_modules/vanilla-swipe/lib/utils/getInitialProps.js");

Object.keys(_getInitialProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getInitialProps[key];
    }
  });
});

var _getOptions = __webpack_require__(/*! ./getOptions */ "./node_modules/vanilla-swipe/lib/utils/getOptions.js");

Object.keys(_getOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getOptions[key];
    }
  });
});

var _resolveDirection = __webpack_require__(/*! ./resolveDirection */ "./node_modules/vanilla-swipe/lib/utils/resolveDirection.js");

Object.keys(_resolveDirection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resolveDirection[key];
    }
  });
});

var _rotateByAngle = __webpack_require__(/*! ./rotateByAngle */ "./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js");

Object.keys(_rotateByAngle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rotateByAngle[key];
    }
  });
});

var _updateTrace = __webpack_require__(/*! ./updateTrace */ "./node_modules/vanilla-swipe/lib/utils/updateTrace.js");

Object.keys(_updateTrace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _updateTrace[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/resolveDirection.js":
/*!******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/resolveDirection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveDirection = resolveDirection;

var Utils = _interopRequireWildcard(__webpack_require__(/*! . */ "./node_modules/vanilla-swipe/lib/utils/index.js"));

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function resolveDirection(trace) {
  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _types.Axis.X;
  var directionDelta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (directionDelta) {
    var directions = Utils.calculateTraceDirections(trace);

    var _direction = Utils.calculateDirectionDelta(directions, directionDelta);

    return Utils.resolveAxisDirection(axis, _direction);
  }

  var direction = Utils.calculateDirection(trace);
  return Utils.resolveAxisDirection(axis, direction);
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateByAngle = rotateByAngle;

function rotateByAngle(position) {
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (angle === 0) {
    return position;
  }

  var x = position.x,
      y = position.y;
  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return {
    x: rotatedX,
    y: rotatedY
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/updateTrace.js":
/*!*************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/updateTrace.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTrace = updateTrace;

function updateTrace(trace, value) {
  var last = trace[trace.length - 1];

  if (last !== value) {
    trace.push(value);
  }

  return trace;
}

/***/ })

}]);