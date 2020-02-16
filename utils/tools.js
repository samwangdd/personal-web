/**
 * 混入，多重继承
 * @export
 * @param {Function} func 目标函数
 * @param {Object} mixins 混入对象
 * @returns {Function} newFunc
 */
function mixin(func, mixins) {
  const newFunc = func;
  newFunc.prototype = Object.create(func.prototype);
  for (const props in mixins) {
    if (mixins.hasOwnProperty(props)) {
      newFunc.prototype[props] = mixins[props];
    }
  }
  return newFunc;
}

const BigMixin = {
  fly: () => {
    console.log('I can fly!');
  },
};

const Big = function() {
  console.log('new Big');
};

const S = {
  walk: () => {
    console.log('I can walk!');
  },
};
const Fly = mixin(S, BigMixin);

const flyBig = new Fly();

flyBig.fly();
