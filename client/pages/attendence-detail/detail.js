Page({
  data: {
    types: [
      '', '调休', '加班', '请假'
    ],
    detail: {}
  },
  onLoad (options) {
    wx.cloud.callFunction({
      name: 'getDetail',
      data: {
        id: options.id
      }
    }).then(res => {
      let { result } = res
      console.log(res)
      this.setData({
        detail: result.data
      })
    })
  }
  // back () {
  //   wx.navigateBack()
  // }
})