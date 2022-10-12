import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

function Feed() {
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #9b8bcb",
          px: { sx: 0, md: 2 },
          backgroundColor: "#94e4ec",
          p: 2,
        }}
      >
        <Sidebar />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#190667c9" }}
        >
          Copyright 2022 koukos
        </Typography>
      </Box>
      {/* Videos section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#94e4ec" }}>videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
}

export default Feed;
