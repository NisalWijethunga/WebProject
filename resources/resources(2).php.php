<?php

 

include_once 'Connection.php';

 

if(!$conn)
{
    die("connection failed".mysqli_connect_error());
}

else
{

    $Name=$_POST['name'];
    $Email=$_POST['email'];
    $comment=$_POST['comment'];


 $sql="INSERT INTO comment_box(Name,Email,comment)
    VALUES ('$Name','$Email','$comment')"; 

if(mysqli_query($conn,$sql))
{
echo "Submitted";
}
else
{
echo "error";
}
}

?>