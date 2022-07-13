import {React, useState} from 'react'

function SignUpForm({ onLogin }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [profileImg, setProfileImg] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmitSignUp(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                profile_img: profileImg,
                password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((res) => {
            setIsLoading(false);
            if (res.ok) {
                res.json().then((user) => onLogin(user));
                setName("")
                setProfileImg("")
                setPassword("")
                setPasswordConfirmation("")
            } else {
                res.json().then((err) => setErrors(err.errors));
            }
            
        });
    }

  return (
    <div>
        <div className="card dropdown-menu" style={{width: "25rem", margin: "auto"}}>
            <form className="px-4 py-3" onSubmit={handleSubmitSignUp}>
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
                  <label htmlFor="password" className="form-label">Profile Pic</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      autoComplete="off"
                      placeholder="Image URL" 
                      value={profileImg}
                      onChange={(e) => setProfileImg(e.target.value)}
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
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password Confirmation</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      autoComplete="current-password"
                      placeholder="Confirm Password" 
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                {/* <button type="submit" className="btn btn-primary">Sign Up</button> */}
                <div class="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
                {errors.map((err) => (
                  <p key={err} style={{color: "red"}}>{err}</p>
                 ))}
            </form>
        </div>   
        <br />
            <p>
                Already have an account? &nbsp;
                <a href='/login'>Log In</a>
            </p> 
    </div>
  )
}

export default SignUpForm