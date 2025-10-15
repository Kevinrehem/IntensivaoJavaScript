const playPauseButton = document.getElementById("play-pause");
const backwardButton = document.getElementById("backward");
const forwardButton = document.getElementById("forward");
const audio = document.getElementById("id-capitulo");
const chapter = document.getElementById("capitulo");
const chapterAmount = 10;
let currentChapter = 1;
let paused = true;

function playAudio(){
    audio.play();
    console.log('Iniciou!');
    paused = false;
    playPauseButton.classList.add("paused")
}

function pauseAudio(){
    audio.pause();
    console.log('Pausou!');
    paused=true;
    playPauseButton.classList.remove("paused")
}

function playPauseFunction() {
    if(paused){
        playAudio();   
    }else{
        pauseAudio();
    }
    
}

function nextChapter(){
    pauseAudio();
    if(currentChapter<chapterAmount){
        currentChapter++;
    }else{
        currentChapter=1
    }
    audio.src = "./audios/" + currentChapter + ".mp3";
    chapter.innerText = "Capítulo " + currentChapter;
}

function previousChapter(){
    pauseAudio();
    if(currentChapter>1){
        currentChapter--;
    }else{
        currentChapter=chapterAmount;
    }
    audio.src = "./audios/" + currentChapter + ".mp3";
    chapter.innerText = "Capítulo " + currentChapter;
}

console.log(playPauseButton);
backwardButton.addEventListener('click', previousChapter)
playPauseButton.addEventListener('click', playPauseFunction)
forwardButton.addEventListener('click', nextChapter)