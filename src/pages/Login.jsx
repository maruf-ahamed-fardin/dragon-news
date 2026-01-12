import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");

    const { signIn } = use(AuthContext);
    const location =useLocation();
    const Navigate = useNavigate();
    // console.log(location)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password })
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Navigate(`${location.state? location.state : "/"}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert( errorCode,errorMessage)
                setError(errorCode);
            });
    }

    return (

        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-2xl text-center mt-5 '>Login Your Account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className=" link link-hover">Forgot password?</a></div>

                    {error && <p className='text-red-500'>{error}</p>}
                        <button type='submit' className="btn btn-neutral ">Login</button>
                        <p className='font-semibold text-center p-1'>Don't Have An Account ? <Link className='text-secondary hover:underline' to="/auth/register">Register</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default Login;