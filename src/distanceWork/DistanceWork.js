import React from 'react';
import s from '../distanceWork/DistanceWork.module.css';
import sContainer from '../common/styles/Container.module.css'

export const DistanceWork = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.distanceWorkContainer}`}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <a href="#">ПРИЕМЛЕМО</a>

            </div>
        </div>
    );
};
