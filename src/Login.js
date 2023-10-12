import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { GoogleLoginButton ,AppleLoginButton} from "react-social-login-buttons";
import {LoginSocialGoogle, LoginSocialApple} from 'reactjs-social-login';
function Login(){
    const[values,setValues]=useState({
        user:"",
        password:"",
    })
    const[success,setSuccess]=useState(null);
    const[errors,setErrors]=useState({});
    const navigate=useNavigate();
    const handleLogin=async(e)=>{
        e.preventDefault();
        setErrors(validate(values))
        
        if(values.user=="" || values.password==''){
            setSuccess(false)
        }
        else{
            setSuccess(true);
            setTimeout(()=>{
                navigate('/Landing');
            },1000)
            
        }
        console.log(values)
    }

    const validate=(values)=>{
        const errors={};
        // const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(values.user==""){
            errors.user="Username is required"
        }
        if(values.password==""){
            errors.password="Password is required"
        }
        return errors;
    }
    const handleChange=(e)=>{
        
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    return(
        <>
        <div className="LoginPage">
            <div className="leftSide">
            <a href="#" className="logo">LOGO</a>
                <div className="banner">
                    <div className="loginMain"><h1>Board.</h1></div>
                </div>
                <div className="logoSec">
                    <div className="socialLogo">
                        <a href=""><img src="github.png"/></a>
                        <a href=""><img src="twitter.png"/></a>
                        <a href=""><img src="linkedin.png"/></a>
                        <a href=""><img src="discord.png"/></a>
                    </div>
                </div>
            </div>
            <div className="RightSide">
            <div className="form">
                <p>{success=== true && <div className="success"> Login Successful</div>}</p>
                <div className="formSection">
                <h2 className="signIn">Sign In</h2>
                <span className="subText">Sign in to your account</span>
                <div className="signOption">
                    <div>
                        <LoginSocialGoogle
                        client_id='330256855698-ksj08no1nhmhtogqule9dhjulu3b6eg4.apps.googleusercontent.com'
                        scope="openid profile email"
                        discoveryDocs="claims supported"
                        access_type="offline"
                        onResolve={({provider,data})=>{
                            console.log(provider,data)
                            navigate('/Landing');
                        }}  
                        onReject={(err)=>{
                            console.log(err)
                        }}
                        >
                        <GoogleLoginButton className="accountSignin"><span>Sign in with Google</span></GoogleLoginButton>
                        </LoginSocialGoogle>
                    </div>
                    <LoginSocialApple
                        client_id='330256855698-ksj08no1nhmhtogqule9dhjulu3b6eg4.apps.googleusercontent.com'
                        scope="openid profile email"
                        discoveryDocs="claims supported"
                        access_type="offline"
                        onResolve={({provider,data})=>{
                            console.log(provider,data)
                            navigate('/Landing');
                        }}  
                        onReject={(err)=>{
                            console.log(err)
                        }}
                        >
                        <AppleLoginButton className="appleSignin"><span>Sign in with Apple</span></AppleLoginButton>
                        </LoginSocialApple>
                    </div>
                </div>
                    <div className="signinForm">
                        <form onSubmit={handleLogin}>
                            <div className="inputField">
                                <label for="email">Email address</label>
                                <input id="email " type="email" placeholder="johndoe@gmail.com" autoComplete="off" name="user" value={values.user} className="formInput" onChange={handleChange}/>
                            </div>
                            {errors.user && <p>{errors.user}</p>}
                            <div className="inputField">
                                <label for="password">Password</label>
                                <input id="password" type="password" placeholder="••••••••" className="formInput" autoComplete="off" name="password" value={values.password} onChange={handleChange}/>
                            </div>
                            {errors.password && <p>{errors.password}</p>}
                            <div className="inputField">
                                <a href="#" className="forget">Forgot password?</a>
                            </div>
                            <div>
                                <button type="submit" className="submitBtn" >Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="register">
                        <span>Don’t have an account? <a href="#" className="regiserLink">Register here</a></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
export default Login;