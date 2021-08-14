import React from 'react'
import "./Header.css"
import { Search , Language , ExpandMore } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'


function Header() {
    return (
        <div className="header">
            <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />

            <div className="header__center">
                <input type="text" className="" />
                <Search/>
            </div>
            
            <div className="header__right">
                <p>Become a host</p>
                 
            </div>
        </div>
    )
}

export default Header
