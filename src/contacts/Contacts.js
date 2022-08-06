import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <form className={s.contactsForm}>
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
            <h2 className={s.title}>Contacts</h2>
            <div className={s.inputTextAreaBlock}>
                <span>Name</span>
                <input  type="text"  placeholder={'textName'}/>
                <span>secondName</span>
                <input type="text" placeholder={'textSecondName'}/>

               <textarea placeholder={'description'}/>

            </div>
            <button>Отправить</button>
        </div>


        </form>
    );
};
