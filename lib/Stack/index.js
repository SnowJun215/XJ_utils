"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Stack = /*#__PURE__*/function () {
  function Stack() {
    (0, _classCallCheck2.default)(this, Stack);
    this.stack = [];
  }

  (0, _createClass2.default)(Stack, [{
    key: "push",
    value: function push(item) {
      this.stack.push(item);
    }
  }, {
    key: "pop",
    value: function pop() {
      this.stack.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.stack[this.getCount() - 1];
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return this.stack.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.getCount() === 0;
    }
  }]);
  return Stack;
}();

exports.default = Stack;