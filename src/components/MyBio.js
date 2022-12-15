import React from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom'
import AppProvider from '../context/AppProvider';
import Footer from './Footer';

const MyBio = (props) => (
    
        <AppProvider>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </AppProvider>
)

export default MyBio