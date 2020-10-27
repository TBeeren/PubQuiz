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
  let teams = useSelector((state) => state.teamsInfo.teams);
  const answeredTeams = useSelector((state) => state.teamsInfo.answeredTeams);

  teams = teams.filter((team) => {
    return (team.name !== null && answeredTeams.includes(team.name))
  })

  return (
    <div>
      <div className="div-content d-flex justify-content-center">
        <div className="row">
          {teams.map(function (item, i) {
              return (
                <TeamStatus
                  key={i}
                  name={item.name}
                ></TeamStatus>
              );
          })}
        </div>
      </div>
    </div>
  );
}
