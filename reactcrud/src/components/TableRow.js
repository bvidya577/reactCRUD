import React from "react";
import { Link } from "react-router-dom";
import productService from "./product.service";
const TableRow = (props) => {
  const Delete = () => {
    productService
      .deleteProd(props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <tr>
      <td>{props.obj.ProductName}</td>
      <td>{props.obj.ProductDescription}</td>
      <td>{props.obj.ProductPrice}</td>
      <td>
        <Link to={"/edit/" + props.obj._id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button onClick={Delete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
