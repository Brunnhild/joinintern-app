// components/join-picker/join-picker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    range: Array,
    label: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(e) {
      this.setData({
        index: e.detail.value
      })
      this.triggerEvent('select', e.detail.value)
    }
  }
})
