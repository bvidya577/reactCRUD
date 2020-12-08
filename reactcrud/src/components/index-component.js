import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import productService from "./product.service";
const Index = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      retrieveProducts();
    }, 1000);
  }, []);
  const retrieveProducts = () => {
    productService
      .getAllProd()
      .then((response) => {
        setProducts(response.data);
        //  console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const tabRow = () => {
    return products.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  };
  return (
    <div>
      <h3 align="center">products List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{tabRow()}</tbody>
      </table>
    </div>
  );
};
export default Index;
