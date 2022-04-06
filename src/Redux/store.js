import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Privet!!111asd', likesCount: 15},
                {id: 2, message: 'Hello', likesCount: 25},
                {id: 3, message: 'Bonjour!', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 18}
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Vladislav'},
                {id: 2, name: 'Alexandra'},
                {id: 3, name: 'Natali'},
                {id: 4, name: 'Vladimir'},
                {id: 5, name: 'Sanya'},
                {id: 6, name: 'Slava'}
            ],
            messagesData: [
                {id: 1, message: 'Hello world!'},
                {id: 2, message: 'JS is Awesome'},
                {id: 3, message: 'What am I doink?'},
                {id: 4, message: 'He he he!'},
                {id: 5, message: 'Fine'}
            ],
            newMessageBody: ""
        },
        navBar: {}
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
// Store OOP