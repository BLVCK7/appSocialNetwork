import preloader from "../../../assets/images/Spinner-1s-200px.svg";
import React from "react";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return <div className={s.preloaderMain}>
        <img src={preloader}/>
    </div>
}

export default Preloader;