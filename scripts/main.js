const music = new Audio('../resources/songs/1.mp3');

const songs = [
    {
        id: '1',
        songName: 'On My Way',
        songAuthor:'Alan Walker',
        poster: "../resources/covers/1.jpg"
    },
    {
        id: '2',
        songName: 'Faded',
        songAuthor:'Alan Walker',
        poster: "../resources/covers/2.jpg"
    },
    {
        id: '3',
        songName: 'DRIFTING',
        songAuthor:'NF',
        poster: "../resources/covers/3.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName +'<br><div class="subtitle">'+ songs[i].songAuthor +'</div>';
})

let searchResults = document.getElementsByClassName('search-results')[0];
songs.forEach(el => {
    const {id, songName, songAuthor, poster} = el;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#'+ id;
    card.innerHTML = `
    <img src="${poster}" alt="">
              <div class="content">
                ${songName}
                <div class="subtitle">${songAuthor}</div>
              </div>`;
    card.addEventListener('click', ()=>{
        index = id;
        music.src = `../resources/songs/${index}.mp3`;
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        downloadSong.href = `../resources/songs/${index}.mp3`
        music.play();

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName,songAuthor, poster} = elss;
            title.innerHTML = songName+'<br><div class="subtitle">'+ songAuthor +'</div>';
            posterMasterPlay.src = poster;
            downloadSong.setAttribute('download', songAuthor + ' - ' + songName);
        });

        if(previousActiveSong.classList.contains('activeSong')){
            previousActiveSong.classList.remove('activeSong');
        }
        let el = document.getElementById(`${id}`);
        let parent = el.closest('.songItem');
        parent.classList.add('activeSong');
        previousActiveSong = parent;

        if(previousActiveIcon.classList.contains('fa-circle-pause')){
            previousActiveIcon.classList.remove('fa-circle-pause');
            previousActiveIcon.classList.add('fa-circle-play');
        }

        let icon = document.getElementById(`${id}`);
        icon.classList.add('fa-circle-pause');
        icon.classList.remove('fa-circle-play');
        previousActiveIcon = icon;
    });
    searchResults.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let inputValue  = input.value.toUpperCase();
    let items = searchResults.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text = as.textContent || as.innerHTML;
        if(text.toUpperCase().indexOf(inputValue)>-1){
            items[index].style.display = "flex";
        }
        else{
            items[index].style.display = "none";
        }
        if(input.value == 0){
            searchResults.style.display = "none";
        }
        else{
            searchResults.style.display = "";
        }
        
    }
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave')

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0 ){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        previousActiveIcon.classList.remove('fa-circle-play');
        previousActiveIcon.classList.add('fa-circle-pause');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        previousActiveIcon.classList.remove('fa-circle-pause');
        previousActiveIcon.classList.add('fa-circle-play');
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



let index = 1;
let posterMasterPlay = document.querySelector('#poster-master-play');
let title = document.getElementById('title');
let downloadSong = document.getElementById('download-song');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) =>{
        if(el.target != previousActiveIcon){
            index = el.target.id;
            music.src = `../resources/songs/${index}.mp3`;
            wave.classList.add('active1');
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            downloadSong.href = `../resources/songs/${index}.mp3`;
            music.play();

            let songTitles = songs.filter((els) => {
                return els.id == index;
            });

            songTitles.forEach(elss => {
                let {songName,songAuthor, poster} = elss;
                title.innerHTML = songName+'<br><div class="subtitle">'+ songAuthor +'</div>';
                posterMasterPlay.src = poster;
                downloadSong.setAttribute('download', songAuthor + ' - ' + songName);
            });
            console.log('1');
         }
         else{
            if(music.paused || music.currentTime <= 0 ){
                music.play();
                wave.classList.add('active1');
                masterPlay.classList.remove('fa-play');
                masterPlay.classList.add('fa-pause');
                el.target.classList.remove('fa-circle-play');
                el.target.classList.add('fa-circle-pause');
            }
            else {
                music.pause();
                wave.classList.remove('active1');
                masterPlay.classList.remove('fa-pause');
                masterPlay.classList.add('fa-play');
                el.target.classList.remove('fa-circle-pause');
                el.target.classList.add('fa-circle-play');
            }
            console.log('2');
         }
    });
});

