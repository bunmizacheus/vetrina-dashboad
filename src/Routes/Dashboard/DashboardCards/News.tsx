import React, { useEffect, useState } from "react";
import CCard from "../../../components/Reusble/Cards/CCard";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NewsCard from "./NewsCard";
import { classes } from "./styles";
import { useHttp } from "../../../Api/useHttp";
import { NewsItemPropDef } from "../../../utils/interfaceDef";
import { ApiNews } from "../../../utils/interfaceDef";

// async function postData() {
//   try {
//     const { data } = await axios.post<news>(
//       "https://news-ed95b-default-rtdb.firebaseio.com/global-news.json",
//       ApiData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       }
//     );
//     console.log(data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log(error);
//     } else {
//       console.log(error);
//     }
//   }
// }

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItemPropDef[]>();

  const { isLoading, error, getNews } = useHttp();

  useEffect(() => {
    const transformNews = (newsObj: ApiNews) => {
      const loadedNews = [];

      const newsItem = Object.values(newsObj);
      console.log(newsItem);
      for (const item of newsItem[0]) {
        loadedNews.push(item);
      }
      console.log(loadedNews, "loadedNew");
      setNews(loadedNews);
    };

    getNews(
      "https://news-ed95b-default-rtdb.firebaseio.com/global-news.json",
      transformNews
    );
  }, [getNews]);

  return (
    <CCard lg={12}>
      <Box sx={classes.container}>
        <Box sx={classes.news.topContainer}>
          <Typography sx={classes.news.latestCon}>
            <FeedIcon sx={classes.news.latestIcon} />
            Lastest News
          </Typography>
          <Typography sx={classes.news.visitCon}>
            Visit our blog <OpenInNewIcon sx={classes.news.visitIcon} />
          </Typography>
        </Box>
        <Grid container spacing={4} sx={classes.news.newsContainer}>
          {!isLoading &&
            !error &&
            news?.length !== 0 &&
            news?.map((newsItem: any, i: number) => (
              <NewsCard {...newsItem} key={i} />
            ))}

          {!isLoading &&
            !error &&
            news?.length === 0 &&
            news?.map((newsItem: any, i: number) => (
              <Box sx={classes.news.spinnerCon} key={i}>
                <p>Data Not found. Try Again</p>
              </Box>
            ))}

          {isLoading && (
            <Box sx={classes.news.spinnerCon}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Box>
    </CCard>
  );
};

export default News;

// const ApiData = [
//   {
//     title: "WAR IN UKRAINE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
//     description: "Russia Invades Ukraine: Many Feared Dead",
//     readingTime: `Estimated reading: ${Math.ceil(Math.random() * 5)} min`,
//     url: "www.vetrinalive.com",
//   },
//   {
//     title: "SPORT NEWS",
//     imgUrl:
//       "https://media.istockphoto.com/photos/soccer-ball-icon-with-soccer-field-isolated-on-white-background-3d-picture-id1341343506",
//     description: "World Cup - Qatar 2022: Latest News and Updates",
//     readingTime: `Estimated reading: ${Math.ceil(Math.random() * 5)} mins`,
//     url: "https://www.dailymail.co.uk/sport/fifa-world-cup/index.html",
//   },
//   {
//     title: "BUSINESS",
//     imgUrl:
//       "https://images.unsplash.com/photo-1592010841188-1085b2f65ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     description: "Electricity Shortage Warnings Grow Across U.S.",
//     readingTime: `Estimated reading: ${Math.ceil(Math.random() * 6)} mins`,
//     url: "www.vetrinalive.com",
//   },
//   {
//     title: "E-COMMERCE",
//     imgUrl:
//       "https://media.istockphoto.com/photos/businessman-counting-hundreds-of-dollars-at-his-table-picture-id1303339829?s=612x612",
//     description: "How to earn money online: 7 ideas for you",
//     readingTime: `Estimated reading: ${Math.ceil(Math.random() * 5)} mins`,
//     url: "www.vetrinalive.com",
//   },
//   {
//     title: "ENERGY",
//     imgUrl:
//       "https://images.unsplash.com/photo-1587637970934-a09453665678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
//     description:
//       "Oil Prices Top $100, Yet Some Big U.S. Frackers Let Production Fall",
//     readingTime: `Estimated reading: ${Math.ceil(Math.random() * 5)} mins`,
//     url: "www.vetrinalive.com",
//   },

//   {
//     title: "BUSINESS",
//     imgUrl:
//       "https://images.unsplash.com/photo-1650913542157-100a9aaed0c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     description: "UK Car Production Drops As Firms Struggle To Get Parts",
//     readingTime: `Estimated reading: ${Math.ceil(Math.random() * 5)} mins`,
//     url: "www.vetrinalive.com",
//   },
//   {
//     title: "HEALTH",
//     imgUrl:
//       "https://media.istockphoto.com/photos/covid19-picture-id1216771116?s=612x612",
//     description: "True Covid Pandemic Death Toll Is 15 Million - WHO",
//     readingTime: `Estimated reading: ${Math.ceil(Math.random() * 5)} mins`,
//     url: "www.vetrinalive.com",
//   },

//   {
//     title: "HEALTH",
//     imgUrl:
//       "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
//     description: "Alzheimer's Disease Fast Facts",
//     readingTime: `Estimated reading: ${Math.floor(Math.random() * 5)} min`,
//     url: "www.vetrinalive.com",
//   },
// ];
