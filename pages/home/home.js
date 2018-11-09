var app = getApp()
var network = require("../../utils/network.js")
var api = require("../../utils/api.js")
Page({
  data: {
    currentPage: 0,
    hiddenmodalput: true,
    userList: [],
    changeName: "123",
    changeIndex: -1,
    changeItem: {},
  },

  onLoad: function(options) {
    // 生命周期函数--监听页面加载

  },
  onReady: function() {
    // 生命周期函数--监听页面初次渲染完成

  },

  onShow: function() {
    // 获取用户列表
    wx.showLoading();
    var that = this;
    var postData = {
      token: wx.getStorageSync('token')
    };
    var params = {
      'page': that.data.currentPage,
    }
    network.GET(api.getUserList, null, app.globalData.userLoginToken,
      function(res) {
        //列表成功
        that.setData({
          userList: res.result
        });
        console.log(res.data)
      },
      function(res) {
        //获取列表失败
        console.log(res.data)
      });

    wx.hideLoading();

  },
  onHide: function() {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function() {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数

  },
  //删除用户
  del: function(event) {
    let that = this
    this.setData({
      changeIndex: event.target.dataset.sequencenbr,
      changeItem: {},
    })
    wx.showModal({
      title: '',
      content: '确定要删除该用户？',
      success: function(res) {
        if (res.confirm) {
          var index = that.data.changeIndex;
          var item = new Array();
          item[0] = that.data.changeIndex;

          network.DELETE(api.delItem, item, app.globalData.userLoginToken, function(res) {
            //列表成功
            console.log(res.data)
            that.onShow()
          }, function(res) {
            //获取列表失败
            console.log(res.data)
          })
          // newList[index].uName = that.data.changeName,
          that.setData({
            // userList: newList,
            changeName: "",
          })
        }
      }
    })
    return false;
  },
  //修改用户
  change: function(event) {

    this.setData({
      changeName: "",
      changeIndex: event.target.dataset.sequencenbr,
      hiddenmodalput: false,
      changeItem: event.target.dataset.item,
    })
  },
  //修改用户
  add: function (event) {

    this.setData({
      changeName: "",
      changeIndex: '',
      hiddenmodalput: false,
      changeItem: {
        'addrDetail': '123',
        'city': '120000',
        'province': '100001',
        'recieverName': '123',
        'recieverPhone': '18966601631',
        'region': '120101',
      },
    })
  },
  // add: function(event) {
  //   this.setData({
  //     changeName: "",
  //     changeIndex: event.target.dataset.sequencenbr,
  //     hiddenmodalput: false,
  //     changeItem: {
  //       addrDetail: 14124,
  //       city: 120000,
  //       isDefault,
  //       province: 100001,
  //       recieverName: 123,
  //       recieverPhone: 18966601631,
  //       region: 120101,
  //     },
  //   })
  // },

  //取消按钮
  cancel: function() {

    this.setData({
      changeIndex: -1,
      hiddenmodalput: true
    })
  },
  //确认
  confirm: function(e) {
    let that = this;
    var newList = this.data.userList;
    var index = this.data.changeIndex;
    var item = this.data.changeItem;
    item.recieverName = this.data.changeName;
    if(index==null|| index==''){
      console.log('增加')
      network.POST(api.addItem , item, app.globalData.userLoginToken, function (res) {
        //列表成功
        console.log(res.data)
        that.onShow()
      }, function (res) {
        //获取列表失败
        console.log(res.data)
      })
    }else{
      console.log('修改')
      network.PUT(api.changeItem + '?id=' + index, item, app.globalData.userLoginToken, function (res) {
        //列表成功
        console.log(res.data)
        that.onShow()
      }, function (res) {
        //获取列表失败
        console.log(res.data)
      })
    }
   
    // newList[index].uName = that.data.changeName,
    this.setData({
      // userList: newList,
      changeName: "",
      hiddenmodalput: true
    })
  },
  //获取用户输入的用户名
  userNameInput: function(e) {
    this.setData({
      changeName: e.detail.value
    })
  },
})