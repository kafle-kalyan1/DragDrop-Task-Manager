import React from "react";
import "./Card.css";

const Card = ({
  task,
  id,
  titleHandler,
  bodyHandler,
  closeHandler,
  stageHandler,
}) => {
  const dragstart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    target.className = "notesWrapper dragging";
    console.log("target Id - ", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragEnd = (e) => {
    e.target.className = "notesWrapper";
  };

  const dragover = (e) => e.stopPropagation();

  return (
    <div
      className="notesWrapper"
      draggable
      onDragStart={dragstart}
      onDragOver={dragover}
      onDragEnd={dragEnd}
      id={id}
    >
      <div className="notes">
        <div className={"note " + task.stage}>
          <div className="note__header">
            <span
              className="note__check"
              onClick={(e) => stageHandler("inprogress", id)}
            >
              <i className="fa fa-tasks"></i>
            </span>
            <span
              className="note__check"
              onClick={(e) => stageHandler("complete", id)}
            >
              <i className="fa fa-check"></i>
            </span>

            <span className="note__close" onClick={() => closeHandler(task.id)}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="note__title">
            <input
              className="input__title"
              type="text"
              placeholder={task.title}
              onChange={(e) => titleHandler(e.target.value, task.id)}
            ></input>
          </div>
          <div className="note__body">
            <textarea
              className="input__body"
              type="text"
              placeholder={task.body}
              onChange={(e) => bodyHandler(e.target.value, task.id)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
