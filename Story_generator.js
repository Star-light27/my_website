// When the page loads, set up the button functionality
window.addEventListener("load", function() {
    var audio = document.getElementById("bgMusic");
    var button = document.getElementById("playButton");

    // Function to play the audio when the button is clicked
    button.onclick = function() {
        audio.muted = false;  // Unmute the audio
        audio.play();
        };
         });
