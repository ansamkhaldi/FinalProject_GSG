import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Toolbar: {
    paddingLeft: 0,
    marginBottom: "20px",
  },
  typography: {
    fontWeight: 700,
    padding: "0 7px",
    // color: theme.palette.primary.contrastText,
    fontSize: 23,
    lineHeight: 1.3,
    fontFamily: theme.overrides.MuiTypography.fontFamily,
  },
  Typography1: {
    letterSpacing: 3,
    fontSize: 21,
  },
}));
export default useStyles;
