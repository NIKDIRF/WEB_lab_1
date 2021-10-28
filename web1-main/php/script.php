<?php

session_start();
         $ready = $_POST['isReady'];

if (!isset($_SESSION['tableData'])){
    $_SESSION['tableData'] = array();
}

function validateX($xVal){
    $x = str_replace(',', '.', $xVal);

    $xMin = -5;
    $xMax = 3;

    return isset($xVal) && is_numeric($x) && $x >= $xMin && $x <= $xMax;
}

function validateY($yVal){
    $y = str_replace(',', '.', $yVal);

    if ($y != -2 && $y != -1.5 && $y != -1 && $y != -0.5 && $y != 0 && $y != 0.5 && $y != 1 && $y != 1.5 && $y != 2) {
        return false;
    }

    return isset($yVal) && is_numeric($y);
}

function validateR($rVal){
    $r = str_replace(',', '.', $rVal);

    if ($r != 1 && $r != 2 && $r != 3 && $r != 4 && $r != 5){
        return false;
    }


    return isset($rVal) && is_numeric($r);
}

function validateXYR($x, $y, $r){
    return validateX($x) && validateY($y) && validateR($r);
}

function hitCircle($x, $y, $r){
    return $x >= 0 && $y >= 0 && sqrt($x * $x + $y * $y) <= $r/2;
}

function hitTriangle($x, $y, $r){
    return $x <= 0 && $y <= 0 && $y >= -($x) - $r;
}

function hitRectangle($x, $y, $r){
    return $x >= 0 && $y <= 0 && $x <= $r/2 && $y >= -$r;
}

function checkHit($x, $y, $r){
    return hitCircle($x, $y, $r) || hitRectangle($x, $y, $r) || hitTriangle($x, $y, $r);
}


$xVal = $_POST['x'];
$yVal = $_POST['y'];
$rVal = $_POST['r'];
$timezoneOffset = $_POST['time'];
$reset = $_POST['reset'];

if ($ready == 1){
    foreach ($_SESSION['tableData'] as $row) echo $row;
    $ready=0;
}

if ($reset==1) {
    session_destroy();
    $reset = 0;

    echo "<tr >
                  <th>X</th>
                  <th>Y</th>
                  <th>R</th>
                  <th>Текущее время</th>
                  <th>Время выполнения</th>
                  <th>Результат</th>
                  </tr>";
}

$isValid = validateXYR($xVal, $yVal, $rVal);

$isHit = checkHit($xVal, $yVal, $rVal);
$isHitConverted = $isHit ? 'true' : 'false';

$currentTime = date('H:i:s', time() - $timezoneOffset * 60);

$executionTime = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 7);

if ($isValid) {
    array_push($_SESSION['tableData'],
        "<tr>
        <td>$xVal</td>
        <td>$yVal</td>
        <td>$rVal</td>
        <td>$currentTime</td>
        <td>$executionTime</td>
        <td>$isHitConverted</td>
        </tr>"
    );
    echo $_SESSION['tableData'][count($_SESSION['tableData']) - 1];
}
