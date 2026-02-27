<?php
namespace TheModel {
    /**
     * A static class that holds details for database access.
     */
    abstract class DatabaseDetails
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





}