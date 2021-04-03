//管理绘图工具
define(function (){
    var history = []; //用来保存历史绘制记录的数组，里面存储的就是直线类，矩形类或者圆形类
    //直线
    function drawLine(context,line){
        line.drawMe(context);
    }
//    矩形
    function drawRect(context,rect){
        rect.drawMe(context);
    }

//    圆形
    function drawArc(context,arc){
        arc.drawMe(context);
    }

//    添加一条绘制轨迹
    function  addHistory(item){
        history.push(item);
    }

//    画出历史轨迹
    function drawHistory(context){
        for (var i =0; i<history.length; i++){
            var obj= history[i];
            obj.drawMe(context)
        }
    }

//    清楚历史轨迹
    function clearHistory(){
        history=[];
    }
    return{
        drawLine:drawLine,
        drawRect:drawRect,
        drawArc:drawArc,
        drawHistory: drawHistory,
        addHistory:addHistory,
        clearHistory:clearHistory,
    }
})
