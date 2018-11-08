var app = getApp()
var network = require("../../utils/network.js")
var api = require("../../utils/api.js")
Page({
  data: {
    currentPage: 0,
    hiddenmodalput: true,
    userList: [],
    changeName:"123",
    changeIndex:-1,
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
    that.setData({
      userList: [{
        uName: "张三",
        dateAdd: "2018 11:38:49",
        status: 1,
        statusStr: "已发货",
        id: "1",
        orderNumber: "987654312",
        remark: "辣死我谢谢",
        amountReal: 10,
      }, {
        uName: "李四",
        dateAdd: "2018 11:38:49",
        status: 1,
        statusStr: "已发货",
        id: "2",
        orderNumber: "987654312",
        remark: "辣死我谢谢",
        amountReal: 10,
      }, {
        uName: "王五",
        dateAdd: "2018 11:38:49",
        status: 1,
        statusStr: "已发货",
        id: "3",
        orderNumber: "987654312",
        remark: "辣死我谢谢",
        amountReal: 10,
      }, {
        uName: "朱六",
        dateAdd: "2018 11:38:49",
        status: 1,
        statusStr: "已发货",
        id: "4",
        orderNumber: "987654312",
        remark: "辣死我谢谢",
        amountReal: 10,
      }, {
        uName: "卓七",
        dateAdd: "2018 11:38:49",
        status: 1,
        statusStr: "已发货",
        id: "5",
        orderNumber: "987654312",
        remark: "辣死我谢谢",
        amountReal: 10,
      }]
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
    let that = this;
    wx.showModal({
      title: '',
      content: '确定要删除该用户？',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '刷新列表',
            duration: 0.5,
            mask: true,
          })
          var newList = that.data.userList;
          var id = event.target.dataset.userId;
          var index = 0;
          for (var i = 0; i < newList.length; i++) {
            if (newList[i].id == id) {
              index = i;
              break
            }
          }


          newList.splice(index, 1);
          that.setData({
            userList: newList
          });
      
          // 网络请求
          // let addressId = event.target.dataset.userId;
          // var data = { 'userId': addressId }
          // network.GET(api.addressDelete, data,
          //   function (res) {
          //     console.log("删除成功：" + res)
          //     that.onShow()
          //   },
          //   function (err) {
          //     console.log("删除失败：" + err.msg)
          //   })
        }
      }
    })
    return false;
  },
  //修改用户
  change: function(event) {
    this.setData({
      changeName: "",
      changeIndex: event.target.dataset.index,
      hiddenmodalput: false,
    })
  },

  //取消按钮
  cancel: function () {
 
    this.setData({
      changeIndex: -1,
      hiddenmodalput: true
    })
  },
  //确认
  confirm: function (e) {
    var newList = this.data.userList;
    var index = this.data.changeIndex;
    newList[index].uName = this.data.changeName,
    this.setData({
      userList: newList,
      changeName:"",
      hiddenmodalput: true
    })
  },
  //获取用户输入的用户名
  userNameInput: function (e) {
    this.setData({
      changeName: e.detail.value
    })
  },
})