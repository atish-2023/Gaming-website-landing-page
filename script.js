
const nextButton = document.queryselector('.next-btn')
const video = document.queryselector('hero-video')


const moveList = ['./videos/hero-1.mp4','./videos/hero-2.mp4','./videos/hero-3.mp4','./videos/hero-4.mp4'];

let index=0;
nextButton.addEventListner('click',function(){
    index +=1;
    video.src = movieList[index];

    if(index == 3)
    {
        index == -1;
    }
})