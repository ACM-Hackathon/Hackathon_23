
import { AppBar, Toolbar, styled } from '@mui/material';

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

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>WCE Placement Portal</Tabs>
                <Tabs to="all" exact>TPO MEMBERS</Tabs>
                
                {/* <Tabs to="add" exact>Add student</Tabs> */}
            </Toolbar>
        </Header>
    )
}
export default NavBar;