import React from 'react';

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
  return /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Hello\u6211\u662Fhello\u7EC4\u4EF6", /*#__PURE__*/React.createElement("span", null, "\u54C8\u54C8"));
}

var a = 12;
function About() {
  return /*#__PURE__*/React.createElement("div", null, "About", a);
}

export { About, Hello };
//# sourceMappingURL=index.esm.js.map
