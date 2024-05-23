import React from "react";
import "./index.scss";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import { addNewData } from "../../services";
import { validateSchema } from "../../validation/validation";
const AddPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      newPrice: 0,
      imageUrl: "",
    },
    onSubmit: (values) => {
      addNewData(values).then((res) => {
        console.log(res);
      });
    },
    validationSchema: validateSchema,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ADD PAGE</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="newPrice">Price</label>
          <input
            id="newPrice"
            name="newPrice"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.newPrice}
          />
          <label htmlFor="imageUrl">Image</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            onChange={formik.handleChange}
            value={formik.values.imageUrl}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default AddPage;
