import { Container, Grid, Typography, Paper, Box } from "@mui/material";

export default function LandingPage() {
  return (
    <Box sx={{ bgcolor: "background.default", py: 6 }}>
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to MUI Responsive UI
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" mb={4}>
          A modern responsive interface built using React and Material UI
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Responsive Design
              </Typography>
              <Typography color="text.secondary">
                Layout adapts seamlessly across mobile, tablet, and desktop
                using Material UI Grid and breakpoints.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Modern UI Components
              </Typography>
              <Typography color="text.secondary">
                Built using MUI components like Container, Grid, Typography,
                Cards, and ThemeProvider.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}