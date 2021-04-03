<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
    <?php
        $txt1 = 'hello';
        $txt2 = 'world';
    $txt3 = $txt1. ' ' .$txt2;
    echo $txt3.'<br>';
    
    
    //字符串中的字符
    echo $txt3[4];
    echo '<br>';
    echo strlen($txt3);  //获取字符串长度
    echo '<br>';
    echo strpos($txt3,'he');  //获取字符所在下标
    
    
    $int = 3;
    $float = 3.3;
    $bool = true;
    
    //php数组
    //1.数值数组
    $numbers = array(1, 2, 3, 4, 5);
     echo '<br>';
    echo $numbers[2];
    
    
    //2.关联数组
    $person = array("name"=>"xiaoMao", "age"=>20);
    echo "<br>";
    echo $person['name'];
    $person['name'] = 'xiaoLv';
    echo "<br>";
    echo $person['name'];
    
    ?>
</body>
</html>