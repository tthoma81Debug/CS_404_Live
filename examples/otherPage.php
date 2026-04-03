<?php

session_start();

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
    echo "You are not logged in. Go to the other page and login or miss the content";
  }

?>