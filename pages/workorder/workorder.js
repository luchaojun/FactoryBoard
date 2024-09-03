// pages/workorder/workorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks: [
      {
        title: '任务1',
        author: '作者1',
        description: '这是任务1的描述',
        progress: 50,
      },
      {
        title: '任务2',
        author: '作者2',
        description: '这是任务2的描述',
        progress: 75,
      },
      // ...其他任务数据
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var resultData = this;
    wx.request({
      url: 'http://172.16.7.61:500/selAllWorkOrder',
      method: "GET",
      success(res){
        resultData.setData({process: res.data});
        resultData.drawProgressCircles();
      }
    });
  },

  drawProgressCircles: function () {
    for (let i = 0; i < this.data.tasks.length; i++) {
        const task = this.data.tasks[i];
        const ctx = wx.createCanvasContext('progressCanvas' + i);
        const centerX = 35;
        const centerY = 55;
        const radius = 30;
        const startAngle = -Math.PI / 2;
        const endAngle = (task.progress * Math.PI * 2) / 100 + startAngle;
  
        // 绘制背景圆环
        // ctx.beginPath();
        // ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        // ctx.setFillStyle('#999');
        // ctx.fill();

        // 绘制进度圆环
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.setLineWidth(4);
        ctx.setStrokeStyle('#999');
        ctx.stroke();
  
        // 绘制进度圆环
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.setLineWidth(4);
        ctx.setStrokeStyle('#00f');
        ctx.stroke();
  
        ctx.draw();
    }
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