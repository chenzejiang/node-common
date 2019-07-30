/**
 * ms转换可视化阅读时间
 * @param {time} 时间戳
 * @returns {string) 2分44秒888毫秒
 */
const ms2time = (time = 1000) => {
    let ms = Number(time.toString().substr(-3));
    let seconds = parseInt((time / 1000) % 60);
    let min = parseInt(time / 1000 / 60);
    return `${min}分${seconds}秒${ms}毫秒`;
};
export default ms2time;