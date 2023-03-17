import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../Service/api';
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

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>PRN</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Current Year</TableCell>
                    <TableCell>Branch</TableCell>
                    <TableCell>CGPA</TableCell>
                    <TableCell>SSC Marks</TableCell>
                    <TableCell>HSC Marks</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.PRN}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.currentyear}</TableCell>
                        <TableCell>{user.branch}</TableCell>
                        <TableCell>{user.CGPA}</TableCell>
                        <TableCell>{user.SSC_marks}</TableCell>
                        <TableCell>{user.HSC_marks}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
            {/* <Button color="primary" variant="contained" style={{marginRight:10, align:"right"}} >Add Student</Button>  */}
            <Button color="primary" variant="contained" style={{padding:"10px"}}component={Link} to="/add">Add Member </Button>
        </StyledTable>
    )
}

export default AllUsers;