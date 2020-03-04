// components/join-date-picker/join-date-picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: '2020-03-01'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      this.setData({
        date: e.detail.value
      })
      this.triggerEvent('select', e.detail.value)
    }
  }
})
