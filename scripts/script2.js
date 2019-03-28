/**
 * Here is the dynamic styling for the Page
 */
const background = 'images/background.png';
const zombie = 'images/zombie.png';
const robot = 'images/robot.png';
window.onkeyup = checkKey;
function checkKey (key) {
    if(key.code == 'KeyI')
        moveUpZ();
    else if(key.code == 'KeyK') 
        moveDownZ();
    else if(key.code == 'KeyJ') 
        moveLeftZ();
    else if(key.code == 'KeyL') 
        moveRightZ();
    else if(key.code == 'KeyW') 
        moveUpR();
    else if(key.code == 'KeyS') 
        moveDownR();
    else if(key.code == 'KeyA') 
        moveLeftR();
    else if(key.code == 'KeyD') 
        moveRightR();
}
function moveUpZ() {
   let curZombiePos = document.getElementsByClassName('zombie');
   let parse = curZombiePos[0].className.split(" ")
   let parseRow = parse[1];
   parseRow = parseRow.split("-", 2);
   parseRow = parseRow[1];
   let row = parseInt(parseRow, 10);
   console.log(parse);
   if(row - 1 == 0 || document.getElementsByClassName(`r-${row-1} ${parse[2]}`)[0].classList.contains('robot') ) {
      return;
   }
   row -= 1;
   $(document).ready(function(){
    $(".zombie").animate({opacity: 0.5}, 2000);
});
   let newRow = row.toString();
   newRow = "r-" + newRow;
   parse[1] = newRow;
   let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
   curZombiePos[0].children[0].src = background;
   curZombiePos[0].classList.remove("zombie");
   document.getElementsByClassName(newClassName)[0].children[0].src = zombie;
   document.getElementsByClassName(newClassName)[0].classList.add("zombie");
}
function moveRightZ(cell) {
    let curZombiePos = document.getElementsByClassName('zombie');
    let parse = curZombiePos[0].className.split(" ")
    console.log(parse)
    let parseRow = parse[2];
    console.log(parseRow)
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    console.log(parseRow)
    let row = parseInt(parseRow, 10);
    if(row + 1 == 9 || document.getElementsByClassName(`${parse[1]} c-${row+1}`)[0].classList.contains('robot')) {
        return;
    }
    row = (row + 1);
    $(document).ready(function(){
        $(".zombie").animate({opacity: 0.5}, 2000);
    });
    console.log(row)
    let newRow = row.toString();
    console.log(newRow)
    newRow = "c-" + newRow;
    parse[2] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
 
    console.log(newClassName);
    curZombiePos[0].children[0].src = background;
    curZombiePos[0].classList.remove("zombie");
 
    document.getElementsByClassName(newClassName)[0].children[0].src = zombie;
    document.getElementsByClassName(newClassName)[0].classList.add("zombie");
}
function moveDownZ(cell) {
    let curZombiePos = document.getElementsByClassName('zombie');
    let parse = curZombiePos[0].className.split(" ")
    console.log(parse)
    let parseRow = parse[1];
    console.log(parseRow)
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    console.log(parseRow)
    let row = parseInt(parseRow, 10);
    if(row + 1 == 9 || document.getElementsByClassName(`r-${row+1} ${parse[2]}`)[0].classList.contains('robot')) {
        return;
     }
    row += 1;
    $(document).ready(function(){
        $(".zombie").animate({opacity: 0.5}, 2000);
    });
    console.log(row)
    let newRow = row.toString();
    console.log(newRow)
    newRow = "r-" + newRow;
    parse[1] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
 
    console.log(newClassName);
    curZombiePos[0].children[0].src = background;
    curZombiePos[0].classList.remove("zombie");
 
    document.getElementsByClassName(newClassName)[0].children[0].src = zombie;
    document.getElementsByClassName(newClassName)[0].classList.add("zombie");
}
function moveLeftZ(cell) {
    let curZombiePos = document.getElementsByClassName('zombie');
    let parse = curZombiePos[0].className.split(" ")
    console.log(parse)
    let parseRow = parse[2];
    console.log(parseRow)
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    console.log(parseRow)
    let row = parseInt(parseRow, 10);
    if(row - 1 == 0 || document.getElementsByClassName(`${parse[1]} c-${row-1}`)[0].classList.contains('robot') ) {
        return;
    }
    row -=1;
    $(document).ready(function(){
        $(".zombie").animate({opacity: 0.5}, 2000);
    });
    console.log(row)
    let newRow = row.toString();
    console.log(newRow)
    newRow = "c-" + newRow;
    parse[2] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
 
    console.log(newClassName);
    curZombiePos[0].children[0].src = background;
    curZombiePos[0].classList.remove("zombie");
 
    document.getElementsByClassName(newClassName)[0].children[0].src = zombie;
    document.getElementsByClassName(newClassName)[0].classList.add("zombie");
}
function moveUpR() {
    let curRobotPos = document.getElementsByClassName('robot');
    let parse = curRobotPos[0].className.split(" ")
    console.log(parse)
    let parseRow = parse[1];
    console.log(parseRow)
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    console.log(parseRow)
    let row = parseInt(parseRow, 10);
    if(row - 1 == 0 || document.getElementsByClassName(`r-${row-1} ${parse[2]}`)[0].classList.contains('zombie') ) {
       return;
    }
    row -= 1;
    $(document).ready(function(){
        $(".robot").animate({opacity: 1}, 2000);
    });
    console.log(row)
    let newRow = row.toString();
    console.log(newRow)
    newRow = "r-" + newRow;
    parse[1] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
 
    console.log(newClassName);
    curRobotPos[0].children[0].src = background;
    curRobotPos[0].classList.remove("robot");
 
    document.getElementsByClassName(newClassName)[0].children[0].src = robot;
    document.getElementsByClassName(newClassName)[0].classList.add("robot");
}
function moveRightR(cell) {
    let curRobotPos = document.getElementsByClassName('robot');
    let parse = curRobotPos[0].className.split(" ")
    console.log(parse)
    let parseRow = parse[2];
    console.log(parseRow)
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    console.log(parseRow)
    let row = parseInt(parseRow, 10);
    if(row + 1 == 9 || document.getElementsByClassName(`${parse[1]} c-${row+1}`)[0].classList.contains('zombie') ) {
        return;
    }
    row = (row + 1);
    $(document).ready(function(){
        $(".robot").animate({opacity: 1}, 2000);
    });
    console.log(row)
    let newRow = row.toString();
    console.log(newRow)
    newRow = "c-" + newRow;
    parse[2] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
 
    console.log(newClassName);
    curRobotPos[0].children[0].src = background;
    curRobotPos[0].classList.remove("robot");
 
    document.getElementsByClassName(newClassName)[0].children[0].src = robot;
    document.getElementsByClassName(newClassName)[0].classList.add("robot");
}
function moveDownR(cell) {
    let curRobotPos = document.getElementsByClassName('robot');
    let parse = curRobotPos[0].className.split(" ")
    console.log(parse)
    let parseRow = parse[1];
    console.log(parseRow)
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    console.log(parseRow)
    let row = parseInt(parseRow, 10);
    if(row + 1 == 9 || document.getElementsByClassName(`r-${row+1} ${parse[2]}`)[0].classList.contains('zombie')) {
        return;
     }
    row += 1;
    $(document).ready(function(){
        $(".robot").animate({opacity: 1}, 2000);
    });
    console.log(row)
    let newRow = row.toString();
    console.log(newRow)
    newRow = "r-" + newRow;
    parse[1] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
 
    console.log(newClassName);
    curRobotPos[0].children[0].src = background;
    curRobotPos[0].classList.remove("robot");
 
    document.getElementsByClassName(newClassName)[0].children[0].src = robot;
    document.getElementsByClassName(newClassName)[0].classList.add("robot");
}
function moveLeftR(cell) {
    let curRobotPos = document.getElementsByClassName('robot');
    let parse = curRobotPos[0].className.split(" ")
    console.log(parse)
    let parseRow = parse[2];
    console.log(parseRow)
    parseRow = parseRow.split("-", 2);
    parseRow = parseRow[1];
    console.log(parseRow)
    let row = parseInt(parseRow, 10);
    if(row - 1 == 0 || document.getElementsByClassName(`${parse[1]} c-${row-1}`)[0].classList.contains('zombie') ) {
        return;
    }
    row -=1;
    $(document).ready(function(){
        $(".robot").animate({opacity: 1}, 2000);
    });
    console.log(row)
    let newRow = row.toString();
    console.log(newRow)
    newRow = "c-" + newRow;
    parse[2] = newRow;
    let newClassName = parse[0] + " " + parse[1] + " " + parse[2];
 
    console.log(newClassName);
    curRobotPos[0].children[0].src = background;
    curRobotPos[0].classList.remove("robot");
 
    document.getElementsByClassName(newClassName)[0].children[0].src = robot;
    document.getElementsByClassName(newClassName)[0].classList.add("robot");
}
function offMap(character, direction){
  
}
function bumpIntoCharacter(character, direction) {
}