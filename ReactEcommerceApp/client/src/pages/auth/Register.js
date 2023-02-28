import React, {useState} from 'react';
import {toast} from 'react-toastify';

import {auth} from '../../_firebase';

const Register = () => {
    const [email, setEmail] = useState(window.localStorage.getItem('hyproid:reg-email', ''));

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Firebase (Send mail)
        const config = {
            url: process.env.REACT_APP_BASE_URL + '/register/complete',
            handleCodeInApp: true, // Must be true
        }
        console.log('Redirecting url: ', config.url);
        try {
            await auth.sendSignInLinkToEmail(email, config);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

        // Notification alert
        toast.success(`Email is sent to ${email}. Please click the verification link to complete register.`);

        // Set Current Email in localstorage
        window.localStorage.setItem('hyproid:reg-email', email);

        // clear the current email 
        setEmail('');
    }

    

    const registerForm = () => 
        <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
            <button type="submit" className="m-2 text-center btn btn-raised btn-primary">Register</button>
        </form>

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register <b>- {email ? email.toUpperCase(): ''}</b></h4>
                    {registerForm()}
                </div>
            </div>

        </div>
    );
}

export default Register;