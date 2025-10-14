const playPauseButton = document.getElementById("play-pause");
const audio = document.getElementById("id-capitulo");
let paused = true;

function playPauseFunction() {
    if(paused){
        audio.play();
        console.log('Iniciou!');
        paused = false;
    }else{
        audio.pause();
        console.log('Pausou!');
        paused=true;
    }
    
}

console.log(playPauseButton);
playPauseButton.addEventListener('click', playPauseFunction)