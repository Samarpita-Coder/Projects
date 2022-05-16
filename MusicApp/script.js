let aud = document.getElementById("aud");

let masterPlay = document.getElementById("masterPlay");

let progressBar = document.getElementById("progressBar");

// value of progress bar and current time of audio will be required
// time update of audio and change of progress bar are the events needed

// play and pause
masterPlay.addEventListener('click', (e) => {
    if (aud.paused || aud.currentTime<=0) {
        aud.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }else{
        aud.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }

})

// seekbar
aud.addEventListener('timeupdate',(e)=>{
    let prog = parseInt((aud.currentTime/aud.duration)*100);
    //progress bar value is always in percent
    progressBar.value = prog;
})

// seeking seekbar
progressBar.addEventListener('click', ()=>{
    aud.currentTime = aud.duration*progressBar.value/100;
    console.log(aud.currentTime)
})

