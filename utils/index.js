/**
 * 合成
 *
 * @export
 * @param {*} params
 * @returns
 */
export const compose = (...fns) => args => fns.reduce((acc, cur) => cur(acc), args);

/**
 * 浅比较
 * @param {Object} obj 对象
 * @param {Object} newObj 对象
 */
export const shallowEqual = (obj, newObj) => {
  // 是否为同一个对象的引用
  if (obj === newObj) {
    return true;
  }
  const objKeys = Object.keys(obj);
  const newObjKeys = Object.keys(newObj);
  // 对象的属性长度是否相等
  if (objKeys.length !== newObjKeys.length) {
    return false;
  }
  // 每个属性值是否相等，不会深入判断
  return objKeys.every(key => obj[key] === newObj[key]);
};
