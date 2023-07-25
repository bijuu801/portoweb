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

    const nameInputClasses = `input input-bordered input-secondary w-full max-w-xs ${formInputValidity.name ? '' : 'input-error'}`;
    const emailInputClasses = `input input-bordered input-secondary w-full max-w-xs ${formInputValidity.email ? '' : 'input-error'}`;
    const messageInputClasses = `textarea textarea-secondary textarea-bordered rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${formInputValidity.message ? '' : 'border-red-500'}`;

    return (
        <>
                <h2 className="text-2xl font-bold mb-5 text-center">Reach Out To Me</h2>
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={confirmHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className={nameInputClasses} id="name" type="text" placeholder="Your name" ref={nameInputRef}/>
                        {!formInputValidity.name && <p className="text-red-500 text-xs italic">Please enter a valid name.</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className={emailInputClasses} id="email" type="email" placeholder="Your email" ref={emailInputRef}/>
                        {!formInputValidity.email && <p className="text-red-500 text-xs italic">Please enter a valid email.</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className={messageInputClasses} id="message" type="text" placeholder="Your message" ref={messageInputRef}/>
                        {!formInputValidity.message && <p className="text-red-500 text-xs italic">Please enter a valid message.</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="btn btn-neutral" type="submit">
                            Send
                        </button>
                    </div>
                </form>
        </>
    )
}

export default SubmitForm;
