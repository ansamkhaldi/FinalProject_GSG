import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import useStyles from "./Style";

function Wheelchair(props) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item sm={5}>
          <div class></div>
        </Grid>
        <Grid item sm={7}>
          <div>
            <h1 className={classes.headWheel}>Wheelchair Rentals</h1>
            <p className={classes.parWheel}>
              Whether you have limited mobility because of an injury or your
              age, you can find the wheelchair you need at our store. We have
              different types of wheelchairs for rent. You can surely find the
              one that is to your liking. Contact us to learn more.
            </p>
            <Button
              className={classes.ButtonContactWheel}
              variant="contained"
              color="primary"
              size="small"
            >
              Contact Us
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Wheelchair;
