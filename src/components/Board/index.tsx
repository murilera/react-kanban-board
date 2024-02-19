import React, { useEffect, useState } from "react";
import Swimlane from "../Swimlane";
import Ticket from "../Ticket";
import Filter from "../Filter";
import axios from "axios";

export interface SwimlaneInterface {
  id: number;
  title: string;
}

export interface TicketInterface {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  swimlaneId: number;
}

export interface PersonsInterface {
  id: number;
  name: string;
}

const Board = ({
  setTicketsCounts,
  swimlanes,
  tickets,
  setTickets,
  persons,
}) => {
  const [selectedPersonId, setSelectedPersonId] = useState("");

  useEffect(() => {
    const updateTicketsCounts = () => {
      const counts = { todo: 0, inProgress: 0, done: 0 };
      tickets.forEach((ticket) => {
        if (ticket.swimlaneId === 1) counts.todo += 1;
        else if (ticket.swimlaneId === 2) counts.inProgress += 1;
        else if (ticket.swimlaneId === 3) counts.done += 1;
      });
      setTicketsCounts(counts);
    };

    updateTicketsCounts();
  }, [tickets, setTickets]);

  const moveTicket = (ticketId, direction) => {
    setTickets((prevTickets) => {
      const ticketIndex = prevTickets.findIndex(
        (ticket) => ticket.id === ticketId
      );
      if (ticketIndex === -1) return prevTickets;

      const ticket = prevTickets[ticketIndex];
      const currentSwimlaneIndex = swimlanes.findIndex(
        (swimlane) => swimlane.id === ticket.swimlaneId
      );
      if (currentSwimlaneIndex === -1) return prevTickets;

      let newSwimlaneIndex =
        direction === "left"
          ? currentSwimlaneIndex - 1
          : currentSwimlaneIndex + 1;
      newSwimlaneIndex = Math.max(
        0,
        Math.min(swimlanes.length - 1, newSwimlaneIndex)
      );

      const newSwimlaneId = swimlanes[newSwimlaneIndex].id;
      const updatedTicket = { ...ticket, swimlaneId: newSwimlaneId };

      const updatedTickets = [...prevTickets];
      updatedTickets[ticketIndex] = updatedTicket;
      return updatedTickets;
    });
  };

  const updateTicketAssignment = (ticketId, personId) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) => {
        if (ticket.id === ticketId) {
          return { ...ticket, assignedTo: personId };
        }
        return ticket;
      })
    );
  };

  const handleFilterChange = (personId) => {
    setSelectedPersonId(personId);
  };

  if (!swimlanes || !persons || !tickets) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  const filteredTickets = selectedPersonId
    ? tickets.filter((ticket) => ticket.assignedTo === selectedPersonId)
    : tickets;

  return (
    <div className="board">
      <Filter persons={persons} onFilterChange={handleFilterChange} />
      {swimlanes &&
        swimlanes.map((swimlane) => (
          <Swimlane key={swimlane.id} title={swimlane.title}>
            {filteredTickets
              .filter((ticket) => ticket.swimlaneId === swimlane.id)
              .map((ticket) => (
                <Ticket
                  key={ticket.id}
                  ticket={ticket}
                  persons={persons}
                  moveTicket={(ticketId, direction) =>
                    moveTicket(ticketId, direction)
                  }
                  updateTicketAssignment={updateTicketAssignment}
                />
              ))}
          </Swimlane>
        ))}
    </div>
  );
};

export default Board;
