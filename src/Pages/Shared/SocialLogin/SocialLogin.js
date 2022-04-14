import React from 'react';
import {useSignInWithGoogle, useSignInWithGithub} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import {auth} from '../../../Firebase.init'
import google from '../../../img/google.png'
import github from '../../../img/github.png'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, guser, gloading, gerror] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const googleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }
    const githubSignIn = event => {
        event.preventDefault();
        signInWithGithub();
    }
    if(user || guser){
        navigate("/");
        console.log(user);
        console.log(guser);
    }
    if(loading || gloading){
        console.log(loading);
    }
    if(error || gerror){
        console.error(error);
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-center mt-2'>
                 <div className="border-2 border-success"/>
                <p>or</p>
                <div className=" border-2 border-success"/>
            </div>
            <button className="btn w-100 " onClick={googleSignIn}> <img className='icon' style={{width:"24px", height:"24px", marginLeft:"5px" }} src={google} alt="" /> Sign In With Google</button> <br />
            <button className="btn w-100 " onClick={githubSignIn}> <img className='icon' style={{width:"24px", height:"24px", marginLeft:"5px" }} src={github} alt="" /> Sign In With Github</button>
        </div>
    );
};

export default SocialLogin;