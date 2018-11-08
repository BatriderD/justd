// URL
const API_URL = 'http://192.168.2.74'

/*
展示进度条的网络请求
url:网络请求的url
success:成功的回调函数
fail：失败的回调
*/
function GET(url, params, success, fail) {

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
      'product': 'iOS'
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
          title: res.data.message,
        })
        fail(res.data)
      }
    },
    fail: function (res) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: res.data.message,
      })
      fail(res)
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
};

/*
展示进度条的网络请求
url:网络请求的url
params:请求参数
success:成功的回调函数
fail：失败的回调
*/
function POST(url, params, success, fail) {
  
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
      'product': 'iOS'
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
          title: res.data.message,
        })
        fail({ code: res.data.status, msg: res.data.message })
      }
    },
    fail: function (res) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: res.data.message,
      })
      fail({
        code: res.data.status, msg: res.data.message })
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
};

/*
展示进度条的网络请求
url:网络请求的url
params:请求参数
success:成功的回调函数
fail：失败的回调
*/
function PUT(url, params, success, fail) {

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
      'product': 'iOS'
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
          title: res.data.message,
        })
        fail({ code: res.data.status, msg: res.data.message })
      }
    },
    fail: function (res) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: res.data.message,
      })
      fail({ code: res.data.status, msg: res.data.message })
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
};

/*
展示进度条的网络请求
url:网络请求的url
params:请求参数
success:成功的回调函数
fail：失败的回调
*/
function DELETE(url, params, success, fail) {

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
      'product': 'iOS'
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
          title: res.data.message,
        })
        fail({ code: res.data.status, msg: res.data.message })
      }
    },
    fail: function (res) {
      wx.showToast({
        image: "/pages/images/icon_fail.png",
        title: res.data.message,
      })
      fail({ code: res.data.status, msg: res.data.message })
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