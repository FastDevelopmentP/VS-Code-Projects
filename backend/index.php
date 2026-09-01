<?php
// Receives the form fields sent by login.php using the POST method.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: login.php');
    exit;
}

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';

// Do not authenticate until secure accounts, password hashes, and sessions exist.
http_response_code(501);
exit('Client login is not available yet. Please contact Fast Strength for assistance.');
