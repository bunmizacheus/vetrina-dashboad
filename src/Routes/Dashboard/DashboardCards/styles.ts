import { green } from "@mui/material/colors";

export const classes = {
  container: {
    height: "100%",
    width: "100%",
    // mx: 2,
  },
  testing: { marginRight: 100 },
  orderBox: { width: "65px" },
  setupText: { color: "#21B8F9", textDecoration: "underline #21B8F9" },

  visitor: {
    topContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    visitorIcon: {
      fontSize: "30px",
    },
  },
  mobileApp: {
    phoneSize: {
      height: { xs: 200, sm: 200, md: 250 },
      maxWidth: { xs: 100, sm: 100, md: 150 },
    },
    subCon: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
    },

    showMoreCon: { display: "flex", justifyContent: "space-between" },
    showMore: { color: "#fff", textDecoration: "underline #fff" },
    img: {
      // maxWidth: 120,
      height: { xs: 40, md: 50 },
      maxWidth: { xs: 100, sm: 110, md: 130, lg: 130 },
    },
    layout: {
      display: "flex",
      // justifyContent: "space-around",
      // alignItem: "center",
      // color: "#fff",
      flexDirection: { xs: "column", sm: "row" },
    },
    // textBox: {
    //   width: { xs: 50, md: 100 },
    //   height: "135px",
    // },
    mainText: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "27px",
      color: "#FFFFFF",
      mb: 2,
    },

    logoContainer: {
      // position: "absolute",
      // top: "280px",
      pt: 1,

      display: "flex",
      justifyContent: {
        xs: "space-between",
        sm: "space-between",
        md: "space-between",
        lg: "space-between",
      },
      alignItems: "center",
      // alignItems: "center",
      // py: 1,
      // mt: 1.5,
      // height: "70px",
    },
  },
  headerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    fontSize: "20px",
    fontStyle: "normal",
    lineHeight: "25px",
  },
  headerIcon: {
    fontSize: "24px",
    mr: 2,
  },

  info: {
    width: "100%",
    pb: 4,
    mt: 4,
    container: {
      display: "flex",
      justifyContent: "space-between",
      pb: 1,
    },
    infoText: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "17px",
      lineHeight: "22px",
      color: "#6C7C8C",
    },
    infoSum: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "17px",
      lineHeight: "22px",
    },
  },
  configure: {
    headertext: {
      display: "flex",
      alignItems: "center",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "22px",
    },
    infotext: {
      fontWeight: "600",
      color: "#FFA26B",
      lineHeight: "39px",
      fontSize: "34px",
    },
    infoBodyText: {
      display: "flex",
      fontStyle: "22px",
      fontWeight: "400",
      lineHeight: "22px",
      mb: 3,
      color: "#103B66",
      // width: "302px",
      // height: "66px",
    },
    infoComplete: {
      color: "#FFA26B",
    },
  },

  largeText: {
    fontSize: "42px",
    lineHeight: "61px",
    fontWeight: "500",
    fontStyle: "normal",
  },

  link: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#21B8F9",
    lineHeight: "20px",
    fontSize: "17px",
    fontWeight: "400",
    textDecoration: "underline",
    cursor: "pointer",
    fontStyle: "normal",
    // ml: -1.5,
  },
  marketPlace: {
    headerText: {
      display: "flex",
      alignItems: "center",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "25px",
      color: "#103B66",
      fontSize: "20px",
    },
    headerIcon: { mr: 1, fontSize: "25px" },
    info: {
      width: "100%",
      // backgroundColor: "red",
    },

    iconContainer: {
      // backgroundColor: "#00C48C",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "142px",
      height: "150px",
      mt: 3,
      mb: 2,
      borderRadius: "10px",
    },
    infoText: {
      mt: -3,
      fontStyle: "normal",
      fontSize: "15px",
      lineHeight: "20px",
      width: "152px",
    },
    bottomText: { display: "flex" },
    carouselIcon: { fontSize: "60px", color: "#fff" },
    carouselCon: { pb: 1.5 },
  },
  trustPilot: {
    head: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      color: "#fff",
      fontSize: "20px",
      mb: 1,
    },
    headerIcon: {
      color: "#00B67A",
      fontSize: "30px",
      // mr: 1,
    },
    infoContainer: {
      // width: "290px",
      // height: "88px",
      mt: { xs: 0, sm: 4 },
      mb: { xs: 1, sm: 3 },
      color: "#fff",
    },
    info: {
      // color: '#fff',
      fontStyle: "norma",
      fontWeight: "400",
      fontSize: "17px",
      lineHeight: "22px",
    },
    positive: {
      color: green[400],
    },
    products: {
      fontWeight: "800",
      fontSize: "17px",
    },
    footerContainer: {
      cursor: "pointer",
      width: "227px",
    },
    footerText: {
      display: "flex",
      justifyContent: "flex-start",
      color: "#00C48C",
      textDecoration: "underline #00C48C",
      forwardArrow: {
        ml: 1,
        color: "#00C48C",
      },
    },
  },
  invite: {
    head: {
      display: "flex",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "27px",
    },
    headIcon: {
      mr: 1,
    },
    infoContainer: {
      my: 3,
    },
    info: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "17px",
      lineHeight: "22px",
    },
    recieve50Products: {
      color: "#00C48C",
      fontWeight: "800",
    },
    footerContainer: {
      cursor: "pointer",
      width: "190px",
    },
    footerTextI: {
      display: "flex",
      justifyContent: "flex-start",
      color: "#21B8F9",

      textDecoration: "underline #21B8F9",
      forwardArrow: {
        ml: 1,
        color: "#21B8F9",
      },
    },
  },

  customer: {
    imgSize: {
      borderRadius: "50%",
      height: 30,
      width: 30,
      border: "1px solid #E7E9EC",
      boxSizing: "border-box",
      // background: "url(images.phone)",
      mr: 2,
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      // justifyContent: "space-between",
      my: 3,
    },
    infoText: {
      fontStyle: "normal",
      fontWeight: "400",
      color: "#103B66",
      fontSize: "14px",
      lineHeight: "22px",
    },
    contactUsContainer: {
      background: " #21B8F9",
      boxShadow:
        "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
      flex: "none",
      borderRadius: "5px",
    },
  },

  news: {
    topContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    newsContainer: { py: 5 },
    readingTime: {
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "12px",
      fontStyle: "normal",
      color: "#103B66",
      textDecoration: "underline ",
    },
    spinnerCon: {
      width: "100%",
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    latestCon: {
      display: "flex",
      alignItems: "center",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "27px",
    },
    latestIcon: {
      mr: 2,
    },
    visitCon: {
      display: "flex",
      alignItems: "center",
      color: "#21B8F9",
      textDecoration: "underline #21B8F9",
      cursor: "pointer",
      fontStyle: "norma",
      fontweight: "400",
      lineHeight: "20px",
      fontSize: "17px",
    },
    visitIcon: {
      ml: 2,
    },
    linkImg: {
      height: "100px",
      width: "100px",
      objectFit: "cover",
    },
    linkContainer: {
      display: "flex",
      justifyContent: "spacee",
      alignItems: "center",
      textDecoration: "none",
      gap: 1.5,
      // mr: -4,
      // width: "200px",
      // alignText: "left",
    },
    title: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "11px",
      lineHeight: "13px",
      textTransform: "uppercase",
      color: "#21B8F9",
    },
    infoCon: {
      // width: "185px",
    },
    description: {
      color: "#103B66",
      fontSize: "15px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "20px",
      // fontFamily: "Noto Sans HK",
      py: 1,
    },
    descriptionCon: {
      width: "185px",
    },
  },
};
