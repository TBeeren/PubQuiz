import React, {useEffect} from 'react'

import FrontPageBanner from '../../FrontPageBanner/FrontPageBanner'
import SignUpForm from '../../SignUpForm/SignUpForm' 
import { useDispatch } from 'react-redux'
import {resetGameAction} from '../../../actions/SignUpActions'

export default function SignUp(props)
{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetGameAction());
    });
    return(
        <div id="signUpScreen">
            <FrontPageBanner />
            <SignUpForm history={props.history}/>
        </div>
    )
}