import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/EnfermeiraDataService";
import { Link } from "react-router-dom";

const Enfermeira = props => {
  const initialTutorialState = {
    key: null,
    titulo: "",
    descricao: "",
    published: "Unpublished",
  };

  const [message, setMessage] = useState("");
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = TutorialDataService.getById(key)
    console.log(key)
    setCurrentTutorial(data[0])     
  }, [])

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      titulo: currentTutorial.titulo,
      descricao: currentTutorial.descricao,
      published: status
    };
    TutorialDataService.update(key, data);  
    setCurrentTutorial(data)
  };

  const updateTutorial = () => {
    //console.log(currentTutorial)
    const data = {
      titulo: currentTutorial.titulo,
      descricao: currentTutorial.descricao,
      published: currentTutorial.published
    };  
    TutorialDataService.update(key, data);
    setCurrentTutorial(data)
  };

  const deleteTutorial = () => {
    console.log(currentTutorial)
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.remove(currentTutorial.key);  
    }
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Título</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={currentTutorial.titulo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={currentTutorial.descricao}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>
          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}
          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
          <Link to="/">
            <button
              type="submit"
              className="badge badge-success"
              onClick={updateTutorial}
            >
              Update
            </button>
          </Link>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Enfermeira;

