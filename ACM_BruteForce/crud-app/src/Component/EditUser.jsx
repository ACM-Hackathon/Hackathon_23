import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    PRN:'',
    username: '',
    email: '',
    phone: '',
    currentyear:'',
    branch:'' ,
    CGPA:'' ,
    SSC_marks:'',
    HSC_marks:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name,PRN, username, email, phone,currentyear,branch,CGPA,SSC_marks,HSC_marks } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">PRN</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='PRN' value={PRN} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Current Year</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='currentyear' value={currentyear} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='branch' value={branch} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">CGPA</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='CGPA' value={CGPA} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">SSC Marks</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='SSC_marks' value={SSC_marks} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">HSC Marks</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='HSC_marks' value={HSC_marks} id="my-input" />
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;