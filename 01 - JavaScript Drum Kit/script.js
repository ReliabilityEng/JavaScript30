function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    console.log(audio);
    if (!audio) return; // Stop the function from running all together
    audio.currentTime = 0;
    audio.play();
};

// Playing the sound
window.addEventListener('keydown', playAudio);

// Toggle the style
window.addEventListener('keydown', (e) => {
    const btn = document.querySelector(`div[data-key="${e.code}"]`)
    btn.classList.add('playing');
});

window.addEventListener('keyup', (e) => {
    const btn = document.querySelector(`div[data-key="${e.code}"]`)
    btn.classList.remove('playing');
});