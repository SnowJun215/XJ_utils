import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
export var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.queue = [];
  }

  _createClass(Queue, [{
    key: "enQueue",
    value: function enQueue(item) {
      this.queue.push(item);
    }
  }, {
    key: "deQueue",
    value: function deQueue() {
      return this.queue.shift();
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return this.queue[0];
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.queue.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.getLength() === 0;
    }
  }]);

  return Queue;
}();
export var SqQueue = /*#__PURE__*/function () {
  function SqQueue(length) {
    _classCallCheck(this, SqQueue);

    this.queue = new Array(length + 1); // 队头

    this.first = 0; // 队尾

    this.last = 0; // 当前队列大小

    this.size = 0;
  }

  _createClass(SqQueue, [{
    key: "enQueue",
    value: function enQueue(item) {
      // 判断队尾 +1 是否为队头
      // 如果是就代码需要扩容数组
      // % this.queue.length 视为了防止数组越界
      if (this.first === (this.last + 1) % this.queue.length) {
        this.resize(this.getLength() * 2 + 1);
      }

      this.queue[this.last] = item;
      this.size++;
      this.last = (this.last + 1) % this.queue.length;
    }
  }, {
    key: "deQueue",
    value: function deQueue() {
      if (this.isEmpty()) {
        throw Error('Query is empty');
      }

      var r = this.queue[this.first];
      this.queue[this.first] = null;
      this.first = (this.first + 1) % this.queue.length;
      this.size--; // 判断当前队列大小是否过小
      // 为了保证不浪费空间，在队列空间等于总长度四分之一时
      // 且不为2时缩小总长对为当前的一半

      if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
        this.resize(this.getLength() / 2);
      }

      return r;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      if (this.isEmpty()) {
        throw Error('Query is empty');
      }

      return this.queue[this.first];
    }
  }, {
    key: "resize",
    value: function resize(length) {
      var q = new Array(length);

      for (var i = 0; i < length; i++) {
        q[i] = this.queue[(i + this.first) % this.queue.length];
      }

      this.queue = q;
      this.first = 0;
      this.last = this.size;
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.queue.length - 1;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.first === this.last;
    }
  }]);

  return SqQueue;
}();