import React from 'react';
import './toolbar.css';
import { NavLink } from 'react-router-dom';

function Toolbar() {

    const navBarLinksData = [
        {
            path: '/home',
            label: 'Home',
            iconName: 'fa fa-home'
        },
        {
            path: '/about',
            label: 'About',
            iconName: 'fa fa-user'
        },
        {
            path: '/portfolio',
            label: 'Portfolio',
            iconName: 'fa fa-briefcase'
        },
        {
            path: '/contact',
            label: 'Contact',
            iconName: 'fa fa-envelope-open'
        }
    ];

    const NavBarLinksRender = (
        navBarLinksData.map((navLinkData, index) => {
            return <NavLink
                className="nav-link"
                activeClassName="active-nav-link"
                to={navLinkData.path}
                key={index}>
                <span className="nav-link-details">{navLinkData.label}</span>
                <i className={navLinkData.iconName} style={{ fontSize: '22px' }}></i>
            </NavLink>
        })
    );

    return (
        <div className="toolbar">
            {NavBarLinksRender}
        </div>
    );
}

export default Toolbar;