function UserGreeting(props) {

    //You can also use ternary operators for conditional rendering if needed
     const welcomeMessage = <h1 className="welcome-message"> Welcome {props.username}</h1>

     const LoginMessage = <h1 className="login-message">Please login to continue to view the rest of the application</h1>

    return(props.isLoggedIn ?  welcomeMessage: LoginMessage);

    // if(props.isLoggedIn === true){
    //     return <h1> Welcome {props.username}</h1>
    // }

    // else {
    //     return <h1>Please login to continue</h1>
    // }
}

export default UserGreeting;