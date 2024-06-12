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