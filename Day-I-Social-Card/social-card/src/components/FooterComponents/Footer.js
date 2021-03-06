import React from 'react';
import './Footer.css';

const Footer = () => {
    return <div className="footerBar">
        <div className="conversation"><img src="/img/conversation.png" alt="Converation icon"/></div>
        <div className="retweet padLeft"><img src="/img/retweet.png" alt="Retweet icon"/>&nbsp;&nbsp;&nbsp;6</div>
        <div className="heart padLeft"><img src="/img/heart.png" alt="Heart icon"/>&nbsp;&nbsp;&nbsp;4</div>
        <div className="mail padLeft"><img src="/img/mail.png" alt="Mail icon"/></div>
    </div>
}

export default Footer;