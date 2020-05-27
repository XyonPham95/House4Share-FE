import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUp from "@material-ui/icons/ThumbUp";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import AttachMoney from "@material-ui/icons/AttachMoney";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import InfoArea from "../components/InfoArea";

import styles from "../styles/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About our products</h2>
          <h5 className={classes.description}>
            This product was invented to help people who live in District 7 to
            find their roommate to share rental house and apartment. The main
            target is urban university students which from RMIT University, Ton
            Duc Thang University, etc. The main reason is near those university
            have rental house but it have big capacity for 1 person to live and
            high rental price for a university student to handle by themself.
            Our respect want students have better university life and maybe have
            friends when they live alone in the big Ho Chi Minh City.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="User Friendly Application"
              description="App with minimalist UI help user to interface easily, find roommate faster and easy with House4Share."
              icon={ThumbUp}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Safe And New Experiences"
              description="A great oppertunity to meet with new people and make friends and learn how to share and live with other people."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Great Saving For The Future"
              description="By entering our service, you will save a lot of times to find a roommate that you will cannot find in anywhere else and specially you can live in a big house with low budget."
              icon={AttachMoney}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
