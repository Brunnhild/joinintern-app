// pages/postDetail/postDetail.js
import { PostController } from '../../service/PostController'
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    post: null,
    followState: false,
    show: false,
    majors: [],
    labels: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let res = await PostController.query(options.postId)
      let majors = await PostController.getMajors(res.postId)
      let labels = await PostController.getLabels(res.postId)
      res.expiration = res.expiration.split(' ')[0]
      res.startTime = res.startTime.split(' ')[0]
      res.endTime = res.endTime.split(' ')[0]
      res.postDate = res.postDate.split(' ')[0]
      console.log(res)
      this.setData({
        post: res,
        majors: majors,
        labels: labels
      })
      if (app.globalData.user) {
        let isFav = await PostController.isFav(
          options.postId,
          app.globalData.user.userId
        )
        this.setData({
          followState: isFav,
          show: true
        })
      }
    } catch (e) {
      wx.showModal({
        title: '获取详细信息失败',
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
      await PostController.cancelFav(
        this.data.post.postId,
        app.globalData.user.userId
      )
      this.setData({
        followState: false
      })
      wx.showToast({
        title: '取消成功',
        icon: 'success'
      })
    } else {
      await PostController.fav(
        this.data.post.postId,
        app.globalData.user.userId
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
