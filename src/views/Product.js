import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import { title } from "../styles/MainStyle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    marginLeft: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  grid: {
    position: "relative",
    width: "auto",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
    marginRight: "-15px",
    marginLeft: "-15px",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: 40,
  },
  section: {
    paddingBottom: "20px",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Sample House4Share</h2>
      <div>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image="https://media.architecturaldigest.com/photos/5911fc60a3c9ef254cc9f18f/2:1/w_5000,h_2500,c_limit/OKL_AmyStone_Interior_044.jpg"
                title="House 1"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                title="House 2"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image="https://media1.popsugar-assets.com/files/2020/04/07/802/n/1922507/545bdabe3c605cd6_kara-eads-L7EwHkq1B2s-unsplash/i/free-zoom-backgrounds.jpg"
                title="House 3"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image="https://bali.hardrockhotels.net/wp-content/uploads/2019/04/Masthead_Loft.jpg"
                title="House 4"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image=" https://media.architecturaldigest.com/photos/560c37dd7da26e3235ad995e/master/pass/gray-living-room-01.jpg"
                title="House 5"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image="https://9creation.com.sg/wp-content/uploads/2020/01/living-room-design-Singapore-Image-1-min.jpg"
                title="House 6"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image="https://u.profitroom.pl/2018-citycenterapartment-krakow-com/thumb/1920x1080/uploads/12/City_Center12_04.jpg"
                title="House 7"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rivera Apartment"
                subheader="September 14, 2019"
              />
              <CardMedia
                className={classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBYg4-gItmX6cRpPigubV7e4cMoGpJYLPLtIC7ARy7G1GGE7tW&usqp=CAU"
                title="House 8"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thank you for visting House4Share. This website is making for
                  people (Mostly university student) around distric 7. This is
                  just an product sample please click HOUSES on the top left to
                  see all the houses. Again thanks for support House4Share.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
