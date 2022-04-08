import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";


const ProfileDataForm = (props) => {
    return <div className={s.describeBlock}>
            <form onSubmit={props.handleSubmit}>
            <div><button>Сохранить</button></div>
            <div className={s.topBlock}>
                <h1>{props.profile.fullName}</h1>
                {/*<div className={s.status}>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.middleBlock}>
                <div className={s.leftDescribe}>
                    <h3>Имя пользователя:</h3>
                    <h3>Ищу работу:</h3>
                    <h3>Место работы:</h3>
                    <h3>О себе:</h3>
                </div>
                <div className={s.rightDescribe}>
                    {createField('Введите имя пользователя', 'fullName', [], Input)}
                    {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                    {createField('Название компании', 'lookingForAJobDescription', [], Input)}
                    {createField('Расскажи о себе', 'aboutMe', [], Input)}
                </div>
            </div>
            <div className={s.bottomBlock}>
                <div>
                    <div className={s.counter}>1089</div>
                    <div className={s.textActivities}>подписчиков</div>
                </div>
                <div>
                    <div className={s.counter}>379</div>
                    <div className={s.textActivities}>друзей</div>
                </div>
                <div>
                    <div className={s.counter}>1051</div>
                    <div className={s.textActivities}>фотография</div>
                </div>
                <div>
                    <div className={s.counter}>258</div>
                    <div className={s.textActivities}>отметок</div>
                </div>
                <div>
                    <div className={s.counter}>568</div>
                    <div className={s.textActivities}>видеозаписей</div>
                </div>
            </div>
            </form>
        </div>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm