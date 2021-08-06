import { Component } from "react";
import { Link } from 'react-router-dom';
import '../authentication.css';
import AuthenticationLogo from '../../../assets/images/authentication-logo.png';

class AuthenticationCommon extends Component {
    render () {
        return (
            <>
                <div className="login-aside lg:max-w-md	xl:max-w-screen-sm w-full bg-cover bg-no-repeat p-10">
                    <div className="flex flex-col justify-between h-full">
                        <Link to="/" className="pb-10 lg:pb-0 mt-5">
                            <img src={AuthenticationLogo} alt="logo" className="max-h-16" />
                        </Link>

                        <div className="flex flex-col justify-center">
                            <h3 className="text-white text-2xl mb-5 font-medium">Welcome to Metronic!</h3>
                            <p className="text-white font-light	opacity-80 text-xs">The ultimate Bootstrap & React 16 admin theme framework for next generation web apps.</p>
                        </div>

                        <div className="hidden lg:flex justify-between mt-10 text-white">
                            <div className="opacity-70 font-medium text-xs">
                                © 2021 Metronic
                            </div>

                            <div className="flex text-xs">
                                <Link to="#" className="text-white ml-10">Privacy</Link>
                                <Link to="#" className="text-white ml-10">Legal</Link>
                                <Link to="#" className="text-white ml-10">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AuthenticationCommon;