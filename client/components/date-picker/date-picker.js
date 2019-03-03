// components/date-picker/date-picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode: {
      type: String,
      value: 'date'
    },
    placeholder: {
      type: String,
      value: '请选择'
    },
    field: {
      type: String,
      value: 'day'
    },
    date: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    val: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pick ({ detail }) {
      let { value } = detail;
      // this.setData({
      //   val: value
      // })
      this.triggerEvent('pick', { value })
    }
  }
})
