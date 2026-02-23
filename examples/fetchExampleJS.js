function sendScore(){
    const payload = {
        name: "Ada Lavelace",
        score: 42
    };

    //proven this was a function call
    fetch('./api/save-score.php',{
        method: 'POST',
        body: payload
        //bug here? ;)
        //other bug here? ;)
    }).then(response => response.text()).then(data => {
        console.log("Server response: ",data);
    }).catch(error=> {
        console.error("error in fetch");
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
