//React
import React from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";

// Css
import "./Selection.css";

function Selection(props) {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center">
        <button className="btn btn-category">
          <p className="category-text">{props.value}</p>
        </button>
      </div>
    </div>
  );
}

export default Selection;
