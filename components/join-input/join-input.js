// components/input-view/input-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: String,
    title: String,
    showBullet: Boolean,
    mode: {
      type: String,
      default: 'string'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    bindKeyInput: function(e) {
      this.triggerEvent('input', e.detail.value)
    }
  }
})
