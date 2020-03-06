// components/join-search/join-search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    v: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input(e) {
      this.setData({
        v: e.detail.value
      })
    },

    search(e) {
      this.triggerEvent('search', this.data.v)
    }
  }
})
