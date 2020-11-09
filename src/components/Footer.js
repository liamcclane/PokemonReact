import React, { useState } from 'react';

import CSSClasses from './Footer.module.css';


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
    ])

    return (
        <div className="container-lg container-fluid-sm">
            <ul className={CSSClasses.footerList}>
                {footerLinks.map((ele, i) => (
                    <li className={CSSClasses.footerTags} key={i} >{ele}</li>
                ))}
            </ul>
        </div>
    )
}