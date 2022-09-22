import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { check } from "../redux/categories/categories";

const Category = () => {
  const dispatch = useDispatch();
  const status = useSelector((s) => s.categoryReducer);
  const checkStatus = (e) => {
    e.preventDefault()
    dispatch(check())
  }
  return (
  <>
    <button
      type="button"
      className="status"
      onClick={checkStatus}
    >Check Status</button>
    <p>{status}</p>
  </>
)};

export default Category;
