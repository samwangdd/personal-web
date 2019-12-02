// 异步渲染Table的td, 实现点击td输出td的内容

// 实现一个类可以完成事件 on，once，trigger，off
export class EventTarget {
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
}

// 计算发表的时间: 分钟/小时以前...
export function getStamp(date) {
  const now = new Date().getTime();
  const jetLag = (now - date);
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
    const timeStamp = new Date(date);
    return `${timeStamp.toLocaleDateString().replace(/\//g, '-')} ${timeStamp
      .toTimeString()
      .slice(0, 8)}`;
  }
}
