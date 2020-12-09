// pages/home/home.js
import { PostController } from '../../service/PostController'
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    posts: [],
    cells: [
      'https://www.joinintern.cn/media/home-1.png',
      'https://www.joinintern.cn/media/home-2.jpg',
      'https://www.joinintern.cn/media/home-3.png'
    ]
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
  },

  async toDetail(e) {
    if (app.globalData.user.userId)
      await PostController.hitPost(
        e.currentTarget.dataset.postId,
        app.globalData.user.userId
      )
    wx.navigateTo({
      url: `/pages/postDetail/postDetail?postId=${e.currentTarget.dataset.postId}`
    })
  },

  async fresh() {
    try {
      let res = await PostController.getAllPost()
      res.forEach(e => {
        e.expiration = e.expiration.split(' ')[0]
        e.startTime = e.startTime.split(' ')[0]
        e.endTime = e.endTime.split(' ')[0]
        e.postDate = e.postDate.split(' ')[0]
        if (e.postContent.length > 80) e.postContent = e.postContent.slice(0, 80) + '...'
      })
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
  }
})
