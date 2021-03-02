// IPO Pattern for program design - Input -> Process -> Output

// constants
const BASE_URL = "https://pokeapi.co/api/v2/pokemon ";

// apps state (variables)
// cached element references
// event listeners
// functions

// execute all initial actions when page loads (optional)
init();

function init() {
//  gather all pokemon when page loads
    getData();
}


function getData() {
    $.ajax(BASE_URL)
    .then(function(data) {
        console.log('data: ', data);
    }, function(error) {
        console.log('error: ', error);
    });
}
