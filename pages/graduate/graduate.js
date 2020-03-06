// pages/graduate/graduate.js
import { UserController } from '../../service/UserController'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    gra: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    try {
      let gra = await UserController.graList()
      this.setData({
        gra: gra
      })
      console.log(gra)
    } catch (e) {
      wx.showModal({
        title: '获取校友失败',
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

  toDetail(e) {
    wx.navigateTo({
      url: `/pages/graDetail/graDetail?userId=${e.currentTarget.dataset.graId}`
    })
  }
})
