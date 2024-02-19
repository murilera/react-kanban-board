import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TicketDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ticket } = location.state || {};

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!ticket) return <div>No ticket data!</div>;

  return (
    <>
      <div>
        <h1>{ticket.title}</h1>
        <p>{ticket.description}</p>
      </div>
      <div>
        <button onClick={handleBackClick}>Back</button>
      </div>
    </>
  );
};

export default TicketDetails;
