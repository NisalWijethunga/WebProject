<?php

 

include_once 'Connection.php';

 

if(!$conn)
{
    die("connection failed".mysqli_connect_error());
}

else
{

    $Firstname=$_POST['firstname'];
    $Lastname=$_POST['lastname'];
    $Uname=$_POST['username'];
    $DateOfBirth=$_POST['dob'];
    $Email=$_POST['email'];
    $Pnum=$_POST['phone-number'];
    $address=$_POST['Address'];
    $country=$_POST['country'];
 


 $sql="INSERT INTO enroll(Firstname,Lastname,Uname,DateOfBirth,Email,Pnum,address,country)
    VALUES ('$Firstname','$Lastname','$Uname','$DateOfBirth','$Email','$Pnum','$address','$country')";
}

if(mysqli_query($conn,$sql))
{
echo "Submitted";
}
else
{
echo "error";
}


?>