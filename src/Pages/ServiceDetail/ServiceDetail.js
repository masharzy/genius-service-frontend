import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div className="container">
        <h2 className="my-3 text-center">{service.name}</h2>

      <div className="card">
        <img src={service.img} alt="" />
        <div className="card-body">
          <p className="fs-4">Price: {service.price}</p>
          <p className="fs-5 text-muted">{service.description}</p>
        </div>
        <div className="text-center mb-2">
          <Link to="/checkout">
            <button className="btn btn-primary">Proceed Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
