// React
import React from "react";

// Component
import NavButton from "../NavButton/NavButton";
import CustomModal from "../CustomModal/CustomModal";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./NavButtons.css";

function NavButtons(props) {
  const [modalShow, setModalShow] = React.useState(false);
  let buttonsHtml;

  if (props.returnButton === true) {
    buttonsHtml = (
      <div>
        <div className="float-left align-bottom-left">
          <NavButton></NavButton>
        </div>
        <div className="float-right align-bottom-right" onClick={() => setModalShow(true)}>
          <NavButton></NavButton>
        </div>
      </div>
    );
  } else {
    buttonsHtml = (
      <div className="float-right align-bottom-right" onClick={() => setModalShow(true)}>
        <NavButton></NavButton>
      </div>
    );
  }

  return (
    <div className="div-content ">
      <CustomModal
        title={props.title}
        path={props.path}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {buttonsHtml}
    </div>
  );
}

export default NavButtons;
