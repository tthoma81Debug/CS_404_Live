<!DOCTYPE html>
<html lang="en">
<!-- WARNING: This example intentionally contains errors. This is not the final version. -->
<head>
<title>Demo 1</title>
    <!-- Required meta tags -->
<meta charset="utf-8">
<link rel ="stylesheet" href="mainCss.css">
<style>
</style>

<script src="fetchExample.js"></script>

</head>

<body>
    <div>
      <h1 class = "exampleClass"  onclick = "exampleFunction()">
        Demo Page
      </h1>
        <div class ="exampleClass">
            <p>
                This is a demo page.
            </p>
            <form method="post" action="endPoint1.php">
                <input type="text" name="data" placeholder="Placeholder">
                <button type="button" onclick="exampleFunction()">Actual Button</button>
            </form>

        </div>
    </div>

<?php
    echo "Hello, World!" . "php is working! version is " . phpversion();
?>



</body>
</html>