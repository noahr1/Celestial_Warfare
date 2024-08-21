// Select elements
const joinGameBtn = document.getElementById('join-game-btn');
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