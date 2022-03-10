var audioList = new Array(7);

var main_container = document.getElementById("main_container");
var fredyPic = document.getElementsByClassName("pic");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function isPlaying(audio)
{
    if (audio.duration > 0 && !audio.paused) 
    {
        return true;
    } 
    else
    {
        return false;
    }
}

function init() 
{
    for(let i = 0; i < 7; i++)
    {
        audioList[i] = new Audio(fredyPic[i].innerHTML);

        fredyPic[i].onclick = () => 
        {
            for(let j = 0; j < 7; j++)
            {
                if(!isPlaying(audioList[j]))
                {
                    audioList[i].play();
                }
                else
                {
                    audioList[j].pause();
                    audioList[j].currentTime = 0;
                    audioList[i].play();
                }
            }
        }
    }
}

function playAnim()
{ 
	$(document).ready(function(){
		let children = $("#first_half").children();
		let partTwo = $("#secound_half").children()[0];
		
  	let direction;
		let speed;

	 	children.each(function(){
			direction = getRandom(1,4);
			speed = getRandom(5000,10000);

			$(partTwo).animate({right: "+=5000", top: "+=5000"},speed,"linear");
			
			switch(direction)
			{
				case 1:
						$(this).animate({left: "+=5000", top: "+=5000"},speed,"linear");
						break;
				case 2:
						$(this).animate({left: "+=5000", bottom: "+=5000"},speed,"linear");
						break;
				case	3:
						$(this).animate({right: "+=5000", top: "+=5000"},speed,"linear");
						break;
				case	4:
						$(this).animate({right: "+=5000", bottom: "+=5000"},speed,"linear");
						break;
			}
		});
	});
}

function redirectToMainSite()
{
	setTimeout(function() {window.location.replace("MainSite//index.html");},3000);
}

window.onload = function() {
  init();
};

document.getElementById("startAnimBtn").onclick = () => {
	playAnim();
	redirectToMainSite();
}