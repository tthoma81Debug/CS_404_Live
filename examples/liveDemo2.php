<!DOCTYPE html>
<html lang="en">
<!-- WARNING: This example intentionally contains errors. This is not the final version. -->
<head>
<title>Demo 1</title>
    <!-- Required meta tags -->
<meta charset="utf-8">
<!-- <link rel = "stylesheet" href="bootstrapCyborgTheme.css"> -->
<link rel ="stylesheet" href="mainCss.css">
<style>
</style>

<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script> -->
<script src="fetchExampleJS.js"></script>

</head>

<body onload="startTimer()">

<!--
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#simpleModal">
  Launch static backdrop modal
</button>

<div class="modal" id="simpleModal" data-bs-backdrop="static" data-bs-keyboard="false">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>








<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>


-->




    <div id="mainContainer">
      <h1 class = "exampleClass"  onclick = "exampleFunction()">
        Demo Page
      </h1>
        <div class ="exampleClass">
            <p>
                This is a demo page.
            </p>
            <form method="post" action="endPoint1.php">
                <label for="nameInput">Name:</label>
                <input type="text" id = "nameInput" name="data" placeholder="Placeholder">

                <label for="messageBox">Message:</label>
                <textarea id="messageBox" name="messageBox" rows="5" cols="30">Write your message here...</textarea>

                <button type="button" onclick="clientValidateAndSend()">Actual Button. Update Database Button. Yes. This is that button</button>
                <button type="button" onclick="getUpdates()">Get Updates Button. Yes. This is that button</button>
                <button type="button" onclick="stopTimer()">Stop Timer Button. It is annoying</button>
            </form>

        </div>

        <div id="fetchExampleDiv">
        
        </div>


        <!--
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
end comment-->















    </div>

<?php
    echo 'Hello, World!' . 'php is working! version is ' . phpversion();
?>



</body>
</html>