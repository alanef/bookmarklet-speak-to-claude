# Claude.ai Speech Input Bookmarklet

This bookmarklet adds speech-to-text capabilities to Claude.ai, allowing you to speak your messages instead of typing them. It works directly in Chrome browser by using the Web Speech API to convert your voice into text that appears in Claude's input box.

## Installation

1. Right-click your browser's bookmark bar
2. Select "Add page" or "Add bookmark"
3. Give it a name like "Claude Speech Input"
4. In the URL field, paste the contents of the bookmarklet (found in dist/bookmarklet.url)
5. Click Save

## Usage

1. Navigate to claude.ai and log in
2. Click the "Claude Speech Input" bookmark you created
3. If prompted, allow microphone access
4. Start speaking - your words will appear in Claude's input box
5. The recognition will automatically stop after extended silence
6. Click the bookmark again to restart speech recognition

## Notes

- Works only in Chrome browser due to Web Speech API compatibility
- Requires microphone access
- Will automatically stop after detecting no speech for an extended period
- You can click the bookmark multiple times to restart speech recognition
- Text appears in real-time as you speak
- Works in the main chat input area of Claude.ai

## Troubleshooting

If you don't see your speech being transcribed:
- Make sure you've allowed microphone access
- Confirm you're on claude.ai and the input box is visible
- Try clicking the bookmark again to restart
- Check that your microphone is working in other applications

For any issues, you can refresh the page and try again. The bookmarklet is completely safe as it only runs client-side JavaScript for speech recognition.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2024 Alan Fuller
