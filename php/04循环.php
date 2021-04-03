<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
    <?php
       $x = array('one', 'two', 'three');  //普通数组
        $person = array('name'=>'xiaoR', 'age'=>21, 'gender'=>'male');  //关联数组
    
    
    
    foreach($x as $value){  //普通数组遍历
        echo $value . '<br>';
    }
    
    
    foreach($person as $key=>$value){
        echo $key . ':'.$value.'<br>';
    }
    ?>
</body>
</html>