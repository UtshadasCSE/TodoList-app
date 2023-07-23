import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h3 className=" my-3">Todo List</h3>
        {props.todos.length === 0
          ? "No Todos to display"
          : props.todos.map((toDo) => {
              return (
                <>
                  <TodoItem
                    todo={toDo}
                    key={toDo.sno}
                    onDelete={props.onDelete}
                  />
                  <hr />
                </>
              );
            })}
      </div>
    </>
  );
};
