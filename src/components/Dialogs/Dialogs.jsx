import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}




const Dialogs = (props) => {
        let dialogsData = [
            {name: 'Veronoka', id: 1},
            {name: 'Dendi', id: 2}, 
            {name: 'Sereja', id: 3}
        ]
        
        let messagesData = [
            {message: 'Hello', id: 1},
            {message: 'МЯУ МЯУ', id: 2},
            {message: 'Как дела?', id: 3}
        ]
    

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                </div>

                <div className={s.messages}>
                    <MessageItem message={messagesData[0].message} id={messagesData[0].id} />
                    <MessageItem message={messagesData[1].message} id={messagesData[1].id} />
                    <MessageItem message={messagesData[2].message} id={messagesData[2].id}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
