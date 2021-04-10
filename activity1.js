score=0

function updateScore()
{
    score =score + 1;
    document.getElementById("score") . innerHTML = "Score: " + score;

}

function saveSCORE()
{
    localStorage.setitem("score", score);
}

function nextPage(){
    window.location = "https://www.youtube.com/";
}

