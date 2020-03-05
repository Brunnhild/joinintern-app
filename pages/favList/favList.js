// pages/favList/favList.js
import { VideoController } from '../../service/VideoController'
import { PostController } from '../../service/PostController'

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    videos: [],
    posts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    if (!app.globalData.user)
      wx.navigateTo({
        url: '/pages/signup/signup'
      })
    this.fresh()
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
  onPullDownRefresh: async function() {
    await this.fresh()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  async fresh() {
    try {
      let videos = await VideoController.favoured(app.globalData.user.userId)
      let posts = await PostController.favoured(app.globalData.user.userId)
      this.setData({
        videos: videos,
        posts: posts
      })
    } catch (e) {
      wx.showModal({
        title: '获取失败',
        showCancel: false
      })
      console.log(e)
    }
  },

  async toPostDetail(e) {
    if (app.globalData.user.userId)
      await PostController.hitPost(
        e.currentTarget.dataset.postId,
        app.globalData.user.userId
      )
    wx.navigateTo({
      url: `/pages/postDetail/postDetail?postId=${e.currentTarget.dataset.postId}`
    })
  },

  async toVideoDetail(e) {
    if (app.globalData.user.userId)
      await VideoController.hitVideo(
        e.currentTarget.dataset.videoId,
        app.globalData.user.userId
      )
    wx.navigateTo({
      url: `/pages/videoDetail/videoDetail?videoId=${e.currentTarget.dataset.videoId}`
    })
  }
})
