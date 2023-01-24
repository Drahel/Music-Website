const music = new Audio('../resources/songs/1.mp3');
// music.play();

const songs = [
    {
        id: '1',
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "../resources/covers/1.jpg"
    },
    {
        id: '2',
        songName: `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "../resources/covers/2.jpg"
    },
    {
        id: '3',
        songName: `DRIFTING<br>
        <div class="subtitle">NF</div>`,
        poster: "../resources/covers/3.jpg"
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
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});

let previousActiveSong = document.getElementsByClassName('songItem')[0];    
Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
    el.addEventListener('click', (e) =>{
        if(previousActiveSong.classList.contains('activeSong')){
            previousActiveSong.classList.remove('activeSong');
        }
        el.classList.add('activeSong');
        previousActiveSong = el;
    })
})

let previousActiveIcon = document.getElementsByClassName('playlistPlay')[0];
Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
    el.addEventListener('click', (e) =>{
        if(previousActiveIcon.classList.contains('fa-circle-pause')){
            previousActiveIcon.classList.remove('fa-circle-pause');
            previousActiveIcon.classList.add('fa-circle-play');
        }
        el.classList.add('fa-circle-pause');
        el.classList.remove('fa-circle-play');
        previousActiveIcon = el;
    })
})

let index = 0;
let posterMasterPlay = document.querySelector('#poster-master-play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) =>{
        index = el.target.id;
        music.src = `../resources/songs/${index}.mp3`;
        // posterMasterPlay.src = `../resources/covers/${index}.jpg`;
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        music.play();

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName, poster} = elss;
            title.innerHTML = songName;
            posterMasterPlay.src = poster;
        });
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let musicBar = document.getElementById('musicBar');
let musicDot = document.getElementById('musicDot');
music.addEventListener('timeupdate', () =>{
    let musicTime = music.currentTime;
    let musicDuration = music.duration;
    let min1 = Math.floor(musicDuration / 60);
    let sec1 = Math.floor(musicDuration % 60);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(musicTime / 60);
    let sec2 = Math.floor(musicTime % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((musicTime / musicDuration) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    musicBar.style.width = `${seekBar}%`;
    musicDot.style.left = `${seekBar}%`;
});

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
});

let volIcon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let volumeBar = document.getElementById('volumeBar');
let volumeDot = document.getElementById('volumeDot');

vol.addEventListener('change', () =>{
    if(vol.value == 0){
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.remove('fa-volume-low');
        volIcon.classList.add('fa-volume-off');  
    }
    if(vol.value > 0){
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.add('fa-volume-low');
        volIcon.classList.remove('fa-volume-off');  
    }
    if(vol.value > 50){
        volIcon.classList.add('fa-volume-high');
        volIcon.classList.remove('fa-volume-low');
        volIcon.classList.remove('fa-volume-off');  
    }
    let volA = vol.value;
    volumeBar.style.width = `${volA}%`;
    volumeDot.style.left = `${volA}%`;
    music.volume = volA / 100;
})

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