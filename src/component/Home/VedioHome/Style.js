import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../assest/image/BackgroundVedio.jpg";
import Demo from "../../../assest/image/vedio.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    textAlign: "start",
    justifyItems: "center",
    padding: "20px 95px",
  },
  left: {
    flex: "50%",
  },
  head: {
    fontWeight: "700",
    fontSize: "42px",
    fontStyle: "normal",
    color: theme.palette.primary.main,
    fontFamily: theme.overrides.MuiTypography.fontFamily,
    lineHeight: 1.3,
  },
  text: {
    lineHeight: 1.3,
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "15px",
    fontFamily: theme.overrides.MuiTypography.body.fontFamily,
    color: theme.palette.grey[200],
  },
  right: {
    padding: "15px 15px 15px 75px ",
    flex: "50%",
  },
  demo: {
    width: "400px",
    height: "400px",
    backgroundImage: `url(${Demo})`,
    backgroundSize: "contain",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    marginLift: "30px",
  },
}));
export default useStyles;
