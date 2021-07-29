import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";

var Node = function Node(v, next) {
  _classCallCheck(this, Node);

  this.value = v;
  this.next = next;
};

var LinkList = /*#__PURE__*/function () {
  function LinkList() {
    _classCallCheck(this, LinkList);

    // 链表长度
    this.size = 0; // 虚拟头部

    this.dummyNode = new Node(null, null);
  }

  _createClass(LinkList, [{
    key: "find",
    value: function find(header, index, currentIndex) {
      if (index === currentIndex) {
        return header;
      }

      return this.find(header.next, index, currentIndex + 1);
    }
  }, {
    key: "addNode",
    value: function addNode(v, index) {
      this.checkIndex(index); // 当往链表末尾插入时，prev.next 为空
      // 其他情况时，因为要插入节点，所以插入的节点
      // 的next应该是prev.next
      // 然后设置prev.next 为插入的节点

      var prev = this.find(this.dummyNode, index, 0);
      prev.next = new Node(v, prev.next);
      this.size++;
      return prev.next;
    }
  }, {
    key: "insertNode",
    value: function insertNode(v, index) {
      return this.addNode(v, index);
    }
  }, {
    key: "addToFirst",
    value: function addToFirst(v) {
      return this.addNode(v, 0);
    }
  }, {
    key: "addToLast",
    value: function addToLast(v) {
      return this.addNode(v, this.size);
    }
  }, {
    key: "removeNode",
    value: function removeNode(index, isLast) {
      this.checkIndex(index);
      index = isLast ? index - 1 : index;
      var prev = this.find(this.dummyNode, index, 0);
      var node = prev.next;
      prev.next = node.next;
      node.next = null;
      this.size--;
      return node;
    }
  }, {
    key: "removeFirstNode",
    value: function removeFirstNode() {
      return this.removeNode(0);
    }
  }, {
    key: "removeLastNode",
    value: function removeLastNode() {
      return this.removeNode(this.size, true);
    }
  }, {
    key: "checkIndex",
    value: function checkIndex(index) {
      if (index < 0 || index > this.size) {
        throw Error('Index error');
      }
    }
  }, {
    key: "getNode",
    value: function getNode(index) {
      this.checkIndex(index);

      if (this.isEmpty()) {
        return;
      }

      return this.find(this.dummyNode, index, 0).next;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }]);

  return LinkList;
}();

export { LinkList as default };