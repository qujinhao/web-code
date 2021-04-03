// JavaScript Document
//冒泡排序
function bubble(arr){
    for(var i = 0; i < arr.length; i++){  //比较轮次
            //每次比较次数
            for(var j = 0; j <arr.length - i - 1; j++){
                //判断前后俩个数是否符合交换条件
                if(arr[j] > arr[j + 1]){  //从小到大排序，若想从大到小改成<
                    var tmp = arr[j + 1];
                    arr[j + 1] = arr[j]
                    arr[j] = tmp;
                }
            }
        }
}



//选择排序
function choose(arr){
     for(var i = 0; i < arr.length-1; i++){
            for(var j = i + 1; j < arr.length; j++){
                if(arr[i] > arr[j]){
                    var tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
}