// Variables globales du jeu
let currentPlayer = 'X';
let gameBoard = [];
let gameActive = true;
let boardSize = 3;
let playerSymbol = 'X';
let gameMode = 'twoPlayers'; // 'twoPlayers' ou 'vsAI'
let playerName = '';
let friendName = '';
let scores = {
    X: 0,
    O: 0,
    totalGames: 0
};

// Éléments DOM
let boardElement, statusElement, currentPlayerSymbolElement;
let scoreXElement, scoreOElement, totalScoreXElement, totalScoreOElement, totalGamesElement;
let playerXLabelElement, playerOLabelElement, scoreXLabelElement, scoreOLabelElement;

// Initialisation du jeu
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    // Récupération des éléments DOM
    boardElement = document.getElementById('board');
    statusElement = document.getElementById('status');
    currentPlayerSymbolElement = document.getElementById('currentPlayerSymbol');
    scoreXElement = document.getElementById('scoreX');
    scoreOElement = document.getElementById('scoreO');
    totalScoreXElement = document.getElementById('totalScoreX');
    totalScoreOElement = document.getElementById('totalScoreO');
    totalGamesElement = document.getElementById('totalGames');
    playerXLabelElement = document.getElementById('playerXLabel');
    playerOLabelElement = document.getElementById('playerOLabel');
    scoreXLabelElement = document.getElementById('scoreXLabel');
    scoreOLabelElement = document.getElementById('scoreOLabel');
    
    // Chargement des scores depuis le localStorage
    loadScores();
    
    // Affichage de la première section
    showSection('inscriptionSection');
}

// Gestion des sections
function showSection(sectionId) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.main-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Fonction pour afficher/masquer le champ nom de l'ami
function toggleFriendName() {
    const gameMode = document.querySelector('input[name="gameMode"]:checked')?.value;
    const friendNameGroup = document.getElementById('friendNameGroup');
    const friendNameInput = document.getElementById('friendName');
    
    if (gameMode === 'twoPlayers') {
        friendNameGroup.style.display = 'block';
        friendNameInput.required = true;
    } else {
        friendNameGroup.style.display = 'none';
        friendNameInput.required = false;
        friendNameInput.value = '';
    }
}

// Navigation entre les sections
function envoyerFormulaire() {
    const nom = document.getElementById('nom').value;
    const modeJeu = document.querySelector('input[name="gameMode"]:checked')?.value;
    const nomAmi = document.getElementById('friendName').value;
    
    if (!nom || !modeJeu) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    if (modeJeu === 'twoPlayers' && !nomAmi) {
        alert('Veuillez entrer le nom de votre ami pour le mode à deux joueurs');
        return;
    }
    
    // Stocker les informations du joueur
    playerName = nom;
    gameMode = modeJeu;
    friendName = nomAmi || 'IA';
    
    localStorage.setItem('playerName', nom);
    localStorage.setItem('gameMode', modeJeu);
    if (nomAmi) {
        localStorage.setItem('friendName', nomAmi);
    }
    
    showSection('difficulteSection');
}

function selectDifficulty(button, size) {
    // Retirer la classe active de tous les boutons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Ajouter la classe active au bouton sélectionné
    button.classList.add('active');
    
    boardSize = size;
}

function commencerJeu() {
    // Récupérer le symbole choisi
    const symboleChoisi = document.querySelector('input[name="symbole"]:checked')?.value;
    if (!symboleChoisi) {
        alert('Veuillez choisir votre symbole');
        return;
    }
    
    playerSymbol = symboleChoisi;
    currentPlayer = 'X'; // X commence toujours
    
    // Mettre à jour les labels avec les noms des joueurs
    updatePlayerLabels();
    
    showSection('jeuSection');
    initBoard();
}

function afficherScores() {
    showSection('scoresSection');
    updateTotalScores();
}

function revenirAuJeu() {
    showSection('jeuSection');
}

