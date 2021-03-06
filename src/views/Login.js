import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image from "../img/bg7.jpg";
import CardHeader from "../components/CardHeader";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
  const [userLogin, setUserLogin] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(process.env.REACT_APP_SERVER + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    });
    const body = await res.json();
    if (res.status === 201) {
      localStorage.setItem("token", body.data.jsonToken);
      props.setUser(body.data.user);
      history.push("/");
      Swal.fire({
        title: "Succes!",
        text: "Login Success",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: `${body.error}`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  const classes = useStyles();
  console.log(process.env.REACT_APP_SERVER);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}></Box>
            <div>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>OR SIGN IN WITH SOCIAL NETWORK </h4>
                <div className={classes.socialLine}>
                  <Button
                    justIcon
                    href={`${process.env.REACT_APP_SERVER}/auth/facebook`}
                    color="transparent"
                  >
                    <i className={"fab fa-facebook fa-2x"} />
                  </Button>
                  <Button
                    justIcon
                    href={`${process.env.REACT_APP_SERVER}/auth/google`}
                    color="transparent"
                  >
                    <i className={"fab fa-google fa-2x"} />
                  </Button>
                  <Button
                    justIcon
                    href={`${process.env.REACT_APP_SERVER}/auth/github`}
                    color="transparent"
                  >
                    <i className={"fab fa-github fa-2x"} />
                  </Button>
                  <Button
                    justIcon
                    href={`${process.env.REACT_APP_SERVER}/auth/twitter`}
                    color="transparent"
                  >
                    <i className={"fab fa-twitter fa-2x"} />
                  </Button>
                </div>
              </CardHeader>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
