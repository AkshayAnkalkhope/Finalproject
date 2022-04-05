import React, { useState, Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import "./Admin.css";
import { lightBlue } from "@material-ui/core/colors";
import { NavDropdown } from "react-bootstrap";

function Adminadd() {
  const [productName, setproductName] = useState("");
  const [productprice, setproductprice] = useState("");
  const [productquantity, setproductquantity] = useState("");
  const [productstatus, setproductstatus] = useState("");
  const [productcategory, setproductcategory] = useState("");
  const [gender, setgender] = useState("");
  const [productcolor, setproductcolor] = useState("");
  const [productsize, setproductsize] = useState("");
  const [productbrand, setproductbrand] = useState("");

  const changeproductName = (event) => {
    setproductName(event.target.value);
  };

  const changeproductprice = (event) => {
    setproductprice(event.target.value);
  };

  const changeproductquantity = (event) => {
    setproductquantity(event.target.value);
  };
  const changeproductstatus = (event) => {
    setproductstatus(event.target.value);
  };

  const changeproductcategory = (event) => {
    setproductcategory(event.target.value);
  };

  const changegender = (event) => {
    setgender(event.target.value);
  };
  const changeproductcolor = (event) => {
    setproductcolor(event.target.value);
  };
  const changeproductsize = (event) => {
    setproductsize(event.target.value);
  };
  const changeproductbrand = (event) => {
    setproductbrand(event.target.value);
  };
  const transferValue = async () => {
    if (
      productName == "" ||
      productprice == "" ||
      productquantity == "" ||
      productstatus == "" ||
      productcategory == "" ||
      gender == "" ||
      productcolor == "" ||
      productsize == "" ||
      productbrand == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Try again",
      });
    } else {
      let product = {
        productName: productName,
        productprice: productprice,
        productquantity: productquantity,
        productstatus: productstatus,
        productcategory: productcategory,
        productsize: productsize,
        productcolor: productcolor,
        productbrand: productbrand,
        gender: gender,
      };
      let status = await axios.post(
        "http://localhost:8080/add-product",
        product
      );

      if (status) {
        Swal.fire({
          icon: "success",
          title: "product Added!!!",
          text: "You have been successfully added product",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Try again",
          text: "product Not Added!!!",
        });
      }
    }
    setproductName("");
    setproductprice("");
    setproductstatus("");
    setproductcategory("");
    setproductquantity("");
    setproductsize("");
    setproductcolor("");
    setproductbrand("");
  };

  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid" style={{ height: "75px" }}>
          <a class="navbar-brand text-center fs-1">TRY IT ON</a>
          <form class="d-flex">
            <button class="form-control me-2" type="submit">
              LogIn
            </button>
            <button class="form-control me-2" type="submit">
              Register
            </button>
          </form>
        </div>
      </nav>
      <div class="container justify-content-center">
        <div class="card " style={{ width: "80vw" }}>
          <div class="card-body">
            <div
              className="container  height-100 p-5 rounded"
              style={{
                width: "80vw",
                backgroundColor: "rgba(0,0,255,0.1)",
              }}
            >
              <div className="row mb-5">
                <div
                  className="col   fs-2 text-center"
                  style={{ color: "blue" }}
                >
                  Add Admin products
                </div>
              </div>
              <div class="row justify-content-center">
                <div className="col-6">
                  <form>
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product name:</label>
                      <input
                        type="text"
                        id="pname"
                        name="pname"
                        placeholder="Enter product name"
                        required
                        value={productName}
                        onChange={changeproductName}
                      ></input>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product price:</label>
                      <input
                        type="text"
                        id="pname"
                        name="pname"
                        placeholder="Enter product price"
                        required
                        value={productprice}
                        onChange={changeproductprice}
                      ></input>
                    </div>

                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product status:</label>
                      <input
                        type="text"
                        id="pstatus"
                        name="pstatus"
                        placeholder="Enter product status"
                        required
                        value={productstatus}
                        onChange={changeproductstatus}
                      ></input>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Gender:</label>
                      <div className="d-flex ">
                        <div className="form-check me-4">
                          <input
                            className="form-check-input "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                        <br />
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          ></input>
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pcategory">Product category:</label>
                      <select
                        className="form-select"
                        style={{ width: "200px" }}
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">T-Shirt</option>
                        <option value="2">Shirt</option>
                        <option value="3">Jacket</option>
                        <option value="4">Coat</option>
                        <option value="5">shorts</option>
                        <option value="6">Jeans</option>
                        <option value="7">Sweater</option>
                        <option value="8">Jerkin</option>
                        <option value="9">Swimsuit</option>
                        <option value="10">Tracksuit</option>
                      </select>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product color:</label>
                      <input
                        type="text"
                        id="pcolor"
                        name="pcolor"
                        placeholder="Enter product color"
                        required
                        value={productcolor}
                        onChange={changeproductcolor}
                      ></input>
                    </div>

                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product size:</label>
                      <input
                        type="text"
                        id="pssize"
                        name="psize"
                        placeholder="Enter product size"
                        required
                        value={productsize}
                        onChange={changeproductsize}
                      ></input>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">
                      <label for="pname">Product Brand:</label>
                      <input
                        type="text"
                        id="pbrand"
                        name="pbrand"
                        placeholder="Enter product brand"
                        required
                        value={productbrand}
                        onChange={changeproductbrand}
                      ></input>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between mb-5">
                      <label for="pname"></label>
                      <form action="/action_page.php">
                        <input type="file" id="myFile" name="filename"></input>
                      </form>
                    </div>
                    <br />
                    <div className="container text-center  ">
                      <button type="submit" class="btn btn-primary bg-primary">
                        Addproduct
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Adminadd;
