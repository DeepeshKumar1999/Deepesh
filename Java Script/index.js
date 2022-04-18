let days=document.getElementById("days");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

let currentdate=new Date();
let newyear=new Date(2023,0,1,00,00,00); 

let d=60*60*24*365,h=1000*60*60,m=1000*60,s=1000;

(function countdown(){
    currentdate=newyear-new Date();

    s=currentdate/1000%60;
    m=currentdate/1000/60%60;
    h=currentdate/1000/60/60%24;
    d=currentdate/1000/60/60/24%365;    

    if(d<10)
    days.innerText="0"+Math.floor(d);
    else
    days.innerText=Math.floor(d);

    if(h<10)
    hours.innerText="0"+Math.floor(h);
    else
    hours.innerText=Math.floor(h);

    if(m<10)
    minutes.innerText="0"+Math.floor(m);
    else
    minutes.innerText=Math.floor(m);

    if(s<10)
    seconds.innerText="0"+Math.floor(s);
    else
    seconds.innerText=Math.floor(s);

    setTimeout(countdown,1000);
}());