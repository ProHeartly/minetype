// I will add more words in future

const MC_WORDS = [
  "acacia", "alex", "allay", "allium", "alpaca", "amethyst", "anchor", "andesite",
  "ancient", "anvil", "apple", "aquaculture", "archaeology", "armadillo", "armor",
  "armorstand", "arrow", "axe", "axolotl", "azalea", "badlands", "bamboo",
  "banner", "bark", "barrens", "barrel", "basalt", "bastion", "bat", "beacon",
  "bed", "bedrock", "bee", "beef", "beetroot", "bell", "berries", "birch",
  "blackstone", "blast", "blaze", "blindness", "blossom", "blue", "bluet",
  "boat", "bogging", "bone", "bonemeal", "book", "bookshelf", "boots", "bottle",
  "bow", "bread", "breeze", "brewing", "brick", "bricks", "brush", "bucket",
  "bud", "bundle", "burst", "button", "cactus", "calcite", "camel", "camera",
  "campfire", "candle", "cane", "carpet", "carrot", "cartography", "cat",
  "catalyst", "cauldron", "cave", "cavern", "chainmail", "chamber", "channeling",
  "charcoal", "charge", "chested", "chestplate", "chicken", "chipped", "chiseled",
  "chorus", "chunk", "city", "clay", "clock", "coal", "cobblestone", "cocoa",
  "cod", "comb", "comparator", "compass", "concrete", "conduit", "cookie",
  "copper", "coral", "cow", "crafter", "crafting", "creaking", "creeper",
  "crimson", "crossbow", "crying", "crystal", "cube", "curse", "daisy",
  "dandelion", "darkness", "darkoak", "daylight", "debris", "deepdark",
  "deepslate", "delta", "density", "desert", "detector", "diamond", "diorite",
  "disc", "dispenser", "dolphin", "donkey", "door", "dragon", "dripstone",
  "dropper", "drowned", "dungeon", "dust", "dye", "efficiency", "elder",
  "elytra", "emerald", "enchanting", "enchantment", "ender", "enderchest",
  "enderman", "endermite", "endstone", "evoker", "experience", "eyeball",
  "farmland", "fatigue", "feather", "fence", "fermented", "fire", "firework",
  "fishingrod", "flame", "flesh", "fletching", "flint", "flower", "flowering",
  "fortune", "fortress", "fox", "frame", "frog", "froglight", "frost",
  "frosted", "fungus", "furnace", "gapple", "garden", "gate", "gateway",
  "geode", "ghast", "giant", "glass", "glazed", "glow", "glowberries",
  "glowframe", "glowing", "glowstone", "glowsquid", "goat", "gold", "golem",
  "granite", "grass", "gravel", "grindstone", "grove", "guardian", "gunpowder",
  "hanging", "haste", "health", "heart", "heavy", "helmet", "herobrine",
  "hide", "highlands", "hoe", "hoglin", "honey", "honeycomb", "hook",
  "hopper", "horse", "hunger", "husk", "hut", "ice", "igloo", "illager",
  "illusioner", "impaling", "infinity", "ingot", "ink", "invisibility",
  "iron", "itemframe", "jeb", "jukebox", "jungle", "kelp", "knockback",
  "ladder", "lamp", "lantern", "lapis", "lava", "lazuli", "lead", "leather",
  "leaves", "lectern", "leggings", "lever", "levitation", "lightning",
  "lilac", "lilypad", "lingering", "llama", "lodestone", "log", "loom",
  "looting", "loyalty", "lushcaves", "mace", "magenta", "magma", "mangrove",
  "mansion", "map", "meadow", "meal", "melon", "membrane", "mending",
  "mesa", "midlands", "minecart", "mineshaft", "mining", "monument",
  "mooshroom", "moss", "mossy", "mud", "mule", "multishot", "mushroom",
  "music", "mutton", "mycelium", "name", "nautilus", "nausea", "nether",
  "netherite", "netherrack", "netherstar", "nightvision", "notch", "note",
  "nugget", "nylium", "oak", "observer", "obsidian", "ocelot", "ochre",
  "omen", "ominous", "orchid", "ore", "outpost", "overworld", "packed",
  "pale", "panda", "pane", "paper", "parrot", "path", "pattern", "peak",
  "pearl", "pearlescent", "peony", "phantom", "pickaxe", "pickle", "piercing",
  "pig", "piglin", "pillager", "piston", "pitcher", "plains", "plank",
  "plate", "podzol", "poisonous", "polar", "polished", "poppy", "porkchop",
  "portal", "potato", "potion", "pottery", "powder", "power", "pressure",
  "primed", "prismarine", "propagule", "protection", "pufferfish", "pumpkin",
  "punch", "purpur", "quartz", "quill", "rabbit", "raft", "rail", "raid",
  "ravager", "ravine", "raw", "recovery", "redstone", "regeneration",
  "repeater", "resin", "resistance", "respiration", "respawn", "riptide",
  "river", "rocket", "root", "rooted", "roots", "rose", "rosebush",
  "rotten", "ruin", "ruins", "saddle", "salmon", "sand", "sandstone",
  "sapling", "saturation", "savannah", "sculk", "seagrass", "seaweed",
  "seed", "seeds", "sensor", "sharpness", "shears", "sheep", "shell",
  "sherd", "shield", "shipwreck", "shovel", "shrieker", "shulker", "shulkerbox",
  "shroomlight", "sign", "silk", "silverfish", "skeleton", "slab", "slag",
  "slate", "slime", "slimeball", "slope", "smelter", "smelting", "smite",
  "smithing", "smoker", "smooth", "sniffer", "snow", "soil", "soul",
  "soulfire", "soup", "spawner", "spectral", "speed", "spider", "splash",
  "sponge", "spore", "spruce", "spyglass", "squid", "stair", "stairs",
  "stalagmite", "star", "steel", "steve", "stew", "stick", "stickypiston",
  "stone", "stonecutter", "stray", "strength", "strider", "string",
  "stronghold", "structure", "sugar", "sugarcane", "sunflower", "suspicious",
  "swamp", "swiftness", "sword", "table", "tadpole", "tag", "taiga",
  "target", "tea", "tear", "template", "tendril", "terracotta", "thorns",
  "tinted", "tnt", "torch", "torchflower", "totem", "trader", "trapdoor",
  "trapped", "trial", "trident", "trim", "tripwire", "tropical", "tuff",
  "tulip", "tundra", "turtle", "twisting", "unbreaking", "undying",
  "valley", "vault", "vein", "verdant", "vex", "village", "villager",
  "vindicator", "vine", "vines", "void", "wall", "wandering", "warden",
  "warped", "water", "waxed", "weakness", "weathered", "weeping", "wheat",
  "wind", "witch", "wither", "wolf", "wood", "wool", "zoglin", "zombie"
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

// This makes that modes buttons functionalbe ;-;
document.querySelectorAll('.mc-btn[data-mode]').forEach( btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mc-btn[data-mode').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        S.mode = btn.dataset.mode;
        S.modeVal = parseInt(btn.dataset.val);
        initTest();
    });
});

