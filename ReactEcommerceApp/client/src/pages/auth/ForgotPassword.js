import react, {useState} from 'react';
import {Button} from 'antd';
import { auth } from '../../_firebase';
import { toast } from 'react-toastify';
import {useSelector} from 'react-redux';



const ForgotPassword = () => {
    const [email, setEmail] = useState('dev.jeyakumar@gmail.com');
    const [loading, setLoading] = useState(false);

    // Check user is already logged in?
    const {user} = useSelector((state) => ({...state}));

    if (user) {
        // Already logged in, Redirect to Home Page.
        return <>
            <h4>Please Logout first.</h4>
        </>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config = {
            url: process.env.REACT_APP_BASE_URL + '/login/?reset-password=true',
            handleCodeInApp: true, // must be "true".
        }

        await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
            // Clear the form field
            setEmail('');
            setLoading(false);
            toast.success('Check your email to reset the Password.')
        })
        .catch((error) => {
            setLoading(false);
            toast.error(error.message);
            console.log('Error in Password reset: ', error);
        });
    }

    const forgotPasswordForm = () => 
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <input type="email" className="form-control p-3" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Your Email" autoFocus />
            </div>

            <div className="form-group">
                <Button 
                    type="danger"
                    block
                    size="large"
                    onClick={handleSubmit}
                    disabled={!email || email.length < 6 || email.indexOf('@') <= 0 || email.lastIndexOf('.') < email.indexOf('@')}
                >
                    Submit
                </Button>
            </div>
        </form>
    

    return (
        <div className="container col-md-6 offset-md-3 p-5">
            {loading ? (<h4>Loading ...</h4>) : (<h4 style={{color: '#333', padding: '10px 5px'}}>Forgot Password</h4>)}
            {forgotPasswordForm()}
        </div>
    )
}

export default ForgotPassword;