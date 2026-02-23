<?php
    
    //header('Content-Type: application/json');

    //we have a bug here. Can you spot it?
    //$name = $_POST ['name'];
    //$score = $_POST ['score'];

    //The whole request body
    $requestBody = file_get_contents('php://input');

    /*
    $response = [
        'success' => true,
        'message' => "Got the score...but buggy :)",
        'echoName' => $name, //will be null
        'echoScore' => $score //will be null
    ];
    */

    echo "server just received a request. The data it heard was " . $requestBody;

    
    //echo $response //this will not work as intended but it is a start
    
    //echo "Hello this is endpoint 1 speaking" . "php is working! version is " . phpversion();
?>