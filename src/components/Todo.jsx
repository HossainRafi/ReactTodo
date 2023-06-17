import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = () => {
  return (
    <div className="Todo">
      <p>got to school</p>
      <div>
        <FontAwesomeIcon className="pen" icon={faPenToSquare} />
        <FontAwesomeIcon className="trash" icon={faTrash} />
      </div>
    </div>
  );
};
