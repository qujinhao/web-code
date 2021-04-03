<?php
    $num = 3;
    //作用域：全局作用域，局部作用域
    $x = 3;
    $y = 4;
    function func(){
        $x = 10;
        echo '变量为'.$x;
        
        echo '全局变量x为'.$GLOBALS['x'];
        global $y; //声明为全局变量
    }
    func();
    ?>