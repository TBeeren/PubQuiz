import React from 'react'
import FrontPageBanner from '../../FrontPageBanner/FrontPageBanner'
import WaitingClock from '../../WaitingClock/WaitingClock'

import './Waiting.css'

export default function Waiting(props)
{
    return(
        <div id="waitingScreen">
            <FrontPageBanner />
            <WaitingClock />
        </div>
    );
}