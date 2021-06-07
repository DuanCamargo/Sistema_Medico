import React, { useState, useEffect } from "react";
import ClinicaDataService from "../services/ClinicaDataService";
import { Link} from "react-router-dom";

const Clinica = props => {

  const initialTutorialState = {
    key: null,
    title: '',
    description: "",
    published: 'Unpublished',
  };
  
  const [message, setMessage] = useState("");
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = ClinicaDataService.getById(key)
    console.log(key)
    setCurrentTutorial(data[0])
  }, [])

  const handleInputChange = event => { // ele vai criar um item do objeto e vai colocar o valor nele.
    const {name, value} = event.target;
    setCurrentTutorial({...currentTutorial, [name] : value});
  }

  const updatePublished = status => {
    const data = {
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status
    };
    ClinicaDataService.update(key, data);
    setCurrentTutorial(data)
  };

  const updateTutorial = () => {
    const data = {
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: currentTutorial.published
    }
    ClinicaDataService.update(key, data);
    setCurrentTutorial(data)
  }

  const deleteTutorial = () => {

  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input 
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={currentTutorial.title}
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
  )
};

export default Clinica;
