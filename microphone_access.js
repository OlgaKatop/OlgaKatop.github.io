// Ensure elements are available in the DOM
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const button = document.getElementById('popup-button');

    if (!overlay || !popup || !button) {
        console.error('Popup elements not found in the DOM.');
        return;
    }

    // Function to close the popup
    function closePopup() {
        console.log('Closing popup...');
        overlay.classList.add('hidden');
        popup.classList.add('hidden');
        console.log('Popup closed.');
    }

    // Request microphone access and handle button click
    button.addEventListener('click', () => {
        console.log('Button clicked.');

        // Close the popup
        closePopup();

        // Request microphone access
        console.log('Requesting microphone access...');
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                console.log('Microphone access granted:', stream);
                // Perform additional actions with the audio stream
            })
            .catch((error) => {
                console.error('Microphone access denied:', error);
                alert('Microphone access is required to continue.');
            });
    });
});
