import axios from "axios";

export function query(cardNo, tokenValue) {
    return axios({
        method: 'post',
        url: "http://101.200.191.188:8081/cardInfo/query",
        params: {
            cardNo
        },
        headers: {
            "satoken": tokenValue
        }
    })
}
