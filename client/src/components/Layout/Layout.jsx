import React from "react";
import propTypes from "prop-types";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Layout.scss";

const Layout = ({ children }) => {
    return (
        <div className="App">
            <main>{children}</main>
            <div className="sidebar">
                <FontAwesomeIcon icon={faHome} />
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: propTypes.object
};

export default Layout;
