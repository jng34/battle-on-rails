import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from './bflogo2.png';


function Header({ user, setUser }) {
    const history = useHistory();

    function handleLogout() {
        fetch("/logout", { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
                setUser(null);
                history.push("/")
            }
        });
    }


    return (
        <div className="container" style={{paddingTop:"20px"}}>
            <div className="row">
                <div className="col">
                </div>
                <div className="col align-self-start mb-">
                    {/* <h1 id="header" className='display-3'>Battle on Rails</h1> */}
                    <img src={logo} alt="logo" className='img-fluid' style={{minWidth: '52em', height:"100%"}}/>
                </div>
                <div style={{paddingTop:"20px", paddingBottom:"15px"}} className="col text-end mt-3">
                    {!user ? <button className="btn btn-success" onClick={() => history.push("/signup")}>Sign Up</button> : <></>} &nbsp;
                    {!user ? 
                    <button className="btn btn-secondary" onClick={() => history.push("/login")}>Log In</button>
                    : <div><button className="btn btn-warning btn-small" onClick={()=>history.push("/profile")}>My Profile</button> &nbsp; <button className="btn btn-secondary" onClick={handleLogout}>Log Out</button></div>}
                    {user ? 
                    <p>Welcome, {user.name}! <br/></p> : <></>}
                </div>
            </div>
        </div>
    )
}

export default Header;