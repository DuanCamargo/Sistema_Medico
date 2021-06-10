import React, { useState, useEffect } from "react";
import MedicoDataService from "../services/MedicoDataService";

const Medico = props => {
  const initialTutorialState = {
    key: null,
    firstName: "",
    lastName: "",
    address: "",
    jobArea: "",
    CPF: "",
    CRM: 0,
    mobile: "",
    email:"",
    // title: "",
    // description: "",
    // published: "Unpublished",
  };
  const [message, setMessage] = useState("");
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(() => {
    getTutorial(key);
  }, [props.match.params.id]);

  const getTutorial = id => {
    MedicoDataService.get(id)
    .then(response => {
      setCurrentTutorial(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    const data = {
      id: currentTutorial.id,
      firstName: currentTutorial.firstName,
      lastName: currentTutorial.lastName,
      address: currentTutorial.address,
      jobArea: currentTutorial.jobArea,
      CPF: currentTutorial.CPF,
      CRM: currentTutorial.CRM,
      mobile: currentTutorial.mobile,
      email: currentTutorial.email,
    };

    MedicoDataService.update(key, data)
    .then(response => {
      setCurrentTutorial(response.data)
      console.log(response)
    })
    .catch(e => {
      console.log(e)
    })
  };

  const updateTutorial = () => {
    MedicoDataService.update(key, currentTutorial)
    .then(response => {
      console.log(response);
      setMessage("Medico was updated successfully!");
      props.history.push("/tutorials");
    })
    .catch(e => {
      console.log(e)
    })
  };

  const deleteTutorial = () => {
    if (window.confirm('Deseja excluir?')){
      MedicoDataService.remove(currentTutorial.key)
      .then(response => {
        setMessage("Tutorial was deleted!")
        props.history.push("/tutorials")
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  return (
    <div>
    {
      currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">firstName</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={currentTutorial.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">lastName</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={currentTutorial.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={currentTutorial.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobArea">jobArea</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobArea"
                  name="jobArea"
                  value={currentTutorial.jobArea}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CPF">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  id="CPF"
                  name="CPF"
                  value={currentTutorial.CPF}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CRM">CRM</label>
                <input
                  type="text"
                  className="form-control"
                  id="CRM"
                  name="CRM"
                  value={currentTutorial.CRM}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={currentTutorial.mobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={currentTutorial.email}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          {
            currentTutorial.published ? (
              <button
                className="btn btn-primary mr-2"
                onClick={() => updatePublished(false)}>
                  UnPublish
              </button>
            ) : (
              <button
                className="btn btn-primary mr-2"
                onClick={() => updatePublished(true)}>
                  Publish
              </button>
            )
          }
          <button className="btn btn-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
          <button type="submit" className="btn btn-success" onClick={updateTutorial}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )
    }
    </div>
  );
};
export default Medico;