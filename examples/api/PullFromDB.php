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

            
        $theSQL = "SELECT * FROM PostsTable;";
        $theStatement = TheModel\simpleQuery($db, $theSQL);
        $theStatement->bind_result($theKey, $usernameFromDB, $messageFromDB, $roleFromDB);

        $databaseResults = [];

        // Build array of all rows
        while ($theStatement->fetch()) {
            $databaseResults[] = [
                'key'      => $theKey,
                'username' => $usernameFromDB,
                'role'     => $roleFromDB,
                'message'  => $messageFromDB
         ];
    }

// Close result/statement and database connection
$theStatement->close();
$db->close();

// Output JSON
if (!empty($databaseResults)) {
    echo json_encode($databaseResults);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'No posts found in the database.'
    ]);
} 
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