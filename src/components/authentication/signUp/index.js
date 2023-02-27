import { useState } from "react";
import { Link } from 'react-router-dom';
import '../authentication.css';
import AuthenticationCommon from "../authenticationCommon";

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setUserErrors] = useState({});

    const handleChange = (event) => {
        setUserEmail(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(errorHandler()){
            return
        }
    }

    const errorHandler = () => {
        const tempErrors = {...errors}

        //Full Name
        if(fullName.length == 0) {
            tempErrors.fullName = "Full Name field is empty"
        }
        else if (fullName.length < 3){
            errors.fullName = "Minimum 3 symbols"
        }

        //Email
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(userEmail.length == 0) {
            errors.userEmail = "Email Field is empty"
        }
        else if(!(regex.test(userEmail))) {
            errors.userEmail = "Wrong email format"
        }

        //User Name
        if(userName.length == 0) {
            errors.userName = "User name field is empty"
        }
        else if (userName.length < 3){
            errors.userName = "Minimum 3 symbols"
        }

        //Password
        if(password.length == 0) {
            errors.password = "Password field is empty"
        }
        else if (password.length < 3){
            errors.password = "Minimum 3 symbols"
        }

        //Confirm Password
        if(confirmPassword.length == 0) {
            errors.confirmPassword = "Password field is empty"
        }
        else if (confirmPassword.length < 3){
            errors.confirmPassword = "Minimum 3 symbols"
        }

        setUserErrors(tempErrors);

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

                <div className="flex justify-center	items-center flex-col mt-20 lg:mt-10">
                    <div className="login-form lg:max-w-md lg:w-full">
                        <div className="text-center	mb-10 lg:mb-20">
                            <h3 className="text-2xl font-medium text-gray-700 mb-2">Sign Up</h3>
                            <p className="font-medium text-gray-400 text-sm">Enter your details to create your account</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-7 relative">
                                <input type="text" value={fullName} name="fullname" onChange={handleChange} placeholder="Full name" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                <i className={((fullName.length > 3)) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                <i className={(errors.fullName && fullName.length < 4) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                <span className="text-xs text-red-400">{fullName.length < 4 && errors && errors.fullName}</span>
                            </div>

                            <div className="mb-7 relative">
                                <input type="text" value={userEmail} name="useremail" onChange={handleChange} placeholder="Email" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                <i className={(re.test(userEmail)) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                <i className={(errors.userEmail) && ((!re.test(userEmail))) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                <span className="text-xs text-red-400">{!(re.test(userEmail)) && errors && errors.userEmail}</span>
                            </div>

                            <div className="mb-7 relative">
                                <input type="text" value={userName} name="username" onChange={handleChange} placeholder="User name" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                <i className={(userName.length > 3) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                <i className={(errors.username && userName.length < 3) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                <span className="text-xs text-red-400">{(userName.length < 4) && errors && errors.userName}</span>
                            </div>

                            <div className="mb-7 relative">
                                <input type="password" value={password} name="password" onChange={handleChange} placeholder="Password" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                <i className={(password.length > 3) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                <i className={(errors.password && password.length < 4 ) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                <span className="text-xs text-red-400">{(password.length < 4) && errors && errors.password}</span>
                            </div>

                            <div className="mb-7 relative">
                                <input type="password" value={confirmPassword} name="confirmpassword" onChange={handleChange} placeholder="Confirm Password" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                <i className={(confirmPassword == password) && (confirmPassword.length > 0) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                <i className={(errors.confirmPassword) && (confirmPassword != password || confirmPassword.length == 0) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                <span className="text-xs text-red-400">{confirmPassword.length < 4 && errors && errors.confirmpassword}</span>
                            </div>

                            <div className="mb-7">
                                <div className="inline-block">
                                    <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
                                    <label htmlFor="styled-checkbox-1" className="text-xs flex flex-row-reverse text-blue-500 hover:text-blue-600">I agree the Terms & Conditions</label> 
                                </div>  
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="font-medium outline-none focus:outline-none px-9 py-4 mx-3 bg-blue-500 rounded-lg text-white text-xs" >Submit</button>

                                <Link to="#">
                                    <button type="button" className="font-medium outline-none focus:outline-none px-9 py-4 mx-3 hover:bg-blue-500 bg-blue-100 rounded-lg hover:text-white text-blue-500 transition-all text-xs">Cancel</button>
                                </Link>
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

export default Signup;