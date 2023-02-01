import React from "react";
import { demoVideoUrl, demoVideoTitle } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: "350px", sm: "350px", md: "320px" },
        boxShadow: "4px 4px rgb(195 243 3)",
        borderRadius: "10px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "350px", md: "320px" }, height: 140 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "80px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={300} color="#FFF">
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
            {snippet?.channelTitle || demoVideoTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "4px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
