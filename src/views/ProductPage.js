import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
import { makeStyles } from "@material-ui/core/styles";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
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
  CardActions: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function ProductsPage(props) {
  const classes = useStyles();
  const { cId } = useParams();
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  // const [keyword, setKeyword] = useState("");
  // const [searching, setSearching] = useState(false);
  // const [sort, setSort] = useState("");
  let [activePage, setActivePage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, []);
  console.log(props.numProduct);
  const getProducts = async () => {
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products?page=1&limit=8`
    );
    const body = await res.json();
    console.log(body);
    setTotalProducts(body.total);
    setProducts(body.data);
  };
  const handlePageChange = async (pageNumber) => {
    setActivePage(pageNumber);
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products?page=${pageNumber}&limit=8`
    );
    const body = await res.json();
    setProducts(body.data);
  };
  // const onSearch = async (e) => {
  //   setSearching(true);
  //   setKeyword(e.target.value);
  //   if (!e.target.value) {
  //     onClearSort();
  //   } else {
  //     const res = await fetch(
  //       process.env.REACT_APP_SERVER +
  //         `/products/category/${cId}?title=${e.target.value}`
  //     );
  //     const body = await res.json();
  //     if (body.status === "success") {
  //       setProducts(body.data.products);
  //       setSearching(false);
  //     }
  //   }
  // };

  // const sortLowToHigh = async () => {
  //   setSort("price");
  //   const res = await fetch(
  //     process.env.REACT_APP_SERVER +
  //       `/products/category/${cId}?sort=price&page=1&limit=8`
  //   );
  //   const body = await res.json();
  //   setProducts(body.data.products);
  // };
  // const sortHighToLow = async () => {
  //   setSort("-price");
  //   const res = await fetch(
  //     process.env.REACT_APP_SERVER +
  //       `/products/category/${cId}?sort=-price&page=1&limit=8`
  //   );
  //   const body = await res.json();
  //   setProducts(body.data.products);
  // };
  // const onClearSort = () => {
  //   setSort("");
  //   setActivePage(1);
  //   getProductByCategory();
  // };
  // const sortNewest = async () => {
  //   setSort("-createdAt");
  //   const res = await fetch(
  //     process.env.REACT_APP_SERVER +
  //       `/products/category/${cId}?sort=-createdAt&page=1&limit=8`
  //   );
  //   const body = await res.json();
  //   setProducts(body.data.products);
  // };

  let htmlProducts =
    products.length !== 0 ? (
      products.map((el) => {
        return (
          <div>
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
                title={el.title}
                subheader={el.createdAt}
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
                <div>Owner: {el.owner.name}</div>
                <div style={{ color: "red" }}> Price: ${el.price}</div>
                <Link to={`/product/${el._id}`}> View detail </Link>
              </CardActions>
            </Card>
          </div>
        );
      })
    ) : (
      <div>`loading</div>
    );

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3 className="my-2"></h3>
        <form className="form-inline w-50 ml-5">
          <input
            className="form-control w-75 mr-sm-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            // value={keyword}
          />
          <button
            style={{ color: "#B91319", backgroundColor: "white" }}
            className="btn btn-outline my-sm-0"
            type="button"
          >
            Search
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
