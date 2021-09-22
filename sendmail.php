<?php

// Подключение библиотеки
require 'PHPMailer/PHPMailer.php';

// Новый PHPMailer инстанс
$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');

// От кого и кому ответ
$mail->setFrom($_POST['input-email'], 'Potfolio message');

// Кому
$mail->addAddress('ars.astashevich@gmail.com', 'John Doe');

// Тема письма
$mail->Subject = 'HI! It is message from your portfolio website!';

//Тело письма
$body = '<h1>Message from your portfolio!</h1>';

if(trim(!empty($_POST['input-email']))) {
    $body .= '<p><strong>EMAIL:</strong> ' .$_POST['input-email'].'</p>';
    }

if(trim(!empty($_POST['input-text']))) {
    $body .= '<p><strong>MESSAGE:</strong> ' .$_POST['input-text'].'</p>';
}

$mail->Body = $body;
$mail->IsHTML(true);
if (!$mail->send()) {
    $message = 'Error';
} else {
    $message = 'Message sended';
}

$responce = ['message' => $message];

header('Content-type: application/json');
echo json_encode($responce);