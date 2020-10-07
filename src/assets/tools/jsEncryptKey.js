import CryptoJS from 'crypto-js'

let keyStr = CryptoJS.enc.Utf8.parse("a38b5e7e1a66cef1")
let ivStr = CryptoJS.enc.Utf8.parse("a38b5e7e1a66cef1")

/**
 * AES加密
 * @param word 加密内容
 * @returns {*|string} 加密结果
 */
function encryption(word){
  word = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(word, keyStr, {
    iv: ivStr,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

export default {
  encryption
}