// initilization thingy
function initTest() {
    clearInterval(S.timerInterval);
    wordLineMap = [];
    lineYMap = [];
    currentScrollLine = 0;
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
    // resultScreen.classList.remove('show');  // hides the result and typing screen shows
    mcApp.style.display = 'block';
    hiddenInput.value = '';
    wordsWrap.style.transform = 'translateY(0)';
    requestAnimationFrame( () => requestAnimationFrame( () => {
        measureLines();
        positionCaret();
    }));
}

// as the name suggests, it renders the words
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

// self-explanatory
function getWordEl(wi) {
    return wordsWrap.querySelector(`.word[data-wi="${wi}"]`);
}


let wordLineMap = [];
let lineYMap = [];
let currentScrollLine = 0;

// for measuring each word's line index using offsetTop :D
function measureLines() {
    wordLineMap = [];
    lineYMap = [];

    const seen = new Map();
    wordsWrap.querySelectorAll('.word').forEach((el, i) => {
        const top = el.offsetTop;
        if (!seen.has(top)) {
            seen.set(top, seen.size);
        }
        wordLineMap[i] = seen.get(top);
    });
    seen.forEach((lineIdx, topPx) => {
        lineYMap[lineIdx] = topPx;
    });
}

// syncs the scrolling thingy actually updated version of scrollToLine
function syncScroll() {
    const line = wordLineMap[S.currentWord] ?? 0;
    if (line !== currentScrollLine) {
        currentScrollLine = line;
        wordsWrap.style.transform = `translateY(${-(lineYMap[line] ?? 0)}px)`;
    }
    requestAnimationFrame(positionCaret);
}

// sets position for caret or that blinky thingy
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
    const r = refEl.getBoundingClientRect();
    const x = afterRef ? (r.left - wr.left + r.width): (r.left - wr.left);
    caretEl.style.height = r.height * 0.75 + 'px';
    const y = r.top - wr.top + (r.height * 0.125);

    caretEl.style.left = x + 'px';
    caretEl.style.top = y + 'px';
    caretEl.style.opacity = '1';
    caretEl.classList.add('active');
    caretEl.classList.add('blink'); 
}

// I WIPPED scrollToLine thingy :( sorry.. mr scrollToLine()! you did a great job 🫡

// updates letter display
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

// same like before but for completed words
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

// here comes the math 😭
// it uses formula: WPM = (Total Correct Characters / 5) / (Time elapsed in minutes). as per standard wpm calculation
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

// it uses formula: (Correct keystrokes / total keystrokes) * 100
function calcAcc() {
    if (S.totalKS === 0) {
        return 100;
    } else {
        return Math.round(S.correctKS / S.totalKS * 100);
    }
}

// Updates the stat in real time
function updateStats() {
    const wpm = calcWPM();
    const acc = calcAcc();
    wpmEl.textContent = wpm > 0? wpm: '-';
    accEl.textContent = S.totalKS > 0? acc: '-';
    if (S.mode === 'words') {
        progressFill.style.width = Math.min(S.currentWord / S.modeVal * 100, 100) + '%';
    }
}

// after completing test, confetii
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

// finizlize everything and generate result :D
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

// STARTS THE TESTTTT
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


// handles the input for the words that are being written or smth YKKKKK
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
        syncScroll();
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
        syncScroll();
    }
    if (e.key === 'Tab') {
        e.preventDefault();
        initTest();
    }
}


// sets the enviroments and all
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


// runs the initilization thigny
initTest();