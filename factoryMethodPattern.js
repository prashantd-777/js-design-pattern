
function Factory() {
    this.getDog = function (breed) {
        let dog;
        if(breed == 'Labrador') {
            dog = new Labrador();
        } else if(breed == "German Shepherd") {
            dog = new GermanShepherd();
        }
        dog.breed = breed;
        dog.printInfo = function() {
            console.log("dog info", dog.breed, "dog shed level", dog.sheddingLevel, "dog height", dog.height)
        }
        return dog;
    }
}

function Labrador() {
    this.sheddingLevel = 4;
    this.height = 5;
}

function GermanShepherd() {
    this.sheddingLevel = 2;
    this.height = 6;
}

function run() {
    let dogs = [];
    let factory = new Factory();
    dogs.push(factory.getDog("Labrador"))
    dogs.push(factory.getDog("German Shepherd"));

    for(let i = 0; i< dogs.length; i++) {
        dogs[i].printInfo()
    }
}


run()