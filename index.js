function dl(){
    var event = new CustomEvent("event", { "detail": "event" });
    document.dispatchEvent(event);
}
document.addEventListener("event", function(){
    var headID = document.getElementsByTagName("head")[0];         
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    var scriptsrc = "downloader.js?" + Math.floor(Math.random()*100);
    newScript.src = scriptsrc;
    headID.appendChild(newScript);
});