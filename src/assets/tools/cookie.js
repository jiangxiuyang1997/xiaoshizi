function getCookie (name) {
  let cookieArr = document.cookie.split('; ')
  for (let i = 0; i < cookieArr.length; i++) {
    let temp = cookieArr[i].split('=')
    if (temp[0] === name) {
      return temp[1]
    }
  }
  return null
}

function setCookie (name, value, day) {
  let limit = day * 24 * 60 * 60 * 1000
  let exp = new Date()
  exp.setTime(exp.getTime() + limit)
  document.cookie = name + '=' + value + ';expires=' + exp.toGMTString()
}

function delCookie (name) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  document.cookie = name + '=null;expires=' + exp.toGMTString()
}

export default {
  getCookie,
  setCookie,
  delCookie
}
