import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto mt-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
               
                    <aside className='col-span-3 top-5 h-fit sticky'>
                        <LeftAside></LeftAside>
                    </aside>
                <section className='main col-span-6 '>
                    <Outlet>

                    </Outlet>
                </section>
                <aside className='col-span-3  top-5 h-fit sticky'>
                    <RightAside></RightAside>
                </aside>


            </main>
        </div>
    );
};

export default HomeLayout;