import React from 'react';
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

const arr = [
    {
    title: 'JS',
    description:'od JS good ',
},
     {
    title: 'CSS',
    description:'JS its very good JS its d JSits very good',
},
     {
    title: 'REACT',
    description:'od Jy good CSS very good CSS veS good ',
},

]

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    {arr.map(t=> <Skill key={t.title} title={t.title} description={t.description}/>)}
                </div>
            </div>
        </div>
    );
};
