interface Person {
    readonly id: number;
    fname: string;
    lname: string;
    nickname?: string;
    sayHi(): string;
    //sayHi: () => string; same as above
}

const thomas: Person = {
    id: 1, 
    fname: "Thomas", 
    lname: "Hardy", 
    nickname: "Tom",
    sayHi: () => "Hello"
}

console.log(thomas.sayHi());

// Reopening Interfaces----------
// If we define an interface two times, it does not overwrite
// the definition, instead Ts will add the two, like an intersection

interface Dog{
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const tommy: Dog = {
    name: "Tommy",
    age: 3,
    breed: "street",
    bark() {
        return "bhau bhau"
    }
}

// INHERITANCE --- using "extends"
interface Pet {
    owner: string;
}

interface ServiceDog extends Dog, Pet {
    job: "drug sniffer" | "bomb" | "guide"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4,
    breed: "Lab",
    bark: () => { return "woof" },
    job: "guide",
    owner: "Souvik"
}