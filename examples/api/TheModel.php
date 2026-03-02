<?php
namespace TheModel {
    /**
     * A static class that holds details for database access.
     */
    abstract class Details
    {
        const DB_USER = 'phpUser';
        const DB_PW = '/(ua.cyzAMyQX/Wb';
        const DB_SILENT_FAIL = false;
    }


    function connectToDatabase($databaseName)
    {
        $db = new \mysqli('database', Details::DB_USER, Details::DB_PW, $databaseName);
        if ($db->connect_errno) {
            if (!Details::DB_SILENT_FAIL) {
                echo "<!-- FAILED DB CONNECT -->\n";
            }
        }
        else
        {
            echo "<!-- SUCCESSFUL DB CONNECT -->\n";
        }

        return $db;
    }

    function simpleQuery($db, $query, $storeResult = true)
    {
        // Prepare the query
        if (!($stmt = $db->prepare($query))) {
            if (!Details::DB_SILENT_FAIL) {
                echo "<!-- FAILED QUERY PREPARE: ($db->errno) $db->error -->\n";
            }
            return null;
        }
        
        // Execute query
        if (!$stmt->execute()) {
            if (!Details::DB_SILENT_FAIL) {
                echo "<!-- FAILED QUERY EXECUTE: check that database and statement are still open and valid -->\n";
            }
            return null;
        }
        
        // Store the results for SELECT queries
        if ($storeResult && strpos($query, 'SELECT') !== false) {
            $stmt->store_result();
        }
        
        // return the statement object
        return $stmt;
    }





}