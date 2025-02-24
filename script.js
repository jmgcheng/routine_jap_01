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

let gameCards = []; // This will store selected categories
const delaySeconds = 3; // Time before showing translation
let revealTimeout; // Store the timeout ID

// Function to get selected categories and update gameCards
function updateSelectedCategories() {
    let selectedCategories = [];
    let checkboxes = document.querySelectorAll(".category:checked");

    checkboxes.forEach(checkbox => {
        if (checkbox.value === "greetings") selectedCategories.push(...gameCardsGreetings);
        if (checkbox.value === "travel") selectedCategories.push(...gameCardsTravel);
        if (checkbox.value === "emergency") selectedCategories.push(...gameCardsEmergency);
    });

    gameCards = selectedCategories.length > 0 ? selectedCategories : [...gameCardsGreetings, ...gameCardsTravel, ...gameCardsEmergency];
}

// Function to show a random word
function showRandomWord() {
    clearTimeout(revealTimeout); // Reset the timeout

    updateSelectedCategories(); // Update selected categories before choosing a word

    if (gameCards.length === 0) {
        document.getElementById("japanese-word").innerText = "No category selected!";
        document.getElementById("english-word").innerText = "";
        return;
    }

    let randomIndex = Math.floor(Math.random() * gameCards.length);
    let chosenCard = gameCards[randomIndex];

    document.getElementById("japanese-word").innerText = chosenCard.jap;
    let engWord = document.getElementById("english-word");
    engWord.innerText = chosenCard.eng;
    engWord.style.visibility = "hidden";

    // Show translation after delay
    revealTimeout = setTimeout(() => {
        engWord.style.visibility = "visible";
    }, delaySeconds * 1000);
}

// Update words when checkboxes change
document.querySelectorAll(".category").forEach(checkbox => {
    checkbox.addEventListener("change", updateSelectedCategories);
});

// Initialize selection
updateSelectedCategories();
