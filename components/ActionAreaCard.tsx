import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardProps } from "@mui/material";

export interface ActionAreaCardProps extends CardProps {
  imgHeight?: string | number | undefined;
  maxWidth?: number;
  img: string;
  title: string;
  desc?: string | number;
}

export default function ActionAreaCard({
  imgHeight = 150,
  maxWidth = 300,
  img,
  title,
  desc,
  ...props
}: ActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: maxWidth }} {...props}>
      <CardActionArea>
        <CardMedia
          sx={{ height: imgHeight }}
          image={img ? img : "/images/not-found.jpg"}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            className="font-sans font-semibold text-sm sm:text-base"
          >
            {title}
          </Typography>
          <Typography
            color="text.secondary"
            className="font-sans text-xs sm:text-sm"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
