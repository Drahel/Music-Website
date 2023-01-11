<?php
    session_start();

    include('pages/dbconnect.php');
    $msg = false;
    if (isset($_POST['user_name'])) {
        $user_name = $_POST['user_name'];
        $user_password = $_POST['user_password'];

        $query = "select * from user where user = '".$user_name."' AND password = '".$user_password."' limit 1";
        $result = mysqli_query($con, $query);

        if (mysqli_num_rows($result) == 1) {
            header('Location: pages/main.php');
        } else {
            $msg = "Incorrect Login or Password";
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
    <link rel="stylesheet" href="styles/entry.css">
    <!-- Title -->
    <title>MellowMusic - Entry</title>
</head> 
<body>
    <header>
        <img src="resources/entryPage/bg.svg" alt="">
         <div class="left-1">
            <div class="box">
                <div class="content">
                    <form method="post">
                        <h3>Login</h3>
                        <div class="card">
                            <label for="name">Name</label>
                            <input type="text" name="user_name" placeholder="Enter Your Username..." required >
                        </div>
                        <div class="card">
                            <label for="password">Password</label>
                            <input type="password" name="user_password" placeholder="Enter Your Password..." required >
                        </div>
                        <input type="submit" value="Login" class="submit">
                        <div class="check">
                            <input type="checkbox" name="" id=""><span>Remember Me.</span>
                        </div>
                        <p>Don`t have an account yet?<a href="pages/signUp.php"> Sign Up</a></p>
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