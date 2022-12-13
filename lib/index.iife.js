var index = (function (exports, React) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".index_title__yrgBn {\n  color: red; }\n  .index_title__yrgBn div {\n    width: 200px; }\n";
  styleInject(css_248z);

  function Hello() {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/React__default["default"].createElement("div", null, "\u6D4B\u8BD5Hello\u7EC4\u4EF6"));
  }

  var a = 12;
  function About() {
    return /*#__PURE__*/React__default["default"].createElement("div", null, "About", a);
  }

  exports.About = About;
  exports.Hello = Hello;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React);
//# sourceMappingURL=index.iife.js.map
