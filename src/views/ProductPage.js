import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { title } from "../styles/MainStyle";
import Moment from "react-moment";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    maxHeight: 400,
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
  CardActions: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function ProductsPage(props) {
  const classes = useStyles();
  const { cId } = useParams();
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  const [sort, setSort] = useState("");
  let [activePage, setActivePage] = useState(1);

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  const getProducts = async () => {
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products?page=1&limit=8`
    );
    const body = await res.json();
    setTotalProducts(body.total);
    setProducts(body.data);
  };

  const getCategory = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER + `/category`);
    const body = await res.json();
    setCategorys(body.data);
  };

  const handlePageChange = async (pageNumber) => {
    setActivePage(pageNumber);
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products?page=${pageNumber}&limit=8`
    );
    const body = await res.json();
    setProducts(body.data);
  };

  const deleteProduct = async (id) => {
    const res = await fetch(process.env.REACT_APP_SERVER + `/products/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res.status === 204) {
      Swal.fire({
        title: "Success!",
        text: "House Deleted",
        icon: "success",
        confirmButtonText: "Cool",
      });
      getProducts();
      setActivePage(1);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Cannot Delete",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  const onClear = async () => {
    getProducts();
  };

  const onFilterCat = async (cId) => {
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products?category=${cId}&page=1&limit=8`
    );
    const body = await res.json();
    setProducts(body.data);
    setTotalProducts(body.total);
  };

  const sortLowToHigh = async () => {
    setSort("price");
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products?page=1&limit=8&sort=price`
    );
    const body = await res.json();
    setProducts(body.data);
  };

  const sortHighToLow = async () => {
    setSort("-price");
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products?page=1&limit=8&sort=-price`
    );
    const body = await res.json();
    setProducts(body.data);
  };

  let htmlCategory =
    categorys.length !== 0 ? (
      categorys.map((el) => {
        return (
          <div>
            <button
              style={{ color: "#B91319", backgroundColor: "white" }}
              className="btn btn-outline my-sm-0"
              type="button"
              onClick={() => onFilterCat(el.id)}
            >
              {" "}
              Filter {el.category} Only
            </button>
          </div>
        );
      })
    ) : (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );

  let htmlProducts =
    products.length !== 0 ? (
      products.map((el) => {
        return (
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
                  <IconButton
                    aria-label="settings"
                    onClick={() => deleteProduct(el._id)}
                  >
                    <DeleteForeverIcon disableFocusRipple />
                  </IconButton>
                }
                title={el.title}
                subheader={<Moment date={el.createdAt} format="DD/MMM/YY" />}
              />
              <CardMedia
                className={classes.media}
                image={el.image}
                title={el.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.description}
                </Typography>
              </CardContent>
              <CardActions>
                <div>Owner: {el.owner && el.owner.name}</div>
                <div style={{ color: "red" }}> Price: ${el.price}</div>
                <Link to={`/product/${el._id}`} style={{ cursor: "pointer" }}>
                  {" "}
                  View detail{" "}
                </Link>
              </CardActions>
            </Card>
          </GridItem>
          </GridContainer>
        );
      })
    ) : (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );

  return (
    <div>
      <div
        className="d-flex justify-content-around"
        style={{ padding: "25px" }}
      >
        <form className="form-inline w-60 ml-5">
          <button
            style={{ color: "#B91319", backgroundColor: "white" }}
            className="btn btn-outline my-sm-0"
            type="button"
            onClick={sortLowToHigh}
          >
            {" "}
            Low to High Price
          </button>
          <button
            style={{ color: "#B91319", backgroundColor: "white" }}
            className="btn btn-outline my-sm-0"
            type="button"
            onClick={sortHighToLow}
          >
            {" "}
            High to Low Price
          </button>
          {htmlCategory}
          <button
            style={{ color: "#B91319", backgroundColor: "white" }}
            className="btn btn-outline my-sm-0"
            type="button"
            onClick={onClear}
          >
            {" "}
            All
          </button>
        </form>
        <h4 className="mr-3 my-2">Total: {totalProducts}</h4>
      </div>

      <div
        style={{ border: "1px solid #ddd" }}
        className="bg-white p-3 rounded-lg mt-4"
      >
        <div className="row"> {htmlProducts}</div>
        <div className="d-flex justify-content-center mt-4">
          <Pagination
            className="pagination-style"
            activePage={activePage}
            itemsCountPerPage={8}
            totalItemsCount={totalProducts}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </div>
  );
}
