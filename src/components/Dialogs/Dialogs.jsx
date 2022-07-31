import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./Message/Message";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {

    
    let dialogsElements = props.state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} />
    )
   
    let messagesElements = props.state.messagesData.map(messages =>
        <MessageItem message={messages.message} id={messages.id} />
    )

    let newMessageElement = React.createRef();


    let addMessage = () => {
        let messageText = newMessageElement.current.value 
        
    }
    

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.createMessageDiv}></div>
            <div className={s.messageTextDiv}>
                <textarea ref={newMessageElement} className={s.messageText} name="messageText" id="" cols="100" rows="5"></textarea>
            </div>
            <div className={s.messageTextDiv}>
            <button onClick={addMessage} className={s.btnMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;
