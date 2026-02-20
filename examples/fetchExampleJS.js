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

}
    
    function setupStuff(){
        console.log("setup function called");
        sendScore();
        console.log("reached end of setup function");
    }
