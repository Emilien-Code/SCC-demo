import React from "react";
import "../../assets/styles/modules/header.scss";
import Search from "../atoms/Search"
import Button from "../atoms/Button"
import logoHeader from "../../assets/images/Logoheader-logo.png"

const Header = ({data}) => {
    let display = data.display
    if(!data.display){
        display = "search"
    }
    return (
        <header>
            <div className="left">
                <img src={logoHeader} className="logo" alt="logo"/>
                {(display==="search" || display==="left" ) && (<p>Featuring pricing blog</p>)}
            </div>
                {display==="center" && (<p>Featuring pricing blog</p>)}
            <div className="right">
                {display==="right" && (<p>Featuring pricing blog</p>)}
                {display==="search" && (<Search/>)}
                <Button type="link" text="Join Wait List"/>
            </div>
        </header>
    )
}
export default Header