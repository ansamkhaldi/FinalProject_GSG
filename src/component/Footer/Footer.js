import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Style";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import Logo from "../../assest/image/logo.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../Logo/Logo";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="theme.palette.primary.contrastText,"
      align="start"
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
      <Link color="inherit" href="https://material-ui.com/">
        All Rights Reserved.
      </Link>{" "}
    </Typography>
  );
}
const footers = [
  "About Us",
  " Services ",
  "Reviews",
  "Monthly A-D",
  "Blog",
  "Contact Us",
];

export default function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="xg" component="footer" className={classes.footer}>
      <Grid container spacing={0} justify="space-evenly">
        <Grid item sm={12} md={6} className={classes.gridLeft}>
          <Logo />

          <Typography
            variant="subtitle1"
            align="start"
            component="p"
            className={classes.TypographySub}
          >
            Subscribe to our newsletter for seasonal promotions, health news and
            savings
          </Typography>
          <form>
            <TextField
              className={classes.textEmail}
              autoComplete="off"
              placeholder="Enter your e-mail here *"
              variant="outlined"
              color="secondary"
              fullWidth="2"
              margin="dense"
              type="email"
            />
            <Button
              className={classes.ButtonSub}
              variant="contained"
              color="secondary"
              size="large"
            >
              Subscribe
            </Button>
          </form>
        </Grid>
        <Grid item sm={6} md={3} className={classes.grid} wrap>
          <Typography
            variant="h6"
            color="textPrimary"
            gutterBottom
            className={classes.information}
          >
            Information
          </Typography>
          <ul>
            {footers.map((item) => (
              <li>
                <IoIosArrowForward size={10} className={classes.Icon} />
                <Link
                  href="#"
                  className={classes.link}
                  variant="subtitle1"
                  color="textSecondary"
                  style={{ textDecoration: "none" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item sm={6} md={3} className={classes.gridRight}>
          <Typography
            variant="h6"
            className={classes.information}
            color="contrastText"
            gutterBottom
          >
            Follow Us
          </Typography>
          <Box className={classes.icons} display="flex" flexWrap="wrap">
            <span className={classes.icon}>
              <FaFacebookF size={15} />
            </span>
            <span className={classes.icon}>
              <FaTelegramPlane size={15} />
            </span>
            <span className={classes.icon}>
              <AiOutlineInstagram size={15} />
            </span>
          </Box>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Copyright align="start" />
      </Box>
    </Container>
  );
}
