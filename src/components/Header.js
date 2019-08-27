import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName='active-link' exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName='active-link' exact={true}>Create Expense</NavLink>
        <NavLink to="/edit" activeClassName='active-link' exact={true}>Edit Expense</NavLink>
        <NavLink to="/help" activeClassName='active-link' exact={true}>Help</NavLink>
    </header>
)

export default Header;