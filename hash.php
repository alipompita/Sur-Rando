<?php

echo "<h1>Encryipt</h1>";

if (!empty($_GET['m'])) {
    $m = $_GET['m'];

    echo "md5:" . md5($m);

    echo "<br>";
    echo "<hr>";
    echo "<br>";
}

if (!empty($_GET['h'])) {

    $h = $_GET['h'];

    $hash = password_hash($h, PASSWORD_DEFAULT);

    echo "Password Hash: " . $hash;
}
