<?php
    include "theModel.php";
    header('Content-Type: application/json');

    //we have a bug here. Can you spot it?
    //$name = $_POST ['name'];
    //$score = $_POST ['score'];

    //The whole request body
    $requestBody = file_get_contents('php://input');

    $jsonData = json_decode($requestBody);

    //$jsonData->name = "Dr. T";
    //$jsonData->score = 100;

    $userMesssageText = $jsonData->message;

    if($jsonData->name == "TheAdmin")
        {
            $jsonData->score = 1000000;
            $jsonData->role = "Administrator";
            $jsonData->message = "Welcome back admin. Your score is " . $jsonData->score . "." . ". Message you posted is: " . $userMesssageText;
        }
    else
    {
        $jsonData->role = "Member";
        $jsonData->score = $jsonData->score + 1;
        $jsonData->message = "Welcome back " . $jsonData->name . ". Your score is " . $jsonData->score . ".". ". Message you posted is: " . $userMesssageText;
    }



    //$jsonData->message = "Haha. That is all";

    //db logic start
    
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
            $nameSQL = $jsonData->name;
            $scoreSQL = $jsonData->score;
            $theSQL = "Insert Into GamesTable (GameTitle, GameRating) VALUES (?, ?);";

            //new for insert statements
            $theStatement = $db->prepare($theSQL);
            // 's' = string, 'i' = integer (adjust types as appropriate)
            $theStatement->bind_param("sd", $nameSQL, $scoreSQL);
            $theResults; //just so we know where the results of the execute are stored for debugging
            $theResults = $theStatement->execute();

            if ($theResults === false) {
                die("Execute failed: " . $theStatement->error);
            }

            //echo "Success. Rows inserted: " . $theStatement->affected_rows;
            //close the statement and connection
            $theStatement->close();
            $db->close();

            //echo $db
     }

    //connect to db
    //run query to insert the score
    //close db connection
    



    //db logic end




    //comment if going back to text
    //$jsonData->name = "The name that was sent is here. not going to echo it back";
    //$jsonData->score = 300;
    //$jsonData->message = "Yep. added it the database. How are you doing. This isn't the data. I wasn't going to echo it  back";
    
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