// Fonction pour réinitialiser tous les scores
function reinitialiserScores() {
    // Demander confirmation avant de supprimer
    if (confirm('Êtes-vous sûr de vouloir supprimer tous les scores ? Cette action est irréversible.')) {
        // Réinitialiser les scores en mémoire
        scores = {
            X: 0,
            O: 0,
            totalGames: 0
        };
        
        // Supprimer les scores du localStorage
        localStorage.removeItem('ticTacToeScores');
        
        // Mettre à jour l'affichage
        updateScores();
        updateTotalScores();
        
        // Afficher un message de confirmation
        alert('Tous les scores ont été supprimés avec succès !');
    }
}

// Fonction pour quitter le jeu et retourner à l'accueil
function quitterJeu() {
    // Demander confirmation avant de quitter
    if (confirm('Êtes-vous sûr de vouloir quitter le jeu ? Tous les scores de la partie en cours seront perdus.')) {
        // Réinitialiser le plateau de jeu
        gameBoard = [];
        gameActive = false;
        currentPlayer = 'X';
        
        // Masquer le message de victoire s'il est affiché
        const winningMessage = document.getElementById('winningMessage');
        if (winningMessage && winningMessage.classList.contains('show')) {
            winningMessage.classList.remove('show');
        }
        
        // Masquer les scores finaux
        const finalScores = document.getElementById('finalScores');
        if (finalScores) {
            finalScores.style.display = 'none';
        }
        
        // Retourner à l'écran d'accueil
        showSection('inscriptionSection');
        
        // Réinitialiser les champs du formulaire
        document.getElementById('nom').value = '';
        document.getElementById('friendName').value = '';
        
        // Décocher les boutons radio
        document.querySelectorAll('input[name="gameMode"]').forEach(radio => {
            radio.checked = false;
        });
        document.querySelectorAll('input[name="symbole"]').forEach(radio => {
            radio.checked = false;
        });
        
        // Retirer la classe active des boutons de difficulté
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Réinitialiser la taille du plateau
        boardSize = 3;
        
        // Masquer le champ nom de l'ami
        const friendNameGroup = document.getElementById('friendNameGroup');
        if (friendNameGroup) {
            friendNameGroup.style.display = 'none';
        }
    }
}

// Mise à jour des labels des joueurs
function updatePlayerLabels() {
    if (gameMode === 'twoPlayers') {
        // Mode à deux joueurs
        if (playerSymbol === 'X') {
            playerXLabelElement.textContent = `${playerName}:`;
            playerOLabelElement.textContent = `${friendName}:`;
            scoreXLabelElement.textContent = `${playerName}`;
            scoreOLabelElement.textContent = `${friendName}`;
        } else {
            playerXLabelElement.textContent = `${friendName}:`;
            playerOLabelElement.textContent = `${playerName}:`;
            scoreXLabelElement.textContent = `${friendName}`;
            scoreOLabelElement.textContent = `${playerName}`;
        }
    } else {
        // Mode contre l'IA
        if (playerSymbol === 'X') {
            playerXLabelElement.textContent = `${playerName}:`;
            playerOLabelElement.textContent = `IA:`;
            scoreXLabelElement.textContent = `${playerName}`;
            scoreOLabelElement.textContent = `IA`;
        } else {
            playerXLabelElement.textContent = `IA:`;
            playerOLabelElement.textContent = `${playerName}:`;
            scoreXLabelElement.textContent = `IA`;
            scoreOLabelElement.textContent = `${playerName}`;
        }
    }
}

// Logique du jeu
function initBoard() {
    gameBoard = new Array(boardSize * boardSize).fill('');
    gameActive = true;
    currentPlayer = 'X';
    
    renderBoard();
    updateGameStatus();
    updateCurrentPlayerDisplay();
    
    // Si c'est le mode IA et que l'IA commence (X), faire jouer l'IA automatiquement
    if (gameMode === 'vsAI' && currentPlayer !== playerSymbol && gameActive) {
        setTimeout(() => {
            makeAIMove();
        }, 1000); // Délai de 1 seconde pour que le joueur voie que l'IA commence
    }
}

