//React
import React from "react";
import { useSelector } from "react-redux";

// Components
import TeamApproveIcon from "../TeamApproveIcon/TeamApproveIcon";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./TeamApproveList.css";

function TeamApproveList() {
  const teams = useSelector((state) => state.quizInfo.teamNames);

  return (
    <div>
      <div className="div-content d-flex justify-content-center">
        <div className="row">
          {teams.map(function (item, i) {
            if (item !== null) {
              return (
                <TeamApproveIcon
                  key={i}
                  name={item}
                ></TeamApproveIcon>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamApproveList;
