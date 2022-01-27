const axios = require('axios')

function getTemplate() {
    return axios.get('https://api.github.com/orgs/zhurong-cli/repos')
}
module.exports = {
    getTemplate
}