function renderBoard() {
    boardElement.innerHTML = '';
    
    // Appliquer la classe de taille appropriée
    boardElement.className = `game-board grid-${boardSize}`;
    
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        
        if (gameBoard[i] !== '') {
            cell.textContent = gameBoard[i];
            cell.classList.add(gameBoard[i].toLowerCase());
        }
        
        cell.addEventListener('click', handleCellClick);
        boardElement.appendChild(cell);
    }
}

function handleCellClick(event) {
    if (!gameActive) return;
    
    const index = parseInt(event.target.dataset.index);
    
    if (gameBoard[index] === '') {
        // Placer le symbole du joueur actuel
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.classList.add(currentPlayer.toLowerCase());
        
        // Vérifier s'il y a un gagnant
        if (checkWinner()) {
            handleGameEnd('win');
        } else if (checkDraw()) {
            handleGameEnd('draw');
        } else {
            // Changer de joueur
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateCurrentPlayerDisplay();
            updateGameStatus();
            
            // Si c'est le mode IA et que c'est le tour de l'IA
            if (gameMode === 'vsAI' && currentPlayer !== playerSymbol && gameActive) {
                setTimeout(() => {
                    makeAIMove();
                }, 500); // Délai pour que le joueur voie le changement
            }
        }
    }
}

// Fonction pour le mouvement de l'IA
function makeAIMove() {
    if (!gameActive || currentPlayer === playerSymbol) return;
    
    // Stratégie simple de l'IA : chercher une position gagnante ou bloquer le joueur
    let bestMove = findBestMove();
    
    if (bestMove !== -1) {
        // Simuler un clic sur la cellule
        const cell = document.querySelector(`[data-index="${bestMove}"]`);
        if (cell) {
            gameBoard[bestMove] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer.toLowerCase());
            
            // Vérifier s'il y a un gagnant
            if (checkWinner()) {
                handleGameEnd('win');
            } else if (checkDraw()) {
                handleGameEnd('draw');
            } else {
                // Changer de joueur
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateCurrentPlayerDisplay();
                updateGameStatus();
            }
        }
    }
}

// Algorithme simple pour l'IA
function findBestMove() {
    // 1. Chercher une position gagnante pour l'IA
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = currentPlayer;
            if (checkWinner()) {
                gameBoard[i] = ''; // Restaurer
                return i;
            }
            gameBoard[i] = ''; // Restaurer
        }
    }
    
    // 2. Bloquer une position gagnante du joueur
    const opponentSymbol = currentPlayer === 'X' ? 'O' : 'X';
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = opponentSymbol;
            if (checkWinner()) {
                gameBoard[i] = ''; // Restaurer
                return i;
            }
            gameBoard[i] = ''; // Restaurer
        }
    }
    
    // 3. Prendre le centre si disponible (pour les grilles 3x3)
    if (boardSize === 3) {
        const center = Math.floor(boardSize * boardSize / 2);
        if (gameBoard[center] === '') {
            return center;
        }
    }
    
    // 4. Prendre un coin si disponible
    const corners = [0, boardSize - 1, (boardSize - 1) * boardSize, boardSize * boardSize - 1];
    for (let corner of corners) {
        if (corner < gameBoard.length && gameBoard[corner] === '') {
            return corner;
        }
    }
    
    // 5. Prendre n'importe quelle position libre
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            return i;
        }
    }
    
    return -1; // Aucun mouvement possible
}

function checkWinner() {
    const winConditions = getWinConditions();
    
    for (let condition of winConditions) {
        // Vérifier que tous les éléments de la condition sont identiques et non vides
        const firstElement = gameBoard[condition[0]];
        if (firstElement && condition.every(index => gameBoard[index] === firstElement)) {
            // Marquer les cellules gagnantes
            markWinningCells(condition);
            return true;
        }
    }
    
    return false;
}

