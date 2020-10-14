// React
import React from "react";

// Components
import FrontPageBanner from "../../FrontPageBanner/FrontPageBanner";
import CreateQuiz from "../../CreateQuiz/CreateQuiz";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
import "./Create.css";

function Create() {
  return (
    <div>
      <FrontPageBanner></FrontPageBanner>
      <CreateQuiz></CreateQuiz>
    </div>
  );
}

export default Create;