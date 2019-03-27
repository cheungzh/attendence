Page({
  data: {
    personal: {
      overtime: 0,
      leave_in_lieu: 0,
      leave: 0,
      overage: 0
    },
    userInfo: {}
  },
  getPersonDetail () {
    wx.cloud.callFunction({
      name: 'getPersonal'
    }).then(res => {
      console.log(res)
      this.setData({
        personal: res.result.data
      })
    })
  },
  getUserInfo ({ detail }) {
    this.setData({
      userInfo: detail.userInfo
    })
  },
  onShow () {
    this.getPersonDetail()
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  }
})