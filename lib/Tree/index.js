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
    } // 先序遍历可用于打印树的结构
    // 先序遍历先访问根节点，然后访问左节点，最后访问右节点

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
    } // 中序遍历可用于排序
    // 对于BST来说，中序遍历可以试下一次遍历就得到有序的值
    // 中序遍历表示先访问左节点，然后访问根节点，最后访问右节点

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
    } // 后续遍历可用于先操作子节点
    // 在操作父节点的场景
    // 后续遍历标识先访问左节点，然后访问右节点，最后访问根节点

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

      var q = new _Queue.Queue(); // 将根节点入队

      q.enQueue(this.root); // 循环判断队列是否为空
      // 为空代表树遍历完毕

      while (!q.isEmpty()) {
        // 将队首出队，判断是否有左右子树
        // 有的话，就先左后右入队
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
    } // 向下取整

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
      } // 如果当前节点值还比需要的值大，就继续递归


      if (node.value > v) {
        return this._floor(node.left, v);
      } // 判断当前节点是否拥有右子树


      var right = this._floor(node.right, v);

      if (right) {
        return right;
      }

      return node;
    } // 向上取整

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
      } // 如果当前节点值还比需要的值打，就继续递归


      if (node.value < v) {
        return this._ceil(node.right, v);
      } // 判断当前节点是否拥有左子树


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
      } // 先获取左子树下有几个节点


      var size = node.left ? node.left.size : 0; // 判断 size 是否大于 k
      // 如果大于 k， 代表所需的节点在左节点

      if (size > k) {
        return this._select(node.left, k);
      } // 如果小于 k， 代表所需要的节点在右节点
      // 注意这里需要重新计算k， 减去根节点除右子树的节点数量


      if (size < k) {
        return this._select(node.right, k - size - 1);
      }

      return node;
    } // 删除最小节点

  }, {
    key: "deleteMin",
    value: function deleteMin() {
      this.root = this._deleteMin(this.root);
      console.log(this.root);
    }
  }, {
    key: "_deleteMin",
    value: function _deleteMin(node) {
      // 一直递归左子树
      // 如果左子树为空，就判断节点是否拥有右子树
      // 有右子树的话就把需要删除的节点替换为右子树
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
      } // 寻找的节点比当前节点小，去右子树找


      if (node.value < v) {
        node.right = this._delete(node.right, v);
      } else if (node.value > v) {
        // 寻找的节点比当前节点大， 去左子树找
        node.left = this._delete(node.left, v);
      } else {
        // 找到节点
        // 是否拥有左右子树其中一个
        // 返回子树
        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        } // 同时拥有左右子树
        // 取出当前节点右子树的最小值


        var min = this._getMin(node.right); // 删除最小值，然后把当前节点的右子树赋值给最小值


        min.right = this._deleteMin(node.right); // 左子树不动

        min.left = node.left;
        node = min;
      } // 维护size


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

      var factor = this._getBalanceFactor(node); // 当需要右旋时，根节点的左树一定比右树高


      if (factor > 1 && this._getBalanceFactor(node.left) >= 0) {
        return this._rightRotate(node);
      } //当需要左旋时，根节点的右树一定比左树高


      if (factor < -1 && this._getBalanceFactor(node.right) <= 0) {
        return this._leftRotate(node);
      } // 左右情况
      // 节点左树比右树高，且节点的左树的右树比节点的左树的左树高


      if (factor > 1 && this._getBalanceFactor(node.left) < 0) {
        node.left = this._leftRotate(node.left);
        return this._rightRotate(node);
      } // 右左情况
      // 节点的右树比左树高，且节点的右树的左树比节点右树的右树高


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
     * 节点右旋
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
      // 旋转后新根节点
      var newRoot = node.left; // 需要移动的节点

      var moveNode = node.right; // 交换新旧根节点
      // 新根节点的右节点改为原根节点

      newRoot.right = node; // 原根节点的左节点改成移动的节点

      node.left = moveNode; // 更新树的高度

      node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
      newRoot.height = Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right)) + 1;
      return newRoot;
    }
    /**
     * 节点左旋
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
      // 旋转后的新根节点
      var newRoot = node.right; // 需要移动的节点

      var moveNode = node.left; // 交换新旧根节点
      // 新根节点的左节点改为原根节点

      newRoot.left = node; // 原根节点的右节点改成移动的节点

      node.right = moveNode; // 更新树的高度

      node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
      newRoot.height = Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right)) + 1;
      return newRoot;
    }
  }]);
  return AVL;
}();

exports.AVL = AVL;