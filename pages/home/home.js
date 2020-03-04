// pages/home/home.js
import { UserController } from '../../service/UserController'
import { PostController } from '../../service/PostController'
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    posts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let res = await PostController.getAllPost()
      this.setData({
        posts: res
      })
    } catch (e) {
      wx.showModal({
        title: '实习获取失败',
        showCancel: false
      })
      console.log(e)
    }
  },

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

  goPost() {
    if (app.globalData.user) {
      wx.navigateTo({
        url: '/pages/post/post'
      })
    } else {
      wx.navigateTo({
        url: '/pages/signup/signup'
      })
    }
  }
})
