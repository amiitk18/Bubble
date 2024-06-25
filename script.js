var timer = 60;
var score = 10;
var ran = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;     
}




function getnewhit(){
    ran = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = ran;
}



   function makebubble(){
   var clutter = "";

    for(var i = 1; i<=133; i++){
        var rn = Math.floor(Math.random()*10)
      clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
   var timeint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else
        {
            clearInterval(timeint);
           document.querySelector("#pbtm").innerHTML = `GAME OVER`;
        }
        
    },1000);
};

document.querySelector("#pbtm")
.addEventListener("click",function(details){
   var clickednum = (Number(details.target.textContent));
   if(clickednum === ran){
    increaseScore();
    makebubble();
    getnewhit();
   }
});

runtimer();
makebubble();
getnewhit();