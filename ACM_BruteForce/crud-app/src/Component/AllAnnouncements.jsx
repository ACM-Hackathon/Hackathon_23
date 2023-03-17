import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getAnnouncements, deleteAnnouncement } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllAnnouncements = () => {
    const [announcements, setAnnouncements] = useState([]);
    
    useEffect(() => {
        getAllAnnouncements();
    }, []);

    const deleteAnnouncementData = async (id) => {
        await deleteAnnouncement(id);
        getAllAnnouncements();
    }

    const getAllAnnouncements = async () => {
        let response = await getAnnouncements();
        setAnnouncements(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Notice</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {announcements.map((announcement) => (
                    <TRow key={announcement.id}>
                        <TableCell>{announcement._id}</TableCell> 
                        <TableCell>{announcement.notice}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${announcement._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteAnnouncementData(announcement._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
            {/* <Button color="primary" variant="contained" style={{marginRight:10, align:"right"}} >Add Student</Button>  */}
            <Button color="primary" variant="contained" style={{padding:"10px"}}component={Link} to="/add">Add Announcement</Button>
        </StyledTable>
    )
}

export default AllAnnouncements;