let previousActiveIcon = document.getElementsByClassName('songItem')[0];
Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
    el.addEventListener('click', (e) =>{
        if(e.target!=previousActiveIcon){
            if(previousActiveIcon.classList.contains('fa-circle-pause')){
                previousActiveIcon.classList.remove('fa-circle-pause');
                previousActiveIcon.classList.add('fa-circle-play');
            }
            e.target.classList.add('fa-circle-pause');
            e.target.classList.remove('fa-circle-play');
            previousActiveIcon = el;
        }
    })
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

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `../resources/songs/${index}.mp3`;
    wave.classList.add('active1');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName,songAuthor, poster} = elss;
        title.innerHTML = songName+'<br><div class="subtitle">'+ songAuthor +'</div>';
        posterMasterPlay.src = poster;
    });
});

next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `../resources/songs/${index}.mp3`;
    wave.classList.add('active1');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName,songAuthor, poster} = elss;
        title.innerHTML = songName+'<br><div class="subtitle">'+ songAuthor +'</div>';
        posterMasterPlay.src = poster;
    });
});

let popSongLeft = document.getElementById('pop-song-left');
let popSongRight = document.getElementById('pop-song-right');
let popSong = document.querySelector('.pop-song');

popSongRight.addEventListener('click', ()=>{
    popSong.scrollLeft += 110;
});

popSongLeft.addEventListener('click', ()=>{
    popSong.scrollLeft -= 110;
});

let popArtLeft = document.getElementById('pop-art-left');
let popArtRight = document.getElementById('pop-art-right');
let popArt = document.querySelector('.pop-art');

popArtRight.addEventListener('click', ()=>{
    popArt.scrollLeft += 80;
});

popArtLeft.addEventListener('click', ()=>{
    popArt.scrollLeft -= 80;
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.dataset.aim;

    switch (a) {
        case "next":
            shuffle.classList.add('fa-repeat');
            shuffle.classList.remove('fa-shuffle');
            shuffle.classList.remove('fa-list-ul');
            shuffle.dataset.aim = 'repeat';
            break;
        case "repeat":
            shuffle.classList.add('fa-shuffle');
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-list-ul');
            shuffle.dataset.aim = 'random';
            break;
        case "random":
            shuffle.classList.add('fa-list-ul');
            shuffle.classList.remove('fa-repeat');
            shuffle.classList.remove('fa-shuffle');
            shuffle.dataset.aim = 'next';
            break;    
    }
});

const next_music = () => {
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `../resources/songs/${index}.mp3`;
    wave.classList.add('active1');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName,songAuthor, poster} = elss;
        title.innerHTML = songName+'<br><div class="subtitle">'+ songAuthor +'</div>';
        posterMasterPlay.src = poster;
    });
}

const repeat_music = () => {
    music.src = `../resources/songs/${index}.mp3`;
    wave.classList.add('active1');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName,songAuthor, poster} = elss;
        title.innerHTML = songName+'<br><div class="subtitle">'+ songAuthor +'</div>';
        posterMasterPlay.src = poster;
    });
}

const random_music = () => {
    oldIndex = index;
    while(oldIndex == index){
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `../resources/songs/${index}.mp3`;
    wave.classList.add('active1');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName,songAuthor, poster} = elss;
        title.innerHTML = songName+'<br><div class="subtitle">'+ songAuthor +'</div>';
        posterMasterPlay.src = poster;
    });
}

music.addEventListener('ended', ()=>{
    let order = shuffle.dataset.aim;
    switch (order) {
        case "next":
            next_music();
            break;
        case "repeat":
            repeat_music();
            break;
        case "random":
            random_music();
            break;           
    }
});