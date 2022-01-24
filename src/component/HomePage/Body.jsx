import React from 'react'
import {Typography } from '@material-ui/core'
import './body.css'

function Body() {
    return (
        <div>
            <Typography   paragraph={true} align="center" gutterBottom={true} variant="overline" noWrap={false}>
             Building Community for hackathons, Q&A and Code Reviews
            </Typography>
            <Typography   paragraph={true} align="center" gutterBottom={false} variant="overline" noWrap={false}>
                Join the game ! and start contributing to Community
            </Typography>
        </div>
    )
}


   

export default Body
