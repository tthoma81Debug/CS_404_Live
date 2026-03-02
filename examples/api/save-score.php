<?php
    include "theModel.php";
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

    //db logic start
    
    $db = TheModel\connectToDatabase("GamesDB");
    if ($db == null) {
        die("<p>Failed to connect to database.</p></body></html>\n");
    }
    else{
            echo "Database connection successful!\n";
            //lets run a query

            /*
            $theSQL = "Select * from GamesTable;";
            $theStatement = TheModel\simpleQuery($db,$theSQL);
            $theStatement->bind_result($TheKey, $GameTitle, $GameRating);
            while($theStatement->fetch()){
                echo "Key: " . $TheKey . " Title: " . $GameTitle . " Rating: " . $GameRating . "\n";
            }
            */
            $nameSQL = $jsonData->name;
            $scoreSQL = $jsonData->score;
            $theSQL = "Insert Into GamesTable (GameTitle, GameRating) VALUES (?, ?);";
            $theStatement = TheModel\simpleQuery($db,$theSQL);
            $theStatement->bind_result($nameSQL, $scoreSQL);




            $theStatement->close();
            $db->close();

            //echo $db
     }

    //connect to db
    //run query to insert the score
    //close db connection
    



    //db logic end




    //uncomment later when using
    //$jsonDataToSend = json_encode($jsonData);
    //echo $jsonDataToSend;

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