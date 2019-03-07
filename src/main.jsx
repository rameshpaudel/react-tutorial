import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NASAAPI from "./containers/NASAApi";
import ProductForm from "./containers/ProductForm";
import Profile from "./containers/Profile";
import NotFound from "./containers/NotFound";
import App from "./App";
import ApiSearch from "./components/APISearch";
class AppContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/nasa">NASA</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/product">Product Entry</Link>
                            </li>
                            <li>
                                <Link to="/old-file">Prev App</Link>
                            </li>
                            <li>
                                <Link to="/api-search">API SEARCH</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* outer styling */}
                    <div className="inner-page">
                        <Route path="/nasa" exact component={NASAAPI} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/product" component={ProductForm} />
                        <Route path="/old-file" component={App} />
                        <Route path="/api-search" component={ApiSearch} />
                        {/* <Route path="*" component={NotFound} /> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default AppContainer;
