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
                header("Location: ../index.php");
            }
            else{
                $msg = "Password Doesn`t Match";
            }
        }
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400&display=swap" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="../styles/entry.css">
    <!-- Title -->
    <title>MellowMusic - Sign Up</title>
</head> 
<body>
    <header>
        <img src="../resources/entryPage/bg.svg" alt="">
         <div class="left-1">
            <div class="box" style="height: 95%;">
                <div class="content">
                    <form method="post">
                        <h3>Sign Up</h3>
                        <div class="card">
                            <label for="name">Name</label>
                            <input type="text" name="user_name" placeholder="Enter Your Username..." required >
                        </div>
                        <div class="card">
                            <label for="email">Email</label>
                            <input type="email" name="user_email" placeholder="Enter Your Email..." required >
                        </div>
                        <div class="card">
                            <label for="password">Password</label>
                            <input type="password" name="user_password" placeholder="Enter Your Password..." required >
                        </div>
                        <div class="card">
                            <label for="re-password">Password</label>
                            <input type="password" name="user_re_password" placeholder="Repeat Your Password..." required >
                        </div>
                        <input type="submit" value="Sign Up" class="submit">
                        <p>Already have an account?<a href="../index.php"> Login</a></p>
                    </form>
                </div>
            </div>
        </div>
        <?php
        echo ('<h3>'.$msg.'</h3>');
        ?>
    </header>
</body>
</html> 