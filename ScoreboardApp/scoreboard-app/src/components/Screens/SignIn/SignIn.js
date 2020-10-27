import React from 'react'

import FrontPageBanner from '../../FrontPageBanner/FrontPageBanner'
import SignInForm from '../../SignInForm/SignInForm' 

export default function SignIn(props)
{
    return(
        <div id="signUpScreen">
            <FrontPageBanner />
            <SignInForm history={props.history} audioCallback={props.audioCallback}/>
        </div>
    )
}