// JavaScript Document
function getStyle(el,property){  //获取属性值
    //判断是否兼容
    if(getComputedStyle){ 
        return getComputedStyle(el)[property]
    }else{
        return el.currentStyle[property];
    }
}




function animate(el, properties){  //封装函数包括：元素、属性、目标地点
    clearInterval(el.timerId);
     el.timerId = setInterval(function(){
         
         for(var property in properties){
         var current;
         var target = properties[property];
         if(property === 'opacity'){
             current = Math.round(parseFloat(getStyle(el, 'opacity')) * 100);
            } 
         else{
             current = parseInt(getStyle(el,property));
         }
         
        var speed = (target - current) / 30; //用目标地点减去边距再除去时间，得到速度
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //看速度是否大于0，大于则向上取整，否则向下取整
         if(property === 'opacity'){
             el.style.opacity = (current + speed) / 100;
         }
         else{
             el.style[property] = current + speed + 'px'; 
         }
        
       }
       
    },20)
}