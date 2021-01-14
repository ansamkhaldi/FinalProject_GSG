import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    img: {
      height: 50,
      width: 50,
      margin: "2px 5px 0px 0px",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      margin: 0,
      padding: 8,
      listStyle: "none",
      color: theme.palette.primary.light,
    },
  },
  icons: {
    marginLeft: 9,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 100,
    },
  },
  icon: {
    margin: `10px 10px -6px 0px`,
    alignItems: "center",
    padding: 11,
    color: "#fff",
    height: 40,
    width: 40,
    border: "1px #fff solid",
    borderRadius: 4,
  },
  information: {
    fontSize: 22,
    margin: `10px `,
    color: theme.palette.primary.contrastText,
    fontWeight: 400,
    lineHeight: 1.2,
    fontFamily: theme.overrides.MuiTypography.fontFamily,
  },
  TypographySub: {
    fontSize: "17px",
    lineHeight: 1.5,
    fontFamily: theme.overrides.fontFamily,
    fontWeight: 400,
    paddingRight: `34px`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  textEmail: {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: 9,
    margin: `25px 0px`,
    width: `90%`,
  },
  ButtonSub: {
    textTransform: "none",
    backgroundColor: theme.palette.primary.light,
    border: `2px solid ${theme.palette.primary.light}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.light,
      borderRadius: 4,
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.grey[100],
  },
  gridLeft: {
    paddingRight: "10%",
    [theme.breakpoints.down("xg")]: {
      paddingRight: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0%",
    },
  },
  grid: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-60px",
      marginTop: "30px",
    },
  },
  gridRight: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },

  Box: {
    color: theme.palette.primary.contrastText,
  },

  footer: {
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(0),
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(12),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingRight: theme.spacing(0),
    },
  },
}));

export default useStyles;
