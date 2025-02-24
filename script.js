// Hiragana and Katakana Dictionaries
const hiraganaDictionary = [
    {'char': 'あ', 'romaji': 'a'}, {'char': 'い', 'romaji': 'i'}, {'char': 'う', 'romaji': 'u'}, {'char': 'え', 'romaji': 'e'}, {'char': 'お', 'romaji': 'o'}, 
    {'char': 'か', 'romaji': 'ka'}, {'char': 'き', 'romaji': 'ki'}, {'char': 'く', 'romaji': 'ku'}, {'char': 'け', 'romaji': 'ke'}, {'char': 'こ', 'romaji': 'ko'}, 
    {'char': 'さ', 'romaji': 'sa'}, {'char': 'し', 'romaji': 'shi'}, {'char': 'す', 'romaji': 'su'}, {'char': 'せ', 'romaji': 'se'}, {'char': 'そ', 'romaji': 'so'}, 
    {'char': 'た', 'romaji': 'ta'}, {'char': 'ち', 'romaji': 'chi'}, {'char': 'つ', 'romaji': 'tsu'}, {'char': 'て', 'romaji': 'te'}, {'char': 'と', 'romaji': 'to'}, 
    {'char': 'な', 'romaji': 'na'}, {'char': 'に', 'romaji': 'ni'}, {'char': 'ぬ', 'romaji': 'nu'}, {'char': 'ね', 'romaji': 'ne'}, {'char': 'の', 'romaji': 'no'}, 
    {'char': 'は', 'romaji': 'ha'}, {'char': 'ひ', 'romaji': 'hi'}, {'char': 'ふ', 'romaji': 'fu'}, {'char': 'へ', 'romaji': 'he'}, {'char': 'ほ', 'romaji': 'ho'}, 
    {'char': 'ま', 'romaji': 'ma'}, {'char': 'み', 'romaji': 'mi'}, {'char': 'む', 'romaji': 'mu'}, {'char': 'め', 'romaji': 'me'}, {'char': 'も', 'romaji': 'mo'}, 
    {'char': 'や', 'romaji': 'ya'}, {'char': 'ゆ', 'romaji': 'yu'}, {'char': 'よ', 'romaji': 'yo'}, 
    {'char': 'ら', 'romaji': 'ra'}, {'char': 'り', 'romaji': 'ri'}, {'char': 'る', 'romaji': 'ru'}, {'char': 'れ', 'romaji': 're'}, {'char': 'ろ', 'romaji': 'ro'}, 
    {'char': 'わ', 'romaji': 'wa'}, {'char': 'ゐ', 'romaji': 'wi'}, {'char': 'ゑ', 'romaji': 'we'}, {'char': 'を', 'romaji': 'wo'},
    {'char': 'ん', 'romaji': 'n'}
];

const katakanaDictionary = [
    {'char': 'ア', 'romaji': 'a'}, 	{'char': 'イ', 'romaji': 'i'}, 	{'char': 'ウ', 'romaji': 'u'}, 		{'char': 'エ', 'romaji': 'e'}, 	{'char': 'オ', 'romaji': 'o'}, 
    {'char': 'カ', 'romaji': 'ka'}, 	{'char': 'キ', 'romaji': 'ki'}, 	{'char': 'ク', 'romaji': 'ku'}, 		{'char': 'ケ', 'romaji': 'ke'}, 	{'char': 'コ', 'romaji': 'ko'}, 
    {'char': 'サ', 'romaji': 'sa'}, 	{'char': 'シ', 'romaji': 'shi'}, {'char': 'ス', 'romaji': 'su'}, 		{'char': 'セ', 'romaji': 'se'}, 	{'char': 'ソ', 'romaji': 'so'}, 
    {'char': 'タ', 'romaji': 'ta'}, 	{'char': 'チ', 'romaji': 'chi'}, {'char': 'ツ', 'romaji': 'tsu'}, 	{'char': 'テ', 'romaji': 'te'}, 	{'char': 'ト', 'romaji': 'to'}, 
    {'char': 'ナ', 'romaji': 'na'}, 	{'char': 'ニ', 'romaji': 'ni'}, 	{'char': 'ヌ', 'romaji': 'nu'}, 		{'char': 'ネ', 'romaji': 'ne'}, 	{'char': 'ノ', 'romaji': 'no'}, 
    {'char': 'ハ', 'romaji': 'ha'}, 	{'char': 'ヒ', 'romaji': 'hi'}, 	{'char': 'フ', 'romaji': 'fu'}, 		{'char': 'ヘ', 'romaji': 'he'}, 	{'char': 'ホ', 'romaji': 'ho'}, 
    {'char': 'マ', 'romaji': 'ma'}, 	{'char': 'ミ', 'romaji': 'mi'}, 	{'char': 'ム', 'romaji': 'mu'}, 		{'char': 'メ', 'romaji': 'me'}, 	{'char': 'モ', 'romaji': 'mo'}, 
    {'char': 'ヤ', 'romaji': 'ya'}, 	{'char': 'ユ', 'romaji': 'yu'}, 	{'char': 'ヨ', 'romaji': 'yo'}, 
    {'char': 'ラ', 'romaji': 'ra'}, 	{'char': 'リ', 'romaji': 'ri'}, 	{'char': 'ル', 'romaji': 'ru'}, 		{'char': 'レ', 'romaji': 're'}, 	{'char': 'ロ', 'romaji': 'ro'}, 
    {'char': 'ワ', 'romaji': 'wa'}, 	{'char': 'ヲ', 'romaji': 'wo'},
    {'char': 'ン', 'romaji': 'n'}
];

