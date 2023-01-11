<?php
    session_start();
    include('dbconnect.php');
    $msg = false;
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $user_name = $_POST['user_name'];
        $user_email = $_POST['user_email'];
        $user_password = $_POST['user_password'];
        $user_re_password = $_POST['user_re_password'];

        if (!empty($user_name) && !empty($user_email) && !empty($user_password) && !is_numeric($user_name)) {
            if($user_password === $user_re_password){
                $query = "insert into user (user, email, password) VALUES ('$user_name', '$user_email', '$user_password')";
                mysqli_query($con, $query);
                header("Location: ../index.html");
            }
            else{
                $msg = "Password Doesn`t Match";
            }
        }
    }
?>