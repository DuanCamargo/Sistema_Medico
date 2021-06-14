import React, { useState, useEffect } from "react";
import MedicoDataService from "../services/MedicoDataService";

const Medico = props => {
  const initialMedicoState = {
    key: null,
    firstName: "",
    lastName: "",
    address: "",
    jobArea: "",
    CPF: "",
    CRM: 0,
    mobile: "",
    email:"",
  };
  const [message, setMessage] = useState("");
  const [currentMedico, setcurrentMedico] = useState(initialMedicoState);
  const [key, setKey] = useState(props.match.params.id)

  useEffect(() => {
    getMedico(key);
  }, [props.match.params.id]);

  const getMedico = id => {
    MedicoDataService.get(id)
    .then(response => {
      setcurrentMedico(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setcurrentMedico({ ...currentMedico, [name]: value });
  };

  const updateMedico = () => {
    MedicoDataService.update(key, currentMedico)
    .then(response => {
      console.log(response);
      setMessage("Medico was updated successfully!");
      props.history.push("/medicoList");
    })
    .catch(e => {
      console.log(e)
    })
  };

  const deleteTutorial = () => {
    if (window.confirm('Deseja excluir?')){
      MedicoDataService.remove(currentMedico.key)
      .then(response => {
        setMessage("Tutorial was deleted!")
        props.history.push("/medicoList")
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  return (
    <div>
    {
      currentMedico ? (
        <div className="edit-form">
          <h4>EDITAR MÉDICO</h4>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={currentMedico.firstName}
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
                  value={currentMedico.lastName}
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
                  value={currentMedico.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="jobArea">Medical Specialty</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobArea"
                  name="jobArea"
                  value={currentMedico.jobArea}
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
                  value={currentMedico.CPF}
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
                  value={currentMedico.CRM}
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
                  value={currentMedico.mobile}
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
                  value={currentMedico.email}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          <button className="btn btn-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
          <button type="submit" className="btn btn-success" onClick={updateMedico}>
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