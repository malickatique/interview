<?php

$a = array('key1' => 'Foo Bar', 'key2' => null);

isset($a['key1']);             // Output: ??
array_key_exists('key1', $a);  // Output: ??

isset($a['key2']);             // Output: ??
array_key_exists('key2', $a);  // Output: ??


?>