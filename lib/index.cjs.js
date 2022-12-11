'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

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

var css_248z = ".title {\n  color: red; }\n  .title div {\n    width: 200px; }\n";
styleInject(css_248z);

function Hello() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "title"
  }, "Hello\u6211\u662Fhello\u7EC4\u4EF6", /*#__PURE__*/React__default["default"].createElement("span", null, "\u54C8\u54C8"));
}

var a = 12;
function About() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, "About", a);
}

exports.About = About;
exports.Hello = Hello;
//# sourceMappingURL=index.cjs.js.map
