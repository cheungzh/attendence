Page({
  /**
   * 页面的初始数据
   */
  data: {
    types: [
      '', '调休', '加班', '请假'
    ],
    attendence_types: [
      { name: '全部类型', value: 0 },
      { name: '调休', value: 1 },
      { name: '加班', value: 2 },
      { name: '请假', value: 3 }
    ],
    query: {
      type: '',
      date: ''
    },
    attendence_list: []
  },
  changeType ({ detail }) {
    this.setData({
      'query.type': parseInt(detail.value)
    })
    this.getList()
  },
  getDate ({ detail }) {
    this.setData({
      'query.date': detail.value
    })
    this.getList()
  },
  viewDetail ({ currentTarget }) {
    let { list } = currentTarget.dataset
    wx.navigateTo({
      url: `/pages/attendence-detail/detail?id=${list._id}`
    })
  },
  getList () {
    wx.cloud.callFunction({
      name: 'getLists',
      data: this.data.query
    }).then(({ result }) => {
      this.setData({
        attendence_list: result.data
      })
    })
  },
  onShow (options) {
    this.getList()
  },
  onPullDownRefresh () {
    this.getList()
    wx.stopPullDownRefresh()
  }
})