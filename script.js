var stopwatch = document.querySelector('.stopwatch');
var ms=0, s=0, m=0;
var lapList = document.querySelector('.lapList');
var time;

function start(){
    if(!time){
        time = setInterval(run, 10);
    }
}

function run(){
    stopwatch.textContent=getTime();
    ms++
    if(ms==100){
        ms=0;
        s++
    }
    if(s==60){
        s=0;
        m++
    }
}

function getTime(){
    return (m<10? "0"+m:m) + ':' + (s<10? "0"+s:s) + ':' + (ms<10? '0'+ms:ms);
}

function pause(){
    clearInterval(time);
    time=false;
}

function stop(){
    clearInterval(time);
    time=false;
    ms=0;
    s=0;
    m=0;
    stopwatch.textContent=getTime()
}

function reset(){
    stop();
    start();
}

function lap(){
    if (time){
    var li = document.createElement('li');
    li.innerText=getTime();
    lapList.appendChild(li);
    }
    lapList.style.display='block';
}

function resetLap(){
    lapList.textContent='';
}