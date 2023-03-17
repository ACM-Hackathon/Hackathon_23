<?php

    include "config.php";

    if(isset($_POST['sub']))
    {
        extract($_POST);
        
        $insert_query = mysqli_query($con,"insert into cert values('', '$Name', '$Adhar_Number', '$Mobile_Number', '$Portal_Address', 
        '$Occupation', '$Current_Income','$desc',current_timestamp())")or die(mysqli_error($con));
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Certification Form</title>
    <link rel="stylesheet" href="harshada_style.css">
</head>
<body>
    
    <div class="container">
        <h1>Certification</h1>
        <p>Fill the following information to get your certificate</p>
        <form action="" method="post">
            <input type="text" name="Name" id="Name" placeholder="Enter Your Name">
            <input type="text" name="Adhar_Number" id="Adhar Number" placeholder="Enter Your Adhar Number">
            <input type="text" name="Mobile_Number" id="Mobile Number" placeholder="Enter Your Mobile Number">
            <input type="text" name="Portal_Address" id="Portal Address" placeholder="Enter Your Portal Address">
            <input type="text" name="Occupation" id="Occupation" placeholder="Enter Your Occupation">
            <input type="text" name="Current_Income" id="Current Income" placeholder="Enter Your Current Income">
            <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Provide Your Valuable Feedback"></textarea>
            <input type = "submit" name="sub" href="will.html" value="Submit">     
        </form>
    </div>
    <script src="index.js"></script>
</body>
</html> 