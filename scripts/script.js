/**
 * Here is the dynamic styling for the Welcome Page
 */


var xpos = 100;
var ypos = 100;

// boundary
var minx = 0;
var miny = 0;
var maxx = 490; // 10 pixels for character's width
var maxy = 490; // 10 pixels for character's width

// controller vars
var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;


function moveUp(cell) {
    let character = document.getElementById('character')
    if(offMap()) return;
    if(bumpIntoCharacter()) return;
    
    document.getElementById('character').style.grid-area = "";
}

function moveRight(cell) {
    let character = document.getElementById('character')
    if(offMap(character, 'right')) return;
    if(bumpIntoCharacter(character, 'right')) return;
}

function moveDown(cell) {
    let character = document.getElementById('character')
    if(offMap(character)) return;
    if(bumpIntoCharacter(character)) return;
}

function moveLeft(cell) {
    let character = document.getElementById('character')
    if(offMap(character)) return;
    if(bumpIntoCharacter(character)) return;
}

function offMap(character, direction){
    
}

function bumpIntoCharacter(character, direction) {

}