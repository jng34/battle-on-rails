import {React, useState} from 'react'

function SignUpForm() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [profileImg, setProfileImg] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmitSignUp(e) {
        e.preventDefault();
        console.log(e)
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
                res.json().then((user) => console.log(user));
                setName("")
                setProfileImg("")
                setPassword("")
                setPasswordConfirmation("")
            } else {
                res.json().then((err) => console.log(err.errors));
            }
            
        });
    }

  return (
    <div>
        SignUpForm 
        <br /><br />
        <form onSubmit={handleSubmitSignUp}>
            <label htmlFor='name'>Name: </label>  
                <input type='text' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)}/>  
                <br />
            <label htmlFor='profilePic'>Profile Pic: </label>  
                <input type='text' value={profileImg} placeholder='Image URL' onChange={(e) => setProfileImg(e.target.value)}/>  
                <br />
            <label htmlFor='password'>Password: </label>
                <input type='password' value={password} autoComplete="current-password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>  
                <br />
            <label htmlFor='password'>Password Confirmation: </label>    
                <input type='password' value={passwordConfirmation} autoComplete="current-password" placeholder='Retype Password' onChange={(e) => setPasswordConfirmation(e.target.value)}/> 
                <br />
                <br />
            <button className="btn btn-primary" type='submit'>Submit</button>
            {errors.map((err) => (
                <p key={err}>{err}</p>
            ))}
        </form>    
    </div>
  )
}

export default SignUpForm