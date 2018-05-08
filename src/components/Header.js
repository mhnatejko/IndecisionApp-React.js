import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => ( //<NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
    <header>
        <h1>Expensify </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expanse page </NavLink>
        
        <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </header>
);

export default Header;