import React from 'react';

// importing other components
// importing style sheets
import CSSClasses from './FAQItem.module.css';
// importing static content
import Plus from './../../../../assets/images/icons/plus-sm.png';
import EX from './../../../../assets/images/icons/x_icon.png';

export default ({ title, information, ind, openHandler, isOpen }) => {

    let cardClasses = ["card", "mb-2", CSSClasses.myCard];
    let titleClasses = ["card-header", CSSClasses.title];
    let cardBodyClasses = ["card-body", CSSClasses.cardBody];

    cardClasses = cardClasses.join(" ");
    titleClasses = titleClasses.join(" ");
    cardBodyClasses = cardBodyClasses.join(" ");

    return (
        <div className={cardClasses}>
            <div className={titleClasses} id={"heading" + ind} >
                <div className="mb-0 row align-items-center justify-content-between"
                    data-toggle="collapse" data-target={"#title" + ind} aria-expanded="false"
                    aria-controls={"title" + ind} onClick={(e) => openHandler(e, ind)}>
                    <span className="ml-3">
                        {title}
                    </span>
                    {isOpen
                        ? <img className={CSSClasses.iconImg} alt="close" src={EX} ></img>
                        : <img className={CSSClasses.iconImg} alt="open" src={Plus} ></img>
                    }
                </div>
            </div>

            <div id={"title" + ind} className="collapse" aria-labelledby={"heading" + ind} data-parent="#accordion">
                <div className={cardBodyClasses}>
                    {information.map((ele, i) => (
                        <p ind={i} key={i}>{ele}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};