"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style/style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modale(props) {
  const text = props.text || 'Employee Created !';
  if (props.display) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "modale"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
      onClick: props.setDisplayModale
    }, "X"), /*#__PURE__*/_react.default.createElement("p", null, text)));
  }
  return /*#__PURE__*/_react.default.createElement("div", null);
}
var _default = Modale;
exports.default = _default;