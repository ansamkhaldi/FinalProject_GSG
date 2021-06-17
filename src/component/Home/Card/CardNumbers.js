import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import useStyles from "./Style";
import CardNumbers from "./CardNumbersData";
import Card from "./Card";

export default function CardNumber(props) {
  const classes = useStyles();
  return (
    <div fullWidth="100%" className={classes.cardGrid}>
      <Container maxWidth="xg" className={classes.List}>
        <Grid container justify="space-evenly" spacing={4}>
          <Card padding={`0px 16px 16px 0px`}>
            <h1 className={classes.headCard0}>
              Working For Your Better Health
            </h1>
            <span className={classes.ParCard}>
              Take care of your health on time
            </span>
            <Button
              className={classes.ButtonAllServices}
              variant="contained"
              color="primary"
              size="small"
            >
              All Services
            </Button>
          </Card>
          {CardNumbers.map((data, index) => {
            // console.log(data.id);
            return (
              <Card border={`1px solid #677289`} paddingBottom={`2%`}>
                <container>
                  <Grid container>
                    <Grid item sm={10}>
                      <h3 className={classes.headCard}>{data.title}</h3>
                    </Grid>
                    <Grid item sm={2} className={classes.NumCard}>
                      <span>{data.id}</span>
                    </Grid>
                    <p className={classes.ParCard}>{data.text}</p>
                  </Grid>
                </container>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
