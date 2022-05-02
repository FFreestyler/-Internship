import { Typography, Grid, TextField } from "@mui/material";

function CreateIdComponent() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Create ID Number
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField
            required
            id="eventID"
            name="eventID"
            label="Event ID"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default CreateIdComponent;
