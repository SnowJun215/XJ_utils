"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVL = exports.BST = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _Queue = require("../Queue");

var Node = function Node(value) {
  (0, _classCallCheck2.default)(this, Node);
  this.value = value;
  this.left = null;
  this.right = null;
};

var BSTNode = /*#__PURE__*/function (_Node) {
  (0, _inherits2.default)(BSTNode, _Node);

  var _super = (0, _createSuper2.default)(BSTNode);

  function BSTNode(value) {
    var _this;

    (0, _classCallCheck2.default)(this, BSTNode);
    _this = _super.call(this, value);
    _this.size = 1;
    return _this;
  }

  return BSTNode;
}(Node);

var BST = /*#__PURE__*/function () {
  function BST() {
    (0, _classCallCheck2.default)(this, BST);
    this.root = null;
  }

  (0, _createClass2.default)(BST, [{
    key: "getSize",
    value: function getSize() {
      return this.root ? this.root.size : 0;
    }
  }, {
    key: "_getSize",
    value: function _getSize(node) {
      return node ? node.size : 0;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.root === null;
    }
  }, {
    key: "addNode",
    value: function addNode(v) {
      this.root = this._addChild(this.root, v);
    }
  }, {
    key: "_addChild",
    value: function _addChild(node, v) {
      if (!node) {
        return new BSTNode(v);
      }

      if (node.value > v) {
        node.size++;
        node.left = this._addChild(node.left, v);
      } else if (node.value < v) {
        node.size++;
        node.right = this._addChild(node.right, v);
      }

      return node;
    } // ???????????????????????????????????????
    // ??????????????????????????????????????????????????????????????????????????????

  }, {
    key: "preTraversal",
    value: function preTraversal() {
      this._pre(this.root);
    }
  }, {
    key: "_pre",
    value: function _pre(node) {
      if (node) {
        console.log(node.value);

        this._pre(node.left);

        this._pre(node.right);
      }
    } // ???????????????????????????
    // ??????BST??????????????????????????????????????????????????????????????????
    // ????????????????????????????????????????????????????????????????????????????????????

  }, {
    key: "midTraversal",
    value: function midTraversal() {
      this._mid(this.root);
    }
  }, {
    key: "_mid",
    value: function _mid(node) {
      if (node) {
        this._mid(node.left);

        console.log(node.value);

        this._mid(node.right);
      }
    } // ???????????????????????????????????????
    // ???????????????????????????
    // ????????????????????????????????????????????????????????????????????????????????????

  }, {
    key: "backTraversal",
    value: function backTraversal() {
      this._back(this.root);
    }
  }, {
    key: "_back",
    value: function _back(node) {
      if (node) {
        this._back(node.left);

        this._back(node.right);

        console.log(node.value);
      }
    }
  }, {
    key: "breadthTraversal",
    value: function breadthTraversal() {
      if (!this.root) {
        return null;
      }

      var q = new _Queue.Queue(); // ??????????????????

      q.enQueue(this.root); // ??????????????????????????????
      // ???????????????????????????

      while (!q.isEmpty()) {
        // ?????????????????????????????????????????????
        // ?????????????????????????????????
        var n = q.deQueue();
        console.log(n.value);

        if (n.left) {
          q.enQueue(n.left);
        }

        if (n.right) {
          q.enQueue(n.right);
        }
      }
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this._getMin(this.root).value;
    }
  }, {
    key: "_getMin",
    value: function _getMin(node) {
      if (!node.left) {
        return node;
      }

      return this._getMin(node.left);
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this._getMax(this.root).value;
    }
  }, {
    key: "_getMax",
    value: function _getMax(node) {
      if (!node.right) {
        return node;
      }

      return this._getMax(node.right);
    } // ????????????

  }, {
    key: "floor",
    value: function floor(v) {
      var node = this._floor(this.root, v);

      return node ? node.value : null;
    }
  }, {
    key: "_floor",
    value: function _floor(node, v) {
      if (!node) {
        return null;
      }

      if (node.value === v) {
        return node;
      } // ????????????????????????????????????????????????????????????


      if (node.value > v) {
        return this._floor(node.left, v);
      } // ???????????????????????????????????????


      var right = this._floor(node.right, v);

      if (right) {
        return right;
      }

      return node;
    } // ????????????

  }, {
    key: "ceil",
    value: function ceil(v) {
      var node = this._ceil(this.root, v);

      return node ? node.value : null;
    }
  }, {
    key: "_ceil",
    value: function _ceil(node, v) {
      if (!node) {
        return null;
      }

      if (node.value === v) {
        return node;
      } // ????????????????????????????????????????????????????????????


      if (node.value < v) {
        return this._ceil(node.right, v);
      } // ???????????????????????????????????????


      var left = this._ceil(node.left, v);

      if (left) {
        return left;
      }

      return node;
    }
  }, {
    key: "select",
    value: function select(k) {
      var node = this._select(this.root, k);

      return node ? node.value : null;
    }
  }, {
    key: "_select",
    value: function _select(node, k) {
      if (!node) {
        return null;
      } // ????????????????????????????????????


      var size = node.left ? node.left.size : 0; // ?????? size ???????????? k
      // ???????????? k??? ?????????????????????????????????

      if (size > k) {
        return this._select(node.left, k);
      } // ???????????? k??? ????????????????????????????????????
      // ??????????????????????????????k??? ??????????????????????????????????????????


      if (size < k) {
        return this._select(node.right, k - size - 1);
      }

      return node;
    } // ??????????????????

  }, {
    key: "deleteMin",
    value: function deleteMin() {
      this.root = this._deleteMin(this.root);
      console.log(this.root);
    }
  }, {
    key: "_deleteMin",
    value: function _deleteMin(node) {
      // ?????????????????????
      // ????????????????????????????????????????????????????????????
      // ???????????????????????????????????????????????????????????????
      if (node !== null && !node.left) {
        return node.right;
      }

      node.left = this._deleteMin(node.left);
      node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
      return node;
    }
  }, {
    key: "delete",
    value: function _delete(v) {
      this.root = this._delete(this.root, v);
    }
  }, {
    key: "_delete",
    value: function _delete(node, v) {
      if (!node) {
        return null;
      } // ???????????????????????????????????????????????????


      if (node.value < v) {
        node.right = this._delete(node.right, v);
      } else if (node.value > v) {
        // ???????????????????????????????????? ???????????????
        node.left = this._delete(node.left, v);
      } else {
        // ????????????
        // ????????????????????????????????????
        // ????????????
        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        } // ????????????????????????
        // ???????????????????????????????????????


        var min = this._getMin(node.right); // ?????????????????????????????????????????????????????????????????????


        min.right = this._deleteMin(node.right); // ???????????????

        min.left = node.left;
        node = min;
      } // ??????size


      node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
      return node;
    }
  }]);
  return BST;
}();

