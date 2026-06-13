// I will add more words in future

const MC_WORDS = [
  "creeper","diamond","sword","pickaxe","shovel","cobblestone","gravel","redstone",
  "furnace","crafting","table","chest","zombie","skeleton","enderman","blaze","ghast",
  "wither","ender","dragon","nether","portal","obsidian","bedrock","lava","water",
  "torch","ladder","mining","smelting","farming","brewing","enchanting","potion",
  "arrow","bow","axe","hoe","shears","bucket","flint","steel","compass","clock",
  "map","book","paper","stick","string","wool","leather","iron","gold","emerald",
  "lapis","quartz","prismarine","sponge","clay","sand","gravel","dirt","grass",
  "pumpkin","melon","wheat","carrot","potato","beetroot","cactus","sugar","cane",
  "mushroom","flower","sapling","log","plank","slab","stair","door","trapdoor",
  "fence","gate","wall","glass","pane","carpet","bed","sign","banner","anvil",
  "beacon","conduit","hopper","dropper","dispenser","piston","observer","daylight",
  "detector","pressure","plate","button","lever","tripwire","hook","rail","minecart",
  "boat","saddle","lead","name","tag","spawn","respawn","health","hunger","armor",
  "shield","elytra","trident","crossbow","firework","lantern","campfire","barrel",
  "smoker","blast","copper","amethyst","axolotl","goat","warden","sculk","mangrove",
  "allay","frog","tadpole","firefly","ancient","debris","netherite","lodestone",
  "target","soul","shroomlight","warped","crimson","basalt","blackstone","polished",
  "chiseled","smooth","raw","deepslate","tuff","calcite","dripstone","moss","cave",
  "spore","powder","snow","ice","packed","blue","frosted","primed","charged",
  "spider","cave","drowned","husk","phantom","pillager","ravager","vindicator",
  "witch","vex","evoker","illusioner","guardian","elder","shulker","slime","magma"
];


// Its the generator.. NGL It's my first time using randomness in javascript.
function getRandWords(n) {
    const out = [];
    for (let i = 0; i < n; i++) {
        out.push(MC_WORDS[Math.floor(Math.random() * MC_WORDS.length)]);
    }
    return out
}

let S = {
    mode: 'words',
    modeVal: 25,
    words: [],
    typed: [],
    currentWord: 0,
    currentLetters: [],
    started: false,
    finished: false,
    startTime: null,
    timerLeft: 30,
    timerInterval: null,
    totalKS: 0,
    correctKS: 0
};


// These are the elements that will need to be changed during operation
const wordDisplay = document.getElementById('word-display');
const wordsWrap = document.getElementById('words-wrap');
const caretEl = document.getElementById('caret');
const hiddenInput = document.getElementById('hidden-input');
const wpmEl = document.getElementById('wpm-live');
const accEl = document.getElementById('acc-live');
const timeEl = document.getElementById('time-live');
const timerWrap = document.getElementById('timer-wrap');
const progressFill = document.getElementById('progress-fill');
const resultScreen = document.getElementById('result-screen');
const mcApp = document.getElementById('mc-app');


document.querySelectorAll('.mc-btn[data-mode]').forEach( btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mc-btn[data-mode').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        S.mode = btn.dataset.mode;
        S.modeVal = parseInt(btn.dataset.val);
        initTest();
    });
});


function initTest() {
    clearInterval(S.timerInterval);
    S = {
        mode: S.mode,
        modeVal: S.modeVal,
        words: S.mode === 'words'? getRandWords(S.modeVal): getRandWords(250),
        typed: [],
        currentWord: 0,
        currentLetters: [],
        started: false,
        finished: false,
        startTime: null,
        blinkTimeout: null,
        timerLeft: 30,
        timerInterval: null,
        totalKS: 0,
        correctKS: 0
    };
    renderWords();
    wpmEl.textContent = '-';
    accEl.textContent = '-';
    timeEl.textContent = S.mode === 'time'? S.modeVal: '-';
    timerWrap.style.display = S.mode === 'time'? 'flex': 'none';
    progressFill.style.width = '0%';
    resultScreen.classList.remove('show');
    mcApp.style.display = 'block';
    hiddenInput.value = '';
    wordsWrap.style.transform = 'translateY(0)';
    requestAnimationFrame(positionCaret);
}

function renderWords() {
    wordsWrap.innerHTML = '';
    S.words.forEach((word, wi) => {
        const d = document.createElement('div');
        d.className = 'word';
        d.dataset.wi = wi;
        word.split('').forEach((ch, li) => {
            const s = document.createElement('span');
            s.className = 'letter pending';
            s.dataset.li = li;
            s.textContent = ch;
            d.appendChild(s);
        });
        wordsWrap.appendChild(d);
    });
}

function getWordEl(wi) {
    return wordsWrap.querySelector(`.word[data-wi="${wi}"]`);
}

