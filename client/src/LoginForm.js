import { React, useState } from 'react';  


function LoginForm() {
    // const [loginInfo, setLoginInfo] = useState({
    //     username: "",
    //     password: ""
    // })
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // function handleLoginInfo(e) {
    //     // console.log(e.target.id)
    //     const { name, value } = e.target
    //     const userLogin = {
    //         ...loginInfo, [name]: value
    //     }
    //     setLoginInfo(userLogin)
    // }
    console.log(name)
    console.log(password)
  

    function handleLoginSubmit(e) {
        e.preventDefault();
        console.log(e)
        setErrors([])
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, password }),
        })
        .then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => console.log(user));
            setName("")
            setPassword("")
          } else {
            r.json().then((err) => console.log(err.errors));
          }
        });
    }
 

  

    return (
        <div className="card dropdown-menu" style={{width: "25rem"}}>
            <form className="px-4 py-3" onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                      type="text"
                      className="form-control" 
                      autoComplete="off"
                      value={name}
                      placeholder="Name" 
                      onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      autoComplete="current-password"
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary" >Sign in</button>
                {errors.map((err) => (
                  <p key={err}>{err}</p>
                 ))}
            </form>
        </div>
    )
}

export default LoginForm;