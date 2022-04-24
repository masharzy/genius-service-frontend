import React from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

const UpdateService = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const onSubmit = (data, e) => {
      console.log(data);
    // update service
    fetch(`http://localhost:5000/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="mt-3 text-center">Update Service</h1>
      <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-2 py-2"
          placeholder="Name"
          name="name"
          {...register("name", {  maxLength: 20 })}
        />
        <input
          className="form-control mb-2 py-2"
          placeholder="Price"
          {...register("price")}
        />
        <input
          className="form-control mb-2 py-2"
          placeholder="Image URL"
          {...register("img")}
        />
        <textarea
          className="form-control mb-2"
          rows={5}
          placeholder="Description"
          {...register("description", { maxLength: 150 })}
        />
        <input className="btn btn-success mb-2 w-100 py-2" type="submit" />
      </form>
      <Link className="btn btn-primary" to="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default UpdateService;
