// pages/videos/videos.js
import util from '../../utils/util'
import { VideoController } from '../../service/VideoController'
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    videos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
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

  toCreate() {
    if (app.globalData.user) {
      wx.navigateTo({
        url: '/pages/upload/upload'
      })
    } else {
      wx.navigateTo({
        url: '/pages/signup/signup'
      })
    }
  },

  async toDetail(e) {
    if (app.globalData.user.userId)
      await VideoController.hitVideo(
        e.currentTarget.dataset.videoId,
        app.globalData.user.userId
      )
    wx.navigateTo({
      url: `/pages/videoDetail/videoDetail?videoId=${e.currentTarget.dataset.videoId}`
    })
  },

  async fresh() {
    try {
      let res = await VideoController.getValidate()
      res.forEach(e => {
        e.postDate = e.postDate.split(' ')[0]
      })
      console.log(res)
      this.setData({
        videos: res
      })
    } catch (e) {
      wx.showModal({
        title: '视频获取失败',
        showCancel: false
      })
      console.log(e)
    }
  }
})
