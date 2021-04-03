//绘制直线
define (function (){
  return function (startPoint,endPoint){
      this.startPoint = startPoint;
      this.endpoint = endPoint;
      this.drawMe = function (){
          context.strokeStyle = '#000'
          context.beginPath();

          context.moveTo(this.startPoint.x,this.startPoint.y,this.radius);
          context.lineTo(this.endpoint.x,this.endpoint.y);
          context.closePath();
          context.stroke();
      }
  }
})