function positionCaret() {
    const wi = S.currentWord;
    const wordEl = getWordEl(wi);

    if (!wordEl) {
        caretEl.style.opacity = '0';
        return;
    }

    const typed = S.currentLetters;
    const baseLetters = wordEl.querySelectorAll('.letter:not(.extra)');
    const extras = wordEl.querySelectorAll('.extra');

    let refEl, afterRef = true;

    if (typed.length == 0) {
        refEl = baseLetters[0];
        afterRef = false;
    } else if (typed.length > baseLetters.length && extras.length) {
        refEl = extras[extras.length - 1];
    } else {
        refEl = baseLetters[Math.min(typed.length - 1, baseLetters.length - 1)];
    }

    if (!refEl) {
        caretEl.style.opacity = '0';
        return;
    }

    const wr = wordDisplay.getBoundingClientRect();
    const scrolled = scrollToLine(wordEl, wr);

    function applyCaret() {
        const wr2 = wordDisplay.getBoundingClientRect();
        const r = refEl.getBoundingClientRect();
        const x = afterRef ? (r.left - wr2.left + r.width): (r.left - wr2.left);
        const y = r.top - wr2.top;

        caretEl.style.left = x + 'px';
        caretEl.style.top = y + 'px';
        caretEl.style.opacity = '1';
        caretEl.classList.add('active');
        caretEl.classList.add('blink');
    }

    if (scrolled) {
        requestAnimationFrame(applyCaret);
    } else {
        applyCaret();    
    }
}

function scrollToLine(wordEl, wr) {
    const r = wordEl.getBoundingClientRect();
    const relTop = r.top - wr.top;

    if (relTop > r.height + 5) {
        const cur = parseFloat(wordsWrap.style.transform.replace('translateY(','')) || 0;
        wordsWrap.style.transform = `translateY(${cur - relTop}px)`;
        return true;
    }
    return false;
}

function updateLetterDisplay() {
    const wi = S.currentWord;
    const word = S.words[wi]
    const typed = S.currentLetters;

    const wordEl=getWordEl(wi);
    if (!wordEl) {
        return;
    }

    wordEl.querySelectorAll('.extra').forEach(e => e.remove());
    const base = wordEl.querySelectorAll('.letter');
    base.forEach((el, li) => {
        el.classList.remove('correct', 'wrong', 'pending', 'extra');
        if (li < typed.length) {
            el.classList.add(typed[li] == word[li]? 'correct': 'wrong');
        } else {
            el.classList.add('pending');
        }
    });

    if (typed.length > word.length) {
        typed.slice(word.length).forEach(ch => {
            const s = document.createElement('span');
            s.className = 'letter extra wrong';
            s.textContent = ch;
            wordEl.appendChild(s);
        });
    }
}

function updateCompletedWord(wi) {
    const word = S.words[wi];
    const typed = S.typed[wi] || [];

    const wordEl=getWordEl(wi);
    if (!wordEl) {
        return;
    }

    wordEl.querySelectorAll('.extra').forEach(e => e.remove());

    const base = wordEl.querySelectorAll('.letter');

    base.forEach( (el, li) => {
        el.classList.remove('correct', 'wrong', 'pending');
        if (li < typed.length) {
            el.classList.add(typed[li] == word[li]? 'correct': 'wrong');
        } else {
            el.classList.add('wrong');
        }
    });

    if (typed.length > word.length) {
        typed.slice(word.length).forEach( ch => {
            const s = document.createElement('span');
            s.className = 'letter extra wrong';
            s.textContent = ch;
            wordEl.appendChild(s);
        });
    }
}

function calcWPM() {
    if (!S.startTime) {
        return 0;
    }
    const mins = (Date.now() - S.startTime) / 60000;
    if (mins < 0.005) {
        return 0;
    }

    let cc = 0;

    S.typed.forEach((t, wi) => {
        const w = S.words[wi];
        t.forEach((ch, li) => {
            if (ch === w[li]){
                cc++;
            }
        });

        if (wi< S.typed.length - 1) {
            cc++;
        }
    });
    return Math.round(cc/5/mins);
}

function calcAcc() {
    if (S.totalKS === 0) {
        return 100;
    } else {
        return Math.round(S.correctKS / S.totalKS * 100);
    }
}

function updateStats() {
    const wpm = calcWPM();
    const acc = calcAcc();
    wpmEl.textContent = wpm > 0? wpm: '-';
    accEl.textContent = S.totalKS > 0? acc: '-';
    if (S.mode === 'words') {
        progressFill.style.width = Math.min(S.currentWord / S.modeVal * 100, 100) + '%';
    }
}

