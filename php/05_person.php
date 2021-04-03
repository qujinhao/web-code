<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
    <?php
        $person = array('name'=>'xiaoR', 'age'=>21, 'gender'=>'male', 'exes'=>array('xiaoL', 'xiaoC', 'xiaoS')
                       );
    $arg = $_GET['arg'];
    $resp = $person[$arg];
    
    
   header('content-type: text/jsonp');
    echo json_encode($resp);
    ?>
</body>
</html>