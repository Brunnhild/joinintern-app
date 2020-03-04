// pages/signup/signup.js
import { MajorController } from '../../service/MajorController'
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    id: '',
    school: '',
    genders: ['男', '女'],
    gender: 0,
    level: '',
    majors: [],
    major: 0,
    photo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    this.setData({
      majors: (await MajorController.getAllMajor()).map(e => e.majorName)
    })
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

  signup() {
    console.log(this.data)
    wx.login({
      success: res => {
        wx.uploadFile({
          url: app.globalData.baseURL + '/user/register',
          filePath: this.data.photo,
          name: 'file',
          formData: {
            code: res.code,
            stuId: this.data.id,
            gender: this.data.gender === 0 ? 'male' : 'female',
            level: this.data.level,
            major: parseInt(this.data.major) + 1,
            nickname: app.globalData.userInfo.nickName,
            avatar: app.globalData.userInfo.avatarUrl
          },
          success: res => {
            console.log(JSON.parse(res.data))
            app.globalData.user = JSON.parse(res.data)
            wx.showToast({
              title: '注册成功',
              icon: 'success'
            })
            wx.switchTab({
              url: '/pages/mine/mine'
            })
          }
        })
      }
    })
  },

  inputName(e) {
    this.setData({
      name: e.detail
    })
  },

  inputId(e) {
    this.setData({
      id: e.detail
    })
  },

  inputSchool(e) {
    this.setData({
      school: e.detail
    })
  },

  selectGender(e) {
    this.setData({
      gender: e.detail
    })
  },

  inputLevel(e) {
    this.setData({
      level: e.detail
    })
  },

  selectMajor(e) {
    this.setData({
      major: e.detail
    })
  },

  selectPhoto(e) {
    this.setData({
      photo: e.detail.tempFilePaths[0]
    })
  }
})
