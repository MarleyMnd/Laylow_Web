function findSong() {
    var div_lyrics = document.getElementById("display_quiz_findlyrics");
    div_lyrics.style.display = "none";

    var div_song = document.getElementById("display_quiz_findsong");
    div_song.style.display = "block";
}

function findLyrics() {
    var div_song = document.getElementById("display_quiz_findsong");
    div_song.style.display = "none";

    var div_lyrics = document.getElementById("display_quiz_findlyrics");
    div_lyrics.style.display = "block";
}

function checkAnswers_findsong() {
    let correctAnswers = ["a", "b", "a", "c", "b"];
    let userAnswers = [];

    for (let i = 1; i <= 5; i++) {
        const radios = document.getElementsByName("Aq" + i);
        for (const radio of radios) {
            if (radio.checked) {
                userAnswers.push(radio.value);
                break;
            }
        }
    }

    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    const resultElement = document.getElementById("resultA");
    resultElement.textContent = `You got ${score}/${correctAnswers.length}`;
}

function checkAnswers_findlyrics() {
    const correctAnswers = ["c", "a", "b", "c", "b"];
    const userAnswers = [];

    for (let i = 1; i <= 5; i++) {
        const radios = document.getElementsByName("Bq" + i);
        for (const radio of radios) {
            if (radio.checked) {
                userAnswers.push(radio.value);
                break;
            }
        }
    }

    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    const resultElement = document.getElementById("resultB");
    resultElement.textContent = `You got ${score}/${correctAnswers.length}`;
}

function muteVideo() {
    var video = document.getElementById("video_concert");

    video.muted = !video.muted;
}