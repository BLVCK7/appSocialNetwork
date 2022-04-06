const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

/* ActionCreators */

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

/* ThunkCreators */



export default dialogsReducer;