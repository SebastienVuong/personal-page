import React, { Component } from 'react';
import { Link } from 'react-router';
// import JavaScriptGame from './modals/JavaScriptGame';
import './App.css';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            onHomepage: true
        }
    }
    
    onHomepage = (areWe) => {
        this.setState({
           onHomepage: areWe 
        });
    }

    render() {
        return (
            <div className="App">
                <div className="top-menu">
                    <div className="profile">
                        <div className="profile-picture-box">
                            <Link to="/">
                                <svg viewBox=" 0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                      <pattern id="profilepict" x="0" y="0" width="1" height="1">
                                        <image width="100" height="100"
                                               xlinkHref="http://i.imgur.com/mAomY7V.jpg"/>
                                      </pattern>
                                    </defs>
                                    <polygon points="1,50 25,93.3 75,93.3 99,50 75,6.7 25,6.7" fill="url(#profilepict)"/>
                                </svg>
                                <p className="home-title">Home</p>
                            </Link>
                        </div>
                        <div className="profile-links">
                            <a href='https://www.linkedin.com/in/sebastienvuong/' target="_blank">
                                <div className="linkedin-link hex-button">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </div>
                            </a>
                            <a href='https://github.com/SebastienVuong' target="_blank">
                                <div className="github-link hex-button">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={this.state.onHomepage ? "App-bar" : "App-bar-slide-out"}>
                        <div className="Main-buttons">
                            <div className="Main-button-1">
                                <Link to="/aboutme" className="top-button button-1">
                                    <div className="hex-button">
                                        <p className="Main-button-text">About Me</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="Main-button-2">
                                <Link to="/languages" className="top-button button-2">
                                    <div className="hex-button">
                                        <p className="Main-button-text">Languages</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="Main-button-3">
                                <Link to="/projects" className="top-button button-3">
                                    <div className="hex-button">
                                        <p className="Main-button-text">Projects</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="Main-button-4">
                                <Link to="/others" className="top-button button-4">
                                    <div className="hex-button">
                                        <p className="Main-button-text">Hobbies</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="Main-button-5">
                                <Link to="/contact" className="top-button button-5">
                                    <div className="hex-button">
                                        <p className="Main-button-text">Contact</p>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    {React.cloneElement(this.props.children, {onHomepage: this.onHomepage})}
                </div>
            </div>
        );
    }
}

export default App;
