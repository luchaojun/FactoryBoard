// pages/workorder/workorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
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
    for (let i = 0; i < this.data.process.length; i++) {
        const task = this.data.process[i];
        const p = Math.ceil(task["PRODUCT_QUANTITY"] / task["QUANTITY"] * 100);
        task["progress"] = p;
        const ctx = wx.createCanvasContext('progressCanvas' + i);
        const centerX = 35;
        const centerY = 55;
        const radius = 30;
        const startAngle = -Math.PI / 2;
        const endAngle = (p * Math.PI * 2) / 100 + startAngle;
  
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
        if(p == 100){
          ctx.setStrokeStyle('#0f0');
        }else{
          ctx.setStrokeStyle('#00f');
        }
        ctx.stroke();
        ctx.draw();
    }
    this.setData({process: this.data.process})
  },

  findWorkOrders:function(event){
    console.log("findWorkOrders");
  },

  sortWorkOrders:function(event){
    console.log("sortWorkOrders");
  },

  selectWorkOrders:function(event){
    console.log("selectWorkOrders");
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