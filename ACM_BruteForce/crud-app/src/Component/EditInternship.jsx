import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getInternships, editInternship } from '../Service/api';

const initialValue = {
    cname: '',
    batch:'',
    stipend: '',
    detail:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditInternship = () => {
    const [internship, setInternship] = useState(initialValue);
    const { cname,batch, stipend,detail } = internship;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadInternshipDetails();
    }, []);

    const loadInternshipDetails = async() => {
        const response = await getInternships(id);
        setInternship(response.data);
    }

    const editInternshipDetails = async() => {
        console.log(id);
        const response = await editInternship(id, internship);
        navigate('/allint');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setInternship({...internship, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Company Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='cname' value={cname} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Batch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='batch' value={batch} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Stipend</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='stipend' value={stipend} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Details</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='detail' value={detail} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editInternshipDetails()}>Edit Internship</Button>
            </FormControl>
        </Container>
    )
}
export default EditInternship;