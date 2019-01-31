import React from 'react'
import companyLogo from './img/logo.png'

const Logo = () =>  {
        return (
            <div className="logo_header">
                <img src={companyLogo} className="company_logo" alt="company logo"/>
            </div>
        );
}

export default Logo;