
import { AppBar, Toolbar, styled } from '@mui/material';
import React from 'react';
// import img from '../Assets/Images/wce.jpg';


import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: primary;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar1 = () => {
    return (
    <div>

        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>WCE Placement Portal</Tabs>
                <Tabs to="/admin" exact>ADMIN</Tabs>
                <Tabs to="/addtppo" exact>Third Year</Tabs>
                <Tabs to="/addappo" exact>Annual Year</Tabs>
                {/* <Tabs to="add" exact>Add student</Tabs> */}
            </Toolbar>
        </Header>  
      </div> 
    )    
}
{/* <div className="image-area">
        <img className="image" src={img}></img>
</div> */}




export default NavBar1;