// URL - 内部信息系统
// const API_URL = 'http://192.168.2.74'
// URL - 优造
const API_URL = 'http://192.168.2.115'

//获取应用实例
var app = getApp()

/*
消息 _ERROR 过滤
*/
function getMessage(message) {
  var arr = message.split('--')
  if (arr.length == 2) {
    return arr[1]
  } else {
    return message;
  }
}

/*
展示进度条的网络请求
url:网络请求的url
params:参数
token:用户Token
success:成功的回调
fail：失败的回调
*/
function GET(url, params, token, success, fail) {

  let message = '数据加载中'
  
  console.log('requestURL:' + API_URL + url)

  wx.showLoading({
    title: message,
  })

  wx.request({
    url: API_URL + url,
    data: params,
    header: {
      'Content-Type': 'application/json',//application/x-www-form-urlencoded
      'product': 'iOS',
      "token": token
    },
    method: 'GET',
    success: function (res) {
      // log
      console.log(res.data)
      
      if (res.data.status == 200) {  
        success(res.data)
      } else {
        wx.showToast({
          image: "/pages/images/icon_fail.png",
          title: getMessage(res.data.message),
        })
        fail(res.data)
      }
    },
    fail: function (err) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: "网络错误",
      })
      fail(err)
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
};

/*
POST
*/
function POST(url, params, token, success, fail) {
  
  let message = '数据加载中'
  
  console.log('requestURL: ' + API_URL + url)

  wx.showLoading({
    title: message,
  })
  wx.request({
    url: API_URL + url,
    data: params,
    header: {
      'Content-Type': 'application/json',
      'product': 'iOS',
      "token": token
    },
    method: 'POST',
    success: function (res) {
      // log
      console.log(res.data)
      
      if (res.data.status == 200) {
        success(res.data)
      } else {
        wx.showToast({
          image: "/pages/images/icon_fail.png",
          title: getMessage(res.data.message),
        })
        fail({ code: res.data.status, msg: res.data.message })
      }
    },
    fail: function (err) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: "网络错误",
      })
      fail(err)
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
};

/*
PUT
*/
function PUT(url, params, token,success, fail) {

  let message = '数据加载中'

  console.log('requestURL:' + API_URL + url)

  wx.showLoading({
    title: message,
  })
  wx.request({
    url: API_URL + url,
    data: params,
    header: {
      'Content-Type': 'application/json',
      'product': 'iOS',
      "token": token
    },
    method: 'PUT',
    success: function (res) {
      // log
      console.log(res.data)

      if (res.data.status == 200) {
        success(res.data)
      } else {
        wx.showToast({
          image: "/pages/images/icon_fail.png",
          title: getMessage(res.data.message),
        })
        fail({ code: res.data.status, msg: res.data.message })
      }
    },
    fail: function (err) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: "网络错误",
      })
      fail(err)
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
};

/*
DELETE
*/
function DELETE(url, params, token,success, fail) {

  let message = '数据加载中'

  console.log('requestURL:' + API_URL + url)

  wx.showLoading({
    title: message,
  })
  wx.request({
    url: API_URL + url,
    data: params,
    header: {
      'Content-Type': 'application/json',
      'product': 'iOS',
       "token": token
    },
    method: 'DELETE',
    success: function (res) {
      // log
      console.log(res.data)

      if (res.data.status == 200) {
        success(res.data)
      } else {
        wx.showToast({
          image: "/pages/images/icon_fail.png",
          title: getMessage(res.data.message),
        })
        fail({ code: res.data.status, msg: res.data.message })
      }
    },
    fail: function (err) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: "网络错误",
      })
      fail(err)
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
};


module.exports = {
  GET: GET,
  POST: POST,
  PUT: PUT,
  DELETE: DELETE,
}