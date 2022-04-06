import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {InputDialogs} from "../common/FormsControls/FormsControls";
import sendButton from "./../../assets/images/send.png"


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(dialogsData => <DialogItem
        name={dialogsData.name} key={dialogsData.id} id={dialogsData.id}/>);
    let messagesElements = state.messagesData.map(messagesData => <Message
        message={messagesData.message} key={messagesData.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogsMainContainer}>
            <div className={s.leftPanel}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.rightPanel}>
                <div className={s.MessagesElements}>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Введите сообщение"} name={"newMessageBody"}
                       component={InputDialogs} autocomplete="off"/>
            </div>
            <div className={s.button}>
                <button><img src={sendButton}/></button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;