import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import userPhoto from "../../../assets/images/avatar1.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.avatarBlock}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                </div>
                <a className={s.buttonContainer} href="">
                    <span className={s.button}>Редактировать</span>
                </a>
            </div>
            <div className={s.describeBlock}>
                <div className={s.topBlock}>
                    <h1>{props.profile.fullName}</h1>
                    {/*<div className={s.status}>*/}
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={s.middleBlock}>
                    <div className={s.leftDescribe}>
                        <h3>День рождения:</h3>
                        <h3>Город:</h3>
                        <h3>Место работы:</h3>
                    </div>
                    <div className={s.rightDescribe}>
                        <a href="">15 октября 1996 г.</a>
                        <a href="">Москва</a>
                        <a href="">{props.profile.lookingForAJobDescription}</a>
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
        </div>
    )
}

export default ProfileInfo;