// components/join-textarea/join-textarea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: String,
    title: String,
    showBullet: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    input(e) {
      this.triggerEvent('input', e.detail.value)
    }
  }
})
