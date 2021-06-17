import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
  },
  topNav: {
    minHeight: 53,
    paddingTop: "14px",
    borderBottom: `1px solid ${theme.palette.grey[100]}`,
    backgroundColor: theme.palette.primary.contrastText,
  },
  typography: {
    backgroundColor: theme.palette.primary.main,
    padding: "6px 20px",
    borderRadius: "40px",
    color: theme.palette.primary.contrastText,
    fontFamily: theme.overrides.MuiTypography.fontFamily,
    fontSize: "10.5px",
    fontStyle: "normal",
    marginLeft: 80,
    marginTop: 0,
    width: 131,
    fontWeight: 700,
    lineHeight: 1.3,
    [theme.breakpoints.down("sm")]: {
      Height: 150,
      width: 90,
      marginLeft: 20,
      fontSize: "12px",
      marginTop: 10,
      textAlign: "center",
    },
  },

  P: {
    color: theme.palette.grey[300],
    fontSize: "12.5px",
    marginTop: 5,
    paddingRight: "10%",
    marginLeft: "10%",
    fontFamily: theme.typography.body1.fontFamily,
    textAlign: "start",
  },
  Grid: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5px",
  },
  link: {
    color: theme.palette.grey[200],
    fontSize: "15px",
    lineHeight: 1.2,
    fontFamily: theme.typography.body1.fontFamily,
    textDecoration: "none",
    margin: "0px 5px",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: "0% 4%",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  Link: {
    // margin: theme.spacing(2),
    textTransform: "initial",
    color: theme.palette.grey[200],
    //marginTop: "30px",
    padding: "10px",
    fontSize: "14px",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  nav: {
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ButtonSub: {
    textTransform: "none",
    // fontFamily: theme.typography.body1.fontFamily,
    backgroundColor: theme.palette.primary.light,
    border: `2px solid ${theme.palette.primary.light}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.light,
      borderRadius: 4,
    },
  },
}));

export default useStyles;
