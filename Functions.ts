function square(n: number): number { //return type
    return n*n;
}

function greet(person: string="John"): void{ //default params
    console.log(`Hi there, ${person}!`);
}

const doSomething = (person: string, age: number, isFunny: boolean): true => { return true};

const spellNum = (n: number): string | number => { // func can return multiple type(union type)
    if (n === 10)
        return "ten";
    return n;
}

square(3);
greet("Souvik");
doSomething("Souvik", 26, false);

//--------NEVER return type----------
function throwNewError(msg: string): never {
    throw new Error(msg);
}

const infiLoop = (): never => {
    while(true){
        //keep running
    }
}

/*
- never means this function must not even get a chance to return, not even void
- void means it has a return value of void
*/

//---------------Mini Exercise-------
const twoFer = (name1: string="you", name2: string="me"): string => {
    return `One for ${name1}, one for ${name2}`;
}

function isLeapYear(year: number): boolean {
    if (year%400 === 0 || (year%4 === 0 && year%100 !== 0)){
        return true;
    }
    return false;
}