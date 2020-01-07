//test.js
//获取应用实例
var app=getApp()
console.log(app.globalData.userInfo)
var n=0

Page({
  /**
   * 自定义内容
   */
  myData: 'wyw',

  

  /**
   * 页面的初始数据
   */
  data: {
    buttonMsg:  '按wyw的🐔',
    msg01: "wyw",
    msg02: "是真的",
    msg03: "nb",
    array:[1,2,3,4,5,6,7,8,9]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    console.log(this.route);
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
  onShareAppMessage: function (res) {
    if (res.from==='button') {
      console.log(res.target);
    }

    return {
      tilte: '自定义王烨文牛逼的转发标题',
      path: '/page/user?id=123'
    }
  },

  /**
   * 单击tab时触发
   */
  onTabItemTap(item) {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },

  /**
   * button"单击王烨文🐔"的btnTap
   */
  btnTap: function() {
    console.log('🐔被按下！');
    this.setData({buttonMsg:'wyw的🐔被按下了'});
    n=n+1;
  },

  /**
   * 自定义测试1
   */
  testTap_1:function(e) {
    console.log(e);
  }
})