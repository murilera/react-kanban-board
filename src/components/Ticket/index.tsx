import React from "react";
import { useNavigate } from "react-router-dom";

const Ticket = ({ ticket, persons, moveTicket, updateTicketAssignment }) => {
  const navigate = useNavigate();

  const handleMoveLeft = () => moveTicket(ticket.id, "left");
  const handleMoveRight = () => moveTicket(ticket.id, "right");

  const handleAssignmentChange = (event) => {
    const personId = event.target.value;
    updateTicketAssignment(ticket.id, personId);
  };

  const handleTitleClick = () => {
    navigate(`/ticket/${ticket.id}`, { state: { ticket } });
  };

  return (
    <div className="ticket">
      <p onClick={handleTitleClick} style={{ cursor: "pointer" }}>
        {ticket.title}
      </p>
      <div className="actions">
        <div>
          <button onClick={handleMoveLeft}>{`<-`}</button>
          <button onClick={handleMoveRight}>{`->`}</button>
        </div>

        <select
          value={ticket.assignedTo || ""}
          onChange={handleAssignmentChange}
        >
          <option value="">Assign to...</option>
          {persons.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Ticket;
