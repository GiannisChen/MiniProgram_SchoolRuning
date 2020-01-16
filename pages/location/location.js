// pages/location/location.js

/**
 * 实例化AMapWX对象，处理搜索数据
 */
var amapFile = require('../../libs/amap-wx.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
    
  },
  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key:"0b72990a6f111479ca016c9e11457b06"});
    wx.getSystemInfo({
      success: function(data){
        var height = data.windowHeight;
        var width = data.windowWidth;
        var size = width + "*" + height;
        myAmapFun.getStaticmap({
          zoom: 17,
          size: size,
          scale: 2,
          markers: "mid,0xFF0000,A:116.37359,39.92437;116.47359,39.92437",
         
          success: function(data){
            that.setData({
              src: data.url
            })
            
          },
          fail: function(info){
            wx.showModal({title:info.errMsg})
          }
        })

      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})