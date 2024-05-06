class Persona {
    constructor(name, year, profession, quotes, gender, achievments, picture){
        this.name = name;
        this.year = year;
        this.profession = profession;
        this.quotes = quotes;
        this.gender = gender;
        this.achievments = achievments;
        this.picture = picture;
    }

    GetName() {
        return this.name;
    }

    GetYear() {
        return this.year;
    }

    GetProfession() {
        return this.profession;
    }

    GetAchievments() {
        return this.achievments;
    }

    GetQuotes() {
        return this.quotes;
    }

    GetGender() {
        return this.gender;
    }

    SetName(name) {
        this.name = name;
    }
    

    SetYear(year) {
        this.year = year;
    }

    SetProfession(profession) {
        this.profession = profession ;
    }

    SetAchievments(achievments) {
        this.achievments = achievments;
    }

    SetQuotes(quotes) {
        this.quotes = quotes;
    }

    SetGender(gender) {
        this.gender = gender;
    }
}

const persArray = [];

function createAndAddPersona(name, birthYear, occupation, interests, gender) {
    const newPersona = new Persona(name, birthYear, occupation, interests, gender);
    persArray.push(newPersona);
}

createAndAddPersona("Edgars test", 1979, "president", "insta, svetdiena, dzivnieki", "vīrietis");
createAndAddPersona("Pauls test", 2006, "cousin", "volejbols, cars", "vīrietis");
createAndAddPersona("Edvins test", 1999, "cousin", "treneris, 28.vsk", "vīrietis");
createAndAddPersona("Kristaps test", 1990, "crypto-king", "crypto, basketbols", "vīrietis");
createAndAddPersona("Laura test", 1985, "doctor", "reading, hiking", "sieviete");
createAndAddPersona("Anna test", 1990, "software engineer", "coding, gaming", "sieviete");
createAndAddPersona("Mark test", 1982, "teacher", "music, gardening", "vīrietis");
createAndAddPersona("Sandra test", 1988, "architect", "traveling, photography", "sieviete");
createAndAddPersona("Robert test", 1978, "chef", "cooking, painting", "vīrietis");
createAndAddPersona("Kristaps Porziņģis", 1993, "basketball player", "basketball', cars", "vīrietis");
createAndAddPersona("Vaira Vīķe-Freiberga", 1949, "ex-president", "latvia, politics, EU", "sieviete");

let randomIndex;
let choosenPers;
let guessCount;
let progress;

function newGame() {
    randomIndex = Math.floor(Math.random() * persArray.length);
    choosenPers = persArray[randomIndex];

    resetGuessInput();
    resetFeedback();
    document.getElementById("result").textContent = "";
    guessCount = 0;
}

function resetGuessInput() {
    document.getElementById("guessInput").value = "";
}

function resetFeedback() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("guessOut").textContent = "";
    document.getElementById("yearInfo").textContent = "";
    document.getElementById("professionInfo").textContent = "";
    document.getElementById("quoteInfo").textContent = "";
}

function checkName() {
    const guessInput = document.getElementById("guessInput");
    const resultDiv = document.getElementById("result");
    const outputDiv = document.getElementById("output");
    const guessDiv = document.getElementById("guessOut");
    const yearDiv = document.getElementById("yearInfo");
    const professionDiv = document.getElementById("professionInfo");
    const quoteDiv = document.getElementById("quoteInfo");
    
    const guess = guessInput.value.toLowerCase();
    if (guess === choosenPers.GetName().toLowerCase()) {
        resultDiv.textContent = `Congratulations! You guessed correctly in ${guessCount + 1} guesses`;
        outputDiv.innerHTML = "";
        resetFeedback();
    } else {
        if (!persArray.some(person => person.GetName().toLowerCase() === guess)) {
            resultDiv.textContent = "This person is not in the database. Try again with another person.";
            resetFeedback();
            resetGuessInput();
        } else {
            const matchedIndex = persArray.findIndex(person => person.GetName().toLowerCase() === guess);
            resultDiv.textContent = "Try again!";
            resetGuessInput();
            updateFeedback(matchedIndex);
            guessCount++;
            guessDiv.textContent = `${guessCount} guesses`;

            if (guessCount === 2) {
                yearDiv.textContent = `Person's birth year: ${choosenPers.GetYear()}`;
            } else if (guessCount === 5) {
                professionDiv.textContent = `Person's profession: ${choosenPers.GetProfession()}`;
            } else if (guessCount === 9) {
                quoteDiv.textContent = `Person's quote: ${choosenPers.GetQuotes()}`;
            }
        }
    }
}

function updateFeedback(matchedIndex) {
    const outputDiv = document.getElementById("output");
    let outputText = "";

    const choosenYear = choosenPers.GetYear();
    const choosenProfession = choosenPers.GetProfession();

    const person = persArray[matchedIndex];
    const personYear = person.GetYear();
    const personProfession = person.GetProfession();
    

    if (personYear > choosenYear) {
        outputText += "Person is older 👵<br>";
    } else if (personYear < choosenYear) {
        outputText += "Person is younger 👶<br>";
    } else {
        outputText += "Person is the same age 🦸‍♂️<br>";
    }

    if (person.GetGender() === choosenPers.GetGender()) {
        outputText += "Gender is the same ✅<br>";
    } else {
        outputText += "Gender is not the same ❌<br>";
    }

    if (personProfession === choosenProfession) {
        outputText += `They both work as ${personProfession} ✅<br>`;
    } else {
        outputText += `Not a/an ${personProfession} ❌<br>`;
    }

    outputDiv.innerHTML = outputText;
}


function handleInput(event) {
    const input = event.target.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    const dropdown = document.getElementById("dropdown");

    // Check if input is empty
    if (input.length < 2) {
        dropdown.style.display = "none"; // Hide the dropdown
        return; // Exit the function early
    }
    // Filter names from the database
    const filteredNames = persArray.filter(person => person.GetName().toLowerCase().includes(input));

    // Populate the dropdown with filtered names
    dropdown.innerHTML = "";
    filteredNames.forEach(person => {
        const option = document.createElement("div");
        option.textContent = person.GetName();
        option.classList.add("dropdown-item");
        option.onclick = () => {
            document.getElementById("guessInput").value = person.GetName();
            checkName();
            dropdown.style.display = "none";
        };
        dropdown.appendChild(option);
    });

    // Show the dropdown
    dropdown.style.display = filteredNames.length > 0 ? "block" : "none";
}

newGame();
