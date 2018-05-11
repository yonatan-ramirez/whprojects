<?php
$first = 'johnny';
$last = 'Ram';
$b = 25;
$c = $a + $b;
$d = 'sugar borwn matalic';
?>
<?php 
 $x = 5;
 function test($myVar){
     echo "The value of x is: ".$myVar;
 }
 test($x);
 function test2(){
    global $y;
    $y = 75;
 }
 test2();
 echo $y;
?>



<!-- <p>
<?php  
// $txt = $first . ' ' . $last;
// print $txt;
?>, wecome to the site.
</p>
<p> Hello
    <?php
    // print $a;
    ?>, welcome to the webpage
</p>
<p>
My car is <?php 
// echo $d;


?>
</p> -->