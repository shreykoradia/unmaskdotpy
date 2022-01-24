import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import "./dashboard.css"

function Dashboard() {
    return (
        <>
            <div className='dashboard'>
            {/* sidebar */}
                <Sidebar />
            {/* feed for Q&A */}
                <Feed />

            {/*  App documentation or widget  */}
            </div>
        </>
    )
}

export default Dashboard
