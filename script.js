const ship = document.querySelector('.player');
const gameArea = document.querySelector('#gameArea');

//moves and shoot
function flyShip (event) {
    if(event.key === 'ArrowUp'){
        event.preventDefault();
        moveUp();
    }if (event.key === 'ArrowDown'){
        event.preventDefault();
        moveDown();
    }if (event.key === 'ArrowLeft'){
        event.preventDefault();
        moveLeft();
    }if (event.key === 'ArrowRght'){
        event.preventDefault();
        moveRight();
    }if(event.key === " "){
        event.preventDefault();
        fire();
    }
}

//go UP
function moveUp(){
    let topPosition = getComputedStyle(ship).getPropertyValue('top');
    if (topPosition === "0px"){
        return
    }else{
        let position = parseInt(topPosition);
        position -= 30;
        ship.style.top = `${position}px`;
    }
}

//go DOWN
function moveDown(){
    let topPosition = getComputedStyle(ship).getPropertyValue('top');
    if (topPosition === "540px"){
        return
    }else{
        let position = parseInt(topPosition);
        position += 30;
        ship.style.top = `${position}px`;
    }
}

/*go LEFT
function moveLeft(){
    let leftPosition = getComputedStyle(ship).getPropertyValue('left');
    if (leftPosition === "0px"){
        return
    }else{
        let position = parseInt(leftPosition);
        position -= 30;
        ship.style.left = `${position}px`;
    }
}

//go RIGHT
function moveRight(){
    let leftPosition = getComputedStyle(ship).getPropertyValue('left');
    if (lefttPosition === "px"){
        return
    }else{
        let position = parseInt(leftPosition);
        position += 30;
        ship.style.left = `${position}px`;
    }
}*/

//FIRE
function fire (){
    let laser = createImage();
    gameArea.appendChild(laser);
    moveLaser();
}

function createImage (){
    let xPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('top'));

    let newFire = document.createElement('img');
    newFire.src = 'image/fire.png';
    newFire.classList.add('fire');
    newFire.style.left = `${xPosition}px`;
    newFire.style.top = `${yPosition -10}px`;
    return newFire;
}

function moveLaser() {
    
}





window.addEventListener('keydown', flyShip);