var audioList = new Array(7);

//var alert_infor = document.getElementById("alert_box");// pasek alert
var main_container = document.getElementById("main_container");
var fredyPic = document.getElementsByClassName("pic");

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
	
}

function redirectToMainSite()
{
	
}

window.onload = function() {
  init();
};

document.getElementById("startAnimBtn").onclick = () => {
	playAnim();
	redirectToMainSite();
}