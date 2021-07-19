import axios from "axios";

export function deposit(cardId, transMoney, tokenValue) {
    return axios({
        method: 'post',
        url: 'http://localhost:8081/dealInfo/Deposit',
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
        url: 'http://localhost:8081/dealInfo/Withdraw',
        params: {
            cardId,
            transMoney
        },
        headers: {
            "satoken": tokenValue
        }
    })
}

export function hisoricalAll(cardId, tokenValue) {
    return axios({
        method: 'post',
        url: 'http://localhost:8081/dealInfo/HisoricalAll',
        params: {
            cardId
        },
        headers: {
            "satoken": tokenValue
        }
    })
}
