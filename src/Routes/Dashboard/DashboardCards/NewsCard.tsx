import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { classes } from "./styles";
import { NewsItemPropDef } from "../../../utils/interfaceDef";

const NewsCard: React.FC<NewsItemPropDef> = ({
  title,
  imgUrl,
  description,
  readingTime,
  url,
}) => {
  return (
    <Grid item xs={12} lg={6}>
      <Box sx={classes.news.linkContainer} component="a" href={url}>
        <Box sx={classes.news.linkImg} component="img" src={imgUrl} />
        <Box sx={classes.news.infoCon}>
          <Typography sx={classes.news.title}>{title}</Typography>
          <Box>
            <Typography sx={classes.news.description}>{description}</Typography>
          </Box>
          <Typography sx={classes.news.readingTime}>{readingTime}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default NewsCard;