exports.BST = BST;

var AVLNode = /*#__PURE__*/function (_Node2) {
  (0, _inherits2.default)(AVLNode, _Node2);

  var _super2 = (0, _createSuper2.default)(AVLNode);

  function AVLNode(value) {
    var _this2;

    (0, _classCallCheck2.default)(this, AVLNode);
    _this2 = _super2.call(this, value);
    _this2.height = 1;
    return _this2;
  }

  return AVLNode;
}(Node);

var AVL = /*#__PURE__*/function () {
  function AVL() {
    (0, _classCallCheck2.default)(this, AVL);
    this.root = null;
  }

  (0, _createClass2.default)(AVL, [{
    key: "addNode",
    value: function addNode(v) {
      this.root = this._addChild(this.root, v);
    }
  }, {
    key: "_addChild",
    value: function _addChild(node, v) {
      if (!node) {
        return new AVLNode(v);
      }

      if (node.value > v) {
        node.left = this._addChild(node.left, v);
      } else if (node.value < v) {
        node.right = this._addChild(node.right, v);
      } else {
        node.value = v;
      }

      node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;

      var factor = this._getBalanceFactor(node); // ?????????????????????????????????????????????????????????


      if (factor > 1 && this._getBalanceFactor(node.left) >= 0) {
        return this._rightRotate(node);
      } //?????????????????????????????????????????????????????????


      if (factor < -1 && this._getBalanceFactor(node.right) <= 0) {
        return this._leftRotate(node);
      } // ????????????
      // ????????????????????????????????????????????????????????????????????????????????????


      if (factor > 1 && this._getBalanceFactor(node.left) < 0) {
        node.left = this._leftRotate(node.left);
        return this._rightRotate(node);
      } // ????????????
      // ????????????????????????????????????????????????????????????????????????????????????


      if (factor < -1 && this._getBalanceFactor(node.right) > 0) {
        node.right = this._rightRotate(node.right);
        return this._leftRotate(node);
      }

      return node;
    }
  }, {
    key: "_getHeight",
    value: function _getHeight(node) {
      if (!node) {
        return 0;
      }

      return node.height;
    }
  }, {
    key: "_getBalanceFactor",
    value: function _getBalanceFactor(node) {
      return this._getHeight(node.left) - this._getHeight(node.right);
    }
    /**
     * ????????????
     *        5              2
     *       / \            / \
     *      2   6   ==>    1   5
     *     / \            /   / \
     *    1   3         new  3   6
     *   /
     * new
     * @param node
     * @return node
     * @private
     */

  }, {
    key: "_rightRotate",
    value: function _rightRotate(node) {
      // ?????????????????????
      var newRoot = node.left; // ?????????????????????

      var moveNode = node.right; // ?????????????????????
      // ??????????????????????????????????????????

      newRoot.right = node; // ?????????????????????????????????????????????

      node.left = moveNode; // ??????????????????

      node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
      newRoot.height = Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right)) + 1;
      return newRoot;
    }
    /**
     * ????????????
     *   4                6
     *  / \              / \
     * 2   6    ==>     4   7
     *    / \          / \   \
     *   5   7        2   5  new
     *        \
     *        new
     * @param node
     * @return node
     * @private
     */

  }, {
    key: "_leftRotate",
    value: function _leftRotate(node) {
      // ????????????????????????
      var newRoot = node.right; // ?????????????????????

      var moveNode = node.left; // ?????????????????????
      // ??????????????????????????????????????????

      newRoot.left = node; // ?????????????????????????????????????????????

      node.right = moveNode; // ??????????????????

      node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
      newRoot.height = Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right)) + 1;
      return newRoot;
    }
  }]);
  return AVL;
}();

exports.AVL = AVL;