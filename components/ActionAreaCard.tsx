import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface CardProps {
  maxWidth?: number;
  img: string;
  title: string;
  desc: string;
}

export default function ActionAreaCard({
  maxWidth,
  img,
  title,
  desc,
}: CardProps) {
  return (
    <Card sx={{ maxWidth: maxWidth || 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-sans font-semibold"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="font-sans"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