function spawnParticles() {
    const colors = ['#55ff55','#ffff55','#4de6e6','#FFD700','#ff5555'];
    const area = document.getElementById('word-display');
    const rect = area.getBoundingClientRect();

    for (let i = 0; i < 18; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.background=color;
        p.style.left=(Math.random()*rect.width)+'px';
        p.style.top=(Math.random()*rect.height)+'px';
        p.style.setProperty('--dx',(Math.random()*80-40)+'px');
        p.style.setProperty('--dy',(Math.random()*-60-10)+'px');
        p.style.borderRadius=Math.random()>.5?'0':'50%';
        area.appendChild(p);
        setTimeout(()=>p.remove(),750);
    }
}

function finishTest() {
    if (S.finished) {
        return;
    }

    S.finished = true;
    clearInterval(S.timerInterval);
    hiddenInput.blur();
    caretEl.classList.remove('active');

    const wpm = calcWPM();
    const acc = calcAcc();

    let correct = 0, errors = 0;
    S.typed.forEach( (t, wi) => {
        if (t.join('') === S.words[wi]) {
            correct++;
        } else {
            errors++;
        }
    })

    document.getElementById('r-wpm').textContent = wpm;
    document.getElementById('r-acc').textContent = acc;
    document.getElementById('r-correct').textContent = correct;
    document.getElementById('r-errors').textContent = errors;

    spawnParticles();

    setTimeout(() => {
        mcApp.style.display = 'none';
        resultScreen.classList.add('show');
    }, 300);
}

function startTest() {
    if (S.started) {
        return;
    }

    S.started = true;
    S.startTime = Date.now();

    if (S.mode === 'time') {
        S.timerLeft = S.modeVal;
        timeEl.textContent = S.timerLeft;
        timerWrap.style.display = 'flex';
        S.timerInterval = setInterval(() => {
            S.timerLeft--;
            timeEl.textContent = S.timerLeft;
            progressFill.style.width = Math.min((S.modeVal - S.timerLeft) / S.modeVal * 100, 100) + '%';
            if (S.timerLeft <= 0) {
                finishTest();
            }
        }, 1000);
    }
}


function handleInput() {
    if (S.finished) {
        return;
    }

    caretEl.classList.remove('blink');
    clearTimeout(S.blinkTimeout);
    S.blinkTimeout = setTimeout(() => caretEl.classList.add('blink'), 500);
    const val = hiddenInput.value;
    const wi = S.currentWord;
    const word = S.words[wi];

    if (val.endsWith(' ')) {
        if (S.currentLetters.length === 0) {
            hiddenInput.value = '';
            return;
        }

        S.typed[wi] = S.currentLetters.slice();
        S.totalKS++;
        S.correctKS++;

        updateCompletedWord(wi);

        S.currentWord++;
        S.currentLetters = [];
        hiddenInput.value = '';

        if (S.mode === 'words' && S.currentWord >= S.modeVal) {
            finishTest();
            return;
        }
        updateStats();
        positionCaret();
        return;
    }

    const newTyped = val.split('');

    if (newTyped.length > S.currentLetters.length) {
        const ch = newTyped[newTyped.length - 1];
        const li = newTyped.length - 1;
        S.totalKS++;
        if (li < word.length && ch == word[li]) {
            S.correctKS++;
        }
    }
    S.currentLetters = newTyped;
    updateLetterDisplay();
    updateStats();
    positionCaret();
}

function handleKeyDown(e) {
    if (S.finished) {
        if (e.key === 'Tab' || e.key === 'Enter') {
            e.preventDefault();
            initTest();
        }
        return;
    }

    caretEl.classList.remove('blink');
    clearTimeout(S.blinkTimeout);
    S.blinkTimeout = setTimeout(() => caretEl.classList.add('blink'), 500);

    if (!S.started && e.key.length === 1) {
        startTest();
    }

    if (e.key === 'Backspace' && hiddenInput.value === '' && S.currentWord > 0) {
        e.preventDefault();
        const pwi = S.currentWord - 1;
        const prev = S.typed[pwi] || [];
        S.currentWord = pwi;
        S.currentLetters = prev.slice();
        S.typed.splice(pwi, 1);
        hiddenInput.value = S.currentLetters.join('');
        updateLetterDisplay();
        positionCaret();
    }
    if (e.key === 'Tab') {
        e.preventDefault();
        initTest();
    }
}

document.getElementById('restart-btn').addEventListener('click', initTest);
document.getElementById('play-again-btn').addEventListener('click', initTest);
wordDisplay.addEventListener('click', () => hiddenInput.focus());
wordDisplay.addEventListener('focus', () => hiddenInput.focus());
hiddenInput.addEventListener('input', handleInput);
hiddenInput.addEventListener('keydown', handleKeyDown);

document.addEventListener('keydown', e => {
    if (e.target === hiddenInput) return;
    if (e.key.length === 1 || e.key === 'Backspace') {
        hiddenInput.focus();
    }
});

initTest();