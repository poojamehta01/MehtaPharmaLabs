<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "poojamehta1197@gmail.com"; // Change this to your recipient email

    // Set headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "success"; // Send a response back to the JavaScript indicating success
    } else {
        echo "error"; // Send a response back to the JavaScript indicating error
    }
}
?>
