<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Client Login | Fast Strength Systems</title>
        <link rel="icon" type="image/png" href="../Images/favicon">
        <link rel="stylesheet" href="../styles.css">
    </head>
    <body>
        <h1>Client Login</h1>
        <p>Already part of the Fast Strength Team? Sign in here.</p>

        <!-- Sends the login information to the backend using POST -->
        <form action="index.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username" minlength="6" maxlength="15" autocomplete="username" required>

            <br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" minlength="6" maxlength="15" autocomplete="current-password" required>

            <br><br>

            <input type="reset" value="Reset">
            <input type="submit" value="Submit">
        </form>

        <p><a href="../index.html">Back to Fast Strength</a></p>
    </body>
</html>
