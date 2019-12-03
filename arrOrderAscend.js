/**
 * 数组排序
 * @param {Array} arr  数组
 * @param {Boolean} ascendFlag   升序,默认为 true
 */
export const arrOrderAscend = (arr, ascendFlag=true) => {
  return arr.sort((a, b) => {
    return ascendFlag ? a - b : b - a
  })
}