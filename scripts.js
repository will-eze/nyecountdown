const daysEL =document.getElementById('days');
const hoursEL=document.getElementById('hours');
const minsEL=document.getElementById('mins');
const secondsEL=document.getElementById('secs');

const newYears = '1 January 2024';

function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    const secs = Math.floor(totalseconds)%60;

    if (days<=0){
        daysEL.innerHTML=0;
    }else{
        daysEL.innerHTML=days;
    }
    if (hours<=0){
        hoursEL.innerHTML=0;
    }else{
        hoursEL.innerHTML=hours;
    }
    if (mins<=0){
        minsEL.innerHTML=0;
    }else{
        minsEL.innerHTML=mins;
    }
    if (secs<=0){
        secondsEL.innerHTML=0;
    }else{
        secondsEL.innerHTML=secs;
    }
    if(days<=0 && hours<=0 && mins<=0 && secs<=0){
        document.getElementById("image_bg").style.display = "none"
        document.getElementById("video_bg").style.display = "block"
        document.getElementById("title").innerHTML = "Happy New Year!";
        document.getElementsByClassName('countdown-container')[0].style.display = 'none'
    }
}

countdown();

//initialize the countdown
setInterval(countdown, 1000);
