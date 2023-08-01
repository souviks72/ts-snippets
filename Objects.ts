// we can define object types like this and ts will ensure that
// this func is passed an obj with the same structure
function printName(person: {fname: string, lname: string}): void {
    console.log(`${person.fname} ${person.lname}`);
}

printName({fname: "Souvik", lname: "Mandal"});

// we can also define objects while declaring them, like variables
let coordinate: {x: number, y: number} = {x: 1, y: 1}; //(like: let x:number = 4)

function getCoords() : {x: number, y: number} { // object as a return type
    return {x: 1, y: 1}
}

//-----Excess fields in an object
printName({fname: "Souvik", lname: "Mandal", age: 22});
const svk = {fname: "Souvik", lname: "Mandal", age: 22};
printName(svk);

/*
- printName() expects an obj with fname and lname
- if we pass a previously defined obj with excess fields, ts wont throw error
- however, if we pass an obj that is defined in the function param itself
  and it has extra fields then ts will throw error (line 17)
*/

//----type alias--> defining Objects, like structs in golang
type Point = {
    x: number;
    y: number;
    z?: number; // z is an optional field
}

function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2}
}

//---- READONLY
// will allow you to assign value to that field only once, when obj is created
// if you try to change its value later, ts will throw err
// works with primitive type fields only
type User = {
    readonly id: number;
    username: string;
}

let user: User = {
    id: 69,
    username: "Souvik"
};

user.id = 420; // error