
var container = document.querySelector('.rc-container');

for (var row = 1; row <= 8; row++) {
    for (var col = 1; col <= 8; col++) {
        console.log("TEST");
        //Create Child
        var div = document.createElement('div');
        var className = `rc r-${row} c-${col}`;
        div.setAttribute('class', className);

        var img = document.createElement('img');
        img.setAttribute('src', 'images/background.png');
        img.setAttribute('alt', 'background tile image');
        div.appendChild(img);
        //Append Child
        container.appendChild(div);
    }
}
document.querySelector('.rc.r-1.c-1').classList.add('robot');
document.querySelector('.rc.r-8.c-8').classList.add('zombie');
document.querySelector('.rc.r-1.c-1 > img').setAttribute('src', 'images/robot.png');
document.querySelector('.rc.r-8.c-8 > img').setAttribute('src', 'images/zombie.png');
