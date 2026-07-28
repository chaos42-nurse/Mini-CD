const playlist = "INSERISCI_LINK_PLAYLIST";


const games = [

    {
        image: "images/omori.png",
        text: "Welcome to White Space.",
        sound: "sounds/omori.mp3"
    },


    {
        image: "images/undertale.png",
        text: "* Stay determined.",
        sound: "sounds/undertale.mp3"
    },


    {
        image: "images/deltarune.png",
        text: "The legend begins.",
        sound: "sounds/deltarune.mp3"
    }

];



let randomGame = Math.floor(Math.random() * games.length);


let selected = games[randomGame];



document.getElementById("gameImage").src = selected.image;


document.getElementById("gameText").innerHTML = selected.text;



let audio = document.getElementById("sound");

audio.src = selected.sound;

audio.volume = 0.5;



audio.play().catch(() => {

    console.log("Audio bloccato dal browser");

});



setTimeout(() => {

    window.location.replace(playlist);

}, 4000);
