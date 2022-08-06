import React from 'react';
import s from './Footer.module.css';
import sContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>

            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h1>Евгений Engy</h1>
                <div className={s.blocksFlex}>
                    <div className={s.blocks}></div>
                    <div className={s.blocks}></div>
                    <div className={s.blocks}></div>
                    <div className={s.blocks}></div>
                </div>
                <h2>Все права защищены</h2>
            </div>
        </div>
    );
};
