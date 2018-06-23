export function formatSession(str) {
    let sessionId = str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    return sessionId.replace(/\s+/g, '');
}

export function sortLeaders(a,b){
    return b.winCount - a.winCount;
}

export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

export function sessionName(){
    const animals = [
        "Aardvark",
        "Alpaca",
        "Anteater",
        "Antelope",
        "Armadillo",
        "Donkey",
        "Barracuda",
        "Buffalo",
        "Butterfly",
        "Capybara",
        "Caribou",
        "Cockroach",
        "Dinosaur",
        "Dogfish",
        "Dragonfly",
        "Duck",
        "Eel",
        "Elephant",
        "Ferret",
        "Flamingo",
        "Gerbil",
        "Grouse",
        "Hamster",
        "Hedgehog",
        "Horse",
        "Human",
        "Jellyfish",
        "Lark",
        "Lemur",
        "Lobster",
        "Locust",
        "Magpie",
        "Mallard",
        "Mandrill",
        "Meerkat",
        "Mongoose",
        "Nightingale",
        "Octopus",
        "Ostrich",
        "Peafowl",
        "Pheasant",
        "Porcupine",
        "Quetzal",
        "Rat",
        "Reindeer",
        "Salmon",
        "Shark",
        "Shrew",
        "Sparrow",
        "Squirrel",
        "Stork",
        "Tarsier",
        "Trout",
        "Vulture",
        "Whale",
        "Woodcock",
        "Yak",
        "Zebra"
    ]
    const today = new Date();
    const month = today.toLocaleDateString("en-US", { month: 'long'});
    const seconds = today.getSeconds();

    return `${seconds} ${month} ${rando(animals)}`;
}