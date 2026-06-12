
const wordPool = ["the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog", "crafting", "diamond", "creeper", "stone", "furnace", "pickaxe", "sword", "zombie", "skeleton", "villager", "nether", "ender", "dragon", "mining", "blocks", "world", "player", "steve", "alex"];

let wordList = [];
let currentWordIdx = 0;
let currentLetterIdx = 0;

let totalTypedCharacters = 0;
let totalCorrectCharacters = 0;
let startTime = null;

const wordsWrapper = document.getElementById('word-wrapper');
const hiddenInput = document.getElementById('hidden-typing-input');
const wpmDisplay = document.getElementById('wpm');
const accDisplay = document.getElementById('acc');

function initTest() {
    wordsWrapper.innerHTML = '';
    wordList = [];
    currentWordIdx = 0;
    currentLetterIdx = 0;
    totalTypedCharacters = 0;
    totalCorrectCharacters = 0;
    startTime = null;

    wpmDisplay.innerText = "0";
    accDisplay.innerText = "100";
    wordsWrapper.style.transform = 'translateY(0px)';

    for (let i = 0; i < 50; i++) {
        wordList.push(wordPool[Math.floor(Math.random() * wordPool.length)]);
    }

    wordList.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'word';
        [...word].forEach(char => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.innerText = char;
            wordDiv.appendChild(letterSpan);
        });
        wordsWrapper.appendChild(wordDiv);
    });
    hiddenInput.value = '';
    hiddenInput.focus();
    updateCaretPosition();
}

function updateCaretPosition() {
    document.querySelectorAll('.letter.current').forEach( el => el.classList.remove('current'));
    const activeWordNode = wordsWrapper.children[currentWordIdx];
    if (activeWordNode) {
        const letters = activeWordNode.children;
        if (currentLetterIdx < letters.length) {
            letters[currentLetterIdx].classList.add('current');
        } else if (letters.length > 0) {
            letters[letters.length - 1].classList.add('current');
        }
    }
}

hiddenInput.addEventListener('input', (e) => {
    if (!startTime) startTime = Date.now();

    const inputValue = hiddenInput.value;
    const activeWordNode = wordsWrapper.children[currentWordIdx];
    if (!activeWordNode) return;

    const letters = activeWordNode.children;

    if (inputValue.endsWith(' ')) {
        if (currentLetterIdx > 0) {
            currentWordIdx++;
            currentLetterIdx = 0;
            hiddenInput.value = '';

            if (currentWordIdx % 4 == 0) {
                wordsWrapper.style.transform = `translateY(-${Math.floor(currentWordIdx / 4) * 46}px)`;
            }
        } else {
            hiddenInput.value = '';
        }

        updateCaretPosition();
        return;
    }

    currentLetterIdx = inputValue.length;

    const maxLen = Math.max(letters.length, inputValue.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < inputValue.length) {
            if (inputValue[i] == letters[i].innerText) {
                letter[i].className = 'letter correct';
            } else {
                letter[i].className = 'letter incorrect';
            }
        } else {
            letter[i].className = 'letter';
        }
    }
    
    calculateStats();
    updateCaretPosition();
})


function calculateStats() {
    let rawTyped = 0;
    let correctChars = 0;

    for (let i = 0; i <= currentWordIdx; i++) {
        const wordNode = wordsWrapper.children[i];
        if (!wordNode) continue;

        const letters = wordNode.children;
        for (let j = 0; j < letters.length; j++) {
            if (letters[j].classList.contains('correct')) {
                correctChars++;
                rawTyped++;
            } else {
                rawTyped++;
            }
        }
    }

    const elapsedMinutes = (Date.now() - startTime) / 60000;
    if (elapsedMinutes > 0 && rawTyped > 0) {
        const wpm = Math.round((correctChars / 5) / elapsedMinutes);
        const acc = Math.round((correctChars / rawTyped) * 100);

        wpmDisplay.innerText = wpm;
        accDisplay.innerText = acc;
    }
}

document.getElementById('trigger-focus').addEventListener('click', () => hiddenInput.focus());

window.onload = initTest;