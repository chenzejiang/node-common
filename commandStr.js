/**
 * 把obj转换成 node命令行参数 
 * @param {obj} {a:1,b:2}
 * @returns {string} 'a=1 b=2'
 */
const commandStr = (obj) => {
    let resultStr = '';
    for(let x in obj){
        resultStr += `${x}=${obj[x]} `;
    }
    return resultStr;
};
export default commandStr;