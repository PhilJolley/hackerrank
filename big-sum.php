<?php
// Complete the aVeryBigSum function below.
function aVeryBigSum($ar) {
    $total = 0;
    if(count($ar) <=10 && count($ar) !== 0){
        foreach ($ar as $value){
            $total += $value;
        }
    }
    return $total;
}
$array = [1,2,3];
echo aVeryBigSum($array);