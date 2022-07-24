import React from 'react';
import s from './Project.module.css';
// import zaiac from './../../common/images/zaiac.png'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.pic}>
                {/*<img src={zaiac} alt="zaiac"/>*/}
                <div className={s.show}><a href="#">Show</a></div>

            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};
