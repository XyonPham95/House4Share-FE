import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Label, Input } from "reactstrap";

export default function PostProductPage() {
  const [categorys, setCategory] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER + "/category", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const body = await res.json();
    setCategory(body.data);
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const createProduct = async (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById("upload_form").files[0];
    let formdata = new FormData();
    formdata.append("image", selectedFile);
    const res = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UPLOAD}`,
      },
      body: formdata,
    });

    if (res.ok) {
      const data = await res.json();
      const dataProduct = { ...product, image: data.data.link };
      console.log(dataProduct);
      if (data.success) {
        const res = await fetch(process.env.REACT_APP_SERVER + "/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(dataProduct),
        });
        const body = await res.json();
        console.log(body);
        if (res.status === 201) {
          alert("Post successfully");
        } else {
          console.log("error");
        }
      } else {
        console.log("cannot upload because of", data.message);
      }
    } else {
      alert("cannot upload");
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h4>Post Your House To Share</h4>
      <p>Find Your Roomate</p>
      <br />
      <div>
        <form onChange={handleChange} onSubmit={createProduct}>
          <div className="form-group ">
            <label htmlFor="inputTitle">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="inputTitle"
              placeholder="Title"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputDesc"> Description </label>
              <input
                type="text"
                name="description"
                className="form-control"
                id="inputDesc"
                placeholder="Description"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Type</label>
              <select name="category" id="inputState" className="form-control">
                <option>Choose...</option>
                <option value={categorys[0] ? categorys[0].id : ""}>
                  House
                </option>
                <option value={categorys[1] ? categorys[1].id : ""}>
                  Apartment
                </option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputRoom">Rooms</label>
              <input
                type="number"
                name="room"
                className="form-control"
                id="inputRoom"
                placeholder="Room"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPrice">Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                id="inputPrice"
                placeholder="Price"
              />
            </div>
          </div>
          <div class="form-group">
            <Label for="upload_form">File</Label>
            <Input
              type="file"
              name="image"
              className=""
              id="upload_form"
              accept="image/png, image/jpeg"
            />
          </div>

          <Button
            style={{ backgroundColor: "#FF0000" }}
            type="submit"
            className="btn text-white"
          >
            Post
          </Button>
        </form>
      </div>
    </div>
  );
}
