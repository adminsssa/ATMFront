import axios from "axios";

export function userRegister(registerForm) {
    return axios({
        method: 'post',
        url: 'http://101.200.191.188:8081/registerInfo/userRegister',
        data: registerForm
    })
}
