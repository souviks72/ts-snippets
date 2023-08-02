// a variable can have more than one type (OR)
let age: number | string = 21;
age = "21";

// we can have union of user defined types as well

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coords: Point | Loc = {x: 1, y: 1};
coords = {lat: 1, long: 1}

// union type as func param
function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

//however some times, logically all types in the union
//wont work with the logic. In that case you will have to check
//type or do type narrowing. Ts will throw error accordigly
function calculateTax(price: number | string, tax: number): number {
    if (typeof price === 'string'){ // a kind of type narrowing
        price = parseFloat(price.replace("$",""));
    }
    return price * tax;
}

// Array of union types---------
const arr: (number | string)[] = [1,2,"3","4"]; // the () are important
// () means that arr can have BOTH number and string
const ar: number[] | string[] = [1,2,3]; 
// this means ar is an array that can have either number OR string, not both

//------LITERAL TYPES--------
// here variables can only take on the values specified in the type definition
let day: "today" | "yesterday" | "tomorrow" = "today";
//day = "Monday"; --> not possible