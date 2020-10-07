const axios = require('axios')

function sendMessage (url, params, callback) {
  axios.get(url, {
    params
  }).then(res => {
    callback(res)
  }).catch(err => {
    console.log(err)
  })
}

export default {
  sendMessage
}
