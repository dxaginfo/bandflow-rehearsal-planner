import React from 'react';
import { Box, Typography, Grid, Paper, Card, CardContent, CardHeader, Button } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      
      <Grid container spacing={3}>
        {/* Upcoming rehearsals summary */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Upcoming Rehearsals" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                No upcoming rehearsals. Click below to schedule one.
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary">
                  Schedule Rehearsal
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Attendance summary */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Attendance Overview" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                No attendance data available yet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Groups */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="My Groups" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                You're not part of any groups yet. Create or join a group to get started.
              </Typography>
              <Box mt={2} display="flex" gap={2}>
                <Button variant="contained" color="primary">
                  Create Group
                </Button>
                <Button variant="outlined" color="primary">
                  Join Group
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Recent activity */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Recent Activity" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                No recent activity to display.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;