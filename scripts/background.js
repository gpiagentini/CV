var container = document.querySelector('.matrix-container');

// Function to generate a random number between min and max (inclusive)
async function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a stream of characters
async function createStream() {
    var leftPosition = await getRandomInt(0, window.innerWidth) + 'px'; // Random left position
    var stream = await document.createElement('div');
    stream.style.left = leftPosition;
    stream.classList.add('stream');
    stream.textContent = await generateRandomCharacter();
    container.appendChild(stream);
}

// Function to generate a random character
async function generateRandomCharacter() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

async function cleanElements() {
    var letters = document.getElementsByClassName('stream');
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].getBoundingClientRect().top > window.innerHeight) {
            letters[i].parentNode.removeChild(letters[i]);
        }
    }
}

setInterval(createStream, 10);
setInterval(cleanElements, 10);
