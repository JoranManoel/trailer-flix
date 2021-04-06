function play(){
    document.getElementById("video").removeAttribute("hidden","");
    document.getElementById("text").setAttribute("hidden","");
}

function info(){
    document.getElementById("text").removeAttribute("hidden","");
    document.getElementById("video").setAttribute("hidden","");
}