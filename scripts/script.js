let playeroneup = document.querySelector('div.player-one.up-arrow > img');
let playeronedown = document.getElementsByClassName('player-one down-arrow');
let playeroneleft = document.getElementsByClassName('player-one left-arrow');
let playeroneright = document.getElementsByClassName('player-one right-arrow');

let playertwoup = document.getElementsByClassName('player-two up-arrow');
let playertwodown = document.getElementsByClassName('player-two down-arrow');
let playertwoleft = document.getElementsByClassName('player-two left-arrow');
let playertworight = document.getElementsByClassName('player-two right-arrow');

let backgroundtile = 'images/background.png';
let playerone = 'images/robot.png';
let playertwo = 'images/zombie.png';

playeroneup.onclick = () => {
    let currenttile = document.getElementsByClassName('robot');
    let classname = document.querySelector('div < img[src="images/robot.png"]:parent').className;
    console.log(classname);
};

