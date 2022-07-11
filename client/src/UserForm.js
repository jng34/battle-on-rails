import { React, useState } from 'react';  

function UserForm() {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleLoginInfo(e) {
        // console.log(e.target.id)
        const { name, value } = e.target
        const userLogin = {
            ...loginInfo, [name]: value
        }
        setLoginInfo(userLogin)
    }
    console.log(loginInfo)

    function handleLoginSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => console.log(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
 

  

    return (
        <div className="card dropdown-menu" style={{width: "20rem"}}>
            <form className="px-4 py-3">
                <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                <input 
                    type="text" 
                    name="username"
                    className="form-control" 
                    value={loginInfo.username}
                    placeholder="Username" 
                    onChange={handleLoginInfo}/>
                </div>
                <div className="mb-3">
                <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
                <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    placeholder="Password" 
                    value={loginInfo.password}
                    onChange={handleLoginInfo}/>
                </div>

                <button type="submit" className="btn btn-primary" onSubmit={handleLoginSubmit}>Sign in</button>
                <ul>
                {errors.map((err) => 
                    <li>{err}</li>
                )}
                </ul>
            </form>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="www.google.com">Don't have an account? Sign up</a>
        </div>
    )
}

export default UserForm;