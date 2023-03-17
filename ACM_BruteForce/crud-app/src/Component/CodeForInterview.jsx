import { Box, Typography, styled, Divider, Button } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { borderRadius, boxSizing } from '@mui/system';
import { Link } from 'react-router-dom';

// import Youtube from '../Assets/Images/youtube.png';
// import InstaTele from '../Assets/Images/InstaTele.jpeg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;



// const Image = styled('img')({
//     width: '50%',
//     height: '50%'
// });

const CodeForInterview = () => {

    return (
        <div>
        {/* <Header>
            <Typography variant="h4">WCE Placement Portal</Typography>
        </Header> */}
         <div style={{ 
            marginLeft: '2%', 
            marginTop: '0.1px', 
            marginBottom: '100px',
            width: '80%', 
            height: '120px',
            padding: '30px',
            borderRadius: '100px',
            alignContent: 'normal',
        }}>
            <Box color="black" 
                bgcolor="rgb(255,253,208)" p={8} alignItems={'center'} >
                    <Button color="primary" variant="contained" style={{padding:"10px"}}component={Link} to="/addint">Internships</Button>
            </Box>
        </div>

        <div style={{ 
            marginLeft: '2%', 
            marginTop: '0.1px', 
            marginBottom: '100px',
            width: '80%', 
            height: '120px',
            padding: '30px',
            borderRadius: '100px',
            alignContent: 'normal',
        }}>
            <Box color="black" 
                bgcolor="rgb(255,253,208)" p={8} alignItems={'center'} >
                    <Button color="primary" variant="contained" style={{padding:"10px"}}component={Link} to="/addppo">Full Time PPO</Button>
            </Box>
        </div>

        {/* <div style={{ 
            marginLeft: '2%', 
            marginTop: '0.1px', 
            marginBottom: '100px',
            width: '80%', 
            height: '120px',
            padding: '30px',
            borderRadius: '100px' , 
            alignContent: 'normal',
        }}>
            <Box color="black" 
                bgcolor="rgb(255,253,208)" p={8} alignItems={'center'}  >
                     <Button color="primary" variant="contained" style={{padding:"10px"}}component={Link} to="/addann">Announcements</Button>
            </Box>
        </div> */}
        
        </div>
    );
}

export default CodeForInterview;