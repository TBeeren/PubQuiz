import React, {useEffect} from 'react'

import FrontPageBanner from '../../FrontPageBanner/FrontPageBanner'
import SignUpForm from '../../SignUpForm/SignUpForm' 
import { useDispatch, useSelector } from 'react-redux'
import {resetGameAction} from '../../../actions/SignUpActions'
import { useAlert } from 'react-alert'
import { invalidNameAlertAction } from '../../../actions/SignUpActions'


export default function SignUp(props)
{
    const dispatch = useDispatch();
    const invalidName = useSelector(state => state.signUpInfo.invalidName);
    const alert = useAlert()


    if(invalidName)
    {
        alert.error("That name is already in use", {timeout: 3000});
        dispatch(invalidNameAlertAction(false));
    }

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