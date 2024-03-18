import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from "../../assets/img.jpg";
import eye from "../../assets/Eye.png";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ImgMediaCard({ data }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/blog/${id}`);
  }

  return (
    <Card sx={{ maxWidth: 330, borderRadius: 0, height: 500 }} elevation={0}>
      <CardMedia
        component="img"
        alt="blog_image"
        image={data.Image}
        height="200"
      />
      <CardContent sx={{ padding: 0 }}>
        <Stack
          flexDirection="row"
          justifyContent={"space-between"}
          marginTop={2}
        >
          <Typography
            gutterBottom
            variant="body2"
            color="text.disabled"
            component="div"
          >
            Posted on October 6th 2021
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.disabled"
            component="div"
          >
            <img src={eye} alt="" /> {data.viewCount} views
          </Typography>
        </Stack>
        <Typography
          variant="h5"
          fontWeight={600}
          marginY={2}
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(data.id)}
        >
          {data.Title.length <= 30
            ? data.Title
            : `${data.Title.slice(0, 35)}...`}
        </Typography>
        <Typography variant="body1">
          {data.Subtitle <= 200 ? data.Subtitle : data.Subtitle.slice(0, 250)}
        </Typography>
      </CardContent>
    </Card>
  );
}
