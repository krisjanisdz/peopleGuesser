import { persArray } from './personas.js';

let randomIndex;
let choosenPers;
let guessCount;
let hardMode = true;
let guessedList = "";

export function changeMode (){

}
export function newGame() {
    randomIndex = Math.floor(Math.random() * persArray.length);
    choosenPers = persArray[randomIndex];

    resetGuessInput();
    resetFeedback();
    document.getElementById("result").textContent = "";
    guessCount = 0;
    resetList();
    enableGameControls();
}

function resetList (){
    document.getElementById("previousGuesses").innerHTML = "";
    document.getElementById("listName").style.display = "none";
}

function resetGuessInput() {
    document.getElementById("guessInput").value = "";
}

function resetFeedback() {
    document.getElementById("output").innerHTML = "";
}

export function checkName() {
    const guessInput = document.getElementById("guessInput");
    const resultDiv = document.getElementById("result");
    const outputDiv = document.getElementById("output");
    const attempted = document.getElementById("previousGuesses");

    const guess = guessInput.value.toLowerCase();
    if (guess === choosenPers.GetName().toLowerCase()) {
        resultDiv.textContent = `Congratulations! You guessed correctly in ${guessCount + 1} guesses`;
        outputDiv.innerHTML = "";
        disableGameControls(); 
        resetGuessInput();
        resetFeedback();
        resetList();
        winner();
    } else {
        if (guessCount >= 10) {
            resultDiv.textContent = "You've used all your guesses. Game over!";
            disableGameControls(); 
            resetGuessInput();
            resetFeedback();
            resetList();
            return;
        }
        if (!persArray.some(person => person.GetName().toLowerCase() === guess)) {
            resultDiv.textContent = "This person is not in the database. Try again with another person.";
            resetGuessInput();
            resetFeedback();
        } else {
            const matchedIndex = persArray.findIndex(person => person.GetName().toLowerCase() === guess);
            resultDiv.textContent = `Try again! You have ${10 - guessCount} guesses left`;
            const person = persArray[matchedIndex];
            guessedList += `${person.GetName()} <br>`;
            attempted.innerHTML = guessedList;
            resetGuessInput();
            updateFeedback(matchedIndex);
            guessCount++;
            document.getElementById("listName").style.display = "block";
        }
    }
}

function disableGameControls() {
    const guessInput = document.getElementById("guessInput");
    const nameBtn = document.getElementById("nameBtn");

    guessInput.disabled = true;
    nameBtn.disabled = true; 
}

function enableGameControls() {
    const guessInput = document.getElementById("guessInput");
    const nameBtn = document.getElementById("nameBtn");

    guessInput.disabled = false;
    nameBtn.disabled = false; 
}

function winner() {
    confetti.render();
}

function updateFeedback(matchedIndex) {
    const outputDiv = document.getElementById("output");
    let outputText = "";

    const choosenYear = choosenPers.GetYear();
    const choosenProfession = choosenPers.GetProfession();

    const person = persArray[matchedIndex];
    const personYear = person.GetYear();
    const personProfession = person.GetProfession();
    
    
    if(guessCount < 2 || hardMode === false){
        if (person.GetGender() === choosenPers.GetGender()) {
            outputText += "Gender is the same ✅<br>";
        } else {
            outputText += "Gender is not the same ❌<br>";
        }
    }else{
        outputText += `Person's gender: ${choosenPers.GetGender()} <br>`;
    }

    if(guessCount < 4 || hardMode === false){
        if (personYear > choosenYear ) {
            outputText += "Person is older 👵<br>";
        } else if (personYear < choosenYear) {
            outputText += "Person is younger 👶<br>";
        } else {
            outputText += "Person is the same age 🦸‍♂️<br>";
        }
    }else{
        outputText += `Person's birth year: ${choosenPers.GetYear()} <br>`;
    }

    if(guessCount < 7 || hardMode === false){
        if (personProfession === choosenProfession) {
            outputText += `They both work as ${personProfession} ✅<br>`;
        } else {
            outputText += `Not a/an ${personProfession} ❌<br>`;
        }
    }else{
        outputText += `Person's profession: ${choosenPers.GetProfession()}<br>`;
    }

    if(guessCount > 7 || hardMode !== false){
        
    }else{
        outputText += `Person's quote: ${choosenPers.GetQuotes()}<br>`;
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
    const maxItems = 6; 
    const dropdownList = document.createElement("div");
    dropdownList.classList.add("dropdown-list");
    filteredNames.slice(0, maxItems).forEach(person => {
        const option = document.createElement("div");
        option.textContent = person.GetName();
        option.classList.add("dropdown-item");
        option.onclick = () => {
            document.getElementById("guessInput").value = person.GetName();
            checkName();
            dropdown.style.display = "none";
        };
        dropdownList.appendChild(option);
    });

    if (filteredNames.length > maxItems) {
        dropdownList.style.overflowY = "auto";
        dropdownList.style.maxHeight = "200px";
    }

    dropdown.appendChild(dropdownList);

    dropdown.style.display = filteredNames.length > 0 ? "block" : "none";
}



newGame();

