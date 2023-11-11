import React, { useState } from "react";
import ToiletInfo from "./ToiletInfo";
import SubmitInfo from "./SubmitInfo";
import "./form-style.css";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    toiletName: "",
    location: "",
    photo: "",
  });
  const [choose, setChoose] = useState([
    { id: 1, name: "Bidet spray", status: true },
    { id: 2, name: "Squat toilet", status: false },
    { id: 3, name: "Auto toilet", status: false },
  ]);

  const FormTitles = ["Toilet details", " "];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <ToiletInfo
          formData={formData}
          setFormData={setFormData}
          choose={choose}
          setChoose={setChoose}
        />
      );
    } else if (page === 1) {
      return (
        <SubmitInfo
          formData={formData}
          setFormData={setFormData}
          choose={choose}
          setChoose={setChoose}
        />
      );
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="numbers">
          <div className={page >= 0 ? "active" : ""}>1</div>
          <div id="number-line" className={page >= 1 ? "active" : ""}></div>
          <div className={page >= 1 ? "active" : ""}>2</div>
        </div>

        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            className={page === 0 ? "hidden" : ""}
            onClick={() => {
              setPage((setPage) => setPage - 1);
            }}
          >
            Prev
          </button>

          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
                console.log(choose);
              } else {
                setPage((setPage) => setPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
