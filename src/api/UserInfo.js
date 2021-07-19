import axios from "axios";

export function userRegister(registerForm) {
    return axios({
        method: 'post',
        url: 'http://localhost:8081/registerInfo/userRegister',
        data: registerForm
    })
}
