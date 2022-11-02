<?php

function adder(&$str2) {
    $str2 .= 'How we two ';
}
$str = 'are not related?';  
adder($str);  
echo $str;  

?>