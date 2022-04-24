import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service added successfully");
          e.target.reset();
        }
      });
    // console.log(data);
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="mt-3 text-center">Add Service</h1>
      <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-2 py-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="form-control mb-2 py-2"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <input
          className="form-control mb-2 py-2"
          placeholder="Image URL"
          {...register("img", { required: true })}
        />
        <textarea
          className="form-control mb-2"
          rows={5}
          placeholder="Description"
          {...register("description", { required: true, maxLength: 150 })}
        />
        <input className="btn btn-success mb-2 w-100 py-2" type="submit" />
      </form>
      <Link className="btn btn-primary" to="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default AddService;
