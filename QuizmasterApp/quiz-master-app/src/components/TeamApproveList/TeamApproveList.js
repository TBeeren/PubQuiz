//React
import React from "react";

// Components
import TeamApproveIcon from "../TeamApproveIcon/TeamApproveIcon";
import KickModal from "../KickModal/KickModal";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./TeamApproveList.css";

function TeamApproveList() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <KickModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onKick={() => console.log("Kick User")}
      />
      <div className="div-content d-flex justify-content-center">
        <div className="row">
          <div onClick={() => setModalShow(true)}>
            <TeamApproveIcon></TeamApproveIcon>
          </div>
          <div onClick={() => setModalShow(true)}>
            <TeamApproveIcon></TeamApproveIcon>
          </div>
          <div onClick={() => setModalShow(true)}>
            <TeamApproveIcon></TeamApproveIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamApproveList;
