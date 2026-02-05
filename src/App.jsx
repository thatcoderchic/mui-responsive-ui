import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { lightTheme, darkTheme } from "./theme";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      {/* Top Bar */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
          bgcolor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button
          variant="contained"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ bgcolor: "#f4f6f8", minHeight: "100vh" }}>
        {/* Dashboard */}
        <Box py={4}>
          <Dashboard />
        </Box>

        <Divider />

        {/* Admin Panel */}
        <Box py={6}>
          <AdminPanel />
        </Box>
      </Box>
    </ThemeProvider>
  );
}