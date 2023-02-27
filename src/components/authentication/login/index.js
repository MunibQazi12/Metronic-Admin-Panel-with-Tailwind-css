import { useState } from "react";
import { Link } from 'react-router-dom';
import '../authentication.css';
import AuthenticationCommon from "../authenticationCommon";

const Login = () => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUseremail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(errorHandler()) {
            return
        } 
    }

    const errorHandler = () => {
        const tempErrors = {...errors}
    
        //Email
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(useremail.length == 0) {
            tempErrors.useremail = "Email Field is empty"
        }
        else if(!(regex.test(useremail))) {
            tempErrors.useremail = "Wrong email format"
        }

        //Password
        if(password.length == 0) {
            tempErrors.password = "Password field is empty"
        }

        setErrors(tempErrors);

        return(Object.keys(errors).length);
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <div className="flex flex-col lg:flex-row lg:h-full">
            <AuthenticationCommon />
            <div className="flex relative flex-col overflow-hidden overflow-y-auto p-7 w-full poppins">
                <div className="absolute top-0 right-0 mt-5 mb-15 lg:mb-0 px-10">
                    <span className="text-xs font-medium text-gray-500">Don't have an account yet? </span>
                    <Link to="/auth/registration" className="font-medium text-xs text-blue-500 hover:text-blue-600"> Sign Up!</Link>
                </div>

                <div className="flex justify-center	items-center flex-col mt-20 lg:mt-32">
                    <div className="login-form lg:max-w-md lg:w-full">
                        <div className="text-center	mb-10 lg:mb-20">
                            <h3 className="text-2xl font-medium text-gray-700 mb-2">Login Account</h3>
                            <p className="font-medium text-gray-400 text-sm">Enter your username and password</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-7 relative">
                                <input type="email" value={useremail} name="useremail" onChange={handleChange} placeholder="Email" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                <i className={(re.test(useremail)) && (errors.useremail) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                <i className={(errors.useremail) && ((!re.test(useremail))) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                <span className="text-xs text-red-400">{(useremail.length < 4) && errors && errors.useremail}</span>
                            </div>

                            <div className="mb-7 relative">
                                <input type="password" value={password} name="password" onChange={handleChange} placeholder="Password" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />                           
                            </div>

                            <div className="flex justify-between items-center">
                                <Link to="/auth/forgot-password">
                                    <button type="button" className="outline-none focus:outline-none hover:text-blue-500 text-gray-500 transition-all text-xs">Forgot Password</button>
                                </Link>
                                
                                <button type="submit" className="font-medium outline-none focus:outline-none px-9 py-4 mx-3 bg-blue-500 rounded-lg text-white text-xs">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            
                <div className="flex lg:hidden justify-center sm:justify-between mt-10 text-gray-500 flex-col sm:flex-row">
                    <div className="opacity-70 font-medium text-xs text-center sm:text-left mb-3 sm:mb-0">
                        © 2021 Metronic
                    </div>

                    <div className="flex text-xs justify-center">
                        <Link to="#" className="text-gray-500 ml-10">Privacy</Link>
                        <Link to="#" className="text-gray-500 ml-10">Legal</Link>
                        <Link to="#" className="text-gray-500 ml-10">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;