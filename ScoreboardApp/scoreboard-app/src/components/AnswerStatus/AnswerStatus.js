//React
import React from "react";
import { useSelector } from "react-redux";

// Components
import TeamStatus from "../TeamStatus/TeamStatus";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./AnswerStatus.css";

export default function AnswerStatus() {
  const teams = useSelector((state) => state.teamsInfo.teams);
  const answeredTeams = useSelector((state) => state.teamsInfo.answeredTeams);

  return (
    <div>
      <div className="div-content d-flex justify-content-center">
        <div className="row">
          {teams.map(function (item, i) {
            if (item.name !== null && answeredTeams.includes(item.name)) {
              return (
                <TeamStatus
                  key={i}
                  name={item.name}
                ></TeamStatus>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
