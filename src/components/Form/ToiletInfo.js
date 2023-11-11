import React from "react";
import { useState, useEffect } from "react";

export default function ToiletInfo({
  formData,
  setFormData,
  choose,
  setChoose,
}) {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const storedFileURL = localStorage.getItem("fileURL");
    if (storedFileURL) {
      setFile(storedFileURL);
    }
  }, []);

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    const fileURL = URL.createObjectURL(selectedFile);
    localStorage.setItem("fileURL", fileURL);
    setFile(fileURL);
    setFormData({ ...formData, photo: selectedFile.name });
  }

  function handleToggleItems(id) {
    setChoose((choose) =>
      choose.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  }

  return (
    <div className="Toilet-info-container">
      <div>
        <label>Toilet’s name</label>
        <input
          type="text"
          placeholder="Toilet’s name"
          value={formData.toiletName}
          onChange={(e) => {
            setFormData({ ...formData, toiletName: e.target.value });
          }}
          required
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => {
            setFormData({ ...formData, location: e.target.value });
          }}
          required
        />
      </div>
      <div>
        <label>Feature</label>
        <div className="select-box">
          {choose.map((choose) => (
            <AccordionItem
              choose={choose}
              onToggleItem={handleToggleItems}
              key={choose.id}
            />
          ))}
        </div>
      </div>
      <div>
        <h5>Photo (optional)</h5>
        <input className="img-input" type="file" onChange={handleChange} />
        {file && <img src={file} />}
      </div>
    </div>
  );
}

function AccordionItem({ choose, onToggleItem }) {
  return (
    <div className={`select ${choose.status ? "get-choose" : ""}`}>
      <input
        type="checkbox"
        value={choose.status}
        onChange={() => onToggleItem(choose.id)}
      />
      <span>{choose.name}</span>
    </div>
  );
}
