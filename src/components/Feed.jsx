import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
function Feed() {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 Arnab Das
        </Typography>
      </Box>
      {/* BODY */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          varient="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectCategory}
          <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
