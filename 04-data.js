// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function sum(numbers) {
    let total = 0;
    for (let value of numbers) {
        total += value;
    }
    return total;
}

// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order.
function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

// the second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements.
function reverseArrahInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

function arrayToList(array) {
    //create an empty list
    let list = null;
    //iterate, starting at the end
    for(let i = array.length - 1; i >= 0; i--) {
        //For each element, we create a new node with value set to the current array element and next pointing to the current list (which initially is null).
        list = { value : array[i], next : list};
    }
    return list;
}

// Also write a listToArray function that produces an array from a list.

function listToArray(list) {
    const array = [];
    let current = list;
    while (current != null) {
        array.push(current.value);
        current = current.next;
    }

    return array;
}

// Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list

function prepend(element, list) {
    return {element, rest: list};
}

//  and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// iterative version
function nth(list, number) {
    // current points to the head of the list
    let current = list;
    let index = 0;

    while (current != null) {
        if (index === number) {
            return current.value;
        }
        current = current.next;
        index++;
    }
    // return undefined if the position is out of bounds
    return undefined;
}

//recursive version
function nth(list, position) {
    // End of the List
    if (list === null){
        return undefined;
    }
    // Return 0 because we found the desired element
    if (position === 0){
        return list.value;
    }

    //Recursive: decrement the position and move onto the next node
    return nth(list.next, position -1);
}