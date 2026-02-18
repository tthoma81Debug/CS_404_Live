<!DOCTYPE html>
<html lang="en">

<head>
<title>Demo 1</title>
    <!-- Required meta tags -->
<meta charset="utf-8">
<link rel="stylesheet" href="mainCss.css">
<style>
</style>  

</head>

<body>
    <div>
      <h1>
        Demo Page
      </h1>
        <div class ="exampleClass">
            <p>
                This is a demo page.
            </p>
            <form method="post" action="demo1.php">
                <input type="text" name="data" placeholder="Enter some data">
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>

<?php
$entityBody = file_get_contents('php://input');
echo "Received data: " . $entityBody;

$cars = array("Volvo", "BMW", "Toyota");
$cars[4] = "Mercedes";
echo json_encode($cars);

?>



</body>
</html>