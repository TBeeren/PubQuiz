import React from "react";
import TeamIcon from "../../TeamIcon/TeamIcon";
import { useSelector } from "react-redux";
import QuizInformation from "../../QuizInformation/QuizInformation";
import NavButtons from "../../NavButtons/NavButtons";

import "./VictoryScreen.css";

export default function VictoryScreen(props) {
  const teams = useSelector((state) => state.teamInfo.teams);

  let teamRanking = teams
    .sort((teamA, teamB) => teamB.score - teamA.score)
    .map((team, index) => {
      switch (index) {
        case 0: {
          return (
            <TeamIcon
              key={index}
              name={team.name}
              score={team.score}
              placing="top-1"
            />
          );
        }
        case 1:
        case 2: {
          return (
            <TeamIcon
              key={index}
              name={team.name}
              score={team.score}
              placing="top-3"
            />
          );
        }
        default: {
          return (
            <TeamIcon
              key={index}
              name={team.name}
              score={team.score}
              placing="top-other"
            />
          );
        }
      }
    });

  const rankingDiv = (
    <div>
      <div id="top-1-holder">{teamRanking[0]}</div>
      <div id="top-3-holder">
        {teamRanking[1]}
        {teamRanking[2]}
      </div>
    </div>
  );
  teamRanking.splice(0, 3);

  return (
    <div id="all-scores">
      <QuizInformation
        title="Congrats!"
        description="Thanks for playing, hope to see you back soon!"
      ></QuizInformation>
      {rankingDiv}
      <div id="top-other-holder">{teamRanking}</div>
      <NavButtons
        title="End Quiz"
        path={"/"}
        returnButton={false}
      ></NavButtons>
    </div>
  );
}
