import React, { useState, useEffect } from "react";
import axios from "axios";
const Create = (props) => {
  const [product, setProduct] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
   
    const obj = {
      ProductName: product.ProductName,
      ProductDescription: product.ProductDescription,
      ProductPrice: product.ProductPrice,
    };
    axios.post("http://localhost:4000/products/add", obj).then((res) => {
     
      setProduct({
        message: res.data.Product,
      });
      setTimeout(() => setProduct({ message: "" }), 3000);
    });
    setProduct({
      ProductName: "",
      ProductDescription: "",
      ProductPrice: "",
    });
    setSubmitted(true);
    props.history.push('/productlist')
  };
  useEffect(() => {
    setProduct({
      ProductName: "",
      ProductDescription: "",
      ProductPrice: "",
      message: "",
    });
  }, []);
  return (
    <div style={{ marginTop: 10 }}>
      {submitted ? (
        <div
          id="msg"
          className="alert alert-success"
          style={{ display: product.message ? "block" : "none" }}
        >
          Login Success!{product.message}
        </div>
      ) : (
        ""
      )}
      <h3>Add New Business</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Product Name: </label>
          <input
            type="text"
            className="form-control"
            name="ProductName"
            value={product.ProductName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Product Description: </label>
          <input
            type="text"
            className="form-control"
            name="ProductDescription"
            value={product.ProductDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Product Price: </label>
          <input
            type="text"
            className="form-control"
            name="ProductPrice"
            value={product.ProductPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Register Business"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default Create;
