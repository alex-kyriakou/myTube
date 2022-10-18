import { Stack, Box } from "@mui/material";

import VideoCard from "./VideoCard";

export default function Videos({ videos, direction }) {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      gap={3}
      sx={{ paddingTop: "20px" }}
    >
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
        );
      })}
    </Stack>
  );
}
