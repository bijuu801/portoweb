import { useState } from 'react';
import SubmitForm from './SubmitForm';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supaBaseURL = import.meta.env.VITE_SUPABASE_URL;
const supaBaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supaBaseURL, supaBaseAnonKey);

const ContactForm = (props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const submitHandler = async (userData) => {
        setIsSubmitting(true);
        const { data, error } = await supabase 
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
        <div className="flex flex-col items-center">
            <div>
                <SubmitForm onConfirm={submitHandler} />
                {!isSubmitting && !didSubmit}
                {isSubmitting && isSubmittingContent}
                {!isSubmitting && didSubmit && didSubmitContent}
            </div>
        </div>
    )
}

export default ContactForm; 