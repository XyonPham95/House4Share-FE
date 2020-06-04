import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Moment from "react-moment";
import Swal from "sweetalert2";

export default function SingleProduct(props) {
  const { pId } = useParams();
  const [product, setProduct] = useState({});
  const [owner, setOwner] = useState({});
  const [reRender, setReRender] = useState(false);
  const [getComment, setgetComment] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER + `/products/${pId}`);
    const body = await res.json();
    setProduct(body.data);
    setOwner(body.data.owner);
  };

  const postCommnet = async (e) => {
    e.preventDefault();
    const res = await fetch(
      process.env.REACT_APP_SERVER + `/products/${pId}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(getComment),
      }
    );
    if (res.status === 201) {
      const body = await res.json();
      setProduct(body.data);
      setOwner(body.data.owner);
      Swal.fire({
        title: "Success!",
        text: "Success comment",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Cannot comment",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  const handleComment = (e) => {
    setgetComment({ ...getComment, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div class="col-lg-12">
        <p class="lead"></p>
        <div id="productMain" class="row">
          <div class="col-sm-6">
            <div data-slider-id="1" class="owl-carousel shop-detail-carousel">
              <div>
                {" "}
                <img src={product.image} alt="" class="img-fluid height-400" />
                <div>
                  {product.comments && product.comments.length > 0
                    ? product.comments.map((el) => {
                        return (
                          <div
                            className="row"
                            style={{
                              border: "1px solid grey",
                              width: "50vh",
                              display: "flex",
                              margin: "25px",
                            }}
                          >
                            <div className="col-md-3">{el.user.name}</div>
                            <div className="col-md-9">
                              <div className="row">
                                {<Moment date={el.date} format="DD/MMM/YY" />}
                              </div>
                              <div className="row">{el.review}</div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="box">
              <form>
                <p></p>
                <h4>House details</h4>
                <p>
                  Full of basic Furniture enough to live and we can plan to get
                  more furniture by sharing.
                </p>
                <h4>Facilities</h4>
                <ul>
                  <li>
                    Internet cover all the house and have enough speed to access
                    for 4 people (45mbps)
                  </li>
                  <li>Kitchen have stove, non-oil fryer.</li>
                </ul>
                <h4> Benefits </h4>
                <ul>
                  <li>
                    Near to District 1 for 15 mins, 2 Big University (TDT and
                    RMIT), 2 Big Mall (Vivo and Crescent), big super Market
                    Lotte Mart and more{" "}
                  </li>
                  <li>
                    Live near Phu My Hung have a variety of food culture like
                    Korean, Japanese, Chinese, Thai, Indian and also Vietnamese
                    food.
                  </li>
                </ul>
                <h4> Looking For: </h4>
                <ul>
                  <li>
                    A partner which same age with owner ({owner.dob}) or higher
                    and less around 2 years. Same Gender ({owner.gender}) would
                    be great.
                  </li>
                  <li>
                    An optimistic who like to play guitar or any music
                    instrument. Because {owner.name} work all the week and want
                    to have a nice weekend with partner or by themself.
                    Especially do not like noisy people.
                  </li>
                </ul>
                <h4> Rooms: {product.room}</h4>
                <h4> Contact: </h4>
                <p
                  class="owner"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  Owner: {owner.name}
                  <span style={{ paddingLeft: "20px" }}>
                    {" "}
                    Gender: {owner.gender}
                  </span>
                </p>
                <p
                  class="contact"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  Address: {owner.address}
                  <span>Email: {owner.email}</span>
                </p>

                <p class="price" style={{ position: "center" }}>
                  <h4> Price: ${product.price} / month</h4>
                </p>
                <Form
                  onChange={handleComment}
                  onSubmit={postCommnet}
                  style={{ width: "100%" }}
                >
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave your Comment</Form.Label>
                    <Form.Control as="textarea" rows="3" name="review" />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="danger"
                    style={{ right: "100px" }}
                  >
                    {" "}
                    submit{" "}
                  </Button>
                </Form>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
