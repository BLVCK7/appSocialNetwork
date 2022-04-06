import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from "react";

let initialState = {
    postsData: [
        {id: 1, message: 'Privet!!', likesCount: 15},
        {id: 2, message: 'Hello', likesCount: 25},
        {id: 3, message: 'Bonjour!', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 18}
    ]
};

test('length of posts should be incremented', () => {
    // 1. Test Data
    let action = addPost('BLVCK7')

    // 2. Action
    let newState = profileReducer(initialState, action)

    // 3. Expectation
    expect(newState.postsData.length).toBe(5);
});

test('message of new post [4] should be "BLVCK7"', () => {
    // 1. Test Data
    let action = addPost('BLVCK7')

    // 2. Action
    let newState = profileReducer(initialState, action)

    // 3. Expectation
    expect(newState.postsData[4].message).toBe('BLVCK7');
});

test('after deleting length of messages should be incremented', () => {
    // 1. Test Data
    let action = deletePost(1)

    // 2. Action
    let newState = profileReducer(initialState, action)

    // 3. Expectation
    expect(newState.postsData.length).toBe(3);
});

test('after deleting length shouldn`t be decremented if userId is incorrect', () => {
    // 1. Test Data
    let action = deletePost(1000)

    // 2. Action
    let newState = profileReducer(initialState, action)

    // 3. Expectation
    expect(newState.postsData.length).toBe(4);
});
