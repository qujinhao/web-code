var arr = new Array();
arr[0] = "sacsacs";
arr[1] = "grgr";
arr[2] = 'ascqoi';
arr[3] = "h5";
arr[4] = "s";

arr.sort(function (x,y){
    return x.length < y.length;
})
console.log(arr);