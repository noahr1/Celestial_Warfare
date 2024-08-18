// Select elements
const joinGameBtn = document.getElementById('join-game-btn');
const createGameBtn = document.getElementById('create-game-btn');
const joinGamePopup = document.getElementById('join-game-popup');
const createGamePopup = document.getElementById('create-game-popup');
const closePopupButtons = document.querySelectorAll('.close-popup');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const roomCodeInput = document.getElementById('room-code-input');
const roomNameInput = document.getElementById('room-name');
const toggleVisibilityBtn = document.getElementById('toggle-visibility-btn');
const generateCodeBtn = document.getElementById('generate-code-btn');
const copyCodeBtn = document.getElementById('copy-code-btn');

// Show Join Room Popup
joinGameBtn.addEventListener('click', () => {
    joinGamePopup.classList.remove('hidden');
});

// Show Create Room Popup
createGameBtn.addEventListener('click', () => {
    createGamePopup.classList.remove('hidden');
});

// Close popups
closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.popup').classList.add('hidden');
        roomCodeInput.value = "";
        roomNameInput.value = "";
    });
});

// Toggle tab content in Create Room Popup
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Toggle visibility of room code
toggleVisibilityBtn.addEventListener('click', () => {
    const type = roomCodeInput.getAttribute('type') === 'password' ? 'text' : 'password';
    roomCodeInput.setAttribute('type', type);
});

// Generate random room code
generateCodeBtn.addEventListener('click', () => {
    roomCodeInput.value = Math.random().toString(36).substring(2, 10).toUpperCase();
});

// Copy room code to clipboard
copyCodeBtn.addEventListener('click', () => {
    const roomCode = roomCodeInput.value;

    navigator.clipboard.writeText(roomCode)
        .then(() => {
            console.log('Room code copied to clipboard:', roomCode);
            // Optionally, display a message to the user
        })
        .catch(err => {
            console.error('Failed to copy text:', err);
            // Optionally, display an error message to the user
        });
});
