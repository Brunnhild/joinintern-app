// pages/post/post.js
import { PostController } from '../../service/PostController'
import { MajorController } from '../../service/MajorController'
import { LabelController } from '../../service/LabelController'
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
    startTime: '2020-03-01 14:00:00',
    endTime: '2020-03-01 14:00:00',
    description: '',
    expiration: '2020-03-01 14:00:00',

    majorSelected: [],
    labelsSelected: [],

    majors: [],
    labels: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    if (app.globalData.user.userIdentity !== 'validate') {
      wx.showModal({
        title: '您还没有通过认证，不能发布实习哦'
      })
    }
    try {
      let majors = await MajorController.getAllMajor()
      let labels = await LabelController.getLabels()
      this.setData({
        majors: majors,
        labels: labels
      })
      console.log(majors)
      console.log(labels)
    } catch (e) {
      wx.showModal({
        title: '专业获取或标签失败',
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

  async create() {
    try {
      let res = await PostController.createPost(
        app.globalData.user.userId,
        this.data.distanceMH,
        this.data.distanceZB,
        this.data.duration,
        this.data.endTime + ' 14:00:00',
        this.data.expiration + ' 14:00:00',
        this.data.labelsSelected.map(e => parseInt(e) + 1),
        this.data.location,
        this.data.majorSelected.map(e => parseInt(e) + 1),
        this.data.description,
        this.data.title,
        this.data.startTime + ' 14:00:00'
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
    this.setData({
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
  },

  selectMajor(e) {
    this.setData({
      majorSelected: e.detail.value
    })
  },

  selectLabel(e) {
    this.setData({
      labelsSelected: e.detail.value
    })
  }
})
