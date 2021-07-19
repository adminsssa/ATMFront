import axios from "axios";

export function loginInfo(cardId, password) {
    return axios({
        method: 'get',
        url: 'http://localhost:8081/logininfo/userLogin',
        params: {
            cardId, password
        }
    })
}

export function isLogin(tokenValue) {
    return axios({
        method: 'get',
        url: 'http://localhost:8081/logininfo/isLogin',
        params: {
            tokenValue
        }
    })
}

export function userLogout(cardId, token) {
    return axios({
        method: 'get',
        url: "http://localhost:8081/logininfo/userLogout",
        params: {
            cardId,
            token
        },
        headers: {
            "satoken": token
        }
    })
}
