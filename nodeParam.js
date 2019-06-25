/**
 * 获取node的参数 node index.js a=1 b=2
 * @return {object} {a:1,b:2}
 */
const getNodeParam = () => {
  const res = {}
  process.argv.slice(2).forEach((item) => {
    let itemArr = item.split('=');
    res[itemArr[0]] = itemArr[1];
  });
  return res;
}
const nodeParamObj = getNodeParam();
export default nodeParamObj;