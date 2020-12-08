import axios from "axios";
const baseurl = "http://localhost:4000/";
const getAllProd = () => {
  return axios.get(baseurl + "products/all");
};
const deleteProd = (id) => {
  return axios.get(baseurl + "products/delete/" + id);
};
export default {
  getAllProd,
  deleteProd,
};
