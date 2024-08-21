const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const createRoomBtn = document.getElementById('create-room-btn');
const roomCodeInput = document.getElementById('room-code-input');
const roomNameInput = document.getElementById('room-name-input');
const toggleVisibilityBtn = document.getElementById('toggle-visibility-btn');
const generateCodeBtn = document.getElementById('generate-code-btn');
const copyCodeBtn = document.getElementById('copy-code-btn');

// Tab functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked button and corresponding content
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

// Collect data and store it in a variable when creating a room
createRoomBtn.addEventListener('click', () => {
    const roomData = {
        roomSettings: {
            roomName: roomNameInput.value,
            roomCode: roomCodeInput.value,
            maxPlayers: document.getElementById('max-players').value
        },
        matchRules: {
            
        }, 
        worldSettings: {

        } 
    };

    // Placeholder for actual room creation logic
    console.log(roomData);
    alert('Room Created with Name: ' + roomData.roomSettings.roomName);
});

