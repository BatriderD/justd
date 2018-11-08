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
    wx.switchTab({
      url: '../home/home',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;
    that.nickLoginTO();
  },

  // 登录内部信息系统-匿名登录
  nickLoginTO: function () {
    network.POST(api.nickLogin, {},
      function(res) {
        console, log('123')
      },
      function(err) {
        console.log('err')
      }
    );
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
    this.data.phone = e.detail.value;
    console.log(this.data.phone)
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