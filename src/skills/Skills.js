import React from 'react';
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'JS its very good JS its very good JS its very good JS its very good JS its very good JS its very good '}/>
                    <Skill title={'CSS'} description={'CSS very good CSS very good CSS very good CSS very good CSS very good CSS very good CSS very good CSS very good CSS very good CSS very good '}/>
                    <Skill title={'REACT'} description={'React insane  React insane  React insane  React insane  React insane  React insane  React insane  React insane  React insane  React insane  '}/>
                </div>
            </div>
        </div>
    );
};
