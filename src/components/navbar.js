import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) =>{
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <Link to="/"  className="navbar-brand" >ExerTracker</Link>
            <div className="collapse navbar-collapse">
                <li className="navbar-item">
                    <Link to="/">Exercise</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create">Create Exercise</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/user">Create User</Link>
                </li>
            </div>
        </nav>
    )
}

export default Navbar;