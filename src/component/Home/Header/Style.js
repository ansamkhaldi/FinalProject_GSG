import { makeStyles } from "@material-ui/core/styles";
import { Autorenew } from "@material-ui/icons";
import HeaderImage from "../../../assest/image/Header.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
  },
  header: {
    backgroundImage: `url(${HeaderImage})`,
    marginTop: "145px",
    height: "500px",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    textAlign: "center",
    justifyItems: "center",
  },
  Text: {
    color: theme.palette.grey[200],
    height: "100%",
    width: "50%",
    padding: "6% 8%",
    flex: "50%",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    fontFamily: theme.overrides.MuiTypography.body.fontFamily,
    lineHeight: 1.5,
  },
}));

export default useStyles;
