import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          });
      })
      .catch(error => {
        console.log(error.code, error.message);
        alert(error.message);
      });
  };

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='font-bold text-2xl text-center mt-5'>Register Your Account</h1>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">

            <label className="label">Your Name</label>
            <input name='name' className="input" placeholder="Enter your name" required />
            {nameError && <p className='text-xs text-red-500'>{nameError}</p>}

            <label className="label">Photo URL</label>
            <input name='photo' className="input" placeholder="Enter photo URL" required />

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <button type='submit' className="btn mt-3 btn-neutral">Register</button>

            <p className='font-semibold text-center p-1'>
              Already Have An Account ?
              <Link className='text-secondary hover:underline' to="/auth/login"> Login</Link>
            </p>

          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
