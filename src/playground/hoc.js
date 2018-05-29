import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is: {props.info}</p>
    </div>
);


//Higher Order Component \/
const  withAdminWorning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>ni mo</p>}
        </div>
    )
}


const AdminInfo = withAdminWorning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details" />, document.getElementById('appRoot'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the details" />, document.getElementById('appRoot'))