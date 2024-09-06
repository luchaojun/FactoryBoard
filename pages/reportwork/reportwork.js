// pages/reportwork/reportwork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn_color:[
      {"name": "123", "bgcolor": "green", "color": "white"},
      {"name": "456", "bgcolor": "white", "color": "black"}
    ]
  },

  test:function(event){
    console.log("test方法被調用");
    const box = this.selectComponent('#box');
    console.log(box); // 打印出按钮对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})