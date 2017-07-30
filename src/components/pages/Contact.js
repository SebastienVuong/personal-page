import React, { Component } from 'react';
import Mailgun from 'mailgun-js';
// import JavaScriptGame from '../modals/JavaScriptGame';
import './Contact.css';

export default class Contact extends Component {

    constructor() {
        super();
        this.state = {
            currentSection: 0
        }
    }
    
    // _handleClick = (buttonIdx) => {
    //     this.setState({
    //         currentSection: buttonIdx
    //     })
    // }
    
    componentDidMount = () => {
        this.props.onHomepage(false);
    }
    
    componentWillUnmount = () => {
        this.props.onHomepage(true);
    }
    
    _handleSubmit = () => {
        
    }

    render() {
        let content =[];
        content.push({
            title: "Contact Info",
            entries: [
                {
                    title: "Phone",
                    subtitle: "(514)567-3318",
                    icon: "phone"
                },
                {
                    title: "Email",
                    subtitle: "sebastien.vuong.teamcanada@gmail.com",
                    icon: "envelope"
                },
                {
                    title: "LinkedIn",
                    subtitle: "https://www.linkedin.com/in/sebastienvuong",
                    icon: "linkedin"
                },
                {
                    title: "GitHub",
                    subtitle: "https://github.com/SebastienVuong",
                    icon: "github"
                }
            ]
        });

        return (
            <div className="content-body">
                <div className="nav-bar-container">
                    <form className="mailing-form">
                        Email Me <i className="fa fa-envelope" aria-hidden="true"></i> <br/>
                        <p><textarea className="name-input" type="text" ref="name" placeholder="Your Name"/> </p>
                        <p><textarea className="email-input" type="text" ref="email" placeholder="Your Email Address"/> </p>
                        <p><textarea className="message-input" type="text" ref="message" placeholder="Your Message"/> </p>
                        <button className="send-button" onClick={this._handleSubmit}>Send message</button>
                    </form>
                </div>
                <div ref="content" className="main-content gradientback">
                    <div className="content-section">
                        {this.state.currentSection >= 0 ? 
                            (<div className="content">
                                <div className="section-title">
                                    {content[this.state.currentSection].title.toUpperCase()}
                                    {content[this.state.currentSection].entries.map(entry=>
                                        (<div key={entry.title} className="contact-entry">
                                            <div className="entry-icon">
                                                <i className={`fa fa-${entry.icon}-square`} aria-hidden="true"></i>
                                            </div>
                                            <div className="entry-content">
                                                <span className="entry-title">{entry.title}</span>
                                                <span className="entry-description">
                                                    <pre>{entry.subtitle}</pre>
                                                </span>
                                            </div>
                                        </div>)
                                    )}
                                </div>
                            </div>)
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

