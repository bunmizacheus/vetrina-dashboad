export const classes = {
  dashboardCon: {
    width: "100%",
    // backgroundColor: "red",
    minHeight: "100vh",
    position: "relative",
  },
  dashboardInfoBox: {
    width: "100%",
    height: { xs: "40vh", sm: "30vh", md: "20vh", lg: "40vh" },
    color: "white",
    background:
      "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
  },
  container: {
    display: "flex",
    justifyContent: { xs: "center", sm: "space-between" },
    alignItems: { xs: "flex-start", sm: "baseline" },
    flexDirection: { xs: "column", sm: "row" },
  },
  welcomeMsg: {
    pt: 8,
    ml: 1.0,
    lineHeight: "39px",
    fontWeight: 600,
    fontSize: "34px",
  },

  appVetrinaContainer: {
    display: "flex",
    fontWeight: "500",
    fontSize: "17px",
    lineHeight: "22px",
    mr: 2.5,

    // justifyContent: { xs: "center", sm: "space-around" },
    // flexDirection: { xs: "column", sm: "row" },

    // backgroundColor: "red",

    // width: "30%",
  },
  appVetrinaText: {
    textDecoration: "underline",
    pr: 1.5,
    cursor: "pointer",

    // fontFamily: "Noto Sans HK",
  },
  dashboardMainCon: {
    width: "100%",
    position: "absolute",
    top: { xs: 180, sm: 160, lg: 150 },
    // backgroundColor: "red",
  },
};
