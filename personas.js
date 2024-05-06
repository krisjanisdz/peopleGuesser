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
createAndAddPersona("Kristaps Porziņģis", 1995, "basketball player", "basketball', cars", "vīrietis");
createAndAddPersona("Solvita Āboltiņa", 1963, "diplomat", "latvia, politics, EU, Italy", "sieviete");
createAndAddPersona("Guntis Ulmanis", 1942, "politician", "latvia, history, agriculture", "vīrietis");
createAndAddPersona("Vaira Vīķe-Freiberga", 1937, "psychologist", "latvia, psychology, leadership", "sieviete");
createAndAddPersona("Krišjānis Kariņš", 1964, "economist", "latvia, politics, EU, economics", "vīrietis");
createAndAddPersona("Māra Līce", 1981, "actress", "latvia, theater, cinema", "sieviete");
createAndAddPersona("Raimonds Vējonis", 1966, "forester", "latvia, politics, environment", "vīrietis");
createAndAddPersona("Guntis Eniņš", 1975, "architect", "latvia, architecture, design", "vīrietis");
createAndAddPersona("Inese Lībiņa-Egnere", 1972, "lawyer", "latvia, politics, law", "sieviete");
createAndAddPersona("Viktors Jansons", 1988, "musician", "latvia, music, violin", "vīrietis");
createAndAddPersona("Lilita Muižniece", 1958, "writer", "latvia, literature, fiction", "sieviete");
createAndAddPersona("Egils Levits", 1955, "judge", "latvia, law, politics", "vīrietis");
createAndAddPersona("Jānis Čakste", 1859, "jurist", "latvia, politics, law", "vīrietis");
createAndAddPersona("Liene Ņikitina", 1985, "entrepreneur", "latvia, business, technology", "sieviete");
createAndAddPersona("Artūrs Sproģis", 1992, "athlete", "latvia, sports, athletics", "vīrietis");
createAndAddPersona("Ilze Jurkāne", 1973, "journalist", "latvia, media, news", "sieviete");
createAndAddPersona("Rihards Kols", 1980, "artist", "latvia, painting, sculpture", "vīrietis");
createAndAddPersona("Gunda Viška", 1968, "chef", "latvia, cooking, cuisine", "sieviete");
createAndAddPersona("Valdis Āboliņš", 1971, "engineer", "latvia, technology, innovation", "vīrietis");
createAndAddPersona("Līga Liepa", 1990, "dancer", "latvia, ballet, choreography", "sieviete");
createAndAddPersona("Kaspars Pūce", 1987, "politician", "latvia, politics, democracy", "vīrietis");
createAndAddPersona("Evita Vikmane", 1978, "activist", "latvia, social issues, advocacy", "sieviete");
createAndAddPersona("Liene Liepa", 1987, "model", "latvia, fashion, modeling", "sieviete");
createAndAddPersona("Kārlis Skrastiņš", 1974, "ice hockey player", "latvia, sports, NHL", "vīrietis");
createAndAddPersona("Liene Ozola", 1980, "businesswoman", "latvia, entrepreneurship, finance", "sieviete");
createAndAddPersona("Artūrs Orda", 1968, "actor", "latvia, film, theater", "vīrietis");
createAndAddPersona("Ieva Kupce", 1985, "singer", "latvia, music, pop", "sieviete");
createAndAddPersona("Andris Biedriņš", 1986, "basketball player", "latvia, sports, NBA", "vīrietis");
createAndAddPersona("Inese Laizāne", 1962, "writer", "latvia, literature, novels", "sieviete");
createAndAddPersona("Jānis Krūmiņš", 1975, "businessman", "latvia, entrepreneurship, technology", "vīrietis");
createAndAddPersona("Sanita Puķīte", 1992, "athlete", "latvia, sports, track and field", "sieviete");

export { persArray };