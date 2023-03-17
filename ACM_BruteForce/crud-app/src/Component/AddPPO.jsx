import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addPPO } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddPPO = () => {
    const [ppo, setPPO] = useState(initialValue);
    const { pcname,pbatch,pctc,pdetail } = ppo;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setPPO({...ppo, [e.target.name]: e.target.value})
    }

    const addPPODetails = async() => {
        await addPPO(ppo);
        navigate('/allppo');
    }

    
    return (
        <Container>
            <Typography variant="h4">Add PPO</Typography>
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
                <Button variant="contained" color="primary" onClick={() => addPPODetails()}>Add Company</Button>
            </FormControl>
            
        </Container>
    )
}

export default AddPPO;