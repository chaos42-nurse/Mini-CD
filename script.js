const playlist = "INSERISCI_LINK_PLAYLIST";

const games = [

    {
        image: "images/spamton.png",
        text: "You are a [BIG SHOT]",
        sound: "sounds/spamton.mp3"
    },

    {
        image: "images/frisk.png",
        text: "*Despite everything, it's still you",
        sound: "sounds/frisk.mp3"
    },

    {
        image: "images/frisk.png",
        text: "*It's you",
        sound: "sounds/frisk.mp3"
    },

    {
        image: "images/omori.png",
        text: "* Stay determined.",
        sound: "sounds/undertale.mp3"
    },

    {
        image: "images/sans.png",
        text: "*Hey pal",
        sound: "sounds/sans.mp3"
    },

    {
        image: "images/lancer.png",
        text: "*Splat",
        sound: "sounds/lancer.mp3"
    },

    {
        image: "images/friend.png",
        text: "* Stay determined.",
        sound: "sounds/undertale.mp3"
    },

    {
        image: "images/creepy.png",
        text: "The legend begins.",
        sound: "sounds/deltarune.mp3"
    },

    {
        image: "images/punpun.png",
        text: "*Oyasumi, punpun",
        sound: "sounds/punpun.mp3"
    },

    {
        image: "images/soul.png",
        text: "But it refuse",
        sound: "sounds/soul.mp3"
    },

    {
        image: "images/soul.png",
        text: "DETERMINATION",
        sound: "sounds/soul.mp3"
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
