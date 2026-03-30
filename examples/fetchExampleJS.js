var randomDudeAvatar = "smileYellow.jpg";
var trollAvatar = "redFrown.jpg";
var currentAvatar = randomDudeAvatar;
var theTimer;

function clientValidateAndSend()
{
    clientValidate();

    var name = document.getElementById("nameInput").value;
    var message = document.getElementById("messageBox").value;

    sendScore(name, message);
}

function clientValidate()
{
    //validation logic here.
}

function getUpdates(){

        fetch('./api/PullFromDB.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: "{}"
  
    })
    .then(response => response.json())
    .catch(error => {
        console.error("Hey. Php dropped the ball here. JS reached out and was like, hey, here is some json, and it was like....... and so here we are :). full error here:", error);
        console.log(error.body);
    })
    .then(data => {
        console.log("Reached the second then block. Data is:", data);
        console.log("Server response: ",data);
       
        
        //now with template
        var newDiv = `
        <div Postid='exampleComponentDiv' class='componentDivClass'> 
            
            <div Postid='userNameDiv' class='userNameDivClass'>
                <div Postid='userNameImageContainer' class='userImageClass'>
                    <img src='${currentAvatar}' alt='Profile Picture Here'> </img>
                </div>  
                <p Postid='theUsername' class='userNameClass'>${data.username}</p>
                <span Postid='roleExampleSpan' class='roleClass'>${data.role}</span>                 
            </div>      
            <p Postid='postText'>${data.message}</p>
        </div>`;


        const parser = new DOMParser();
        const newDivNode = parser.parseFromString(newDiv, 'text/html');
        
        
        mainContainer.append(newDivNode.body);

        //end adding div
        
    
    })


}

function sendScore(name, message){
    const payload = {
        name: name,
        message: message,
        score: 42
    };

    
    //proven this was a function call
    fetch('./api/save-score.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
  
    })
    .then(response => response.json())
    .catch(error => {
        console.error("Hey. Php dropped the ball here. JS reached out and was like, hey, here is some json, and it was like....... and so here we are :). full error here:", error);
        console.log(error.body);
    })
    .then(data => {
        console.log("Reached the second then block. Data is:", data);
        console.log("Server response: ",data);
        //lets select the div we want to put the response in
        
        //const forumComponent = document.getElementById("postText");
        //const theUsername = document.getElementById("theUsername");
       // const roleExampleSpan = document.getElementById("roleExampleSpan");
        //const mainContainer = document.getElementById("mainContainer");

        //forumComponent.textContent = data.score + " is the score " + data.message + " is the message. This is the server response.";
        //forumComponent.textContent = data.message;
        //roleExampleSpan.textContent = data.role;


        //theUsername.textContent = data.name;

        //begin adding div
        //var newDiv = "<div id='exampleComponentDiv' class='componentDivClass'> <div id='userNameDiv' class='userNameDivClass'><div id='userNameImageContainer' class='userImageClass'><img src='https://example.comBROKENLINK' alt='Profile Picture Here'> </img></div>  <p id='theUsername' class='userNameClass'>Invincible8493</p><span id='roleExampleSpan' class='roleClass'>Member</span>                 </div>      <p id='postText'>This is an example component. It is just a div with some text in it. We will use this as a template for creating new components that we will then post to the server.</p></div>";
        
        if(data.name == "troll222")
        {
            currentAvatar = trollAvatar;
        }
        else
        {
            currentAvatar = randomDudeAvatar;
        }

        //now with template
        var newDiv = `
        <div Postid='exampleComponentDiv' class='componentDivClass'> 
            
            <div Postid='userNameDiv' class='userNameDivClass'>
                <div Postid='userNameImageContainer' class='userImageClass'>
                    <img src='${currentAvatar}' alt='Profile Picture Here'> </img>
                </div>  
                <p Postid='theUsername' class='userNameClass'>${data.name}</p>
                <span Postid='roleExampleSpan' class='roleClass'>${data.role}</span>                 
            </div>      
            <p Postid='postText'>${data.message}</p>
        </div>`;


        const parser = new DOMParser();
        const newDivNode = parser.parseFromString(newDiv, 'text/html');
        
        
        mainContainer.append(newDivNode.body);

        //end adding div





        //const fetchExampleDiv = document.getElementById("fetchExampleDiv");
        //var htmlParagraph = "<p>" + data.name + " scored " + data.score + " and said " + data.message + "</p>";
        //fetchExampleDiv.innerHTML = htmlParagraph;
        //fetchExampleDiv.textContent = "Server response: " + JSON.stringify(data);
    
    })
        

/*    
  //Note: This is intentionally broken. Can you tell why? Hint: 'timing' is important here.
  var Response = fetch('./api/save-score.php',{
        method: 'POST',
        body: payload
    })
    
    handleResponse(Response); 
    
*/

}
    
    
    function setupStuff()
    {
        console.log("setup function called");
        sendScore();
        console.log("reached end of setup function");
    }

    /*
    function handleResponse(response)
    {
        console.log("handleResponse called. response is: ", response);
    }
        */



    function startTimer()
    {
        console.log("Timer started. Will fetch updates every 5 seconds.");
        theTimer = setInterval(managePageUpdates, 5000);
    }

    function stopTimer()
    {
        clearInterval(theTimer);
        console.log("Timer stopped.");
    }

    function managePageUpdates()
    {
        console.log("Checking for updates...");
        var updatesAvailable = areThereUpdates();

        if(updatesAvailable)
        {
            console.log("Manage Page Updates ran and Updates are available. Fetching updates...");
            getUpdates();
        }
        else{
            console.log("Manage Page updates ran and..No updates available. Will check again in 5 seconds.");
        }
    }

    function areThereUpdates()
    {
        
        fetch('./api/PullFromDB.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: "{}"
  
    })
    .then(response => response.json())
    .catch(error => {
        console.error("Hey. Php dropped the ball here. JS reached out and was like, hey, here is some json, and it was like....... and so here we are :). full error here:", error);
        console.log(error.body);
    })
    .then(data => {
        console.log("Reached the second then block. Data is:", data);
        console.log("Server response: ",data);
       
        //get previous name and message

        //grab elements
        const elementsUsername = document.querySelectorAll('[Postid="theUsername"]');
        const elementsMessage = document.querySelectorAll('[Postid="postText"]');
        
        //grab text to compare
        const previousName = elementsUsername[0].textContent;
        const previousMessage = elementsMessage[0].textContent;
        
        



        if(data.message == previousMessage && data.name == previousName)
        {
            console.log(" Are there updates Ran. No new updates.");
            return false;
        }
        else
        {
            console.log(" Are there updates Ran. There are new updates.");
            return true;
        }


    })
    }
    
