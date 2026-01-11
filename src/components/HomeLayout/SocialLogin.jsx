import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className="space-y-3">
                <button className='btn btn-secondary btn-outline w-full'><FaGoogle size={24}></FaGoogle> Login with Google</button>
                <button className='btn btn-primary btn-outline w-full'><FaGithub size={24}></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;