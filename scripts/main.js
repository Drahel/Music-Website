<<<<<<< Updated upstream
=======
const music = new Audio('../resources/songs/Alan Walker - On My Way.mp3');
// music.play();

const songs = [
    {
        id: '1',
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "../resources/covers/Alan Walker - On My Way.png"
    },
    {
        id: '2',
        songName: `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "../resources/covers/Alan Walker - Faded.jpg"
    },
    {
        id: '3',
        songName: `DRIFTING<br>
        <div class="subtitle">NF</div>`,
        poster: "../resources/covers/NF - DRIFTING.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave  = document.getElementById('wave')

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0 ){
        music.play();
        wave.classList.add('active1');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
    }
})

>>>>>>> Stashed changes
let popSongLeft = document.getElementById('pop-song-left');
let popSongRight = document.getElementById('pop-song-right');
let popSong = document.querySelector('.pop-song');

popSongRight.addEventListener('click', ()=>{
    popSong.scrollLeft += 110;
})

popSongLeft.addEventListener('click', ()=>{
    popSong.scrollLeft -= 110;
})

let popArtLeft = document.getElementById('pop-art-left');
let popArtRight = document.getElementById('pop-art-right');
let popArt = document.querySelector('.pop-art');

popArtRight.addEventListener('click', ()=>{
    popArt.scrollLeft += 80;
})

popArtLeft.addEventListener('click', ()=>{
    popArt.scrollLeft -= 80;
})