function getWinConditions() {
    const conditions = [];
    const requiredAlignments = boardSize; // 3 pour 3x3, 4 pour 4x4, 5 pour 5x5
    
    // Lignes horizontales
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col <= boardSize - requiredAlignments; col++) {
            const line = [];
            for (let i = 0; i < requiredAlignments; i++) {
                line.push(row * boardSize + col + i);
            }
            conditions.push(line);
        }
    }
    
    // Colonnes verticales
    for (let col = 0; col < boardSize; col++) {
        for (let row = 0; row <= boardSize - requiredAlignments; row++) {
            const line = [];
            for (let i = 0; i < requiredAlignments; i++) {
                line.push((row + i) * boardSize + col);
            }
            conditions.push(line);
        }
    }
    
    // Diagonales principales (gauche vers droite)
    for (let row = 0; row <= boardSize - requiredAlignments; row++) {
        for (let col = 0; col <= boardSize - requiredAlignments; col++) {
            const line = [];
            for (let i = 0; i < requiredAlignments; i++) {
                line.push((row + i) * boardSize + (col + i));
            }
            conditions.push(line);
        }
    }
    
    // Diagonales secondaires (droite vers gauche)
    for (let row = 0; row <= boardSize - requiredAlignments; row++) {
        for (let col = requiredAlignments - 1; col < boardSize; col++) {
            const line = [];
            for (let i = 0; i < requiredAlignments; i++) {
                line.push((row + i) * boardSize + (col - i));
            }
            conditions.push(line);
        }
    }
    
    return conditions;
}