// Sample Game Card Data
let gameCardsHiragana1 = [{'jap': 'あ', 'eng': 'a'}, {'jap': 'い', 'eng': 'i'}, {'jap': 'う', 'eng': 'u'}, {'jap': 'え', 'eng': 'e'}, {'jap': 'お', 'eng': 'o'}, ]
let gameCardsHiragana2 = [{'jap': 'か', 'eng': 'ka'}, {'jap': 'き', 'eng': 'ki'}, {'jap': 'く', 'eng': 'ku'}, {'jap': 'け', 'eng': 'ke'}, {'jap': 'こ', 'eng': 'ko'}, ]
let gameCardsHiragana3 = [{'jap': 'さ', 'eng': 'sa'}, {'jap': 'し', 'eng': 'shi'}, {'jap': 'す', 'eng': 'su'}, {'jap': 'せ', 'eng': 'se'}, {'jap': 'そ', 'eng': 'so'}, ]
let gameCardsHiragana4 = [{'jap': 'た', 'eng': 'ta'}, {'jap': 'ち', 'eng': 'chi'}, {'jap': 'つ', 'eng': 'tsu'}, {'jap': 'て', 'eng': 'te'}, {'jap': 'と', 'eng': 'to'}, ]
let gameCardsHiragana5 = [{'jap': 'な', 'eng': 'na'}, {'jap': 'に', 'eng': 'ni'}, {'jap': 'ぬ', 'eng': 'nu'}, {'jap': 'ね', 'eng': 'ne'}, {'jap': 'の', 'eng': 'no'}, ]
let gameCardsHiragana6 = [{'jap': 'は', 'eng': 'ha'}, {'jap': 'ひ', 'eng': 'hi'}, {'jap': 'ふ', 'eng': 'fu'}, {'jap': 'へ', 'eng': 'he'}, {'jap': 'ほ', 'eng': 'ho'}, ]
let gameCardsHiragana7 = [{'jap': 'ま', 'eng': 'ma'}, {'jap': 'み', 'eng': 'mi'}, {'jap': 'む', 'eng': 'mu'}, {'jap': 'め', 'eng': 'me'}, {'jap': 'も', 'eng': 'mo'}, ]
let gameCardsHiragana8 = [{'jap': 'や', 'eng': 'ya'}, {'jap': 'ゆ', 'eng': 'yu'}, {'jap': 'よ', 'eng': 'yo'}, ]
let gameCardsHiragana9 = [{'jap': 'ら', 'eng': 'ra'}, {'jap': 'り', 'eng': 'ri'}, {'jap': 'る', 'eng': 'ru'}, {'jap': 'れ', 'eng': 're'}, {'jap': 'ろ', 'eng': 'ro'}, ]
let gameCardsHiragana10 = [{'jap': 'わ', 'eng': 'wa'}, {'jap': 'ゐ', 'eng': 'wi'}, {'jap': 'ゑ', 'eng': 'we'}, {'jap': 'を', 'eng': 'wo'},]
let gameCardsHiragana11 = [{'jap': 'ん', 'eng': 'n'}]

