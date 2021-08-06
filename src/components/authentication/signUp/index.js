import { Component } from "react";
import { Link } from 'react-router-dom';
import '../authentication.css';
import AuthenticationCommon from "../authenticationCommon";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            useremail: '',
            username: '',
            password: '',
            confirmpassword: '',
            errors: {

            }
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    
    handleSubmit = (event) => {
        
        event.preventDefault();
        if(this.errorHandler()){
            
            return
        }
    }

    errorHandler = () => {
        const errors = {...this.state.errors}

        //Full Name
        if(this.state.fullname.length == 0) {
            errors.fullname = "Full Name field is empty"
        }
        else if (this.state.fullname.length < 3){
            errors.fullname = "Minimum 3 symbols"
        }

        //Email
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.useremail.length == 0) {
            errors.useremail = "Email Field is empty"
        }
        else if(!(regex.test(this.state.useremail))) {
            errors.useremail = "Wrong email format"
        }

        //User Name
        if(this.state.username.length == 0) {
            errors.username = "User name field is empty"
        }
        else if (this.state.username.length < 3){
            errors.username = "Minimum 3 symbols"
        }

        //Password
        if(this.state.password.length == 0) {
            errors.password = "Password field is empty"
        }
        else if (this.state.password.length < 3){
            errors.password = "Minimum 3 symbols"
        }

        //Confirm Password
        if(this.state.confirmpassword.length == 0) {
            errors.confirmpassword = "Password field is empty"
        }
        else if (this.state.confirmpassword.length < 3){
            errors.confirmpassword = "Minimum 3 symbols"
        }

        this.setState({
            errors: errors
        })

        return(Object.keys(errors).length);
    }

    render () {
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
            <>
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

                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-7 relative">
                                        <input type="text" value={this.state.fullname} name="fullname" onChange={this.handleChange} placeholder="Full name" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                        <i className={((this.state.fullname.length > 3)) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                        <i className={(this.state.errors.fullname && this.state.fullname.length < 4) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                        <span className="text-xs text-red-400">{this.state.fullname.length < 4 && this.state.errors && this.state.errors.fullname}</span>
                                    </div>

                                    <div className="mb-7 relative">
                                        <input type="text" value={this.state.useremail} name="useremail" onChange={this.handleChange} placeholder="Email" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                        <i className={(re.test(this.state.useremail)) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                        <i className={(this.state.errors.useremail) && ((!re.test(this.state.useremail))) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                        <span className="text-xs text-red-400">{!(re.test(this.state.useremail)) && this.state.errors && this.state.errors.useremail}</span>
                                    </div>

                                    <div className="mb-7 relative">
                                        <input type="text" value={this.state.username} name="username" onChange={this.handleChange} placeholder="User name" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                        <i className={(this.state.username.length > 3) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                        <i className={(this.state.errors.username && this.state.username.length < 3) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                        <span className="text-xs text-red-400">{(this.state.username.length < 4) && this.state.errors && this.state.errors.username}</span>
                                    </div>

                                    <div className="mb-7 relative">
                                        <input type="password" value={this.state.password} name="password" onChange={this.handleChange} placeholder="Password" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                        <i className={(this.state.password.length > 3) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                        <i className={(this.state.errors.password && this.state.password.length < 4 ) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                        <span className="text-xs text-red-400">{(this.state.password.length < 4) && this.state.errors && this.state.errors.password}</span>
                                    </div>

                                    <div className="mb-7 relative">
                                        <input type="password" value={this.state.confirmpassword} name="confirmpassword" onChange={this.handleChange} placeholder="Confirm Password" className="text-xs focus:outline-none h-14 w-full bg-gray-100 px-6 py-5 text-gray-600 rounded-lg" />
                                        <i className={(this.state.confirmpassword == this.state.password) && (this.state.confirmpassword.length > 0) ? "text-green-500 material-icons absolute right-3 top-3" : "hidden"}>check</i>
                                        <i className={(this.state.errors.confirmpassword) && (this.state.confirmpassword != this.state.password || this.state.confirmpassword.length == 0) ? "text-red-500 material-icons absolute right-3 top-3 rotate-z-180" : "hidden"}>info_outline</i>
                                        <span className="text-xs text-red-400">{this.state.confirmpassword.length < 4 && this.state.errors && this.state.errors.confirmpassword}</span>
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

                
            </>
        )
    }
}

export default Signup;