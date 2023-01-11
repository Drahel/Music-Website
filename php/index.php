<?php
 session_start();

 include('dbconnect.php');
 $msg = false;
 if (isset($_POST['user_name'])) {
     $user_name = $_POST['user_name'];
     $user_password = $_POST['user_password'];

     $query = "select * from user where user = '".$user_name."' AND password = '".$user_password."' limit 1";
     $result = mysqli_query($con, $query);

     if (mysqli_num_rows($result) == 1) {
         header('Location: pages/main.html');
     } else {
         $msg = "Incorrect Login or Password";
     }
 }
?>