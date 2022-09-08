import React from 'react';
import s from './Projects.module.css';
import sContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";


const arr = [
    {
        title: 'INCUBATOR-WAY',
        description: ' Вот север , тучи нагоняя\n' +
            '\n' +
            'Дохнул, завыл — и вот сама\n' +
            '\n' +
            'Идет волшебница зима.\n' +
            '\n' +
            ' \n' +
            '\n' +
            'Пришла, рассыпалась; клоками\n' +
            '\n' +
            'Повисла на суках дубов;\n' +
            '\n' +
            'Легла волнистыми коврами\n' +
            '\n' +
            'Среди полей, вокруг холмов;\n' +
            '\n' +
            'Брега с недвижною рекою\n' +
            '\n' +
            'Сравняла пухлой пеленою;\n' +
            '\n' +
            'Блеснул мороз. И рады мы\n' +
            '\n' +
            'Проказам матушки зимы'

    },
    {
        title: 'WEATHER',
        description: ' Вот север , тучи нагоняя\n' +
            '\n' +
            'Дохнул, завыл — и вот сама\n' +
            '\n' +
            'Идет волшебница зима.\n' +
            '\n' +
            ' \n' +
            '\n' +
            'Пришла, рассыпалась; клоками\n' +
            '\n' +
            'Повисла на суках дубов;\n' +
            '\n' +
            'Легла волнистыми коврами\n' +
            '\n' +
            'Среди полей, вокруг холмов;\n' +
            '\n' +
            'Брега с недвижною рекою\n' +
            '\n' +
            'Сравняла пухлой пеленою;\n' +
            '\n' +
            'Блеснул мороз. И рады мы\n' +
            '\n' +
            'Проказам матушки зимы'

    },
    {
        title: 'TODO LIST',
        description: 'УЖ НЕБО ОСЕНЬЮ ДЫШАЛО...\n' +
            '\n' +
            'Уж реже солнышко блистало,\n' +
            '\n' +
            'Короче становился день,\n' +
            '\n' +
            'Лесов таинственная сень\n' +
            '\n' +
            'С печальным шумом обнажалась,\n' +
            '\n' +
            'Ложился на поля туман,\n' +
            '\n' +
            'Гусей крикливых караван\n' +
            '\n' +
            'Тянулся к югу: приближалась\n' +
            '\n' +
            'Довольно скучная пора;\n' +
            '\n' +
            'Стоял ноябрь уж у двора.  '

    },
]

export const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                    <Title title={'Projects'}/>
                <div className={s.projects}>
                    {arr.map(t => <Project key={t.title} title={t.title} description={t.description}/>)}
                </div>
            </div>
        </div>
    );
};
