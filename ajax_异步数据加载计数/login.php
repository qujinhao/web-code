<?php
        $user = $_POST['user'];
        $password = $_POST['password'];
        if($user == 'gap' && $password == '123456'){
            echo '{"result": true}';
        }else{
            echo '{"result": false}';
        }
    ?>
