import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatar1.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";



let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount} pageSize={pageSize} />
        {
            users.map( u => <div key={u.id} className={s.usersHeader}>
              <span>
                  <div>
                      <NavLink to={'/profile/' + u.id}>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                      </NavLink>
                      </div>
                  <div>
                      {u.followed
                          ? <button disabled={props.followingInProgress.some( id => id === u.id)}
                                    className={s.button} onClick={() => {props.unfollow(u.id)}}>Отписаться</button>

                          : <button disabled={props.followingInProgress.some( id => id === u.id)}
                                    className={s.button} onClick={() => {props.follow(u.id)}}>Подписаться</button>}
                  </div>
              </span>
                <span>
                   <span>
                       <div className={s.name}>{u.name}</div>
                       <div className={s.status}>{u.status}</div>
                   </span>
                   <span className={s.location}>
                       <div>{"u.location.country"},</div>
                       <div>{"u.location.city"}</div>
                   </span>
               </span>
            </div>)
        }
    </div>
}

export default Users;