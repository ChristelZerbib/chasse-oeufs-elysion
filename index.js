
function Lapin(){
    var rep=document.enigme1.rep.value;
    rep=rep.toLowerCase();
    if (rep=="soluce") {
        document.location.href="https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification";
    } else {
        alert("Nop");
    }
}