import React, { useEffect, useState } from "react";
import { SwimlaneInterface } from "../Board";

interface SwimlaneProps {
  children: React.ReactNode;
  key: number;
  title: string;
}

const Swimlane = ({ children, id, title }: SwimlaneProps) => {
  return (
    <div className="swimlane">
      <div className="heading">{title}</div>
      <div className="tickets">{children}</div>
    </div>
  );
};

export default Swimlane;
