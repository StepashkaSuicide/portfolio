import React from 'react';
import s from './Main.module.css';
import sContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>

            <div className={`${sContainer.container} ${s.mainBlock}`}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Evgeniy</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img
                        src="https://sun9-east.userapi.com/sun9-32/s/v1/if1/cS6h1CtGV2Pwti0rCP6cJD3U2JIYi6oy_5IFO6q1Hrj4Roba5i3T1OPHn85LxbISNjjYlJAd.jpg?size=2560x1920&quality=96&type=album"
                        alt="fff"/>
                </div>
            </div>

        </div>
    );
};
