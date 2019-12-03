/**
 * 去掉字符左右空格
 * @param {String} str 字符
 */
export const strTrimLeftOrRight = str => {
  return str.replace(/(^\s*)|(\s*$)/g, "")
}
