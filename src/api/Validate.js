/**
 *
 * @param rule
 * @param value
 * @param callback
 */
export const validateNumber = (rule, value, callback) => {
    console.log(value)
    let numberReg = /^\d+$|^\d+[.]?\d+$/
    if (value !== '') {
        if (!numberReg.test(value)) {
            callback(new Error('请输入数字'))
        } else {
            callback()
        }
    } else {
        callback(new Error('请输入值'))
    }
}
