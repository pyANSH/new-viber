<?php
if (isset($_POST['submit'])) {
    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $pickup=$_POST['pickup'];
    $return=$_POST['return'];   
    $pickAddress=$_POST['pickAddress'];
    $dropAddress=$_POST['dropAddress'];
    $to='prantoshv@gmail.com';
    $subject='Form Submission';
    $message="Name: " . $name ."\n\n" . "Name: " . $phone . "\n" . "Name: " . $pickup ."\n" . "Name: " . $return . "\n" . "Name: " . $pickAddress . "\n" . "Name: " . $dropAddress;
    $headers="From" . $name;

    if (mail($to,$subject,$message,$headers)) {
        echo "<h1>Sent Successfully</h1>";
    }
    else{
        echo  "Error, Something went wrong";
    }
}
?>