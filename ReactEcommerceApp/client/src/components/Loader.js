import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Loader = (countDown, message, redirectUrl) => {
    countDown = 5;
    const navigate = useNavigate();
    const [counter, setCounter] = useState(countDown); // Default timer
    const [showUI, setShowUI]= useState(false);
    
    useEffect(() => {
        console.log('Count Down: ', counter);
        const interval = window.setInterval(() => {
            console.log('Count Down: ', counter);
            setCounter((currentCounter) => --currentCounter);
        }, 1000);

        // Cleanup the interval
        //counter === 0 && navigate("/");

        if (counter === 0) {
            window.clearInterval(interval);
            setShowUI(true);
            
        }

        return () => window.clearInterval(interval);
        
    }, [counter]);

    return counter > 0 ? (
        <div className="loader-wrapper" style={{width: '100%', height: '100%', zIndex: 9999, background: 'rgba(255, 255, 255, 1)'}}>
            
            <h2>App is loading</h2>
            <div>Please wait...</div>
            <div className="loader">{Math.ceil((100/countDown) * counter)}</div>
        </div>) : ('');
    
};

export default Loader;