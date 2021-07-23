import axios from "axios";

export function loginInfo(cardId, password) {
    return axios({
        method: 'get',
        url: 'http://localhost:8081/loginInfo/userLogin',
        params: {
            cardId, password
        }
    })
}

export function isLogin(tokenValue) {
    return axios({
        method: 'get',
        url: 'http://localhost:8081/loginInfo/isLogin',
        params: {
            tokenValue
        }
    })
}

export function userLogout(cardId, token) {
    return axios({
        method: 'get',
        url: "http://localhost:8081/loginInfo/userLogout",
        params: {
            cardId,
            token
        },
        headers: {
            "satoken": token
        }
    })
}
