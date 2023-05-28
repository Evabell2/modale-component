"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./style/style.css");
function Modale(props) {
  const text = props.text || 'Employee Created !';
  if (props.display) {
    return /*#__PURE__*/React.createElement("div", {
      className: "modale"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: props.setDisplayModale
    }, "X"), /*#__PURE__*/React.createElement("p", null, text)));
  }
  return /*#__PURE__*/React.createElement("div", null);
}
var _default = Modale;
exports.default = _default;