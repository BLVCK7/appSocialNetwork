import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postMain}>
            <div className={s.image}>
                <img src='http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'/>
            </div>
            <div className={s.textPostOverall}>
                <div className={s.textSend}>
                    {props.message}
                </div>
                <div className={s.likes}>
                    <span>Likes: </span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;