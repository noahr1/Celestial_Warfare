document.addEventListener('DOMContentLoaded', () => {
    const readyBtn = document.getElementById('ready-btn');

    // Toggle ready state
    readyBtn.addEventListener('click', () => {
        if (readyBtn.classList.contains('not-ready')) {
            readyBtn.classList.remove('not-ready');
            readyBtn.classList.add('ready');
            readyBtn.textContent = 'Ready';
        } else {
            readyBtn.classList.remove('ready');
            readyBtn.classList.add('not-ready');
            readyBtn.textContent = 'Not Ready';
        }
    });

    // Placeholder for send message functionality
    document.getElementById('send-message-btn').addEventListener('click', () => {
        const chatInput = document.getElementById('chat-input');
        const chatBox = document.getElementById('chat-box');
        const message = chatInput.value.trim();

        if (message !== '') {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'right');
            messageDiv.textContent = message;
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
            chatInput.value = '';
        }
    });

    // Placeholder for exit functionality
    document.getElementById('leave-btn').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the lobby page
    });
});
