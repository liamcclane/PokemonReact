import React, { useState } from 'react';

import CSSClasses from './Footer.module.css';

import World from './../assets/images/icons/world-icon.png';

export default props => {

    const [footerLinks, setFooterLinks] = useState([
        "FAQ",
        "Help Center",
        "Account",
        "Media Center",
        "Investor Relations",
        "Jobs",
        "Redeem Gift Cards",
        "Buy ",
        "Gift ",
        "Cards",
        "Ways to Watch",
        "Terms of Use",
        "Privacy",
        "Cookie Preferences",
        "Corporate Information",
        "Contact Us",
        "Speed Test",
        "Legal Notices",
        "Netflix Originals"
    ]);
    const [helpNumber, setHelpNumber] = useState({
        wordNum: '1-800-HELP-ME!',
        numNum: '1-800-435-7631'
    });

    let buttonStyle = {
        "marginTop":"5px"
    };

    return (
        <div className="container-fluid" id={CSSClasses.Footer}>
            <div className="container-lg container-fluid-sm">
                <p>Questions? Call {helpNumber.wordNum}  or  {helpNumber.numNum}</p>
                <ul className={CSSClasses.footerList}>
                    {footerLinks.map((ele, i) => (
                        <li className={CSSClasses.footerTags} key={i} >{ele}</li>
                    ))}
                </ul>
                <div className="dropdown" style={buttonStyle}>
                    <button className="btn btn-outline-secondary dropdown-toggle"
                        type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={World} alt="world" class={CSSClasses.worldFooter}></img>
                    English
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/spanish">Spanish</a>
                    </div>
                </div>

            </div>
        </div>
    )
}