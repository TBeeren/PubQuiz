import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import FrontPageBanner from '../../FrontPageBanner/FrontPageBanner'
import WaitingClock from '../../WaitingClock/WaitingClock'

import './Waiting.css'

export default function Waiting(props)
{
    const isStarted = useSelector((state) => state.signUpInfo.isStarted);

    useEffect(() => {
        if(isStarted)
        {
            props.history.push("/question");
        }
    });

    return(
        <div id="waitingScreen">
            <FrontPageBanner />
            <WaitingClock />
        </div>
    );
}