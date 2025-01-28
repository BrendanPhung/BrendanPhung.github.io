function goHome() {
    const outputDiv = document.getElementById('output');
    const imageContainer = document.getElementById('home-image-container');
    const textBox = document.getElementById('home-text-box'); 

    outputDiv.style.display = 'none';

    imageContainer.style.display = 'block';
    textBox.style.display = 'block';
}

function showAboutText() {
    const outputDiv = document.getElementById('output');
    const imageContainer = document.getElementById('home-image-container');
    const textBox = document.getElementById('home-text-box'); 

    outputDiv.style.display = 'block';
    outputDiv.style.overflowY = 'visible';
    outputDiv.style.maxHeight = 'none';
    outputDiv.innerHTML = `
        <img src="resume.jpg" alt="Resume" class="resume-image">
    `;

    imageContainer.style.display = 'none';
    textBox.style.display = 'none'; 
}

function showProjectsText() {
    const outputDiv = document.getElementById('output');
    const imageContainer = document.getElementById('home-image-container');
    const textBox = document.getElementById('home-text-box'); 

    outputDiv.style.display = 'block';
    outputDiv.style.overflowY = 'auto';
    outputDiv.style.maxHeight = '100%';
    outputDiv.innerHTML = `
        <h2>Android Database App for TAAM</h2>
        <div class="project-images">
            <img src="TAAM1.png" alt="TAAM App Screenshot 1">
            <img src="TAAM2.png" alt="TAAM App Screenshot 2">
        </div>
        <p>The Toronto Asian Art Museum database app is a powerful tool designed to catalog, manage, and explore the museum's vast collection of Asian art. Featuring a user-friendly interface, the app enables easy access to artifact details, exhibition schedules, and historical insights, offering a seamless experience for both researchers and visitors.</p>

        <h2>Connect 4 with AI Algorithm</h2>
        <div class="project-images">
            <img src="Connect41.png" alt="Connect 4 AI Screenshot 1">
            <img src="Connect42.png" alt="Connect 4 AI Screenshot 2">
        </div>
        <p>The Connect 4 application utilizes the Minimax algorithm with alpha-beta pruning to deliver a challenging AI opponent. By evaluating possible moves and optimizing the decision tree, the application provides a highly strategic and efficient gameplay experience. Players can test their skills against an AI that balances tactical foresight with rapid computation.</p>

        <h2>Tetris</h2>
        <div class="project-images">
            <img src="Tetris1.png" alt="Tetris Screenshot 1">
            <img src="Tetris2.png" alt="Tetris Screenshot 2">
        </div>
        <p>The Tetris game in Assembly is a retro-inspired implementation that demonstrates efficient low-level programming. Designed for performance and precision, this version of Tetris utilizes Assembly's direct hardware manipulation to create smooth gameplay, real-time piece movement, and responsive controls, delivering a classic gaming experience with minimal computational overhead.</p>
    `;

    imageContainer.style.display = 'none';
    textBox.style.display = 'none';
}
