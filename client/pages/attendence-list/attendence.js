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
      type: -1,
      date: ''
    },
    attendence_list: [
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 1, day: 1 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
      { id: 1, start_time: '2018-09-11', end_time: '2018-09-12', type: 3, day: 0.5 },
    ]
  },
  changeType ({ detail }) {
    this.setData({
      'query.type': detail.value
    })
  },
  getDate ({ detail }) {
    this.setData({
      'query.date': detail.value
    })
  },
  viewDetail ({ currentTarget }) {
    let { list } = currentTarget.dataset
    console.log(list)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})