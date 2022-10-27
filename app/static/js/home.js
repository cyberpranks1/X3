var audioxD = new Audio('../static/songs/5h.mp3')
// audioxD.play();
var masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click', ()=>{
    if(audioxD.paused || audioxD.currentTime<=0){
        // var audioxD = new Audio('../static/songs/1.mp3')
        var playedPromise = audioxD.play();
        if (playedPromise) {
            playedPromise.catch((e) => {
                console.log(e)
                if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') { 
                    console.log(e.name);
                }
            }).then(() => {
                console.log("playing sound !!!");
            });
        }
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioxD.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
console.log("Welcome to Predator's Spotify");