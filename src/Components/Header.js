import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display: 'flex',justifyContent:'space-evenly' ,alignItems:'center'}}>
            <h2>LOGO</h2>
            <nav>
                <Link style={{marginRight:'20px',textDecoration:'none'}} to='/home'>Home</Link>
                <Link style={{marginRight:'20px',textDecoration:'none'}} to='/createuser'>CreateUser</Link>
            </nav>
        </div>
    );
};

export default Header;