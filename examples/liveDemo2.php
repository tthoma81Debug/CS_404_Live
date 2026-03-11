<!DOCTYPE html>
<html lang="en">
<!-- WARNING: This example intentionally contains errors. This is not the final version. -->
<head>
<title>Demo 1</title>
    <!-- Required meta tags -->
<meta charset="utf-8">
<link rel ="stylesheet" href="mainCss.css">
<style>
</style>

<script src="fetchExampleJS.js"></script>

</head>

<body>
    <div>
      <h1 class = "exampleClass"  onclick = "exampleFunction()">
        Demo Page
      </h1>
        <div class ="exampleClass">
            <p>
                This is a demo page.
            </p>
            <form method="post" action="endPoint1.php">
                <input type="text" id = "nameInput" name="data" placeholder="Placeholder">
                <button type="button" onclick="clientValidateAndSend()">Actual Button. Update Database Button. Yes. This is that button</button>
            </form>

        </div>

        <div id="fetchExampleDiv">
        
        </div>

        <!-- This is where we will sculpt a component and then use it for a post -->
        <div id='exampleComponentDiv' class='componentDivClass'> 
            
            <div id='userNameDiv' class='userNameDivClass'>
                <div id='userNameImageContainer' class='userImageClass'>
                    <img src='https://example.comBROKENLINK' alt='Profile Picture Here'> </img>
                </div>  
                <p id='theUsername' class='userNameClass'>Invincible8493</p>
                <span id='roleExampleSpan' class='roleClass'>Member</span>                 
            </div>      
            <p id='postText'>This is an example component. It is just a div with some text in it. We will use this as a template for creating new components that we will then post to the server.</p>
        </div>


        <div id='exampleComponentDiv' class='componentDivClass'> 
            
            <div id='userNameDiv' class='userNameDivClass'>
                <div id='userNameImageContainer' class='userImageClass'>
                    <img src='https://example.comBROKENLINK' alt='Profile Picture Here'> </img>
                </div>  
                <p id='theUsername' class='userNameClass'>Invincible8493</p>
                <span id='roleExampleSpan' class='roleClass'>Member</span>                 
            </div>      
            <p>This is an example component. It is just a div with some text in it. We will use this as a template for creating new components that we will then post to the server.</p>
        </div>

















    </div>

<?php
    echo 'Hello, World!' . 'php is working! version is ' . phpversion();
?>



</body>
</html>