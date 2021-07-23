/**
 *数字校验
 *
 * @param rule
 * @param value
 * @param callback
 */
export function validateNumber(rule, value, callback) {
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

/**
 * 电话号校验
 *
 * @param rule
 * @param value
 * @param callback
 */
export function validatePhone(rule, value, callback) {
    const isMob=/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    const isPhone = /^([2-9]{3,4}-)?[2-9]{7,8}$/;
    if (value == '' || value == undefined || value == null) {
        callback();
    } else {
        if (isMob.test(value)||isPhone.test(value)) {
            callback();
        } else {
            callback(new Error('请输入正确的电话号码或者固话号码'));
        }
    }
}

/**
 * 身份证号校验
 *
 * @param rule
 * @param value
 * @param callback
 */
export function validateIdNo(rule, value,callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(value==''||value==undefined||value==null){
        callback();
    }else {
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的身份证号码'));
        } else {
            callback();
        }
    }
}
