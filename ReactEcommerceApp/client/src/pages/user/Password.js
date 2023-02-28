import React, {useState} from 'react';
import {toast} from 'react-toastify';
import UserNav from '../../components/nav/UserNav';
import {auth} from '../../_firebase';

const Password = () => {
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(password);
        setLoading(true);

        // Update password in firebase
        await auth.currentUser
                .updatePassword(password)
                .then(() => {
                    setLoading(false);
                    toast.success("Password is updated."); 
                    setPassword("");   
                })
                .catch((err) => {
                    setLoading(false);
                    toast.error("Failed to update. " + err.message);
                });  

    }

    const passwordUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>New Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter new password" />
            </div>

            <div className="form-group">
                <button className="btn btn-primary" disabled={!password || password.length < 6 || loading}>Submit</button>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <UserNav />
                </div>
                <div className="col">
                    <h1>Update Password</h1>
                    {passwordUpdateForm()}
                </div>
            </div>
        </div>
    );
}

export default Password;