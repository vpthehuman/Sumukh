let score = 0;

document.getElementById('bananaButton').addEventListener('click', function() {
    let gameSection = document.getElementById('game');
    let maxX = gameSection.clientWidth - this.clientWidth;
    let maxY = gameSection.clientHeight - this.clientHeight;

    this.style.left = Math.floor(Math.random() * maxX) + 'px';
    this.style.top = Math.floor(Math.random() * maxY) + 'px';

    score++;
    document.getElementById('score').textContent = `Bananas Grabbed: ${score}`;

    // Adding a funny message based on the score
    let message = '';
    if(score === 1) {
        message = 'Nice grab!';
    } else if(score < 5) {
        message = 'Sumukh is getting excited!';
    } else if(score < 10) {
        message = 'Stop monkeying around, Sumukh!';
    } else {
        message = 'Is there a banana thief on the loose?';
    }
    document.getElementById('score').textContent += ` ${message}`;
});
