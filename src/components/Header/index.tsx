import React from "react";

const Header = ({ ticketsCount }) => {
  return (
    <header className="header">
      <img
        src="https://www.collective.com/images/collective-logo.png"
        width={160}
        height={40}
      />

      <div className="status">
        <p>Todo: {ticketsCount.todo}</p>
        <p>In Progress: {ticketsCount.inProgress}</p>
        <p>Done: {ticketsCount.done}</p>
      </div>
    </header>
  );
};

export default Header;
