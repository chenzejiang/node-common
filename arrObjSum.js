/**
 * 数组对象求和
 * @param {Object} arrObj 数组对象
 * @param {String} key 数组对应的 key 值
 */
export const arrObjSum = (obj, key) => {
  return arrObj.reduce((prev, cur) => prev + cur.key, 0)
}