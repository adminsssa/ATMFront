import axios from "axios";

export function query(cardNo, tokenValue) {
    return axios({
        method: 'post',
        url: "http://localhost:8081/cardInfo/Query",
        params: {
            cardNo
        },
        headers: {
            "satoken": tokenValue
        }
    })
}
