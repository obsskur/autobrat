// Popup Logic
document.getElementById('showPopup').addEventListener('click', function() {
    document.getElementById('myPopup').classList.add('active');
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('myPopup').classList.remove('active');
});

// Copy Script to Clipboard
document.getElementById('copyButton').addEventListener('click', function() {
    var codeSnippet = document.getElementById('codeSnippet');
    codeSnippet.select();
    document.execCommand('copy');
    alert("Script copied to clipboard!");
});
