function updateScore(team, points) {
    const scoreElement = document.querySelector(`.${team} .scoreline`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}