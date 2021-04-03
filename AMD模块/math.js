// JavaScript Document
define(function(){
    var PI = 3.14159265354;
    function multiple(num1, num2){
        return num1 * num2;
    }
    
    function square(n){
        return Math.pow(n, 2);
    }
    
    return{
        PI: PI,
        multiple: multiple,
        square: square
    }
})