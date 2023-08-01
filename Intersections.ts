type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCirle = Circle & Colorful; //intersection of 2 types

const happyFace: ColorfulCirle = { // must have all fields of the 2 types
    radius: 4,
    color: "yellow"
}

// Adding one more type implicitly
type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}

type CatDog = Cat & Dog & {age: number};

const tommy: CatDog = {
    numLives: 9,
    breed: "Indian Street Dog",
    age: 7
}