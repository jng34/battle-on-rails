import React from 'react';
import { useHistory } from 'react-router-dom';


function Header({ user, setUser }) {
    let history = useHistory();

    function handleLogout() {
        fetch("/logout", { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    function goToSignUp() {
        history.push("/signup")
    }

    function goToLogIn() {
        history.push("/login")
    }

    function goToMain() {
        history.push("/")
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col text-center">
                    <h1 id="header" className='display-3' onClick={goToMain}>Battle on Rails</h1>
                </div>
                <div className="col text-end mt-3">
                    {!user ? <button className="btn btn-success" onClick={goToSignUp}>Sign Up</button> : <></>} &nbsp;
                    {!user ? <button className="btn btn-secondary" onClick={goToLogIn}>Log In</button> : <button className="btn btn-secondary" onClick={handleLogout}>Log Out</button>}
                    {user ? <p>Welcome, {user.name}</p> : <></>}
                </div>
            </div>
        </div>
    )
}

export default Header;