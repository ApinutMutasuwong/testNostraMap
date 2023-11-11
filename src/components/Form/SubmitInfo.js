import React from "react";
import Star from "../image/tick.png";

function SubmitInfo() {
  return (
    <div className="submit-info-container">
      <img src={Star} className="submit-icon" />
      <h4>Submit your info</h4>
      <p className="submit-detail">
        Please review all the information you previously typed in the past
        steps, and if all is okay, submit your info to receive a confirmation
        within 24 years.
      </p>
    </div>
  );
}

export default SubmitInfo;
