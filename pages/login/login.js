// pages/login/login.js

var network = require("../../utils/network.js")
var api = require("../../utils/api.js")
//获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    password: ""
  },

  loginBindTap: function (e) {
    console.log(app.globalData.userNickToken)
    // wx.switchTab({
    //   url: '../home/home',
    // })

    var params = {
      'loginId': '2200',
      'password': 'a123456'
    }
    
    network.POST(api.loginToken, params, getApp().globalData.userNickToken,
      function (res) {
        debugger
      },
      function (err) {
        debugger
      }
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 监听账号输入
   */
  listenerPhoneInput: function (e) {
    this.data.phone = e.detail.value;
    console.log(this.data.phone)
  },
  
  /**
   * 监听密码输入
   */
  listenerPasswordInput: function (e) {
    this.data.password = e.detail.value;
    console.log(this.data.password)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})