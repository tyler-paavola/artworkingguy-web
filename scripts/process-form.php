<?php

$data = array(); 		// array to pass back data

// initialize variables
$recipient = 'glen@artworkingguy.ca';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$methodOfContact = $_POST['methodOfContact'];
$typeOfService = $_POST['typeOfService'];
$description = $_POST['description'];

$subject = "ArtWorkingGuy.ca - Inquiry from $name";

// Build email content
$email_content = "Name: $name";

if (null != $email) {
    $email_content .= "\r\nEmail: $email";
}

if (null != $phone) {
    $email_content .= "\r\nPhone: $phone";
}

if (null != $methodOfContact) {
    $email_content .= "\r\nPreferred method of contact: $methodOfContact";
}

if (null != $typeOfService && "Choose a service" != $typeOfService) {
    $email_content .= "\r\nType of service: $typeOfService";
}

$email_content .= "\r\n\r\n$description";

// Build email headers
$email_headers = "From: $name <$email>";
                
if (mail($recipient, $subject, $email_content, $email_headers)) {
    // show a message of success and provide a true success variable
    $data['success'] = true;
    $data['message'] = 'Thank you!';
}
else {
    $data['success'] = false;
    $data['message'] = 'Uh oh, something went wrong! Please call or email me';
}  
    
// return all our data to an AJAX call
echo json_encode($data);
