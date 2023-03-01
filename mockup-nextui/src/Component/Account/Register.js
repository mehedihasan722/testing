import 'boxicons';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import app from '../Firebase/firebase.config';

const auth =getAuth(app);
const Register = () => {

 const [signInWithGoogle] = useSignInWithGoogle(auth);
  // create account
  const[name,setName] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError]=useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);
  //handling
  const handleNameBlur = event =>{
    setName(event.target.value);
  }; 
  const handleEmailBlur = event =>{
    setEmail(event.target.value);
  };
  const handlePasswordBlur = event =>{
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value);
  };
  const handleCreateUser = event =>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError(" Password not match");
        return;
    }
    if(password.length<6){
        setError("Password must be 6 characters or longer")
        return;
    }
    createUserWithEmailAndPassword(email,password)
  };
 
 //replace
  const location = useLocation();
  const navigate = useNavigate();
  const from =location?.state?.from?.pathname || '/'
  if(user){
    navigate('/total')
  }
  //google log in
  
const handleGoogleSignIn = ()=>{
  signInWithGoogle()
  .then(()=>{
    navigate(from,{replace:true})
  })
}
    return (
        <div>
        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div class="w-full max-w-md space-y-8">
<div>
  <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
  <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create Your Account</h2>
</div>
<form onSubmit={handleCreateUser} class="mt-8 space-y-6" action="#" method="POST">
  <input type="hidden" name="remember" value="true"/>
  <div class="-space-y-px rounded-md shadow-sm">
    <div>
      <label for="full-name" class="sr-only">Full Name</label>
      <input onBlur={handleNameBlur} id="full-name" name="name" type="name" autocomplete="name" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Full name"/>
    </div>
    <div>
      <label for="email-address" class="sr-only">Email address</label>
      <input onBlur={handleEmailBlur} id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
    </div>
    <div>
      <label for="password" class="sr-only">Password</label>
      <input onBlur={handlePasswordBlur} id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
    </div>
    <div>
      <label for="password" class="sr-only">Confirm Password</label>
      <input onBlur={handleConfirmPasswordBlur} id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Confirm Password"/>
    </div>
  </div>

  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
     <p>...I accept all your <NavLink className="font-medium text-indigo-600 hover:text-indigo-500">Terms and Condition</NavLink>  </p>
    </div>
  </div>
<p class="text-red-500">{error}</p>
  <div>
    <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
       
        <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
        </svg>
      </span>
      Sign Up
    </button>
  </div>
  <p class='text-red'>{error?.message}</p>
  <p>Already have an account? <NavLink to="/login" className="text-rose-600">Log in</NavLink></p>
  <div class="relative flex py-5 items-center">
<div class="flex-grow border-t border-gray-400"></div>
<span class="flex-shrink mx-4 ">Or Continue With</span>
<div class="flex-grow border-t border-gray-400"></div>
</div>
<div class="flex justify-center space-x-4">
  <div>
    <button type='button' onClick={handleGoogleSignIn} class="bg-gray-200 hover:bg-gray-500 text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center"><box-icon type='logo' name='google'></box-icon></button></div>

  <div>
    <button  type='button' class="bg-gray-300 hover:bg-blue-300 text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center"><box-icon type='logo' name='facebook'></box-icon></button></div>

  <div><button type='button'  class="bg-gray-300 hover:bg-cyan-300 text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center"><box-icon type='logo' name='twitter'></box-icon></button></div>
</div>
</form>
</div>
</div>
    </div>
    );
};

export default Register;