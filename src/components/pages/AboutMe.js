import React, { Component } from 'react';
// import JavaScriptGame from '../modals/JavaScriptGame';
import './AboutMe.css';

class AboutMe extends Component {
    
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
            title: "My philosophy",
            entries: [
                {
                    title: "Coding and living your life should have this similarity: ",
                    subtitle: "We should not limit ourselves to what we know we can do. Instead, we should dream of how we want it to be. From that point, we can start to look for the means to achieve that ideal vision.",
                    tasks: []
                }
            ]
        });
        content.push({
            title: "Education",
            entries: [
                {
                    title: "DecodeMTL [Apr 2017 - Jun 2017]",
                    subtitle: "Full-Stack Web Development Course",
                    tasks: []
                },
                {
                    title: "École Polytechnique [Aug 2009 - Apr 2015]",
                    subtitle: "B.Eng in Mechanical Engineering, Analysis & Design orientation (as student-athlete)",
                    tasks: []
                }
            ]
        });
        content.push({
            title: "Past Experience",
            entries: [
                {
                    title: "Dialogue Technologies - Clinic Management System [May 2017]",
                    subtitle: "Full-Stack project consisting in an app for patients to book appointments with specialists",
                    tasks: [
                            "Built back-end using Node/Express. Integrated When I Work's API to retrieve specialists' availabilities and MySQL to store patients' bookings",
                            "Built front-end using React",
                            "Integration of Mailgun for email sending, Auth0 for authentification and MomentJS for time conversion and formatting",
                            "Deployment using Heroku for the back-end and Netlify for the front-end"
                        ]
                },
                {
                    title: "Pediatric Rehabilitation Engineering Chair [May 2014 - Dec 2014]",
                    subtitle: "Gait Analysis Data Processing",
                    tasks: [
                           "Worked on an innovative way to estimate forces from a single foot based on the total force of both feet",
                           "Built a program with MatLab to retrieve experimental data from an Excel sheet and process it",
                           "Engineered a process to compute and optimize parameters to minimize experimental error rates"
                        ]
                }
            ]
        });
        content.push({
            title: "Other Professional Experience",
            entries: [
                {
                    title: "Merveille Orient [Jul 2007 - Aug 2010]",
                    subtitle: "Sales Clerk",
                    tasks: [
                            "Sales Clerk",
                            "Cashier"
                        ]
                },
                {
                    title: "G Production Inc [Jul 2012 - Aug 2012]",
                    subtitle: "Project Engineering Intern",
                    tasks: [
                            "Work Coordination",
                            "Information Resources",
                            "Project Monitoring"
                        ]
                },
                {
                    title: "Team Canada [World Cup 2016]",
                    subtitle: "(Chinese Business Visa valid until October 2025)",
                    tasks: [
                            "1 silver medal, 2 bronze medals",
                            "Ranked 3rd overall"
                        ]
                },
                {
                    title: "Canal Fitness [Apr 2016 - May 2017]",
                    subtitle: "Gym Receptionist",
                    tasks: [
                            "Manage registrations and memberships",
                            "Assist clients in their training"
                        ]
                },
                {
                    title: "22Dragons [Jun 2016 - Present]",
                    subtitle: "Coach",
                    tasks: [
                            "Contractual coach for events and training camps",
                            "Manage and coach club teams",
                            "Coach individual athletes"
                        ]
                },
                {
                    title: "Talis Crew [Jul 2016 - Present]",
                    subtitle: "Model and Brand Ambassador",
                    tasks: [
                            "Model and brand ambassasor - Represent the clothing line in Montreal, organize sales and orders",
                            "Business development - Actively seek to add value to the business and improve visibility by approaching potential clients and represent the clothing line at provincial, national and international competitions"
                        ]
                }
            ]
        });
        content.push({
            title: "Projects & Awards",
            entries: [
                {
                    title: "Collaborative Private Jet Cabin Design [Sep 2014 - Apr 2015]",
                    subtitle: "Capstone project in partnership with Bombardier Aerospace",
                    tasks: [
                        "Business Jet Cabin Design for 2025 in a multidisciplinary team: engineering, industrial design and administration students"
                        ]
                },
                {
                    title: "Math & Physics competitions",
                    subtitle: "Certificates, prizes and medals at regional, provincial and national competitions",
                    tasks: []
                },
                {
                    title: "Dragon Boat Racing",
                    subtitle: "Medals at competitions ranging from regional regattas to World Cup",
                    tasks: []
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
                                        {/*<button 
                                            className="section-extension"
                                            onClick={that._handleClick.bind(this,idx)}
                                        > [...] </button>*/}
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
                                        {/*<button 
                                            className="section-extension"
                                            onClick={that._handleClick.bind(this,idx+this.state.currentSection+1)}
                                        > [...] </button>*/}
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
                                        {/*<button 
                                            className="section-extension"
                                            onClick={that._handleClick.bind(this,idx)}
                                        > [...] </button>*/}
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

export default AboutMe;