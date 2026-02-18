<!DOCTYPE html>
<html lang="en">

<head>
<title>Demo 1</title>
    <!-- Required meta tags -->
<meta charset="utf-8">
<style>
</style>
</head>

<body>
    <div>
      <h1>
        Demo Page
      </h1>
        <div>
            <p>
                This is a demo page.
            </p>
            <form method="post" action="endPoint1.php">
                <input type="text" name="data" placeholder="Placeholder">
                <button type="submit">Submit</button>
            </form>

        </div>
    </div>

<?php
    echo "Hello, World!" . "php is working! version is " . phpversion();
?>



</body>
</html>