import { useState } from 'react';
import SubmitForm from './SubmitForm';
import { Link } from 'react-router-dom';


const ContactForm = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const submitHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch("https://contact-app-a5898-default-rtdb.firebaseio.com/Contact.json",
        {
            method: "POST",
            body: JSON.stringify({
                name: userData.name,
                email: userData.email,
                message: userData.message
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true); 
    };
    
    const isSubmittingContent = <p>Delivering...</p>
    const didSubmitContent = (
        <>
            <p>Message Successfully Sent!</p>
                <button onClick={props.onCloseForm}>
                    Close
                </button>
        </>
    )
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-1/2">

                <SubmitForm onConfirm={submitHandler} />
                {!isSubmitting && !didSubmit}
                {isSubmitting && isSubmittingContent}
                {!isSubmitting && didSubmit && didSubmitContent}
            </div>
        </div>
    )
}

export default ContactForm; 