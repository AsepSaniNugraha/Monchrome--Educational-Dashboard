import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

const DashboardLayout = () => {
    return (
        <div className="p-4 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen gap-4 overflow-hidden">
            <div className="row-span-2 z-10">
                <Sidebar />
            </div>
            <div>
                <Header />
            </div>
            <main className="bg-slate-100 p-4 rounded-xl overflow-hidden">
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout