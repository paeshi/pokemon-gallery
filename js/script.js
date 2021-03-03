// IPO Pattern for program design - Input -> Process -> Output

// constants
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// apps state (variables)
let pokemonData;


// cached element references
const $collection = $('#collection');
const $modal = $('.modal');
const $name = $('#name');
const $moves = $('#moves');
const $height = $('#height');
const $forms = $('#forms');
const $sprite = $('#sprite');


// event listeners
$collection.on('click', 'article.card', handleClick);

// functions

// execute all initial actions when page loads (optional)
init();

function init() {
//  gather all pokemon when page loads
    getData();
}

function handleClick(evt) {
    $.ajax(this.dataset.url)
    .then(function(data) {
$name.text(data.name).css('text-transform', 'capitalize');
$moves.text("Moves: " + data.moves.length);
$height.text("Height: " + data.height);
$forms.text("Forms: " + data.forms.length);
$sprite.attr({src: data.sprites.front_default, alt: data.name});
        console.log(data)
        $modal.modal();
    }, function(error) {
        console.log(error)
    })
    console.log(this.dataset.url);
}


function getData() {
    $.ajax(BASE_URL + "?limit=30")
    .then(function(data) {
        console.log('data: ', data);
        // asssign data to globally accessible variable
        pokemonData = data;
        // update Dom with the Data
        render();
    }, function(error) {
        console.log('error: ', error);
    });
}
function render() {
    
    const cards = pokemonData.results.map(function(pokemon) {
        return `
        <article data-url="${pokemon.url}" class=" card">
        <h3>${pokemon.name}</h3>
    </article> 
    `;
    })
    $collection.html(cards);
}


