/**
 * 节流
 * @param func 需要节流的函数
 * @param wait 等待时间
 */
export var throttle = function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  // 上一次执行该函数的时间
  var lastTime = 0;
  return function () {
    // 当前时间
    var now = +new Date(); // 讲当前时间和上一次执行函数时间对比
    // 如果差值大于设置的等待时间就执行函数

    if (now - lastTime > wait) {
      lastTime = now;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      func.apply(this, args);
    }
  };
};
/**
 * 防抖
 * @param func 需要防抖的函数
 * @param wait 等待时间
 */

var debounce = function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  // 缓存一个定时器id
  var timer = 0; // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开启一个新的定时器，延迟执行用户传入的方法

  return function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      func.apply(_this, args);
    }, wait);
  };
};