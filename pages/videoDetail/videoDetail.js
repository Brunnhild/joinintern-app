// pages/videoDetail/videoDetail.js
import { VideoController } from '../../service/VideoController'
import { PostController } from '../../service/PostController'
const app = getApp()
import { baseURL } from '../../service/request'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    video: null,
    followState: false,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let res = await VideoController.query(options.videoId)
      res.postDate = res.postDate.split(' ')[0]
      res.validateDate = res.validateDate.split(' ')[0]
      res.videoPath = baseURL + '/' + res.videoPath
      if (res.videoDescription.length > 80) res.videoDescription = res.videoDescription.slice(0, 80) + '...'
      console.log(res)
      this.setData({
        video: res
      })
      if (app.globalData.user) {
        let isFav = await VideoController.isFav(
          app.globalData.user.userId,
          options.videoId
        )
        this.setData({
          followState: isFav,
          show: true
        })
      }
    } catch (e) {
      wx.showModal({
        title: '获取失败',
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

  async toggle() {
    if (this.data.followState) {
      await VideoController.cancelFav(
        app.globalData.user.userId,
        this.data.video.videoId
      )
      this.setData({
        followState: false
      })
      wx.showToast({
        title: '取消成功',
        icon: 'success'
      })
    } else {
      await VideoController.fav(
        app.globalData.user.userId,
        this.data.video.videoId
      )
      this.setData({
        followState: true
      })
      wx.showToast({
        title: '收藏成功',
        icon: 'success'
      })
    }
  }
})
