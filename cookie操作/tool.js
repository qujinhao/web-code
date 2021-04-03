// JavaScript Document
//设置cookie
function setCookie(name, value, day) {
  var oDtae = new Date();
  document.cookie = name + "=" + value + ";expires=" + oDtae;
}


//获得cookie
function getCookie(name) {
  var str = document.cookie;
  var arr = str.split("; ");
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split("=");
    if (arr1[0] == name) {
      return arr1[1];
    }
  }
}


//删除cookie
function removeCookie(name) {
  setCookie(name, 1, -1);
}
