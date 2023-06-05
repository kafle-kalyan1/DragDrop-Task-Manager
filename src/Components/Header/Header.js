import React from "react";

const Header = ({ setStageToShow }) => {
  return (
    <div className="header">
      <div>
        <span onClick={() => setStageToShow("complete")} style={{marginLeft:"20px", cursor:"pointer"}}    className="showComplete">
          Completed
          <i  style={{marginLeft:"10px"}}  
            
            className="fas fa-check-circle"
          ></i>
        </span>
        <span onClick={() => setStageToShow("inprogress")} style={{marginLeft:"20px", cursor:"pointer"}}    className="showProgress">
          In Progress
          <i style={{marginLeft:"10px"}}  
            
            className="fas fa-tasks"
          ></i>
        </span>
        <span style={{marginLeft:"20px", cursor:"pointer"}} onClick={() => setStageToShow("")}    className="showAll">
        All
          <i  style={{marginLeft:"10px"}}  className="fas fa-eye"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
