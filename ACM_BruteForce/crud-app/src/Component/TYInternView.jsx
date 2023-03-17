import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getInternships, deleteInternship } from '../Service/api';
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

const TYInternView = () => {
    const [internships, setInternship] = useState([]);
    
    useEffect(() => {
        getAllInternships();
    }, []);

    const deleteInternshipData = async (id) => {
        await deleteInternship(id);
        getAllInternships();
    }

    const getAllInternships = async () => {
        let response = await getInternships();
        setInternship(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Batch</TableCell>
                    <TableCell>Stipend</TableCell>
                    <TableCell>Details</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                 {internships.map((internship) => (
                    <TRow key={internship.id}>
                        <TableCell>{internship._id}</TableCell> 
                        <TableCell>{internship.cname}</TableCell>
                        <TableCell>{internship.batch}</TableCell>
                        <TableCell>{internship.stipend}</TableCell>
                        <TableCell>{internship.detail}</TableCell>
                         {/* <TableCell>
                             <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editint/${internship._id}`}>Edit</Button>
                             <Button color="secondary" variant="contained" onClick={() => deleteInternshipData(internship._id)}>Delete</Button> 
                         </TableCell> */}
                     </TRow>
                ))}
            </TableBody>
            {/* <Button color="primary" variant="contained" style={{padding:"10px"}}component={Link} to="/addint">Add Internship </Button> */}

        </StyledTable>
    )
}

export default TYInternView;
