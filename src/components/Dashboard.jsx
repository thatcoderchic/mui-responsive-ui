import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const drawerWidth = 240;

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f4f6f8",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {/* Sidebar (NOT fixed now) */}
      <Drawer
        variant="persistent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            position: "relative", // 🔥 KEY FIX
            bgcolor: "#1e293b",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Dashboard Menu
          </Typography>

          <Typography sx={{ mt: 2 }}>Overview</Typography>
          <Typography sx={{ mt: 1 }}>Analytics</Typography>
          <Typography sx={{ mt: 1 }}>Settings</Typography>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ bgcolor: "#2563eb" }}
        >
          <Toolbar>
            <Typography variant="h6" fontWeight="bold">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Overview
          </Typography>

          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography fontWeight="bold">
                      Metric {item}
                    </Typography>
                    <Typography color="text.secondary">
                      Dashboard data description
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}