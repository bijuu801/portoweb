import { useRef, useState } from 'react';


const isEmpty = (value) => value.trim() === "";

const SubmitForm = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        email: true,
        message: true,
    });

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

    const confirmHandler = async (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName); 
        const enteredEmailIsValid = !isEmpty(enteredEmail);
        const enteredMessageIsValid = !isEmpty(enteredMessage);

        setFormInputValidity ({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            message: enteredMessageIsValid,
        });

        const formIsValid = 
            enteredNameIsValid &&
            enteredEmailIsValid &&
            enteredMessageIsValid

        if(!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
        });
    };

    const nameInputClasses = `input input-bordered input-secondary w-full max-w-xs ${formInputValidity.name ? '' : 'input-error'} bg-white`;
    const emailInputClasses = `input input-bordered input-secondary w-full max-w-xs ${formInputValidity.email ? '' : 'input-error'} bg-white`;
    const messageInputClasses = `textarea textarea-secondary textarea-bordered rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none ${formInputValidity.message ? '' : 'border-red-500'} bg-white`;

    return (
        <>
            <h1 className="text-3xl font-bold mb-5 text-center" style={{ fontFamily: 'CaslonCP' }}>Reach Out To Me</h1>
                <form className="shadow-md rounded px-36 pt-6 pb-8 mb-4" onSubmit={confirmHandler}>
                    <div className="mb-4">
                    <label className="block text-lg font-bold mb-2" style={{ fontFamily: 'CaslonCP' }} htmlFor="name">
                            Name
                        </label>
                        <input className={nameInputClasses} id="name" type="text" placeholder="Your name" ref={nameInputRef}/>
                        {!formInputValidity.name && <p className="text-red-500 text-xs italic">Please enter a valid name.</p>}
                    </div>
                    <div className="mb-6">
                    <label className="block text-lg font-bold mb-2" style={{ fontFamily: 'CaslonCP' }} htmlFor="email">
                            Email
                        </label>
                        <input className={emailInputClasses} id="email" type="email" placeholder="Your email" ref={emailInputRef}/>
                        {!formInputValidity.email && <p className="text-red-500 text-xs italic">Please enter a valid email.</p>}
                    </div>
                    <div className="mb-6">
                    <label className="block text-lg font-bold mb-2" style={{ fontFamily: 'CaslonCP' }} htmlFor="message">
                            Message
                        </label>
                        <textarea className={messageInputClasses} id="message" type="text" placeholder="Your message" ref={messageInputRef}/>
                        {!formInputValidity.message && <p className="text-red-500 text-xs italic">Please enter a valid message.</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="btn btn-neutral" type="submit" style={{ fontFamily: 'CaslonCP' }}>
                            Send
                        </button>
                    </div>
                </form>
        </>
    )
}

export default SubmitForm;
