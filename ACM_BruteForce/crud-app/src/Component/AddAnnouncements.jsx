import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addAnnouncement } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    notice: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddAnnouncement = () => {
    const [announcement, setAnnouncement] = useState(initialValue);
    const { notice} = announcement;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setAnnouncement({...announcement, [e.target.name]: e.target.value})
    }

    const addAnnouncementDetails = async() => {
        await addAnnouncement(announcement);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Announcement</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Notice </InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='notice' value={notice} id="my-input" />
            </FormControl>
           
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addAnnouncementDetails()}>Add Announcement</Button>
            </FormControl>
            
        </Container>
    )
}

export default AddAnnouncement;