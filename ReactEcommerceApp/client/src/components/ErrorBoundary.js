
import React from 'react';

const FallbackUI = (error) => {
    // Object.keys(error).map(function(k, e) {
    //     alert(k);
    //     console.log(k, e);
    // })
    //console.log(error);
    // console.log(JSON.stringify(error));
   
    return (
        <div style={{color: '#fff', backgroundColor: '#f33', padding: '10% 0%', 
                    width: '100%', height: '100%', letterSpacing: '20px', 
                    fontSize: '48px', fontWeight: 'bold', textAlign: 'center'}}>Found Error!</div>
    )
};

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null
    };
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log('Mounted Error: ', error, errorInfo);
    }

    render() {
        return this.state.hasError ? <FallbackUI/> : this.props.children;
    }
}

export default ErrorBoundary;