function markWinningCells(winningCells) {
    winningCells.forEach(index => {
        const cell = document.querySelector(`[data-index="${index}"]`);
        if (cell) {
            cell.classList.add('winning');
        }
    });
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function handleGameEnd(result) {
    gameActive = false;
    
    if (result === 'win') {
        // Mettre à jour les scores
        scores[currentPlayer]++;
        scores.totalGames++;
        updateScores();
        saveScores();
        
        // Afficher le message de victoire
        showWinningMessage(currentPlayer);
    } else if (result === 'draw') {
        scores.totalGames++;
        updateScores();
        saveScores();
        
        statusElement.textContent = "Match nul !";
        statusElement.style.color = '#7f8c8d';
    }
}

function showWinningMessage(winner) {
    const winningMessage = document.getElementById('winningMessage');
    const winningText = document.getElementById('winningText');
    const winningSubtext = document.getElementById('winningSubtext');
    const finalScores = document.getElementById('finalScores');
    const winnerNameElement = document.getElementById('winnerName');
    const winnerScoreElement = document.getElementById('winnerScore');
    const loserNameElement = document.getElementById('loserName');
    const loserScoreElement = document.getElementById('loserScore');
    
    // Déterminer qui a gagné et qui a perdu
    let winnerName, loserName, winnerScore, loserScore;
    
    if (gameMode === 'vsAI') {
        if (winner === playerSymbol) {
            winningText.textContent = '🎉 Félicitations !';
            winningSubtext.textContent = `Vous avez battu l'IA !`;
            winnerName = playerName;
            loserName = 'IA';
        } else {
            winningText.textContent = '😔 Dommage !';
            winningSubtext.textContent = 'L\'IA vous a battu !';
            winnerName = 'IA';
            loserName = playerName;
        }
    } else {
        if (winner === playerSymbol) {
            winningText.textContent = '🎉 Félicitations !';
            winningSubtext.textContent = 'Vous avez gagné !';
            winnerName = playerName;
            loserName = friendName;
        } else {
            winningText.textContent = '🎉 Bravo !';
            winningSubtext.textContent = 'Votre ami a gagné !';
            winnerName = friendName;
            loserName = playerName;
        }
    }
    
    // Afficher les scores finaux
    winnerScore = scores[winner];
    loserScore = scores[winner === 'X' ? 'O' : 'X'];
    
    winnerNameElement.textContent = winnerName;
    winnerScoreElement.textContent = winnerScore;
    loserNameElement.textContent = loserName;
    loserScoreElement.textContent = loserScore;
    
    // Afficher la section des scores finaux
    finalScores.style.display = 'block';
    
    winningMessage.classList.add('show');
}

function nouvellePartie() {
    // Masquer le message de victoire
    const winningMessage = document.getElementById('winningMessage');
    winningMessage.classList.remove('show');
    
    // Masquer les scores finaux
    const finalScores = document.getElementById('finalScores');
    finalScores.style.display = 'none';
    
    // Réinitialiser le plateau
    initBoard();
}

// Mise à jour de l'interface
function updateGameStatus() {
    if (gameActive) {
        let statusText = `Tour de ${currentPlayer}`;
        
        if (gameMode === 'vsAI') {
            if (currentPlayer === playerSymbol) {
                statusText = `Votre tour (${currentPlayer})`;
            } else {
                statusText = `Tour de l'IA (${currentPlayer})`;
            }
        } else {
            if (currentPlayer === playerSymbol) {
                statusText = `Votre tour (${currentPlayer})`;
            } else {
                statusText = `Tour de ${friendName} (${currentPlayer})`;
            }
        }
        
        statusElement.textContent = statusText;
        statusElement.style.color = currentPlayer === 'X' ? '#ff6b6b' : '#4ecdc4';
    }
}

function updateCurrentPlayerDisplay() {
    if (currentPlayerSymbolElement) {
        currentPlayerSymbolElement.textContent = currentPlayer;
        currentPlayerSymbolElement.style.background = currentPlayer === 'X' 
            ? 'linear-gradient(135deg, #ff6b6b, #ff8a8a)'
            : 'linear-gradient(135deg, #4ecdc4, #7fdbda)';
    }
}

function updateScores() {
    if (scoreXElement) scoreXElement.textContent = scores.X;
    if (scoreOElement) scoreOElement.textContent = scores.O;
}

function updateTotalScores() {
    if (totalScoreXElement) totalScoreXElement.textContent = scores.X;
    if (totalScoreOElement) totalScoreOElement.textContent = scores.O;
    if (totalGamesElement) totalGamesElement.textContent = scores.totalGames;
}

// Gestion des scores
function saveScores() {
    localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
}

function loadScores() {
    const savedScores = localStorage.getItem('ticTacToeScores');
    if (savedScores) {
        scores = JSON.parse(savedScores);
        updateScores();
        updateTotalScores();
    }
}

// Gestion des événements de clavier
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Échapper pour fermer le message de victoire
        const winningMessage = document.getElementById('winningMessage');
        if (winningMessage.classList.contains('show')) {
            winningMessage.classList.remove('show');
        }
    }
});

// Animation d'entrée pour les cellules
function animateCell(cell, delay) {
    cell.style.opacity = '0';
    cell.style.transform = 'scale(0.5)';
    
    setTimeout(() => {
        cell.style.transition = 'all 0.3s ease-out';
        cell.style.opacity = '1';
        cell.style.transform = 'scale(1)';
    }, delay);
}

// Fonction utilitaire pour créer des délais
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Amélioration de l'expérience utilisateur
function addHoverEffects() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (!cell.textContent) {
            cell.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            });
            
            cell.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
        }
    });
}

// Initialisation des effets après le rendu du plateau
function initializeHoverEffects() {
    setTimeout(addHoverEffects, 100);
}

// Amélioration de la fonction renderBoard pour inclure les effets
const originalRenderBoard = renderBoard;
renderBoard = function() {
    originalRenderBoard.call(this);
    initializeHoverEffects();
};
