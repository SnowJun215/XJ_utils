import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
export var MaxHeap = /*#__PURE__*/function () {
  function MaxHeap() {
    _classCallCheck(this, MaxHeap);

    this.heap = [];
  }

  _createClass(MaxHeap, [{
    key: "size",
    value: function size() {
      return this.heap.length;
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.size() === 0;
    }
  }, {
    key: "add",
    value: function add(item) {
      this.heap.push(item);

      this._shiftUp(this.size() - 1);
    }
  }, {
    key: "removeMax",
    value: function removeMax() {
      this._shiftDown(0);
    }
  }, {
    key: "getParentIndex",
    value: function getParentIndex(k) {
      return Math.floor((k - 1) / 2);
    }
  }, {
    key: "getLeftIndex",
    value: function getLeftIndex(k) {
      return k * 2 + 1;
    }
  }, {
    key: "_compare",
    value: function _compare(i, j) {
      var equal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (equal) {
        return this.heap[i] >= this.heap[j];
      }

      return this.heap[i] > this.heap[j];
    }
  }, {
    key: "_shiftUp",
    value: function _shiftUp(k) {
      // 如果当前节点比父节点大，就交换
      while (this._compare(k, this.getParentIndex(k))) {
        this._swap(k, this.getParentIndex(k)); // 将索引变成父节点


        k = this.getParentIndex(k);
      }
    }
  }, {
    key: "_shiftDown",
    value: function _shiftDown(k) {
      // 交换首位并删除末尾
      this._swap(k, this.size() - 1);

      this.heap.splice(this.size() - 1, 1); // 判断节点是否有左节点

      while (this.getLeftIndex(k) < this.size()) {
        var j = this.getLeftIndex(k); // 判断是否有右节点，并且右节点是否大于左节点

        if (j + 1 < this.size() && this._compare(j + 1, j)) {
          j++;
        } // 判断父节点是否比子节点都大


        if (this._compare(k, j, true)) {
          break;
        }

        this._swap(k, j);

        k = j;
      }
    }
  }, {
    key: "_swap",
    value: function _swap(left, right) {
      var rightValue = this.heap[right];
      this.heap[right] = this.heap[left];
      this.heap[left] = rightValue;
    }
  }]);

  return MaxHeap;
}();
export var MinHeap = /*#__PURE__*/function (_MaxHeap) {
  _inherits(MinHeap, _MaxHeap);

  var _super = _createSuper(MinHeap);

  function MinHeap() {
    _classCallCheck(this, MinHeap);

    return _super.call(this);
  }

  _createClass(MinHeap, [{
    key: "_compare",
    value: function _compare(i, j) {
      var equal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (equal) {
        return this.heap[i] <= this.heap[j];
      }

      return this.heap[i] < this.heap[j];
    }
  }]);

  return MinHeap;
}(MaxHeap);