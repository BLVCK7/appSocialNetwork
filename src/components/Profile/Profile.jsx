import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";



const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
