const listitems = document.querySelectorAll('.music-item');
const pictImg = document.querySelector('#pictImg');
const audio = document.querySelector('audio');
const random = document.querySelector('#random');

const playMusic = (li) => {
    const file = li.getAttribute('data-file');
    audio.setAttribute('src', file);
    audio.play();

    const activeli = document.querySelector('.active');
    activeli.classList.remove('active');
    li.classList.add('active');
}

for(var i=0; i<listitems.length; i++){
    listitems[i].addEventListener('click', (e)=> {
        const li = e.target;
        playMusic(li);
    }
);}

audio.addEventListener('play', (e) => {
    pictImg.setAttribute('src', '/img/pict_play.png');
});

audio.addEventListener('pause', (e) => {
    pictImg.setAttribute('src', '/img/pict_stop.png');
});

audio.addEventListener('ended', (e) => {
    pictImg.setAttribute('src', '/img/pict_stop.png');
    const activeli = document.querySelector('.active');
    const nextli = activeli.nextElementSibling;
    if(nextli != null){
        playMusic(nextli);
    }
});

random.addEventListener('click', (e)=>{
    e.preventDefault();
    const len = listitems.length;
    const rnd = Math.floor(Math.random() * len);
    playMusic(listitems[rnd]);
});
