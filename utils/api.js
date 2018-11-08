const SECURITY = '/freeapis-web-security/1/'

const nickLogin = SECURITY + 'authentication/anonymous'//匿名用户登录
const loginToken = SECURITY + 'authentication/public/authType/idType'//公网用户登录
const getUserList = SECURITY + '我是用户列表接口'//获取列表
const changeItem = SECURITY + '我是修改用户'//修改用户
const delItem = SECURITY + '我是删除用户'//修改用户


module.exports = {
  nickLogin: nickLogin,
  loginToken: loginToken,
  getUserList: getUserList,
  changeItem:changeItem,
  delItem: delItem,
}