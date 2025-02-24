// Hiragana and Katakana Dictionaries
const hiraganaDictionary = [
    { 'char': 'あ', 'romaji': 'a' }, { 'char': 'い', 'romaji': 'i' }, { 'char': 'う', 'romaji': 'u' },
    { 'char': 'え', 'romaji': 'e' }, { 'char': 'お', 'romaji': 'o' }, { 'char': 'か', 'romaji': 'ka' },
    { 'char': 'き', 'romaji': 'ki' }, { 'char': 'く', 'romaji': 'ku' }, { 'char': 'け', 'romaji': 'ke' },
    { 'char': 'こ', 'romaji': 'ko' }, { 'char': 'さ', 'romaji': 'sa' }, { 'char': 'し', 'romaji': 'shi' },
    { 'char': 'す', 'romaji': 'su' }, { 'char': 'せ', 'romaji': 'se' }, { 'char': 'そ', 'romaji': 'so' }
];

const katakanaDictionary = [
    { 'char': 'ア', 'romaji': 'a' }, { 'char': 'イ', 'romaji': 'i' }, { 'char': 'ウ', 'romaji': 'u' },
    { 'char': 'エ', 'romaji': 'e' }, { 'char': 'オ', 'romaji': 'o' }, { 'char': 'カ', 'romaji': 'ka' },
    { 'char': 'キ', 'romaji': 'ki' }, { 'char': 'ク', 'romaji': 'ku' }, { 'char': 'ケ', 'romaji': 'ke' },
    { 'char': 'コ', 'romaji': 'ko' }, { 'char': 'サ', 'romaji': 'sa' }, { 'char': 'シ', 'romaji': 'shi' },
    { 'char': 'ス', 'romaji': 'su' }, { 'char': 'セ', 'romaji': 'se' }, { 'char': 'ソ', 'romaji': 'so' }
];

// Sample Game Card Data
let gameCardsHiragana1 = [
    { 
        "jap": "あ", 
        "eng": "a" 
    },
    { 
        "jap": "い", 
        "eng": "i" 
    },
    { 
        "jap": "う", 
        "eng": "u" 
    },
    { 
        "jap": "え", 
        "eng": "e" 
    },
    { 
        "jap": "お", 
        "eng": "o" 
    },
];
let gameCardsGreetings = [
    { "jap": "こんにちは", "eng": "Hello" },
    { "jap": "さようなら", "eng": "Goodbye" }
];

let gameCardsTravel = [
    { "jap": "えき", "eng": "Station" },
    { "jap": "ひこうき", "eng": "Airplane" }
];

let gameCardsEmergency = [
    { "jap": "たすけて", "eng": "Help!" },
    { "jap": "けいさつ", "eng": "Police" }
];

let gameCards = []; // Stores selected categories
const delaySeconds = 3; // Time before showing translation
let revealTimeout; // Stores timeout ID
let b_showCategoryMenu = true; 

// Function to get Romaji from a Japanese word
function getRomaji(japaneseWord) {
    let romajiWord = "";

    for (let char of japaneseWord) {
        let foundHiragana = hiraganaDictionary.find(entry => entry.char === char);
        let foundKatakana = katakanaDictionary.find(entry => entry.char === char);

        if (foundHiragana) {
            romajiWord += foundHiragana.romaji + " ";
        } else if (foundKatakana) {
            romajiWord += foundKatakana.romaji + " ";
        } else {
            romajiWord += char + " "; // If character is not found, keep it as is
        }
    }

    return romajiWord.trim();
}

// Function to update selected categories
function updateSelectedCategories() {
    let selectedCategories = [];
    let checkboxes = document.querySelectorAll(".category:checked");

    checkboxes.forEach(checkbox => {
        if (checkbox.value === "hiragana1") selectedCategories.push(...gameCardsHiragana1);
        if (checkbox.value === "greetings") selectedCategories.push(...gameCardsGreetings);
        if (checkbox.value === "travel") selectedCategories.push(...gameCardsTravel);
        if (checkbox.value === "emergency") selectedCategories.push(...gameCardsEmergency);
    });

    gameCards = selectedCategories.length > 0 ? selectedCategories : [...gameCardsHiragana1, ...gameCardsGreetings, ...gameCardsTravel, ...gameCardsEmergency];
}

// Function to show a random word
function showRandomWord() {
    clearTimeout(revealTimeout); // Reset timeout

    updateSelectedCategories(); // Update selected categories before choosing a word

    if (gameCards.length === 0) {
        document.getElementById("japanese-word").innerText = "No category selected!";
        document.getElementById("romaji-word").innerText = "";
        document.getElementById("english-word").innerText = "";
        return;
    }

    let randomIndex = Math.floor(Math.random() * gameCards.length);
    let chosenCard = gameCards[randomIndex];

    document.getElementById("japanese-word").innerText = chosenCard.jap;
    document.getElementById("romaji-word").innerText = getRomaji(chosenCard.jap);

    let engWord = document.getElementById("english-word");
    engWord.innerText = chosenCard.eng;
    engWord.style.visibility = "hidden";

    let romWord = document.getElementById("romaji-word");
    romWord.style.visibility = "hidden";

    // Show translation after delay
    revealTimeout = setTimeout(() => {
        romWord.style.visibility = "visible";
        engWord.style.visibility = "visible";
    }, delaySeconds * 1000);
}

function toggleGroupMenu() {
    let groupLabel = document.getElementById("group-label");

    if (b_showCategoryMenu) {
        groupLabel.style.display = "none";
        b_showCategoryMenu = false;
    }
    else {
        groupLabel.style.display = "block";
        b_showCategoryMenu = true;
    }
}

// Update words when checkboxes change
document.querySelectorAll(".category").forEach(checkbox => {
    checkbox.addEventListener("change", updateSelectedCategories);
});

// Initialize selection
updateSelectedCategories();
