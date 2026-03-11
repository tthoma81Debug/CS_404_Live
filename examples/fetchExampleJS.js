
function clientValidateAndSend()
{
    clientValidate();

    var name = document.getElementById("nameInput").value;

    sendScore(name);
}

function clientValidate()
{
    //validation logic here.
}

function sendScore(name){
    const payload = {
        name: name,
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
        
        const forumComponent = document.getElementById("postText");
        forumComponent.textContent = data.name + " is the name " + data.score + " is the score " + data.message + " is the message. This is the server response.";
        
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
    
