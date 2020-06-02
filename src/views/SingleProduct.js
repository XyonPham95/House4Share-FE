import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function SingleProduct(props) {
  const { pId } = useParams();
  const [product, setProduct] = useState({});
  const [owner, setOwner] = useState({});
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER + `/products/${pId}`);
    const body = await res.json();
    setProduct(body.data);
    setOwner(body.data.owner);
    console.log(body.data);
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
                <img src={product.image} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="box">
              <form>
                <p></p>
                <h4>House details</h4>
                <p>
                  White lace top, woven, has a round neck, short sleeves, has
                  knitted lining attached
                </p>
                <h4>Material & care</h4>
                <ul>
                  <li>Polyester</li>
                  <li>Machine wash</li>
                </ul>
                <h4>Size & Fit</h4>
                <ul>
                  <li>Regular fit</li>
                  <li>
                    The model (height 5'8 "and chest 33") is wearing a size S
                  </li>
                </ul>
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
                  Price: ${product.price}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
