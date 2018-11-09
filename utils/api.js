const SECURITY = '/freeapis-web-security/1/'

const nickLogin = SECURITY + 'authentication/anonymous'//匿名用户登录
const loginToken = SECURITY + 'authentication/public/userNamePassword/mobile'//公网用户登录
const agencyLogin = SECURITY + 'authentication/agency'//商家员工登录
const getUserList =  '/freeapis-web-publicuser/1/addresses/public/me'//获取列表
const changeItem =  '/freeapis-web-publicuser/1/addresses'//修改用户
const delItem = '/freeapis-web-publicuser/1/addresses'//修改用户
const addItem = '/freeapis-web-publicuser/1/addresses'//修改用户


module.exports = {
  nickLogin: nickLogin,
  loginToken: loginToken,
  agencyLogin: agencyLogin,
  getUserList: getUserList,
  changeItem:changeItem,
  delItem: delItem,
  addItem: addItem,
}