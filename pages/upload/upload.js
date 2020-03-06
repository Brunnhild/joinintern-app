// pages/upload/upload.js
import { VideoController } from '../../service/VideoController'
const app = getApp()
import { baseURL } from '../../service/request'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    description: '',
    video: ''
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

  upload() {
    wx.uploadFile({
      url: baseURL + '/video/upload',
      filePath: this.data.video,
      name: 'file',
      formData: {
        videoTitle: this.data.title,
        videoDescription: this.data.description,
        userId: app.globalData.user.userId
      },
      success: res => {
        console.log(res)
        wx.showToast({
          title: '上传成功',
          icon: 'success'
        })
        wx.redirectTo({
          url: '/pages/videos/videos'
        })
      },
      fail: res => {
        wx.showModal({
          title: '上传失败',
          showCancel: false
        })
        console.log(res)
      }
    })
  },

  inputTitle(e) {
    this.setData({
      title: e.detail
    })
  },

  inputDescription(e) {
    this.setData({
      description: e.detail
    })
  },

  selectVideo(e) {
    console.log(e)
    this.setData({
      video: e.detail.tempFilePath
    })
  }
})
