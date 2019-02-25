// src/pages/attendence-add/add.js
Page({
  data: {
    attendence_types: [
      { name: '调休', value: 1 },
      { name: '加班', value: 2 },
      { name: '请假', value: 3 }
    ],
    attendence_form: {
      type: 2,
      start_time: '',
      end_time: '',
      day: 1
    },
    types: [
      '', '调休', '加班', '请假'
    ],
  },
  getType ({ detail }) {
    const type = this.data.attendence_types[detail.value].value
    this.setData({
      'attendence_form.type': type
    })
    console.log(detail)
  },
  getStart ({ detail }) {
    this.setData({
      'attendence_form.start_time': detail.value
    })
  },
  getEnd ({ detail }) {
    this.setData({
      'attendence_form.end_time': detail.value
    })
  },
  getDay ({ detail }) {
    console.log(detail)
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