import { Typography, Grid, TextField } from "@mui/material";

function EventSettingsComponent() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Create Event
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField
            required
            id="Event name"
            name="eventName"
            label="Event name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Stage count"
            name="stageCount"
            label="Stage count"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Jury count"
            name="juryCount"
            label="Jury count"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Comands count"
            name="comandsCount"
            label="Comands count"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default EventSettingsComponent;
