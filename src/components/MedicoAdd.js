import React, { useState } from "react";
import MedicoDataService from "../services/MedicoDataService";
import { Link } from "react-router-dom"

const MedicoAdd = () => {
  const initialMedicoState = {
    id: null,
    firstName: "",
    lastName: "",
    address: "",
    jobArea: "",
    CPF: "",
    CRM: 0,
    mobile: "",
    email:"",
  };

  const [medico, setMedico] = useState(initialMedicoState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMedico({ ...medico, [name]: value });
  };

  const saveMedico = () => {
    var data = {
      id: medico.id,
      firstName: medico.firstName,
      lastName: medico.lastName,
      address: medico.address,
      jobArea: medico.jobArea,
      CPF: medico.CPF,
      CRM: medico.CRM,
      mobile: medico.mobile,
      email: medico.email,
    };

    MedicoDataService.create(data)
    .then(response => {
      setMedico({
        id: response.data.id,
        firstName: response.firstName,
        lastName: response.lastName,
        address: response.address,
        jobArea: response.jobArea,
        CPF: response.CPF,
        CRM: response.CRM,
        mobile: response.mobile,
        email: response.email,
      });
      setSubmitted(true);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const newMedico = () => {
    setMedico(initialMedicoState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <Link to="/medicoList">
            <button className="btn btn-success" onClick={newMedico}>
              Add
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={medico.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={medico.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={medico.address}
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
              value={medico.jobArea}
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
              value={medico.CPF}
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
              value={medico.CRM}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              name="mobile"
              value={medico.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={medico.email}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={saveMedico} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default MedicoAdd;
