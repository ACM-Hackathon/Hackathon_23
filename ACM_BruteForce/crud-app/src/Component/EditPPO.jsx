import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getPPOs, editPPO } from '../Service/api';

const initialValue = {
    pcname: '',
    pbatch:'',
    pctc:'',
    pdetail:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditPPO = () => {
    const [ppo, setPPO] = useState(initialValue);
    const { pcname,pbatch,pctc,pdetail} = ppo;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadPPODetails();
    }, []);

    const loadPPODetails = async() => {
        const response = await getPPOs(id);
        setPPO(response.data);
    }

    const editPPODetails = async() => {
        const response = await editPPO(id, ppo);
        navigate('/allppo');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setPPO({...ppo, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Company Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='pcname' value={pcname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Batch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='pbatch' value={pbatch} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">CTC</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='pctc' value={pctc} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Details</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='pdetail' value={pdetail} id="my-input"/>
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editPPODetails()}>Edit PPO</Button>
            </FormControl>
        </Container>
    )
}
export default EditPPO;