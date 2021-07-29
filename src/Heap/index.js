export class MaxHeap {
  constructor() {
    this.heap = []
  }
  size() {
    return this.heap.length
  }
  empty() {
    return this.size() === 0
  }
  add(item) {
    this.heap.push(item)
    this._shiftUp(this.size() - 1)
  }
  removeMax() {
    this._shiftDown(0)
  }
  getParentIndex(k) {
    return Math.floor((k - 1) / 2)
  }
  getLeftIndex(k) {
    return k * 2 + 1
  }

  _compare(i, j, equal = false) {
    if (equal) {
      return this.heap[i] >= this.heap[j]
    }
    return this.heap[i] > this.heap[j]
  }

  _shiftUp(k) {
    // 如果当前节点比父节点大，就交换
    while (this._compare(k, this.getParentIndex(k))) {
      this._swap(k, this.getParentIndex(k))
      // 将索引变成父节点
      k = this.getParentIndex(k)
    }
  }

  _shiftDown(k) {
    // 交换首位并删除末尾
    this._swap(k, this.size() - 1)
    this.heap.splice(this.size() - 1, 1)
    // 判断节点是否有左节点
    while (this.getLeftIndex(k) < this.size()) {
      let j = this.getLeftIndex(k)
      // 判断是否有右节点，并且右节点是否大于左节点
      if (j + 1 < this.size() && this._compare(j + 1, j)) {
        j++
      }
      // 判断父节点是否比子节点都大
      if (this._compare(k, j, true)) {
        break
      }
      this._swap(k, j)
      k = j
    }
  }

  _swap(left, right) {
    let rightValue = this.heap[right]
    this.heap[right] = this.heap[left]
    this.heap[left] = rightValue
  }
}

export class MinHeap extends MaxHeap {
  constructor() {
    super();
  }
  _compare(i, j, equal = false) {
    if (equal) {
      return this.heap[i] <= this.heap[j]
    }
    return this.heap[i] < this.heap[j]
  }
}