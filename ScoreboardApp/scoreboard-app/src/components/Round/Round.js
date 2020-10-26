import React from 'react'
import { useSelector } from 'react-redux'
import './Round.css'

export default function Round(props)
{
    const roundNumber = useSelector(state => state.round.roundNumber);
    return(
        <div id="round-info">
            <span id="round-text">Round: {roundNumber}</span> 
        </div>
    )
}