javascript:(function() {
    const targetDiv = document.querySelector('div[contenteditable="true"].ProseMirror');
    if (!targetDiv) {
        alert("Target contenteditable div not found.");
        return;
    }

    if (!('webkitSpeechRecognition' in window)) {
        alert("Your browser does not support Speech Recognition.");
        return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    let finalTranscript = ''; // To store confirmed results.
    let restartCount = 0; // Track how many times recognition restarts after silence.
    const maxRestarts = 5; // Maximum restarts allowed.
    let isRecognising = false;

    const startRecognition = () => {
        if (!isRecognising && restartCount < maxRestarts) {
            recognition.start();
            isRecognising = true;
        } else if (restartCount >= maxRestarts) {
            alert("Speech recognition stopped due to extended inactivity.");
        }
    };

    recognition.onstart = () => {
        console.log("Speech recognition started.");
        isRecognising = true;
        restartCount = 0; // Reset restart counter when active speech begins.
    };

    recognition.onend = () => {
        console.log("Speech recognition ended.");
        isRecognising = false;

        // Increment restart counter and decide whether to restart
        restartCount++;
        if (restartCount < maxRestarts) {
            setTimeout(startRecognition, 500); // Restart after a short delay.
        } else {
            alert("Speech recognition stopped due to inactivity.");
        }
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let hasFinalTranscript = false;

        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript + ' ';
                hasFinalTranscript = true; // Track if final results are detected.
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        // Update the targetDiv with the final and interim transcript
        targetDiv.textContent = finalTranscript + interimTranscript;
        targetDiv.focus(); // Keep focus on the div for seamless editing.

        // Reset restart counter if valid speech is detected
        if (hasFinalTranscript) {
            restartCount = 0;
        }
    };

    recognition.onerror = (error) => {
        console.error(`Speech recognition error: ${error.error}`);
        isRecognising = false;
        if (error.error !== 'no-speech') {
            setTimeout(startRecognition, 500); // Restart if the error is recoverable.
        }
    };

    startRecognition(); // Initial start
})();
