// pages/production/production_stages.js
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
    const prod_line = options.prod_line;
    const line = prod_line.split("-")[1];
    var resultData = this;
    console.log('http://172.16.7.61:500/selAllActionStatus?prod_line='+(Number(line)));
    wx.request({
      url: 'http://172.16.7.61:500/selAllActionStatus?prod_line='+(Number(line)),
      method: "GET",
      success(res){
        console.log(res.data);
        resultData.setData({tasks: res.data});
        resultData.setCircleTestData();
      }
    });
  },

  setCircleTestData:function(){
    const ctx = wx.createCanvasContext('myCanvas');
    const taskWidth = wx.getSystemInfoSync().windowWidth / 3;
    const taskHeight = 200;
    const radius = 50;

    this.data.tasks.forEach((task, index) => {
      console.log(1234);
      console.log(task.product_quantity);
      console.log(task.quantity);
      console.log(5678);
      const x = index * taskWidth + taskWidth/2;
      const y = taskHeight / 2;
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + (task.product_quantity/task.quantity) * 2 * Math.PI;

      // 绘制圆弧
      ctx.setLineWidth(6);//绘线的宽度
      ctx.setStrokeStyle('#d2d2d2');//绘线的颜色
      ctx.setLineCap('round');//线条端点样式
      ctx.beginPath();//开始一个新的路径
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);//设置一个原点(53,53)，半径为50的圆的路径到当前路径
      ctx.stroke();//对当前路径进行描边

      ctx.setLineWidth(6);
      if((task.product_quantity/task.quantity) == 1){
        ctx.setStrokeStyle('#0f0');
      }else{
        ctx.setStrokeStyle('#3ea6ff');
      }
      ctx.setLineCap('round')
      ctx.beginPath();//开始一个新的路径
      ctx.arc(x, y, radius, startAngle, endAngle, false);
      ctx.stroke();//对当前路径进行描边

      // 绘制百分比文本
      ctx.setFontSize(16);
      ctx.setFillStyle('black');
      ctx.fillText(`${(task.product_quantity/task.quantity)*100}%`, x - radius / 2 + 5, y + 5);

      // 绘制任务名称
      ctx.setFontSize(14);
      ctx.setFillStyle('black');
      ctx.fillText(task.plan_name, x - radius / 2 + 5, y + radius + 20);
    });
    ctx.draw();
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