import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  com: {
    fontSize: "18px",
    fontFamily: theme.overrides.MuiTypography.fontFamily,
  },
}));
export default useStyles;
