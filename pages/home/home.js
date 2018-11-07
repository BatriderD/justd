var app = getApp()
Page({
  data: {
    currentType: 0,
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
    // 获取订单列表
    wx.showLoading();
    var that = this;
    var postData = {
      token: wx.getStorageSync('token')
    };
    postData.status = that.data.currentType;
    that.setData({
      userList: [
        {
          dateAdd: "2018 11:38:49",
          status: 1,
          statusStr: "已发货",
          id: "1345645646",
          orderNumber: "987654312",
          remark: "辣死我谢谢",
          amountReal: 10,
        }, {
          dateAdd: "2018 11:38:49",
          status: 1,
          statusStr: "已发货",
          id: "1345645646",
          orderNumber: "987654312",
          remark: "辣死我谢谢",
          amountReal: 10,
        }, {
          dateAdd: "2018 11:38:49",
          status: 1,
          statusStr: "已发货",
          id: "1345645646",
          orderNumber: "987654312",
          remark: "辣死我谢谢",
          amountReal: 10,
        }, {
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

  }
})
