import { makeStyles } from "@material-ui/core/styles";
import Wheelchair from "../../../assest/image/Wheelchair.png";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "402px",
    width: "70%",
    backgroundImage: `url(${Wheelchair})`,
    transitionDuration: "0.4s",
    backgroundSize: "cover",
    backgroundPosition: "right",
    borderRadius: "60px",
    padding: "15px 15px",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "flex-end",
  },
  headWheel: {
    fontWeight: "700",
    fontSize: "40px",
    fontStyle: "normal",
    color: theme.palette.primary.main,
    fontFamily: theme.overrides.MuiTypography.fontFamily,
    lineHeight: 1.5,
  },
  parWheel: {
    width: "80%",
    lineHeight: 1.5,
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "16px",
    fontFamily: theme.overrides.MuiTypography.body.fontFamily,
    color: theme.palette.grey[200],
  },
  ButtonContactWheel: {
    fontFamily: theme.overrides.MuiTypography.body.fontFamily,
    fontSize: "18px",
    fontStyle: "normal",
    padding: "10px 0px",
    lineHeight: "25px",
    width: "25%",
    fontWeight: 500,
    marginTop: "25px",
    textTransform: "none",
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
