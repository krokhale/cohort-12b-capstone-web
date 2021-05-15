import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from "react";
function Dashboard() {

    useEffect(() => {
        if(!localStorage.getItem('token')){
            window.location.href = '/'
        }
    }, [])


    return (
        <div>

            <div className={'grid grid-cols-12'}>

                <div className={'col-span-12 border h-20 p-5 text-center bg-gray-200'}>
                    <h1 className={'text-2xl font-bold'}>App title</h1>

                </div>

                <div className={'col-span-12 sm:col-span-3 md:col-span-2 border h-96 p-5 text-center bg-gray-300'}>
                    Box 1
                </div>

                <div className={'col-span-12 sm:col-span-9 md:col-span-10  border h-96 p-5 text-center bg-gray-400'}>
                    Box 2
                </div>

            </div>

        </div>
    );
}

export default Dashboard;
