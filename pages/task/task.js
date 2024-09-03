// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     // 页面初始化 options为页面跳转所带来的参数
     let that = this;
     // 以下两个是测试数据
     let totalItems = 100;
     let rightItems = 88;
     let completePercent = parseInt((rightItems / totalItems) * 100);
     this.setData({
       resultComment: completePercent+"%"
     });
     that.showScoreAnimation(rightItems, totalItems);
  },

  showScoreAnimation: function (rightItems, totalItems) {
    /*
    cxt_arc.arc(x, y, r, sAngle, eAngle, counterclockwise);
    x	                    Number	  圆的x坐标
    y	                    Number	  圆的y坐标
    r	                    Number	  圆的半径
    sAngle	            Number	  起始弧度，单位弧度（在3点钟方向）
    eAngle	            Number	  终止弧度
    counterclockwise	    Boolean	  可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
    */
     let that = this;
      // 页面渲染完成
      // 这部分是灰色底层
      let cxt_arc = wx.createCanvasContext('canvasArc');//创建并返回绘图上下文context对象。
      cxt_arc.setLineWidth(6);//绘线的宽度
      cxt_arc.setStrokeStyle('#d2d2d2');//绘线的颜色
      cxt_arc.setLineCap('round');//线条端点样式
      cxt_arc.beginPath();//开始一个新的路径
      cxt_arc.arc(53, 53, 50, 0, 2 * Math.PI, false);//设置一个原点(53,53)，半径为50的圆的路径到当前路径
      cxt_arc.stroke();//对当前路径进行描边
      //这部分是蓝色部分
      cxt_arc.setLineWidth(6);
      cxt_arc.setStrokeStyle('#3ea6ff');
      cxt_arc.setLineCap('round')
      cxt_arc.beginPath();//开始一个新的路径
      cxt_arc.arc(53, 53, 50, -Math.PI * 1 / 2, 2 * Math.PI * (rightItems / totalItems) - Math.PI * 1 / 2, false);
      cxt_arc.stroke();//对当前路径进行描边
      cxt_arc.draw();
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