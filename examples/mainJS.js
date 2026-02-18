
function exampleFunction() {
    window.alert("it works");

    fetch('endPoint1.php', {}).then(response => runWhenHearFromServer(response)).then(data => secondFunction(data));

}

function runWhenHearFromServer(response) {
    console.log("heard from server");
    window.alert("heard from server");
    console.log("The server says the following exactly:");
    console.log(response);
    return response.text();
}

function secondFunction(data) {
    window.alert("second function is working");
    console.log("the data is:");
    console.log(data);
}