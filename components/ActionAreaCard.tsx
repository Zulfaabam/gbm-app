import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface CardProps {
  imgHeight?: string | number | undefined;
  maxWidth?: number;
  img: string;
  title: string;
  desc: string | number;
}

export default function ActionAreaCard({
  imgHeight = 150,
  maxWidth = 300,
  img,
  title,
  desc,
}: CardProps) {
  return (
    <Card sx={{ maxWidth: maxWidth }}>
      <CardActionArea>
        <CardMedia sx={{ height: imgHeight }} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom className="font-sans font-semibold">
            {title}
          </Typography>
          <Typography color="text.secondary" className="font-sans">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
