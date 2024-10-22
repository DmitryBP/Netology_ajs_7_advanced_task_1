export default class Validator {
  static validateUsername(name){
    return /^([a-zA-Z]+[\w_-]{0,3}[a-zA-Z_-]*)*[^0-9-\W_]$/g.test(name)
  }
}
console.log(Validator.validateUsername('dima'))
console.log(Validator.validateUsername('-dima'))
console.log(Validator.validateUsername('di-m_7a'))

// dima_dima1838y
// dima-dimay
// 1dima
// dima1
// _dima
// dima_
// 1dima
// dima1
// -dima
// dima-
// dima!
// di#ma
// !dima
// @dima
// d_m#a

// dima
// dima86-yaDndex
// Dima86-yan1dex