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