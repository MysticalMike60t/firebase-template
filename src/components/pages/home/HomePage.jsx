import React from "react";
import $ from "jquery";

import product_image_001 from "../../../assets/images/413ce822e5099011c78abcfee4ab8485ac6f9f9a.webp";

const HomePage = () => {
  let working;
  let pageError;
  try {
    console.log("All Good!");
    localStorage.setItem("pageStatus", "working");
  } catch (error) {
    pageError = error;
    console.log(error);
  }
  $(document).ready(function () {
    if (localStorage.getItem("pageStatus") === "working") {
      working = 1;
      $(".image__img")
        .css({ transition: "3s ease all" })
        .removeClass("image__img-active");
      $(".content__product")
        .css({ transition: "3s ease all" })
        .removeClass("content__product-active");
      $(".wrapper__title")
        .css({ transition: "3s ease all" })
        .removeClass("wrapper__title-active");
      $(".image__img")
        .unbind()
        .click(function () {
          $(".image__img")
            .css({ transition: "1s ease all" })
            .toggleClass("image__img-active");
          $(".content__product")
            .css({ transition: "1s ease all" })
            .toggleClass("content__product-active");
          $(".wrapper__title")
            .css({ transition: "1s ease all" })
            .toggleClass("wrapper__title-active");
        });
    } else {
      working = 0;
      alert(`${pageError} ${working}`);
    }
  });
  return (
    <div className="container__page container__page-home">
      <div className="page__wrapper">
        <div className="wrapper__title wrapper__title-active">
          <h1 className="title__h1">Au Vodka</h1>
        </div>
        <div className="wrapper__content">
          <div className="content__product content__product-active">
            <div className="product__image">
              <img
                className="image__img image__img-active"
                src={product_image_001}
                alt="Vodka"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
