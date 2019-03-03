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
      day: ''
    },
    types: [
      '', '调休', '加班', '请假'
    ],
    errmsg: ''
  },
  getType ({ detail }) {
    const type = this.data.attendence_types[detail.value].value
    this.setData({
      'attendence_form.type': type
    })
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
    this.setData({
      'attendence_form.day': parseFloat(detail.value)
    })
  },
  getTime (date) {
    return new Date(date).getTime()
  },
  valid () {
    let { day, start_time, end_time } = this.data.attendence_form
    let rules = {
      start_time: '开始时间不能为空',
      end_time: '结束时间不能为空',
      day: '请输入正确的时长'
    }
    for (let rule in rules) {
      if (!this.data.attendence_form[rule]) {
        this.showMsg(rules[rule])
        return
      }
    }
    if (this.getTime(start_time) > this.getTime(end_time)) {
      this.showMsg('开始时间不能大于结束时间')
      return
    }
    return true
  },
  showMsg (message) {
    this.setData({
      errmsg: message
    })
    setTimeout(() => { this.setData({ errmsg: '' }) }, 2000)
  },
  submit () {
    if (!this.valid()) return
    wx.cloud.callFunction({
      name: 'add',
      data: this.data.attendence_form
    }).then(res => {
      wx.showToast({
        title: '新增成功',
        success: function () {
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/attendence-list/attendence'
            })
          }, 1000)
        }
      })
    })
  },
})