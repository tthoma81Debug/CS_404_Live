<?php

  session_start();

  if (isset($_POST['username'])) {
    $username = $_POST['username'];
    echo "username was sent and is " . htmlspecialchars($username, ENT_QUOTES, 'UTF-8');

    if($_POST['username'] === "alice"){
      $_SESSION['loggedInUser'] = [
        'username' => 'alice',
        'role'     => 'member'
      ];
    }
    else if($_POST['username'] === "bob"){
      $_SESSION['loggedInUser'] = [
        'username' => 'bob',
        'role'     => 'admin'
      ];
    }
    else{
     echo "Username is not alice, not logging in.";
      unset($_POST['username']);
    }
}

  if (isset($_SESSION['loggedInUser'])) {
    // User is logged in
    echo "You are logged in";
    echo "Welcome back, " . htmlspecialchars($_SESSION['loggedInUser']['username'], ENT_QUOTES, 'UTF-8') . "!";
    echo "Your role is: " . htmlspecialchars($_SESSION['loggedInUser']['role'], ENT_QUOTES, 'UTF-8');
    echo "<h1> as a member, you can use functionalty limited to members </h1>";
    echo "<button onclick=\"alert('This is a member-only feature')\">Member-Only Feature Button</button>";
  }
  else{
    // User is not logged in
    echo "You are not logged in. Please log in now.";

    echo "<h1>Sessions Example</h1>
  <form method='POST' action='sessionsExample.php'>
    <input type='text' name='username' placeholder='Username'>
    <button type='submit'>Login</button>
  </form>";

  }

?>


  <!--
//$_SESSION['loggedInUser'] = [
//        'username' => 'alice',
//        'role'     => 'member'
//    ];

//$theLoggedInUser = $_SESSION['loggedInUser'] ?? null;



  //echo "<h1>Sessions Example</h1>";
  //echo "session variable 'loggedInUser' is set to: " . $theLoggedInUser['username'];

-->

