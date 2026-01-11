import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import Class from "../../assets/class.png"
import BG from '../../assets/bg.png'
import playGround from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div>
            <div className='bg-base-200 p-3'>
                <h2 className='font-bold mb-5'>Qzone</h2>
                <div className='space-y-5'>
                    <img src={swimmingImage} alt="" />
                    <img src={Class} alt="" />
                    <img src={playGround} alt="" />
                </div>
            </div>
            
            <div className='mt-3'>
                <img src={BG} alt="" />
            </div>
        </div>
    );
};

export default Qzone;