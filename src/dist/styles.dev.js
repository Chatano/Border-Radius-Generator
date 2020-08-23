"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.box = exports.inputsContainer = exports.container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 600px;\n    height: 360px;\n    background-color: #f51871;\n\n    \n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n    \n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    input{\n        width:  235px;\n        height: 55px;\n        margin: 10px;\n        border-radius: 4px;\n        outline: 0;\n        padding: 20px;\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n    max-width: 1080px;\n    padding: 2px 10px;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    h1 {\n        color: white;\n        text-transform: uppercase;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var container = _styledComponents["default"].div(_templateObject());

exports.container = container;

var inputsContainer = _styledComponents["default"].div(_templateObject2());

exports.inputsContainer = inputsContainer;

var box = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.topLeft ? "".concat(props.topLeft, "px") : "0px";
}, function (props) {
  return props.topRight ? "".concat(props.topRight, "px") : "0px";
}, function (props) {
  return props.bottomLeft ? "".concat(props.bottomLeft, "px") : "0px";
}, function (props) {
  return props.bottomRight ? "".concat(props.bottomRight, "px") : "0px";
});

exports.box = box;