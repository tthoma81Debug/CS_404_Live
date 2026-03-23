<?php
    include "theModel.php";
    header('Content-Type: application/json');

    //we have a bug here. Can you spot it?
    //$name = $_POST ['name'];
    //$score = $_POST ['score'];

    //The whole request body
    $requestBody = file_get_contents('php://input');
    $jsonData = json_decode($requestBody);
    //$userMesssageText = $jsonData->message;


    $db = TheModel\connectToDatabase("GamesDB");
    if ($db == null) {
        die("<p>Failed to connect to database.</p></body></html>\n");
    }
    else{
            //echo "Database connection successful!\n";
            //lets run a query

            /*
            $theSQL = "Select * from GamesTable;";
            $theStatement = TheModel\simpleQuery($db,$theSQL);
            $theStatement->bind_result($TheKey, $GameTitle, $GameRating);
            while($theStatement->fetch()){
                echo "Key: " . $TheKey . " Title: " . $GameTitle . " Rating: " . $GameRating . "\n";
            }
            */
            //$nameSQL = $jsonData->name;
            //$scoreSQL = $jsonData->score;
            


            //echo "Success. Rows inserted: " . $theStatement->affected_rows;
            //close the statement and connection
            //$theStatement->close();
            //$db->close();

            //echo $db
     }

    $exampleResponse = [
        'success' => true,
        'message' => "Data received and processed successfully."
    ];

    $jsonDataToSend = json_encode($exampleResponse);
    echo $jsonDataToSend;

   /*
    $response = [
        'success' => true,
        'message' => "Got the score...but buggy :)",
        'echoName' => $name, //will be null
        'echoScore' => $score //will be null
    ];
    */
?>