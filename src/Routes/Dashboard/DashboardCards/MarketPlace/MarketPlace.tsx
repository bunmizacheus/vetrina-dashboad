import React from "react";
import CCard from "../../../../components/Reusble/Cards/CCard";
import { Box, Typography } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PublicIcon from "@mui/icons-material/Public";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import GamepadIcon from "@mui/icons-material/Gamepad";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import VerifiedIcon from "@mui/icons-material/Verified";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import YardIcon from "@mui/icons-material/Yard";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Carousel from "react-elastic-carousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { classes } from "../styles";
import "./carousel.css";

// const MarketPlace = () => {
//   return (
//     <CCard>
//       <Box sx={classes.container}>
//         <Typography sx={classes.marketPlace.headerText}>
//           <DashboardCustomizeIcon sx={classes.headerIcon} />
//           <span>Extensions MarketPlace</span>
//         </Typography>
//         <Box sx={classes.marketPlace.info}>
//           <Carousel
//             style={{ width: "100%" }}
//             pagination={false}
//             itemsToScroll={1}
//             enableAutoPlay={true}
//             autoPlaySpeed={2000}
//             showArrows={false}
//             itemsToShow={1.7}
//           >
//             {optionsArr.map((data, i) => (
//               <CarouselCard {...data} key={i} />
//             ))}
//           </Carousel>
//         </Box>
//         <Box sx={{ display: "flex" }}>
//           <Typography sx={classes.link}>
//             <span>Discover all extensions</span>
//           </Typography>
//           <ArrowForwardIcon
//             sx={{ ...classes.visitor.visitorIcon, pl: 1, color: "#21B8F9" }}
//           />
//         </Box>
//       </Box>
//     </CCard>
//   );
// };
// export default MarketPlace;

// const CarouselCard = ({ Icon, text, bgcolor }) => (
//   <Box>
//     <Box
//       sx={{ ...classes.marketPlace.iconContainer, backgroundColor: bgcolor }}
//     >
//       <Icon sx={{ fontSize: "60px", color: "#fff" }} />
//     </Box>
//     <Typography>{text}</Typography>
//   </Box>
// );

const MarketPlace: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <CCard>
      <Box sx={classes.container}>
        <Typography sx={classes.marketPlace.headerText}>
          <DashboardCustomizeIcon sx={classes.headerIcon} />
          <span>Extensions MarketPlace</span>
        </Typography>
        <Box sx={classes.marketPlace.info}>
          <Carousel
            responsive={responsive}
            itemClass="item-Class"
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={false}
            customTransition="all .5"
            transitionDuration={500}
          >
            {optionsArr.map((data, i) => (
              <CarouselCard {...data} key={i} />
            ))}
          </Carousel>
        </Box>
        <Box sx={classes.marketPlace.bottomText}>
          <Typography sx={classes.link}>
            <span>Discover all extensions</span>
          </Typography>
          <ArrowForwardIcon
            sx={{ ...classes.visitor.visitorIcon, pl: 1, color: "#21B8F9" }}
          />
        </Box>
      </Box>
    </CCard>
  );
};

export default MarketPlace;

const CarouselCard: React.FC<{ Icon: any; text: string; bgcolor: string }> = ({
  Icon,
  text,
  bgcolor,
}) => (
  <Box sx={classes.marketPlace.carouselCon}>
    <Box
      sx={{ ...classes.marketPlace.iconContainer, backgroundColor: bgcolor }}
    >
      <Icon sx={classes.marketPlace.carouselIcon} />
    </Box>
    <Typography>{text}</Typography>
  </Box>
);

const optionsArr = [
  {
    text: "  Connect your own Domain",
    Icon: PublicIcon,
    bgcolor: "#FFA26B",
  },
  {
    text: "  50 Additional products",
    Icon: SportsBasketballIcon,
    bgcolor: "#00C48C",
  },
  {
    text: "  Gaming Apps",
    Icon: GamepadIcon,
    bgcolor: "#00C48C",
  },
  {
    text: "  Domain for Sale",
    Icon: HistoryToggleOffIcon,
    bgcolor: "#FAD29F",
  },
  {
    text: "  50 Cars for Hire",
    Icon: VerifiedIcon,
    bgcolor: "#FFA26B",
  },
  {
    text: "  Language Translators",
    Icon: LanguageIcon,
    bgcolor: "#F9EEB1",
  },
  {
    text: "  Connect with People",
    Icon: TravelExploreIcon,
    bgcolor: "#CAFEF4",
  },
  {
    text: "Summer Sales",
    Icon: ViewInArIcon,
    bgcolor: "#00C48C",
  },
  {
    text: "  Book Online",
    Icon: YardIcon,
    bgcolor: "#EFFECA",
  },
  {
    text: " Buy One, Get One Free",
    Icon: StarOutlineIcon,
    bgcolor: "#B3FFE6",
  },
];
