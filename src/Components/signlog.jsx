import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
function SignLog() {
const navigate = useNavigate();
useEffect(() => {
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const handleSignUpClick = () => {
container.classList.add("right-panel-active");
};
const handleSignInClick = () => {
container.classList.remove("right-panel-active");
};
signUpButton.addEventListener('click', handleSignUpClick);
signInButton.addEventListener('click', handleSignInClick);
// Cleanup event listeners when the component unmounts
return () => {
signUpButton.removeEventListener('click', handleSignUpClick);
signInButton.removeEventListener('click', handleSignInClick);
};
}, []); // Empty dependency array to run the effect once after initial render
const [signUpData, setSignUpData] = useState({
name: '',
email: '',
password: '',
});
const [signInData, setSignInData] = useState({
email: '',
password: '',
});
const [signUpErrors, setSignUpErrors] = useState({});
const [signInErrors, setSignInErrors] = useState({});
const handleSignUpChange = (e) => {
const { name, value } = e.target;
setSignUpData({
...signUpData,
[name]: value,
});
};
const handleSignInChange = (e) => {
const { name, value } = e.target;
setSignInData({
...signInData,
[name]: value,
});
};
const validateSignUp = () => {
const errors = {};
if (!signUpData.name) {
errors.name = 'Name is required';
}
if (!signUpData.email) {
errors.email = 'Email is required';
} else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
errors.email = 'Invalid email address';
}
if (!signUpData.password) {
errors.password = 'Password is required';
}
setSignUpErrors(errors);
return Object.keys(errors).length === 0;
};
const validateSignIn = () => {
const errors = {};
if (!signInData.email) {
errors.email = 'Email is required';
} else if (!/\S+@\S+\.\S+/.test(signInData.email)) {
errors.email = 'Invalid email address';
}
if (!signInData.password) {
errors.password = 'Password is required';
}
setSignInErrors(errors);
return Object.keys(errors).length === 0;
};
const handleSignUpSubmit = (e) => {
e.preventDefault();
const isSignUpValid = validateSignUp();
if (isSignUpValid) {
axios
.post('http://localhost:8081/signup', signUpData)
.then((res) => {
  alert(`welcome ${signUpData.name}`)
navigate('/signlog');
})
.catch((err) => console.log(err));
}
};
const handleSignInSubmit = (e) => {
  e.preventDefault();
  const isSignInValid = validateSignIn();
  if (isSignInValid) {
    axios
      .post('http://localhost:8081/login', signInData)
      .then((res) => {
      //   if (res.data === "failed") {
          navigate('/');
          alert(`Welcome ${signInData.email}`);
      //   } else {
          
      //   }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred during sign-in. Please try again.");
        alert("Invalid email or password. Please sign up.");
      });
  }
};

return (
<>
<Header />
<div id='log-in'>
   <h2>Sign-Up Or Log-In</h2>
   <div className="container" id="container">
      <div className="form-container sign-up-container">
         <form action="#" onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
               <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
               <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
               <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" name='name' value={signUpData.name} onChange={handleSignUpChange}/>
            {signUpErrors.name && (
            <div className="error-message">{signUpErrors.name}</div>
            )}
            <input type="email" placeholder="Email" name='email' value={signUpData.email} onChange={handleSignUpChange}/>
            {signUpErrors.email &&(
            <div className='error-message'>{signUpErrors.email}</div>
            )}
            <input type="password" placeholder="Password" name='password' value={signUpData.password} onChange={handleSignUpChange}/>
            {signUpErrors.password &&(
            <div className='error-message'>{signUpErrors.password}</div>
            )}
            <button type='submit'>Sign Up</button>
         </form>
      </div>
      <div className="form-container sign-in-container">
         <form action="#" onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
               <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
               <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
               <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" name='email' value={signInData.email} onChange={handleSignInChange} />
            {signInErrors.email &&(
            <div className='error-message'>{signInErrors.email}</div>
            )}
            <input type="password" placeholder="Password" name='password' value={signInData.password} onChange={handleSignInChange} />
            {signInErrors.password &&(
            <div className='error-message'>{signInErrors.password}</div>
            )}
            <a href="#">Forgot your password?</a>
            <button type='submit'>Sign In</button>
         </form>
      </div>
      <div className="overlay-container">
         <div className="overlay">
            <div className="overlay-panel overlay-left">
               <h1>Welcome Back!</h1>
               <p>To keep connected with us please login with your personal info</p>
               <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
               <h1>Hello, Friend!</h1>
               <p>Enter your personal details and start journey with us</p>
               <button type='submit' className="ghost" id="signUp">Sign Up</button>
            </div>
         </div>
      </div>
   </div>
</div>
<Footer />
</>
);
}
export default SignLog;
