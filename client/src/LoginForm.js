import { React, useState } from 'react';  


function LoginForm({ onLogin }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleLoginSubmit(e) {
        e.preventDefault();
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
            r.json().then((user) => onLogin(user));
            setName("")
            setPassword("")
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
 

  

    return (
      <div>
        <div className="card dropdown-menu" style={{width: "25rem", margin: "auto"}}>
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
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                {errors.map((err) => (
                  <p key={err} style={{color: "red"}}>{err}</p>
                 ))}
            </form>
        </div>
        <br />
            <p>
                Don't have an account? &nbsp;
                <a href='/signup'>Sign Up</a>
            </p>
      </div>
    )
}

export default LoginForm;