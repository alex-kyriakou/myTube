import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// import fetchAPI
import { fetchFromAPI } from "../utils/fetchFromAPI";

// import components
import Sidebar from "./Sidebar";
import Videos from "./Videos";

function Feed() {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

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
          // p: 2,
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

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
          {selectedCategory} <span style={{ color: "#94e4ec" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
