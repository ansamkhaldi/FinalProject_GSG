import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // display: "flex",
  //   // flexWrap: "wrap",
  //   // justifyContent: "space-around",
  //   // overflow: "hidden",
  //   // backgroundColor: theme.palette.background.paper,
  // },
  cardGrid: {
    //paddingTop: theme.spacing(8),
    //paddingBottom: theme.spacing(8),
    padding: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  List: {
    // margin: "90px 0px",
    //padding: "0% 6%",
  },
  list: {
    color: theme.palette.primary.contrastText,
    height: "237px",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    textAlign: "center",
    justifyItems: "center",
    border: "1px solid red",
  },
}));

export default useStyles;
