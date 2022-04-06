import s from './MyPosts.module.css';
import Post from './Post/Post'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";
import {InputProfile} from "../../common/FormsControls/FormsControls";

const maxLength75 = maxLengthCreator(75);

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Что у вас нового?"} name={"newPostText"} component={InputProfile}
                validate={[required, maxLength75]} autocomplete="off"/>
            </div>
            <div>
                <button>Опубликовать</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'addPostForm'})(AddNewPostForm)

const MyPosts = (props) => {
    let postsElements =
        props.postsData.map( postsData => <Post message={postsData.message} likesCount={postsData.likesCount}/>);


    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsMain}>
            <div className={s.leftPosts}></div>
            <div className={s.postsArea}>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}


export default MyPosts;