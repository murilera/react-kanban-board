import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Header from "./components/Header";
import TicketDetails from "./components/TicketDetails";

function App() {
  const [ticketsCounts, setTicketsCounts] = useState({
    todo: 0,
    inProgress: 0,
    done: 0,
  });
  const [swimlanes, setSwimlanes] = useState<SwimlaneInterface[]>([]);
  const [tickets, setTickets] = useState<TicketInterface[]>([]);
  const [persons, setPersons] = useState<PersonsInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const swimlanes = await axios.get("/api/swimlanes");
        const tickets = await axios.get("/api/tickets");
        const persons = await axios.get("/api/persons");
        const swimlanesData = swimlanes.data;
        const ticketsData = tickets.data.map((ticket) => ({
          ...ticket,
          swimlaneId: 1,
        }));
        const personsData = persons.data;

        setSwimlanes(swimlanesData);
        setTickets(ticketsData);
        setPersons(personsData);
      } catch (error) {
        console.error("Failed to fetch swimlanes:", error);
      }
    };
    fetchData();
  }, []);

  if (!swimlanes || !persons || !tickets) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  } else {
    return (
      <>
        <Header ticketsCount={ticketsCounts} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Board
                  setTicketsCounts={setTicketsCounts}
                  swimlanes={swimlanes}
                  tickets={tickets}
                  setTickets={setTickets}
                  persons={persons}
                />
              }
            />
            <Route path="/ticket/:id" element={<TicketDetails />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
