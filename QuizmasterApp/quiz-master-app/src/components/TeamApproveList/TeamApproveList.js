//React
import React from "react";
import { useSelector } from "react-redux";

// Components
import TeamApproveIcon from "../TeamApproveIcon/TeamApproveIcon";
import KickModal from "../KickModal/KickModal";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./TeamApproveList.css";

function TeamApproveList() {
  const [modalShow, setModalShow] = React.useState(false);
  const teams = useSelector((state) => state.quizInfo.teamNames);

  return (
    <div>
      <KickModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onKick={() => console.log("Kick User")}
      />
      <div className="div-content d-flex justify-content-center">
        <div className="row">
          {teams.map(function (item, i) {
            if (item !== null) {
              return (
                <TeamApproveIcon
                  key={i}
                  name={item}
                  onClick={() => setModalShow(true)}
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
