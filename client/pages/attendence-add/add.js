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
      'attendence_form.day': detail.value
    })
  },
  submit () {
    console.log(this.data.attendence_form)
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