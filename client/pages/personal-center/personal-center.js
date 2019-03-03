Page({
  data: {
    personal: {
      overtime: 0,
      leave_in_lieu: 0,
      leave: 0,
      overage: 0
    }
  },
  getPersonDetail () {
    wx.cloud.callFunction({
      name: 'getPersonal'
    }).then(res => {
      this.setData({
        personal: res.result.data
      })
    })
  },
  onShow () {
    this.getPersonDetail()
  }
})