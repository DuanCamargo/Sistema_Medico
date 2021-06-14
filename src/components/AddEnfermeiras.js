import React, { useState } from "react";
import TutorialDataService from "../services/EnfermeiraDataService";

const AddEnfermeiras = () => {
  const initialTutorialState = {
    id: null,
    titulo: "",
    descricao: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      titulo: tutorial.titulo,
      descricao: tutorial.descricao,
      published: false
    };

    TutorialDataService.create(data);
    setSubmitted(true);
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
           <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="titulo"
              value={tutorial.titulo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="descricao"
              value={tutorial.descricao}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddEnfermeiras;