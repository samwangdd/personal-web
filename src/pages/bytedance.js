// 异步渲染Table的td, 实现点击td输出td的内容

// 实现一个类可以完成事件 on，once，trigger，off
/* export class EventTarget {
  constructor() {
    this.listeners = {}; // 储存监听事件对象
  }
  // 监听事件
  on(type, callback) {
    if (!this.listeners[type]) this.listeners[type] = []; // 如果是第一次订阅，初始化事件
    this.listeners[type].push(callback);
  }

  // 监听一次
  once(type, callback) {
    if (!this.listeners[type]) this.listeners[type] = [];
    callback._once = true;
    this.listeners[type].push(callback);
  }

  // 取消监听事件
  off(type, callback) {
    console.log('type :', type);
    const listeners = this.listeners[type];
    console.log('listeners :', listeners);
    if (Array.isArray(listeners)) {
      const index = listeners.indexOf(callback);
      console.log('index :', index);
      listeners.splice(index, 1);
      if (listeners.length === 0) delete this.listeners[type];
    }
  }

  // 触发事件
  trigger(event) {
    const { type } = event;
    if (!type) throw new Error('没有指定订阅事件的type ！');
    const listeners = this.listeners[type];
    if (!listeners) throw new Error(`没有订阅 ${type}事件！`);
    listeners.forEach(l => {
      l(event);
      if (l._once) {
        this.off(type, l);
      }
    });
  }
} */

// 计算发表的时间: 分钟/小时以前...
// 通过if/else条件判断
export function getStamp(date) {
  const now = new Date().getTime();
  const jetLag = now - date;
  // 秒
  if (jetLag < 6e4) {
    return '刚刚';
    // 分
  } else if (jetLag < 36e5) {
    const min = parseInt(jetLag / 6e4);
    return `${min}分钟前`;
  } else if (jetLag < 864e5) {
    const hour = parseInt(jetLag / 36e5);
    return `${hour}小时前`;
  } else if (jetLag < 6048e5) {
    const day = parseInt(jetLag / 864e5);
    return `${day}天前`;
  } else {
    return formatDate(date);
  }
}

function formatDate(date) {
  return `${new Date(date).toLocaleDateString().replace(/\//g, '-')} ${new Date(date)
    .toTimeString()
    .slice(0, 8)}`;
}

// 插值排序
function getPublishTime(date) {
  const time = new Date().getTime() - date;
  const timeMap = [6e4, 36e5, 864e5, 6048e5, time];
  const labelMap = [
    '刚刚',
    `${parseInt(time / timeMap[0])}分钟前`,
    `${parseInt(time / timeMap[1])}小时前`,
    `${parseInt(time / timeMap[2])}天前`,
    formatDate(date),
  ];
  const index = timeMap.sort((a, b) => a - b).indexOf(time);
  return labelMap[index];
}

console.log('getPublishTime :', getPublishTime(1575381436012));

/**
 * 模拟bind实现
 * 1. 返回一个函数
 * 2. 可以传参
 *
 */
// eslint-disable-next-line no-extend-native
Function.prototype.binded = function (context) {
  const self = this;
  // 接收bind时，传入的参数
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  };
};

function bar(name, age) {
  console.log(this.a + name);
  this.name = name;
  this.age = age;
}

var foo = {
  a: 'I`m ',
};

const bindFoo = bar.binded(foo, 'doujiao', 0);

bindFoo('123');

console.log('foo.binded(obj) :', foo.name, foo.age);
