import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Service = ({ service, setServices, services }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if (user?.email === "masharzya1@gmail.com") {
    console.log("masharzya1@gmail.com");
  }

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.deletedCount) {
            await setServices(services.filter((service) => service._id !== id));
            alert("Service deleted successfully");
          }
        });
    }
  };

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className="btn btn-primary me-2"
      >
        Book: {name}
      </button>
      <button
        onClick={() => handleDelete(_id)}
        style={{
          display:
            user?.email === "masharzya1@gmail.com" ? "inline-block" : "none",
        }}
        className="btn btn-danger me-2"
      >
        Delete
      </button>
      <Link
        to={`/dashboard/update-service/${_id}`}
        style={{
          display:
            user?.email === "masharzya1@gmail.com" ? "inline-block" : "none",
        }}
        className="btn btn-warning"
      >
        Update
      </Link>
    </div>
  );
};

export default Service;
