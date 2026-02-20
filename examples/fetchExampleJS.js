function sendScore(){
    const payload = {
        name: "Ada Lavelace",
        score: 42
    };

    fetch('/api/save-score.php'),{
        method: 'POST',
        body: payload
        //bug here? ;)
        //other bug here? ;)
    }.then(response => response.json()).then(data => {
        console.log("Server response: ",data);
    });
}