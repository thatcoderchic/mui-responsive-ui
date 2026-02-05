import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function AdminPanel() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: 6 }}>
      <Box sx={{ px: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Admin Panel
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Manage system settings and administrative actions
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  User Management
                </Typography>
                <Typography color="text.secondary" mb={2}>
                  Control users and permissions
                </Typography>
                <Button variant="contained">Manage</Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  System Settings
                </Typography>
                <Typography color="text.secondary">
                  Configure application preferences
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  Reports
                </Typography>
                <Typography color="text.secondary">
                  View analytics and reports
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}