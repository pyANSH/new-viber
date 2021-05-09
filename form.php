<?php
if (isset($_POST['submit'])) {
    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $pickup=$_POST['pickupDate'];
    $return=$_POST['DropDate'];
    $email=$_POST['Email'];   
    $pickAddress=$_POST['Pickup'];
    $dropAddress=$_POST['Drop'];
    $car=$_POST['select'];
    $price=$_POST['price'];
    $to='prantoshv@gmail.com';
    $subject='Form Submission';
    $message="Name: " . $name ."\n" . "phone: " . $phone . "\n" ."Email". $email. "CAR: " . $car ."\n" .   "pickup date: " . $pickup ."\n" . "return date: " . $return . "\n" . "Pickup address:Test1 " . $pickAddress . "\n" . "drop address: " . $dropAddress;
    $headers="From" . $name;
    $headers='MIME-Version: 1.0' . "\r\n";
    $headers='Content-type : text/html; charset=iso-8859-1' . "\r\n";

    if (mail($to,$subject,$message,$headers)) {
        echo "<h1>Sent Successfully</h1>";
    }
    else{
        echo  "Error, Something went wrong";
    }
}
?>