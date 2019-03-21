
let playeroneup = document.querySelector('.player-one.up-arrow > img');
let playeronedown = document.querySelector('.player-one.down-arrow > img');
let playeroneleft = document.querySelector('.player-one.left-arrow > img');
let playeroneright = document.querySelector('.player-one.right-arrow > img');


let playertwoup = document.querySelector('.player-two.up-arrow > img');
let playertwodown = document.querySelector('.player-two.down-arrow > img');
let playertwoleft = document.querySelector('.player-two.left-arrow > img');
let playertworight = document.querySelector('.player-two.right-arrow > img');

let backgroundtile = 'images/background.png';
let playerone = 'images/robot.png';
let playertwo = 'images/zombie.png';

let playeronerow = 1;
let playeronecol = 1;
let playertworow = 1;
let playertwocol = 1;


playeroneup.onclick = () => {
    let currenttile = document.getElementsByClassName('robot');
    let classname = document.querySelector('div < img[src="images/robot.png"]:parent').className;
    console.log(classname);
};

playeroneleft.onclick = () => {
    let currenttile = document.getElementsByClassName('robot');
    let classname = document.querySelector('div < img[src="images/robot.png"]:parent').className;
    console.log(classname);
};

playeroneright.onclick = () => {
    let currenttile = document.getElementsByClassName('robot');
    let classname = document.querySelector('div < img[src="images/robot.png"]:parent').className;
    console.log(classname);
};

playeronedown.onclick = () => {
    let currenttile = document.getElementsByClassName('robot');
    let classname = document.querySelector('div < img[src="images/robot.png"]:parent').className;
    console.log(classname);
};

playertwoup.onclick = () => {
    let currenttile = document.getElementsByClassName('zombie');
    let classname = document.querySelector('div < img[src="images/zombie.png"]:parent').className;
    console.log(classname);
};

playertwoleft.onclick = () => {
    let currenttile = document.getElementsByClassName('zombie');
    let classname = document.querySelector('div < img[src="images/zombie.png"]:parent').className;
    console.log(classname);
};

playertworight.onclick = () => {
    let currenttile = document.getElementsByClassName('zombie');
    let classname = document.querySelector('div < img[src="images/zombie.png"]:parent').className;
    console.log(classname);
};

playertwodown.onclick = () => {
    let currenttile = document.getElementsByClassName('zombie');
    let classname = document.querySelector('div < img[src="images/zombie.png"]:parent').className;
    console.log(classname);
};

/**
 * Here is the dynamic styling for the Page
 */

 const background = 'images/background.png'
 const zombie = 'images/zombie.png'
 const robot = 'images/robot.png'

function moveUpZ() {
    let curZombiePos = document.getElementsByClassName("zombie");
    let parse = curZombiePos.className.split(" ")
    let parseRow = parse[1];
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    let row = parseInt(parse);
    row += 1;
    let newRow = row.toString();
    newRow = "r-" + newRow;
    parse[1] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

    curZombiePos.children[0].src = background;
    curZombiePos.classList.remove("zombie");

    document.getElementsByClassName(newClassName).children[0].src = zombie;
    document.getElementsByClassName(newClassName).classList.add("zombie");
}

function moveRightZ(cell) {
    let curZombiePos = document.getElementsByClassName("zombie");
    let parse = curZombiePos.className.split(" ")
    let parseRow = parse[2];
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    let row = parseInt(parse);
    row += 1;
    let newRow = row.toString();
    newRow = "r-" + newRow;
    parse[1] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

    curZombiePos.children[0].src = background;
    curZombiePos.classList.remove("zombie");

    document.getElementsByClassName(newClassName).children[0].src = zombie;
    document.getElementsByClassName(newClassName).classList.add("zombie");
}

function moveDownZ(cell) {
    let curZombiePos = document.getElementsByClassName("zombie");
    let parse = curZombiePos.className.split(" ")
    let parseRow = parse[1];
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    let row = parseInt(parse);
    row -= 1;
    let newRow = row.toString();
    newRow = "r-" + newRow;
    parse[1] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

    curZombiePos.children[0].src = background;
    curZombiePos.classList.remove("zombie");

    document.getElementsByClassName(newClassName).children[0].src = zombie;
    document.getElementsByClassName(newClassName).classList.add("zombie");
}

function moveLeftZ(cell) {
    let curZombiePos = document.getElementsByClassName("zombie");
    let parse = curZombiePos.className.split(" ")
    let parseRow = parse[2];
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    let row = parseInt(parse);
    row -= 1;
    let newRow = row.toString();
    newRow = "r-" + newRow;
    parse[1] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

    curZombiePos.children[0].src = background;
    curZombiePos.classList.remove("zombie");

    document.getElementsByClassName(newClassName).children[0].src = zombie;
    document.getElementsByClassName(newClassName).classList.add("zombie");
}

function moveUpR() {
   let curZombiePos = document.getElementsByClassName("zombie");
   let parse = curZombiePos.className.split(" ")
   let parseRow = parse[1];
   parseRow = parseRow.split("-", 2);
   parseRow = parseRow[1];
   let row = parseInt(parse);
   row += 1;
   let newRow = row.toString();
   newRow = "r-" + newRow;
   parse[1] = newRow;
   let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

   curZombiePos.children[0].src = background;
   curZombiePos.classList.remove("zombie");

   document.getElementsByClassName(newClassName).children[0].src = zombie;
   document.getElementsByClassName(newClassName).classList.add("zombie");
}

function moveRightR(cell) {
   let curZombiePos = document.getElementsByClassName("zombie");
   let parse = curZombiePos.className.split(" ")
   let parseRow = parse[2];
   parseRow = parseRow.split("-", 2);
   parseRow = parseRow[1];
   let row = parseInt(parse);
   row += 1;
   let newRow = row.toString();
   newRow = "r-" + newRow;
   parse[1] = newRow;
   let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

   curZombiePos.children[0].src = background;
   curZombiePos.classList.remove("zombie");

   document.getElementsByClassName(newClassName).children[0].src = zombie;
   document.getElementsByClassName(newClassName).classList.add("zombie");
}

function moveDownR(cell) {
   let curZombiePos = document.getElementsByClassName("zombie");
   let parse = curZombiePos.className.split(" ")
   let parseRow = parse[1];
   parseRow = parseRow.split("-", 2);
   parseRow = parseRow[1];
   let row = parseInt(parse);
   row -= 1;
   let newRow = row.toString();
   newRow = "r-" + newRow;
   parse[1] = newRow;
   let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

   curZombiePos.children[0].src = background;
   curZombiePos.classList.remove("zombie");

   document.getElementsByClassName(newClassName).children[0].src = zombie;
   document.getElementsByClassName(newClassName).classList.add("zombie");
}

function moveLeftR(cell) {
   let curZombiePos = document.getElementsByClassName("zombie");
   let parse = curZombiePos.className.split(" ")
   let parseRow = parse[2];
   parseRow = parseRow.split("-", 2);
   parseRow = parseRow[1];
   let row = parseInt(parse);
   row -= 1;
   let newRow = row.toString();
   newRow = "r-" + newRow;
   parse[1] = newRow;
   let newClassName = parse[0] + " " + parse[1] + " " + parse[2];

   curZombiePos.children[0].src = background;
   curZombiePos.classList.remove("zombie");

   document.getElementsByClassName(newClassName).children[0].src = zombie;
   document.getElementsByClassName(newClassName).classList.add("zombie");
}

function offMap(character, direction){
   
}

function bumpIntoCharacter(character, direction) {

}
