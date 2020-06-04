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
import { useHistory, Link } from "react-router-dom";
import Swal from "sweetalert2";
import homeIcon from "../homeIcon.png";

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
    history.push("/");
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
      Swal.fire({
        title: "Success!",
        text: "Log Out Success",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Cannot Log Out",
        icon: "error",
        confirmButtonText: "Cool",
      });
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
            onClick={home}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <img src={homeIcon} alt="Logo" />
          </IconButton>
          <Typography
            style={{ cursor: "pointer", fontSize:"30px" }}
            color="inherit"
            variant="h6"
            className={classes.title}
            onClick={product}
            noWrap
          >
            Houses
          </Typography>

          <Typography
            style={{ cursor: "pointer", fontSize:"30px" }}
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
                <AccountCircle style={{fontSize: "2rem"}} />{" "}
                {!props.user ? (
                  <Link
                    color="inherit"
                    variant="h6"
                    underline="none"
                    style={{fontSize:"25px"}}
                    className={classes.rightLink}
                    to="/login/"
                  >
                    {"Sign In"}
                  </Link>
                ) : (
                  <div style={{fontSize:"25px"}}>
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
