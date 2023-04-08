import React from 'react'
import {Link} from 'react-router-dom'
import {  Tooltip, Typography} from '@material-ui/core'
import { Button } from '@material-ui/core';
import {FiHome , FiHash , FiUser , FiSettings , FiPlus}  from  'react-icons/fi';
import {DiGitMerge , DiCode} from 'react-icons/di';
import './sidebar.css'


function Sidebar() {
    return (
        <div className='sidebar'>
            {/* Hackathon Fleet Name  */}
            <Typography variant="overline"  className='brandname'>Hack Fleet</Typography>
            {/* SidebarOption home  */}
            <Tooltip title="Home"><Button variant="text" className='sidebar-button' component={Link} to="/dashboard"><FiHome className='icons' /></Button></Tooltip>
            {/* SidebarOption explore */}
            <Tooltip title="Explore"><Button variant="text" className='sidebar-button' component={Link} to="/explore"><FiHash className='icons' /></Button></Tooltip>
            {/* SidebarOption hackathons */}
            <Tooltip title="Hackathons"><Button variant="text" className='sidebar-button' component={Link} to="/hackathons"><DiGitMerge className='icons' /></Button></Tooltip>    
            {/* SidebarOption codereview */}
            <Tooltip title="Code-Review"><Button variant="text" className='sidebar-button' component={Link} to="/codereview"><DiCode className='icons' /></Button></Tooltip>
            {/* SidebarOption Profile */}
            <Tooltip title="Profile"><Button variant="text" className='sidebar-button' component={Link} to="/profile"><FiUser className='icons' /></Button></Tooltip>
            {/* SidebarOption more  */}
            <Tooltip title="Settings"><Button variant="text" className='sidebar-button' component={Link} to="/dashboard" ><FiSettings className='icons' /></Button></Tooltip>
            {/* Button for the post  */}
            <Tooltip title="Post"><Button variant="text" className='sidebar-button'  component={Link} to="/dashboard"><FiPlus className='icons' /></Button></Tooltip>          
        </div>
    )
}

export default Sidebar
