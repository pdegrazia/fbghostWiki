import React from 'react'
import './navbar.css'

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';

import Content from './Content'

export const Navbar = () => {
        return(
                <Router>
                    <div>
                        <ul id="navbar">
                            <li className="navbar">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="navbar">
                                <Link to="/primipassi">Primi Passi</Link>
                            </li>
                            <li className="navbar">
                                <Link to="/firmware">Firmware</Link>
                            </li>

                            <li className="navbar">
                                <Link to="/calibrazioni">Calibrazioni</Link>
                            </li>
                            <li className="navbar">
                                <Link to="/upgrades">Upgrades</Link>
                            </li>
                            <li className="navbar">
                                <Link to="/slicers">Slicers</Link>
                            </li>
                            <li className="navbar">
                                <Link to="/nostrestampe">Le nostre stampe</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/primipassi">
                                <Content testProp="2"/>
                            </Route>
                            <Route path="/firmware">
                                <Content testProp="3"/>
                            </Route>
                            <Route path="/calibrazioni">
                                <Content testProp="4"/>
                            </Route>
                            <Route path="/upgrades">
                                <Content testProp="5"/>
                            </Route>
                            <Route path="/slicers">
                                <Content testProp="6"/>
                            </Route>
                            <Route path="/nostrestampe">
                                <Content testProp="7"/>
                            </Route>
                            <Route path="/">
                                <Content testProp="1"/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
        )
}

export default Navbar