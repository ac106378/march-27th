
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