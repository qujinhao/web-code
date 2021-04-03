var mainScreen = document.getElementById("mainScreen");

//背景动起来
var jsBg1 = document.getElementById("bg1");
var jsBg2 = document.getElementById("bg2");
var timerBg = setInterval(function (){
    jsBg1.style.top = jsBg1.offsetTop + 1 + "px";
    jsBg2.style.top = jsBg2.offsetTop + 1 + "px";

    if(jsBg1.offsetTop >= 768){
        jsBg1.style.top = "-768px";
    }
    if(jsBg2.offsetTop >= 768){
            jsBg2.style.top = "-768px";
        }
},10)


//拖拽效果--飞机
var airplane = document.getElementById("airplane");
//给飞机添加鼠标按下事件
airplane.addEventListener("mousedown",function (e){
    var ev = e || window.event;
    basex = ev.pageX;
    basey = ev.pageY;

    movex = 0;
    movey = 0;
    //给屏幕添加鼠标移动事件
    mainScreen.addEventListener("mousemove",function (e){
        var en = e || window.event;
        movex = en.pageX -basex;
        basex = en.pageX;
        movey = en.pageY - basey;
        basey = en.pageY;
        airplane.style.left = airplane.offsetLeft + movex + "px";
        airplane.style.top = airplane.offsetTop + movey + "px";
    },false)
},false)


//飞机发射子弹
var timerBullent = setInterval(function (){
    var bullent = document.createElement("div");
    mainScreen.appendChild(bullent);
    bullent.className = "bullent";
    bullent.style.left = airplane.offsetLeft + 54 + "px";
    bullent.style.top = airplane.offsetTop - 10 + "px";

//    让子弹飞
    var timerBullentFly = setInterval(function (){
        bullent.style.top = bullent.offsetTop - 10 + "px";
        if(bullent.offsetTop <= -20){
            clearInterval(timerBullentFly);
            mainScreen.removeChild(bullent);
        }
    },30)
    bullent.timer = timerBullentFly;

},300)


//敌机数量随机生成
function randomNum(min,max){
    return parseInt(Math.random() * (max - min) + min);
}

//敌机降落
var timerEnemyplane = setInterval(function (){
    //创建敌机
    var Enemyplane = document.createElement("div");
    mainScreen.appendChild(Enemyplane);
    Enemyplane.className = "Enemyplane";
    Enemyplane.style.left = randomNum(0,485) + "px";
    Enemyplane.style.top = "50px";

//    让敌机飞
    var timerEnemyplaneFly = setInterval(function (){
        Enemyplane.style.top = Enemyplane.offsetTop + 10 + "px";
        if(Enemyplane.offsetTop >= 768){
            clearInterval(timerEnemyplaneFly);
            mainScreen.removeChild(Enemyplane);
        }
    },30)
    Enemyplane.timer = timerEnemyplaneFly;
},1000)


// 碰撞检测
function pzjcFunc(obj1, obj2){
    var obj1Left = obj1.offsetLeft;
    var obj1Width = obj1Left + obj1.offsetWidth;
    var obj1Top = obj1.offsetTop;
    var obj1Height = obj1Top + obj1.offsetHeight;

    var obj2Left = obj2.offsetLeft;
    var obj2Width = obj2Left + obj2.offsetWidth;
    var obj2Top = obj2.offsetTop;
    var obj2Height = obj2Top + obj2.offsetHeight;

    if(!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)){
        return true;
    }else {
        return false;
    }

}


// 子弹打飞机
var timerPZJC = setInterval(function (){
    var allEnemyplanes = document.getElementsByClassName("Enemyplane");
    var allBullents = document.getElementsByClassName("bullent");
    for(var i = 0; i < allBullents.length; i++){
        for(var j = 0; j < allEnemyplanes.length; j++){
            var b = allBullents[i];
            var p = allEnemyplanes[j];

            if(pzjcFunc(b,p)){
                clearInterval(b.timer);
                clearInterval(p.timer);
                mainScreen.removeChild(b);
                mainScreen.removeChild(p);
                break;
            }
        }
    }
},100)



//死亡检测
var timerDie = setInterval(function (){
    var allEnemyplanes = document.getElementsByClassName("Enemyplane");
       for(var i = 0; i < allEnemyplanes.length; i++){
           if(pzjcFunc(allEnemyplanes[i],airplane)){
               for (var j = 0; j < 100; j++){
                   clearInterval(j);
               }
               break;
           }
       }
},100)