let gameCardsKatakana1 = [{'jap': 'ア', 'eng': 'a'}, 	{'jap': 'イ', 'eng': 'i'}, 	{'jap': 'ウ', 'eng': 'u'}, 		{'jap': 'エ', 'eng': 'e'}, 	{'jap': 'オ', 'eng': 'o'}, ]
let gameCardsKatakana2 = [{'jap': 'カ', 'eng': 'ka'}, 	{'jap': 'キ', 'eng': 'ki'}, 	{'jap': 'ク', 'eng': 'ku'}, 		{'jap': 'ケ', 'eng': 'ke'}, 	{'jap': 'コ', 'eng': 'ko'}, ]
let gameCardsKatakana3 = [{'jap': 'サ', 'eng': 'sa'}, 	{'jap': 'シ', 'eng': 'shi'}, {'jap': 'ス', 'eng': 'su'}, 		{'jap': 'セ', 'eng': 'se'}, 	{'jap': 'ソ', 'eng': 'so'}, ]
let gameCardsKatakana4 = [{'jap': 'タ', 'eng': 'ta'}, 	{'jap': 'チ', 'eng': 'chi'}, {'jap': 'ツ', 'eng': 'tsu'}, 	{'jap': 'テ', 'eng': 'te'}, 	{'jap': 'ト', 'eng': 'to'}, ]
let gameCardsKatakana5 = [{'jap': 'ナ', 'eng': 'na'}, 	{'jap': 'ニ', 'eng': 'ni'}, 	{'jap': 'ヌ', 'eng': 'nu'}, 		{'jap': 'ネ', 'eng': 'ne'}, 	{'jap': 'ノ', 'eng': 'no'}, ]
let gameCardsKatakana6 = [{'jap': 'ハ', 'eng': 'ha'}, 	{'jap': 'ヒ', 'eng': 'hi'}, 	{'jap': 'フ', 'eng': 'fu'}, 		{'jap': 'ヘ', 'eng': 'he'}, 	{'jap': 'ホ', 'eng': 'ho'}, ]
let gameCardsKatakana7 = [{'jap': 'マ', 'eng': 'ma'}, 	{'jap': 'ミ', 'eng': 'mi'}, 	{'jap': 'ム', 'eng': 'mu'}, 		{'jap': 'メ', 'eng': 'me'}, 	{'jap': 'モ', 'eng': 'mo'}, ]
let gameCardsKatakana8 = [{'jap': 'ヤ', 'eng': 'ya'}, 	{'jap': 'ユ', 'eng': 'yu'}, 	{'jap': 'ヨ', 'eng': 'yo'}, ]
let gameCardsKatakana9 = [{'jap': 'ラ', 'eng': 'ra'}, 	{'jap': 'リ', 'eng': 'ri'}, 	{'jap': 'ル', 'eng': 'ru'}, 		{'jap': 'レ', 'eng': 're'}, 	{'jap': 'ロ', 'eng': 'ro'}, ]
let gameCardsKatakana10 = [{'jap': 'ワ', 'eng': 'wa'}, 	{'jap': 'ヲ', 'eng': 'wo'},]
let gameCardsKatakana11 = [{'jap': 'ン', 'eng': 'n'}]


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
        if (checkbox.value === "hiragana2") selectedCategories.push(...gameCardsHiragana2);
        if (checkbox.value === "hiragana3") selectedCategories.push(...gameCardsHiragana3);
        if (checkbox.value === "hiragana4") selectedCategories.push(...gameCardsHiragana4);
        if (checkbox.value === "hiragana5") selectedCategories.push(...gameCardsHiragana5);
        if (checkbox.value === "hiragana6") selectedCategories.push(...gameCardsHiragana6);
        if (checkbox.value === "hiragana7") selectedCategories.push(...gameCardsHiragana7);
        if (checkbox.value === "hiragana8") selectedCategories.push(...gameCardsHiragana8);
        if (checkbox.value === "hiragana9") selectedCategories.push(...gameCardsHiragana9);
        if (checkbox.value === "hiragana10") selectedCategories.push(...gameCardsHiragana10);
        if (checkbox.value === "hiragana11") selectedCategories.push(...gameCardsHiragana11);
        if (checkbox.value === "katakana1") selectedCategories.push(...gameCardsKatakana1);
        if (checkbox.value === "katakana2") selectedCategories.push(...gameCardsKatakana2);
        if (checkbox.value === "katakana3") selectedCategories.push(...gameCardsKatakana3);
        if (checkbox.value === "katakana4") selectedCategories.push(...gameCardsKatakana4);
        if (checkbox.value === "katakana5") selectedCategories.push(...gameCardsKatakana5);
        if (checkbox.value === "katakana6") selectedCategories.push(...gameCardsKatakana6);
        if (checkbox.value === "katakana7") selectedCategories.push(...gameCardsKatakana7);
        if (checkbox.value === "katakana8") selectedCategories.push(...gameCardsKatakana8);
        if (checkbox.value === "katakana9") selectedCategories.push(...gameCardsKatakana9);
        if (checkbox.value === "katakana10") selectedCategories.push(...gameCardsKatakana10);
        if (checkbox.value === "katakana11") selectedCategories.push(...gameCardsKatakana11);
        if (checkbox.value === "greetings") selectedCategories.push(...gameCardsGreetings);
        if (checkbox.value === "travel") selectedCategories.push(...gameCardsTravel);
        if (checkbox.value === "emergency") selectedCategories.push(...gameCardsEmergency);
    });

    gameCards = selectedCategories.length > 0 ? selectedCategories : [
        ...gameCardsHiragana1, 
        ...gameCardsHiragana2, 
        ...gameCardsHiragana3, 
        ...gameCardsHiragana4, 
        ...gameCardsHiragana5, 
        ...gameCardsHiragana6, 
        ...gameCardsHiragana7, 
        ...gameCardsHiragana8, 
        ...gameCardsHiragana9, 
        ...gameCardsHiragana10, 
        ...gameCardsHiragana11,
        ...gameCardsKatakana1, 
        ...gameCardsKatakana2, 
        ...gameCardsKatakana3, 
        ...gameCardsKatakana4, 
        ...gameCardsKatakana5, 
        ...gameCardsKatakana6, 
        ...gameCardsKatakana7, 
        ...gameCardsKatakana8, 
        ...gameCardsKatakana9, 
        ...gameCardsKatakana10, 
        ...gameCardsKatakana11, 
        ...gameCardsGreetings, 
        ...gameCardsTravel, 
        ...gameCardsEmergency
    ];
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
