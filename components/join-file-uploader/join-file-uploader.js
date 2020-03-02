// components/join-file-uploader/join-file-uploader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    status: '未选择'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
      wx.chooseImage({
        success: res => {
          this.triggerEvent('select', res)
          this.setData({
            status: '已选择'
          })
        }
      })
    }
  }
})
