import react, { useState } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addInternship } from '../Service/api';
import { useNavigate } from 'react-router-dom';


const initialValue = {
    cname: '',
    batch:'',
    stipend:'',
    detail:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddInternship = () => {
    const [internship, setInternship] = useState(initialValue);
    const { cname, batch, stipend, detail } = internship;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setInternship({...internship, [e.target.name]: e.target.value})
    }

    const addInternshipDetails = async() => {
        await addInternship(internship);
        navigate('/allint');
    }

    return (
        <Container>
            <Typography variant="h4">Add Internship</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Company Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='cname' value={cname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Batch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='batch' value={batch} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Stipend</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='stipend' value={stipend} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Details</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='detail' value={detail} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addInternshipDetails()}>Add Internship</Button>
            </FormControl>
        </Container>
    )
}
export default AddInternship;