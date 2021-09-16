<?php

include_once 'connection.php';

if(!$conn)
{
	die("connection failed".mysqli_connect_error());
}
else
{
	$Firstname=$_POST['fname'];
	$Lastname=$_POST['lname'];
	$Address=$_POST['Address'];
	$City=$_POST['City'];
	$Zipcode=$_POST['Zip'];
	$Phone=$_POST['Phone'];
	$Comment=$_POST['comment'];
	$Cardname=$_POST['cardname'];
	$Cardnumber=md5($_POST['cardnumber']);
	$Expmonth=$_POST['expmonth'];
	$Expyear=$_POST['expyear'];
	$CVV=$_POST['cvv'];
	$Price=$_POST['price'];
	$Gift=$_POST['gift'];
	$Discussion=$_POST['Dis'];


$sql="INSERT INTO donetion(Firstname,Lastname,Address,City,Zipcode,Phone,Comment,Cardname,Cardnumber,Expmonth,Expyear,CVV,Price,Gift,Discussion)
    VALUES ('$Firstname','$Lastname','$Address','$City','$Zipcode','$Phone','$Comment','$Cardname','$Cardnumber','$Expmonth','$Expyear','$CVV','$Price','$Gift','$Discussion')";

if(mysqli_query($conn,$sql))
{

	header("Location:thankyou.html");
}
else
{
	echo "error";
}

}


?>