
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
const axios = require('axios');
const queryString = require('querystring');
 
async function publicCall(path, data, method = 'GET', headers = {}) {
    try {
        const qs = data ? `?${queryString.stringify(data)}` : '';
        const result = await axios({
            method,
            url: `${process.env.API_URL}${path}${qs}`
        });
        return result.data;
    } catch (err) {
        console.error(err);
    }
}
 
async function time() {
    return publicCall('/v3/time');
}

async function depth(symbol = 'BTCBRL', limit = 5) {
    return publicCall('/v3/depth', { symbol, limit });
}
 
module.exports = { time, depth };