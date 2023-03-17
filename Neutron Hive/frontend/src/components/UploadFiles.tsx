import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function UploadFiles() {
  const [reExam1,setReExam1] = React.useState("no");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload your Report cards
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-1</Typography>
          <TextField
            required
            type="file"
            id="Sem1"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-2</Typography>
          <TextField
            required
            type="file"
            id="Sem2"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="reExam1" value="yes" onChange={()=> {
              if(reExam1 === "no") setReExam1("yes");
              else setReExam1("no");
          }} />}
            label="I had appeared for re-examination in my First Year"
          />
          {/* {console.log(reExam1)} */}
        </Grid>
        {reExam1 === "yes" && (
          <>
            <Grid item xs={12} md={6}>
            <Typography variant='subtitle1'>Re-Exam-1</Typography>
            <TextField
              required
              type="file"
              id="reExam1"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} md={6}>
            </Grid>
            </>
        )}
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-3</Typography>
          <TextField
            required
            type="file"
            id="Sem3"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-4</Typography>
          <TextField
            required
            type="file"
            id="Sem4"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="reExam1" value="no" />}
            label="I had appeared for re-examination in my Second Year"
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-5</Typography>
          <TextField
            required
            type="file"
            id="Sem5"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-6</Typography>
          <TextField
            required
            type="file"
            id="Sem6"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="reExam1" value="no" />}
            label="I had appeared for re-examination in my Third Year"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-7</Typography>
          <TextField
            required
            type="file"
            id="Sem7"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-8</Typography>
          <TextField
            required
            type="file"
            id="Sem8"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="reExam1" value="no" />}
            label="I had appeared for re-examination in my last Year"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="I have submitted all the report cards"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
