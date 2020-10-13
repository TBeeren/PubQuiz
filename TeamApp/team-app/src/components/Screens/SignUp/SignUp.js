import React from 'react'

import FrontPageBanner from '../../FrontPageBanner/FrontPageBanner'
import SignUpForm from '../../SignUpForm/SignUpForm' 

export default function SignUp(props)
{
    return(
        <div id="signUpScreen">
            <FrontPageBanner />
            <SignUpForm />
        </div>
    )
}