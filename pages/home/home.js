var app = getApp()
var network = require("../../utils/network.js")
var api = require("../../utils/api.js")
Page({
  data: {
    currentPage: 0,
    tabClass: ["", "", "", "", ""],
    userList: []
  },

  onLoad: function (options) {
    // 生命周期函数--监听页面加载

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },

  onShow: function () {
    // 获取用户列表
    wx.showLoading();
    var that = this;
    var postData = {
      token: wx.getStorageSync('token')
    };
    var params = {
      'page': that.data.currentPage,
    }
    that.setData({
        userList: [
          {
            id:123,
            dateAdd: "2018 11:38:49",
            status: 1,
            statusStr: "已发货",
            id: "1345645646",
            orderNumber: "987654312",
            remark: "辣死我谢谢",
            amountReal: 10,
          }, {
            id: 123,
            dateAdd: "2018 11:38:49",
            status: 1,
            statusStr: "已发货",
            id: "1345645646",
            orderNumber: "987654312",
            remark: "辣死我谢谢",
            amountReal: 10,
          }, {
            id: 123,
            dateAdd: "2018 11:38:49",
            status: 1,
            statusStr: "已发货",
            id: "1345645646",
            orderNumber: "987654312",
            remark: "辣死我谢谢",
            amountReal: 10,
          }, {
            id: 123,
            dateAdd: "2018 11:38:49",
            status: 1,
            statusStr: "已发货",
            id: "1345645646",
            orderNumber: "987654312",
            remark: "辣死我谢谢",
            amountReal: 10,
          }
        ]
      });
    // network.POST(api.getUserList, params, function (res) {
    //   console.log('获取列表成功 进行赋值')

    //   that.setData({
    //     userList: [
    //       {
    //         id:123,
    //         dateAdd: "2018 11:38:49",
    //         status: 1,
    //         statusStr: "已发货",
    //         id: "1345645646",
    //         orderNumber: "987654312",
    //         remark: "辣死我谢谢",
    //         amountReal: 10,
    //       }, {
    //         id: 123,
    //         dateAdd: "2018 11:38:49",
    //         status: 1,
    //         statusStr: "已发货",
    //         id: "1345645646",
    //         orderNumber: "987654312",
    //         remark: "辣死我谢谢",
    //         amountReal: 10,
    //       }, {
    //         id: 123,
    //         dateAdd: "2018 11:38:49",
    //         status: 1,
    //         statusStr: "已发货",
    //         id: "1345645646",
    //         orderNumber: "987654312",
    //         remark: "辣死我谢谢",
    //         amountReal: 10,
    //       }, {
    //         id: 123,
    //         dateAdd: "2018 11:38:49",
    //         status: 1,
    //         statusStr: "已发货",
    //         id: "1345645646",
    //         orderNumber: "987654312",
    //         remark: "辣死我谢谢",
    //         amountReal: 10,
    //       }
    //     ]
    //   });
    // },
    //   function (err) {
    //     console.log('获取列表失败 提示用户')
    //     that.setData({
    //       userList: [
    //         {
    //           id: 123,
    //           dateAdd: "2018 11:38:49",
    //           status: 1,
    //           statusStr: "已发货",
    //           id: "1345645646",
    //           orderNumber: "987654312",
    //           remark: "辣死我谢谢",
    //           amountReal: 10,
    //         }, {
    //           id: 123,
    //           dateAdd: "2018 11:38:49",
    //           status: 1,
    //           statusStr: "已发货",
    //           id: "1345645646",
    //           orderNumber: "987654312",
    //           remark: "辣死我谢谢",
    //           amountReal: 10,
    //         }, {
    //           id: 123,
    //           dateAdd: "2018 11:38:49",
    //           status: 1,
    //           statusStr: "已发货",
    //           id: "1345645646",
    //           orderNumber: "987654312",
    //           remark: "辣死我谢谢",
    //           amountReal: 10,
    //         }, {
    //           id: 123,
    //           dateAdd: "2018 11:38:49",
    //           status: 1,
    //           statusStr: "已发货",
    //           id: "1345645646",
    //           orderNumber: "987654312",
    //           remark: "辣死我谢谢",
    //           amountReal: 10,
    //         }
    //       ]
    //     });
    //   });
    wx.hideLoading();

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
    //删除用户
  del: function (event) {
    let that = this;
    wx.showModal({
      title: '',
      content: '确定要删除该用户？',
      success: function (res) {
        if (res.confirm) {
          let addressId = event.target.dataset.addressId;
          var data = { 'userId': addressId }
          network.GET(api.addressDelete, data,
            function (res) {
              console.log("删除成功：" + res)
              that.onShow()
            },
            function (err) {
              console.log("删除失败：" + err.msg)
            })
        }
      }
    })
    return false;
  },
  //修改用户
  change: function (event) {
    let that = this;
    wx.showModal({
      title: '',
      content: '确定要删除该用户？',
      success: function (res) {
        if (res.confirm) {
          let addressId = event.target.dataset.addressId;
          var data = { 'userId': addressId }
          network.GET(api.addressDelete, data,
            function (res) {
              console.log("删除成功：" + res)
              that.onShow()
            },
            function (err) {
              console.log("删除失败：" + err.msg)
            })
        }
      }
    })
    return false;
  },
})
