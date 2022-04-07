import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React, {useState} from "react";
import userPhoto from "../../../assets/images/avatar1.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.avatarBlock}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                </div>
                <div className={s.buttonContainer}>
                    { props.isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div> }
                </div>
                <div>
                    { props.isOwner && <input type="file" onChange={onMainPhotoSelected} /> }
                </div>
            </div>
            { editMode
                ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
                : <ProfileData profile={props.profile} isOwner={props.isOwner}/> }
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={s.describeBlock}>

            <div className={s.topBlock}>
                <h1>{props.profile.fullName}</h1>
                {/*<div className={s.status}>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.middleBlock}>
                <div className={s.leftDescribe}>
                    <h3>Ищу работу:</h3>
                    <h3>Место работы:</h3>
                    <h3>О себе:</h3>
                </div>
                <div className={s.rightDescribe}>
                    <span>{props.profile.lookingForAJob ? 'Да' : 'Нет'}</span>
                    <span>{props.profile.lookingForAJobDescription}</span>
                    <span>{props.profile.aboutMe}</span>
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
        </div>
    )
}


export default ProfileInfo;