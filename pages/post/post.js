// pages/post/post.js
import { PostController } from '../../service/PostController'
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    duration: '',
    location: '',
    distanceMH: '',
    distanceZB: '',
    startTime: '',
    endTime: '',
    description: '',
    expiration: ''
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

  async create() {
    try {
      let res = await PostController.createPost(
        app.globalData.user.userId,
        this.data.distanceMH,
        this.data.distanceZB,
        this.data.duration,
        this.data.endTime,
        this.data.expiration,
        this.data.location,
        this.data.description,
        this.data.title,
        this.data.startTime
      )
      console.log(res)
      wx.showToast({
        title: '创建成功',
        icon: 'success'
      })
      wx.switchTab({
        url: '/pages/home/home'
      })
    } catch (e) {
      wx.showModal({
        title: '创建失败',
        showCancel: false
      })
    }
  },

  inputTitle(e) {
    this.setData({
      title: e.detail
    })
  },

  inputDuration(e) {
    this.setDate({
      duration: e.detail
    })
  },

  inputLocation(e) {
    this.setData({
      location: e.detail
    })
  },

  inputDistanceMH(e) {
    this.setData({
      distanceMH: e.detail
    })
  },

  inputDistanceZB(e) {
    this.setData({
      distanceZB: e.detail
    })
  },

  selectStartTime(e) {
    this.setData({
      startTime: e.detail
    })
  },

  selectEndTime(e) {
    this.setData({
      endTime: e.detail
    })
  },

  inputDescription(e) {
    this.setData({
      description: e.detail
    })
  },

  selectExpiration(e) {
    this.setData({
      expiration: e.detail
    })
  }
})
