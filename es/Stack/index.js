import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.stack = [];
  }

  _createClass(Stack, [{
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

export { Stack as default };