import { it, expect } from "vitest";
import { LinearSearch } from "./Search";
import { arrayObject, arrayObject2, arrayObject3, arrayObject4 } from "./utils/objectTests";

// Testing a positive integers array 
it('Expect a positive integer that appears only once.', () => {
    const arr = [1, 2, 3, 4, 11, 3];
    const index = search(arr, 11);
    expect(index).toBe([4]);
});

it('Expect a positive integer that appears more than once.', () => {
    const arr = [1, 2, 11, 4, 11, 3];
    const index = search(arr, 11);
    expect(index).toBe([2, 4]);
});

it('A positive integer that is not in the given list.', () => {
    const arr = [1, 2, 3, 4, 11, 3];
    const index = search(arr, 9);
    expect(index).toBe([]);
});

// Testing a positive floats array
it('A positive float that appears only once in the list', () => {
    const arr = [1, 2, 3.3, 4, 11, 3];
    const index = search(arr, 3.3);
    expect(index).toBe([2]);
});

it('Expect a positive float that appears more than once.', () => {
    const arr = [1, 2, 3.3, 4, 3.3, 9];
    const index = search(arr, 3.3);
    expect(index).toBe([2, 4]);
});

it('A positive float that is not in the given list.', () => {
    const arr = [1, 2, 3.3, 4, 3.3, 9];
    const index = search(arr, 11);
    expect(index).toBe([]);
});


// Testing a strings array
it('A string that appears only once in the list', () => {
    const arr = ["1", "2", "three", "apple"];
    const index = search(arr, "apple");
    expect(index).toBe([3]);
});

it('A string that appears more than once in the list', () => {
    const arr = ["1", "2", "three", "apple", "apple"];
    const index = search(arr, "apple");
    expect(index).toBe([3, 4]);
});

it('A string that is not in the given list', () => {
    const arr = ["1", "2", "three", "apple"];
    const index = search(arr, "apple");
    expect(index).toBe([]);
});

// Testing an objects array
it('An attribute (integer, float or string) for an object that appears only once in the list', () => {
    const index = search(arrayObject, { "name": "Juan" })
    expect(index).toBe({
        0: [0],
        1: [{ "name": "Juan", "age": 24 }]
    });
});

it('An attribute (integer, float or string) for an object that appears more than once in the list', () => {
    const index = search(arrayObject2, { "name": "Sarti" })
    expect(index).toBe({
        0: [1, 3],
        1: [{ "name": "Sarti", "age": 25 },
        { "name": "Sarti", "age": 28 }
        ],
    });
});

it('Attribute for an object that is not present in the given list', () => {
    const index = search(arrayObject, { "name": "Mary" })
    expect(index).toBe([]);
});


it('An attributes (integer, float or string) for an object that appears only once in the list', () => {
    const index = search(arrayObject3, { "name": "Juan", "age": 24 })
    expect(index).toBe([0]);
});

it('Attributes for an object that appears more than once in the list.', () => {
    const index = search(arrayObject3, { "name": "Sarti", "age": 24 })
    expect(index).toBe([1, 3]);
});

it('Attributes for an object that is not present in the given list', () => {
    const index = search(arrayObject3, { "name": "Juan", "age": 24 })
    expect(index).toBe([]);
});

it('When you search an element in empty list.', () => {
    const index = search([], 1);
    const index2 = search([], 's');
    const index3 = search([], { a: 0, b: 'str' });

    expect(index).toBe([]);
    expect(index2).toBe([]);
    expect(index3).toBe([]);
});

it('When you want to search a boolean element in the list.', () => {
    const index = search([1, 2, 3, 4, 5], true);
    const index2 = search([1, 2, 3, 4, 5], false);

    expect(index).toThrowError('Element Not Expected');
    expect(index2).toThrowError('Element Not Expected');
});

it('When you want to search a non-defined element', () => {
    const index = search([1, 2, 3, 4, 5], undefined);
    expect(index).toThrowError('Element Not Expected');
});

it('When you want to search in variable objects array', () => {
    const index = search(arrayObject4, { "phone": 5585369035, "code": "A01" });
    expect(index).toBe([2]);
});