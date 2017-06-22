import React, { Component } from 'react';
// import JavaScriptGame from '../modals/JavaScriptGame';
import './Languages.css';

class Languages extends Component {
    
    constructor() {
        super();
        this.state = {
            currentSection: -5
        }
    }
    
    _handleClick = (buttonIdx) => {
        this.setState({
            currentSection: buttonIdx
        })
    }
    
    componentDidMount = () => {
        this.props.onHomepage(false);
    }
    
    componentWillUnmount = () => {
        this.props.onHomepage(true);
    }

    render() {
        let content = [];
        content.push({
            title: "Technical",
            entries: [
                {
                    title: "Front-End",
                    tasks: ["HTML5", "CSS3", "JavaScript", 
                                "React", "jQuery", "Bootstrap", 
                                "Pug (Jade)", "Aurelia"],
                    logos: ["html5", "css3", "javascript",
                                "react", "jquery", "bootstrap",
                                "pug", "aurelia"]
                },
                {
                    title: "Back-End",
                    tasks: ["NodeJS", "Express", "MySQL", 
                                "MatLab"],
                    logos: ["nodejs", "express", "mysql",
                                "matlab"]
                },
                {
                    title: "Tooling",
                    tasks: ["Git", "GitHub", "Webpack", 
                                "Babel"],
                    logos: ["git", "github", "webpack",
                                "babel"]
                }
            ]
        });
        content.push({
            title: "Communication",
            entries: [
                {
                    title: "Native - Spoken at home since childhood",
                    subtitle: "",
                    tasks: ["French", "Vietnamese", "Cantonese"]
                },
                {
                    title: "Fluent - Regularly spoken at work and at home",
                    subtitle: "",
                    tasks: ["English"]
                },
                {
                    title: "Basic - Learned through courses in school",
                    subtitle: "",
                    tasks: ["Mandarin", "Spanish"]
                }
            ]
        });
        
        var that = this;
        return (
            <div className="content-body">
                <div className="nav-bar-container">
                    <div className="nav-bar">
                        {content.map((section,idx)=>
                            (<button 
                                key={section.title} 
                                className="nav-button"
                                onClick={that._handleClick.bind(this, idx)}
                            >
                                {section.title}
                            </button>)
                        )}
                    </div>
                </div>
                <div ref="content" className="main-content gradientback">
                    <div className="content-section">
                        {this.state.currentSection > 0 ? 
                            (<div className="pre-content-section">
                                {content.slice(0,this.state.currentSection).map((section,idx)=>
                                    (<div key={idx} className="section-title pre-content link-title" onClick={that._handleClick.bind(this,idx)}>            
                                        {section.title.toUpperCase()}
                                        <br/>
                                        <hr/>
                                    </div>)
                                )}
                            </div>)
                            : (<div className="pre-content-section"></div>)}
                        {this.state.currentSection >= 0 ? 
                            (<div className="content">
                                <div className="section-title">
                                    {content[this.state.currentSection].title.toUpperCase()}
                                    {content[this.state.currentSection].entries.map(entry=>
                                        (<div key={entry.title}>
                                            {entry.logos ?
                                            (<div className="section-entry">
                                                <span className="entry-title">{entry.title}</span>
                                                <ul>
                                                {entry.tasks.map((task,idx)=>
                                                    (<li key={task} className="entry-task">
                                                        <div className="logo">
                                                            <img src={require(`../../images/${entry.logos[idx]}-logo.png`)} alt="logo"/>
                                                        </div>
                                                        <span className="logo-name">{task}</span>
                                                    </li>)
                                                )}
                                                </ul>
                                                <hr/>
                                            </div>)
                                            :
                                            (<div key={entry.title} className="section-entry">
                                                <span className="entry-title">{entry.title}</span>
                                                <span className="entry-description">
                                                    <pre>{entry.subtitle}</pre>
                                                </span>
                                                <ul>
                                                {entry.tasks.map(task=>
                                                    (<li key={task} className="entry-task">
                                                        {task}
                                                    </li>)
                                                )}
                                                </ul>
                                                <hr/>
                                            </div>)
                                            }
                                        </div>)
                                    )}
                                </div>
                            </div>)
                            : null}
                        {this.state.currentSection >= 0 && this.state.currentSection < content.length - 1 ? 
                             (<div className="post-content-section">
                                {content.slice(this.state.currentSection+1,content.length).map((section,idx)=>
                                    (<div key={idx} className="section-title post-content link-title" onClick={that._handleClick.bind(this,idx+this.state.currentSection+1)}>            
                                        {section.title.toUpperCase()}
                                        <br/>
                                        <hr/>
                                    </div>)
                                )}
                            </div>)
                            : (<div className="post-content-section"></div>)}
                        {this.state.currentSection === -5 ? 
                             (<div className="collapsed-content-section">
                                <br/>
                                {content.map((section,idx)=>
                                    (<div key={section.title} className="section-title collapsed-content link-title" onClick={that._handleClick.bind(this,idx)}>            
                                        {section.title.toUpperCase()}
                                        <br/>
                                        <hr/>
                                    </div>)
                                )}
                            </div>)
                            : (<div className="post-content-section"></div>)}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Languages;
