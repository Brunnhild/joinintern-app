// pages/search/search.js
import { PostController } from '../../service/PostController'
import { MajorController } from '../../service/MajorController'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    icon: '/assets/happy.png',
    hint: '请输入关键字查询',
    posts: [],
    majors: ['不限'],
    majorIndex: 0,
    disMH: '',
    disZB: '',
    maxDu: '',
    minDu: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let majors = await MajorController.getAllMajor()
      this.setData({
        majors: [...this.data.majors, ...majors.map(e => e.majorName)]
      })
    } catch (e) {
      wx.showModal({
        title: '获取专业信息失败',
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

  async search(e) {
    try {
      let posts = await PostController.filter(
        this.data.disMH === '' ? null : this.data.disMH,
        this.data.disZB === '' ? null : this.data.disZB,
        parseInt(this.data.majorIndex) === 0 ? [] : [this.data.majorIndex],
        this.data.maxDu === '' ? null : this.data.maxDu,
        this.data.minDu === '' ? null : this.data.minDu,
        e.detail
      )
      console.log(posts)
      posts.forEach(e => {
        e.expiration = e.expiration.split(' ')[0]
        e.startTime = e.startTime.split(' ')[0]
        e.endTime = e.endTime.split(' ')[0]
        e.postDate = e.postDate.split(' ')[0]
        if (e.postContent.length > 80) e.postContent = e.postContent.slice(0, 80) + '...'
      })
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
  },

  selectMajor(e) {
    this.setData({
      majorIndex: e.detail.value
    })
  },

  inputDisMH(e) {
    this.setData({
      disMH: e.detail.value
    })
  },

  inputDisZB(e) {
    this.setData({
      disZB: e.detail.value
    })
  },

  inputMaxDu(e) {
    this.setData({
      maxDu: e.detail.value
    })
  },

  inputMinDu(e) {
    this.setData({
      minDu: e.detail.value
    })
  },

  toDetail(e) {
    wx.navigateTo({
      url: `/pages/postDetail/postDetail?postId=${e.currentTarget.dataset.postId}`
    })
  }
})
