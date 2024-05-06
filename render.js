import { persArray } from './personas.js';

let randomIndex;
let choosenPers;
let guessCount;
let progress;

export function newGame() {
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

export function checkName() {
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


export function handleInput(event) {
    const input = event.target.value.trim().toLowerCase();
    const dropdown = document.getElementById("dropdown");

  
    if (input.length < 2) {
        dropdown.style.display = "none"; 
        return; 
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

