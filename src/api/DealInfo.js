import axios from "axios";

export function deposit(cardId, transMoney, tokenValue) {
    return axios({
        method: 'post',
        url: 'http://localhost:8081/dealInfo/deposit',
        params: {
            cardId,
            transMoney
        },
        headers: {
            "satoken": tokenValue
        }
    })
}

export function withdraw(cardId, transMoney, tokenValue) {
    return axios({
        method: 'post',
        url: 'http://localhost:8081/dealInfo/withdraw',
        params: {
            cardId,
            transMoney
        },
        headers: {
            "satoken": tokenValue
        }
    })
}

export function historicAll(cardId, tokenValue) {
    return axios({
        method: 'post',
        url: 'http://localhost:8081/dealInfo/historicAll',
        params: {
            cardId
        },
        headers: {
            "satoken": tokenValue
        }
    })
}
