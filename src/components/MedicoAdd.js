import React, { useState } from "react";
import MedicoDataService from "../services/MedicoDataService";
import { Link } from "react-router-dom"

const MedicoAdd = () => {
  const initialTutorialState = {
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

  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      id: tutorial.id,
      firstName: tutorial.firstName,
      lastName: tutorial.lastName,
      address: tutorial.address,
      jobArea: tutorial.jobArea,
      CPF: tutorial.CPF,
      CRM: tutorial.CRM,
      mobile: tutorial.mobile,
      email: tutorial.email,
    };

    MedicoDataService.create(data)
    .then(response => {
      setTutorial({
        id: response.data.id,
        id: response.id,
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

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <Link to="/">
            <button className="btn btn-success" onClick={newTutorial}>
              Add
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstName">firstName</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={tutorial.firstName}
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
              value={tutorial.lastName}
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
              value={tutorial.address}
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
              value={tutorial.jobArea}
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
              value={tutorial.CPF}
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
              value={tutorial.CRM}
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
              value={tutorial.mobile}
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
              value={tutorial.email}
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
export default MedicoAdd;
