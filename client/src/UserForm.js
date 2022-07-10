import React from 'react';  

function UserForm() {
    return (
        <div className="card dropdown-menu" style={{width: "20rem"}}>
            <form className="px-4 py-3">
                <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                <input type="username" className="form-control" id="exampleDropdownFormEmail1" placeholder="Username" />
                </div>
                <div className="mb-3">
                <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>
                <div className="mb-3">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                    <label className="form-check-label" for="dropdownCheck">
                    Remember me
                    </label>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="www.google.com">New? Sign up</a>
            <a className="dropdown-item" href="www.google.com">Forgot password?</a>
        </div>
    )
}

export default UserForm;