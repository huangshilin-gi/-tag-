// pages/index/index.js

const app = new getApp();
console.log(app.globalData.name);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    titles: ["流行", "新款", "特价"],
    navindex: 0
  },

  handleincrement(event){
    console.log(event.detail.message);
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleNavedClick(event){
    const navindex = event.detail.index;
    this.setData({
      navindex
    })
  },

  handleSelClick(){
    const mysel = this.selectComponent(".mysel-id");
    mysel.incrementCounter(10);
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