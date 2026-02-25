<?php
    
    header('Content-Type: application/json');

    //we have a bug here. Can you spot it?
    //$name = $_POST ['name'];
    //$score = $_POST ['score'];

    //The whole request body
    $requestBody = file_get_contents('php://input');

    $jsonData = json_decode($requestBody);

    $jsonData->name = "Dr. T";
    $jsonData->score = 100;
    $jsonData->message = "Haha. That is all";

    $jsonDataToSend = json_encode($jsonData);
    echo $jsonDataToSend;

    //echo "Lets see if json decoding is working. The received name is " . $jsonData->name;
    //echo "Lets see if json decoding is working. The received score is " . $jsonData->score;
    //echo "Lets see if json decoding is working. The received message is " . $jsonData->message;


    //echo "Lets see if json decoding is working. The received name is " . $jsonData['name'] . " and the score is " . $jsonData['score'];

    /*
    $response = [
        'success' => true,
        'message' => "Got the score...but buggy :)",
        'echoName' => $name, //will be null
        'echoScore' => $score //will be null
    ];
    */

    //echo "server just received a request. The data it heard was " . $requestBody;

    
    //echo $response //this will not work as intended but it is a start
    
    //echo "Hello this is endpoint 1 speaking" . "php is working! version is " . phpversion();
?>