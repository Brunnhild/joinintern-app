// pages/search/search.js
import { PostController } from '../../service/PostController'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    icon: '/assets/happy.png',
    hint: '请输入关键字查询',
    posts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  async search(e) {
    try {
      let posts = await PostController.filter(
        null,
        null,
        [],
        null,
        null,
        e.detail
      )
      console.log(posts)
      this.setData({
        posts: posts
      })
      if (posts.length === 0) {
        this.setData({
          icon: '/assets/sad.png',
          hint: '没有查询到结果'
        })
      }
    } catch (e) {
      wx.showModal({
        title: '查询失败',
        showCancel: false
      })
      console.log(e)
    }
  }
})
