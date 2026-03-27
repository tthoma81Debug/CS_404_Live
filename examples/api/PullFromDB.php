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

            
            $theSQL = "Select * from PostsTable;";
            $theStatement = TheModel\simpleQuery($db,$theSQL);
            $theStatement->bind_result($theKey, $usernameFromDB, $messageFromDB, $roleFromDB);
            
            /*
            while($theStatement->fetch()){
                echo "Key: " . $theKey . " Username: " . $usernameFromDB . " Message: " . $messageFromDB . " Role: " . $roleFromDB . "\n";
            }
            */

            

            if($theStatement->fetch()){
               
                 $databaseResults = [
                    'username' => $usernameFromDB,
                    'role' => $roleFromDB,
                    'message' => $messageFromDB
                ];
                $jsonDataToSend = json_encode($databaseResults);
                echo $jsonDataToSend;


             }
             else{
                echo json_encode(['success' => false, 'message' => 'No posts found in the database.']);
             }



            

            //$theStatement->close();
            //$db->close();

            //$nameSQL = $jsonData->name;
            //$scoreSQL = $jsonData->score;
            


            //echo "Success. Rows inserted: " . $theStatement->affected_rows;
            //close the statement and connection
            //$theStatement->close();
            //$db->close();

            //echo $db
     
    /*
    $exampleResponse = [
        'success' => true,
        'username' => $usernameFromDB,
        'role' => $roleFromDB,
        'message' => $messageFromDB
    ];

    $jsonDataToSend = json_encode($exampleResponse);
    echo $jsonDataToSend;

    
    */
    //echo "query worked and done";



    } //end else for successful db connection

   /*
    $response = [
        'success' => true,
        'message' => "Got the score...but buggy :)",
        'echoName' => $name, //will be null
        'echoScore' => $score //will be null
    ];
    */
?>