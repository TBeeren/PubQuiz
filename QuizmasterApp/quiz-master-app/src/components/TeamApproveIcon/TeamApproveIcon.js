//React
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import KickModal from "../KickModal/KickModal";
import { removeTeam} from "../../actions/QuizActions"

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Css
import "./TeamApproveIcon.css";

function TeamApproveIcon(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const roomId = useSelector((state) => state.quizInfo.roomId);
  const dispatch = useDispatch();

  const kickHandler = () => {
    dispatch(removeTeam(roomId, props.name));
    setModalShow(false);
  }

  return (
    <div>
      <KickModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onKick={() => kickHandler()}
      />
      <button
        id={props.name}
        type="button"
        className="btn btn-color btn-circle btn-xl"
        onClick={() => setModalShow(true)}
      >
        <FontAwesomeIcon icon={faTimesCircle} className="icon-placement" />
        {props.name}
      </button>
    </div>
  );
}

export default TeamApproveIcon;
