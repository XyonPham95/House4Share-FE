import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openM = Boolean(anchorEl);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const home = () => {
    window.location = "/";
  };

  const profile = () => {
    history.push("/user/profile");
  };

  const createHome = () => {
    history.push("/user/createhouse");
  };

  const product = () => {
    history.push("/products");
  };

  async function logout() {
    const res = await fetch(process.env.REACT_APP_SERVER + "/auth/logout", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (res.status === 204) {
      props.setUser(null);
      localStorage.removeItem("token");
      history.push("/login");
    } else {
      alert("cannot log out");
    }
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", color: "red" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ cursor: "pointer" }}
            color="inherit"
            variant="h6"
            className={classes.title}
            onClick={product}
            noWrap
          >
            Houses
          </Typography>

          <Typography
            style={{ cursor: "pointer" }}
            color="inherit"
            variant="h6"
            className={classes.title}
            onClick={home}
            noWrap
          >
            House4Share
          </Typography>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />{" "}
                {!props.user ? (
                  <Link
                    color="inherit"
                    variant="h6"
                    underline="none"
                    className={classes.rightLink}
                    href="/login/"
                  >
                    {"Sign In"}
                  </Link>
                ) : (
                  <div>
                    {props.user && props.user.name ? props.user.name : ""}
                  </div>
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openM}
                onClose={handleClose}
              >
                <MenuItem onClick={profile}>Profile</MenuItem>
                <MenuItem onClick={createHome}>Add House</MenuItem>
                <MenuItem onClick={logout}>Log Out </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
