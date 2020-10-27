//React
import React, { useEffect } from "react";

// Artifacts
import "bootstrap/dist/css/bootstrap.min.css";
// Css
import "./Selection.css";

function Selection(props) {

  useEffect(() => {
    const boxes = document.querySelectorAll('.category-text')
    boxes.forEach(box => {
      box.style.fontSize = getFontSize(box.textContent.length)
    })
  })
  
  const getFontSize = (textLength) => {
    if(textLength > 60)
    {
      return `120%`
    }
    if(textLength > 120)
    {
      return `110%`
    }
    return `130%`
  }
    
  

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center">
        <button className="btn btn-category" onClick={() => props.callback(props.propId)} id={props.propId}>
          <p className="category-text">{props.value}</p>
        </button>
      </div>
    </div>
  );
}

export default Selection;
