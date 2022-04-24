import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user, setUser] = useState({
    name: "Akbar The Great",
    email: "akbar@momo.taj",
    address: "Tajmohol Road Md.pur",
    phone: "0171111111",
  });

  const handleAddressChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const { address, ...rest } = user;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    console.log(newUser);
    setUser(newUser);
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form>
        <input
          className="w-100 mb-2"
          type="text"
          value={user.name}
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user.email}
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service.name}
          placeholder="service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          value={user.address}
          onChange={handleAddressChange}
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          value={user.phone}
          placeholder="phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
