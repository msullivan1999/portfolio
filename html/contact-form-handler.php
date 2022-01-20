<?php 

// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//     header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//     header("Access-Control-Allow-Headers: Authorization, Content-Type,Accept, Origin");
// exit(0);
// }

if(isset($_POST['submit'])){
    $to = "matt.r.sullivan1999@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    header('Location: ../index.html')
    }
?>