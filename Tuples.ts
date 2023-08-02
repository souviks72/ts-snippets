/*
Tuples are a special type of array exclusive to Ts(not in Js)
These are arrays of fixed lengths and ordered with specific types 
Tuples are used to represent some specific, intrinsically related values
*/

let myTuple: [number, string] = [1,"one"];
// myTuple = [1,1];  will throw error
// this tuple can only have a number and a string, in that order
// but we can push data after the tuple of right shape is created

//---------ENUMS-------
// Allows us to define a set of named constants

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const state = OrderStatus.DELIVERED;