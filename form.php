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
    $message="Name: " . $name ."\n" . "phone: " . $phone . "\n" . "pickup date: " . $pickup ."\n" . "return date: " . $return . "\n" . "Pickup address:Test1 " . $pickAddress . "\n" . "drop address: " . $dropAddress;
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