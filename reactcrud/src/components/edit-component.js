import React, { useState, useEffect } from "react";
import axios from "axios";
const Edit = (props) => {
  const initialProduct = {
    ProductName: "",
    ProductDescription: "",
    ProductPrice: "",
  };
  const [products, setProduct] = useState(initialProduct);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...products, [name]: value });
  };
  const retrieveProducts = () => {
    axios
      .get("http://localhost:4000/products/edit/" + props.match.params.id)
      .then((response) => {
       
        setProduct({
          ProductName: response.data.ProductName,
          ProductDescription: response.data.ProductDescription,
          ProductPrice: response.data.ProductPrice,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
   
    const obj = {
      ProductName: products.ProductName,
      ProductDescription: products.ProductDescription,
      ProductPrice: products.ProductPrice,
    };
    axios
      .post(
        "http://localhost:4000/products/update/" + props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data))
      .catch(function (error) {
        console.log(error);
      });
    props.history.push("/productlist");
  };
  useEffect(() => {
    retrieveProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add New Business</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Product Name: </label>
          <input
            type="text"
            className="form-control"
            name="ProductName"
            value={products.ProductName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Product Description: </label>
          <input
            type="text"
            className="form-control"
            name="ProductDescription"
            value={products.ProductDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Product Price: </label>
          <input
            type="text"
            className="form-control"
            name="ProductPrice"
            value={products.ProductPrice}
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
export default Edit;
