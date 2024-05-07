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

//personas dekl
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

//random personas izvēle
const arraySize = persArray.length;
const randomIndex = Math.floor(Math.random() * arraySize);

//ievade
const prompt = require("prompt-sync")();

//salidzinasana
var matchedIndex = 0;
function checkSimi(){
    //age check
    if(persArray[matchedIndex].GetYear() > choosenPers.GetYear()){
        console.log("Person is older 💀")
    }
    else if(persArray[matchedIndex].GetYear() < choosenPers.GetYear()){
        console.log("Person is younger 👶")
    }
    else{
        console.log("Person is the same age 🦸‍♂️")
    }
    //gender check
    if(persArray[matchedIndex].GetGender() == choosenPers.GetGender()){
        console.log("Gender is the same ✅");
    }
    else{
        console.log("Gender is not the same ❌");
    }
    // profession check
    if(persArray[matchedIndex].GetProfession() == choosenPers.GetProfession()){
        console.log(`They both work as ${persArray[matchedIndex].GetProfession()}`);
    }
    else{
        console.log(`He is not a/an ${persArray[matchedIndex].GetProfession()}`);
    }

}

//minesanas funkcijas
const choosenPers = persArray[randomIndex];
let personsNames;
function checkName(){
    let isGuessCorrect = false;
    let tryCount = 0;
    while(!isGuessCorrect){
        var guess = prompt("Guess the person's name: ");
        if(guess.toLowerCase() == choosenPers.GetName().toLowerCase()){
            console.log("Congratulations! You guessed correctly!");
            isGuessCorrect = true; 
        }
        else{
             personsNames = persArray.map(person => person.GetName().toLowerCase());
            if (!personsNames.includes(guess.toLowerCase())) {
                console.log("This person is not in the array. Try again with another person.");
            }
            else{
                matchedIndex = personsNames.indexOf(guess.toLowerCase());
                console.log("Try again!");
                console.log(`Matched with person at index ${matchedIndex}`);
                console.log(persArray[matchedIndex].GetYear());
                checkSimi();
                tryCount++;


            }
            switch (tryCount) {
                case 2:
                  console.log("Personas dzimšanas gads: ",choosenPers.GetYear());
                  break;
                case 5:
                    console.log("Personas profesija: ",choosenPers.GetProfession());
                    break;
                case 9:
                    console.log("Personas citāts: ",choosenPers.GetQuotes());
                    break;
                default: continue;
              }

            isGuessCorrect = false; 
        }
    }
}
checkName();

//parbaudes
console.log("#############################");
console.log(arraySize);
console.log(randomIndex);
console.log(persArray[randomIndex]);