// pages/selfDetail/selfDetail.js
import { UserController } from '../../service/UserController'
import { MajorController } from '../../service/MajorController'

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: null,

    majors: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    if (!app.globalData.user) {
      wx.navigateTo({
        url: '/pages/signup/signup'
      })
      return
    }
    try {
      let user = await UserController.find(app.globalData.user.userId)
      if (user.gender === 'female') user.gender = '女'
      else user.gender = '男'
      let majors = await MajorController.getAllMajor()
      user.major = majors[user.major - 1].majorName
      console.log(user)
      this.setData({
        user: user
      })
    } catch (e) {
      wx.showModal({
        title: '获取信息失败',
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
  onShareAppMessage: function() {}
})
