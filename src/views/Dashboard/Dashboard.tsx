import React from 'react';
import { Grid, Paper, Typography, Button, Divider } from '@mui/material';

export const  Dashboard = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h4">Organ Trading Game Dashboard</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h5">Current Inventory</Typography>
            <Divider />
            <Typography variant="body1">Liver: 5</Typography>
            <Typography variant="body1">Kidney: 10</Typography>
            <Typography variant="body1">Heart: 3</Typography>
            <Button variant="contained" color="primary">Refresh</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h5">Organ Prices</Typography>
            <Divider />
            <Typography variant="body1">Liver: $50,000</Typography>
            <Typography variant="body1">Kidney: $20,000</Typography>
            <Typography variant="body1">Heart: $100,000</Typography>
            <Button variant="contained" color="primary">Refresh</Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">Recent Transactions</Typography>
            <Divider />
            <Typography variant="body1">John Doe bought a liver for $50,000 from Jane Smith.</Typography>
            <Typography variant="body1">Jane Smith sold a kidney for $20,000 to John Doe.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}