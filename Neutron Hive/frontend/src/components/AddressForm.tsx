import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="PRN"
            name="PRN"
            label="PRN"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Branch"
            name="Branch"
            label="Branch"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            id="yos"
            name="yos"
            label="Year of Study"
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="number"
            id="contactNo"
            name="contactNo"
            label="Contact Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          type="number"
            required
            id="copies"
            name="copies"
            label="Number of copies"
            defaultValue={1}
            fullWidth
            autoComplete="1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <div>Certificates for which transcripts are reqired:</div>
          <FormControlLabel
            control={<Checkbox color="success" name="makrsheet" value="yes" />}
            label="Consolidated Marksheet"
          />
          <FormControlLabel
            control={<Checkbox color="success" name="provisionalCertificate" value="yes" />}
            label="Provisional Certificate"
          />
          <FormControlLabel
            control={<Checkbox color="success" name="degreeCertificate" value="yes" />}
            label="Degree Certificate"
          />
        </Grid>
        <Grid item xs={12}>
          <div>Whether originals of the above certificates are produced:</div>
          <FormControlLabel
            control={<Checkbox color="success" name="yesOrignals" value="yes" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Checkbox color="success" name="noOrignals" value="no" />}
            label="No"
          />
        </Grid>
        <Grid item xs={12}>
          <div>Whether sufficient photocopies are produced:</div>
          <FormControlLabel
            control={<Checkbox color="success" name="yesForPhotos" value="yes" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Checkbox color="success" name="noForPhotos" value="no" />}
            label="No"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
