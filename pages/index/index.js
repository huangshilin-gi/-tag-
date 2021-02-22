// pages/index/index.js

const app = new getApp();
console.log(app.globalData.name);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  bindGetUserInfo(e){
    console.log(e.detail.userInfo);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })

    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/recommend',
    //   success: (res) => {
    //     const data = res.data.data.list;
    //     this.setData({
    //       list: data
    //     })
    //   }
    // })
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

  },

  //监听滚动
  onPageScroll(obj){
    // console.log(obj);
  },

  //监听页面滚动到底部
  onReachBottom(){
    console.log('没有了');
  },

  //下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新');
  }
})