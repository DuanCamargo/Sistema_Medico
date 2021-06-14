import React, { useState } from "react";
import EnfermeiraDataService from "../services/EnfermeiraDataService";
import { Link } from "react-router-dom"

const EnfermeiraAdd = () => {
  const initialEnfermeiraState = {
    id: null,
    Nome: "",
    Telefonee: "",
    Sobrenome: "",
    Email: "",
    Endereco: "",
    CPF: "",
    Coren: 0,
  };

  const [Enfermeira, setEnfermeira] = useState(initialEnfermeiraState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEnfermeira({ ...Enfermeira, [name]: value });
  };

  const saveEnfermeira = () => {
    var data = {
      id: Enfermeira.id,
      Nome: Enfermeira.Nome,
      Sobrenome: Enfermeira.Sobrenome,
      Endereco: Enfermeira.Endereco,
      CPF: Enfermeira.CPF,
      Coren: Enfermeira.Coren,
      Telefonee: Enfermeira.Telefonee,
      Email: Enfermeira.Email,
    };

    EnfermeiraDataService.create(data)
    .then(response => {
      setEnfermeira({
        id: response.data.id,
        Nome: Enfermeira.Nome,
        Sobrenome: Enfermeira.Sobrenome,
        Endereco: Enfermeira.Endereco,
        CPF: Enfermeira.CPF,
        Coren: Enfermeira.Coren,
        Telefonee: Enfermeira.Telefonee,
        Email: Enfermeira.Email,
      });
      setSubmitted(true);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const newEnfermeira = () => {
    setEnfermeira(initialEnfermeiraState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <Link to="/EnfermeiraList">
            <button className="btn btn-success" onClick={newEnfermeira}>
              Add
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="Nome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="Nome"
              name="Nome"
              value={Enfermeira.Nome}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Sobrenome">Sobrenome</label>
            <input
              type="text"
              className="form-control"
              id="Sobrenome"
              name="Sobrenome"
              value={Enfermeira.Sobrenome}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Endereco">Endereco</label>
            <input
              type="text"
              className="form-control"
              id="Endereco"
              name="Endereco"
              value={Enfermeira.Endereco}
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
              value={Enfermeira.CPF}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Coren">Coren</label>
            <input
              type="text"
              className="form-control"
              id="Coren"
              name="Coren"
              value={Enfermeira.Coren}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Telefonee">Telefonee</label>
            <input
              type="text"
              className="form-control"
              id="Telefonee"
              name="Telefonee"
              value={Enfermeira.Telefonee}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">E-mail</label>
            <input
              type="text"
              className="form-control"
              id="Email"
              name="Email"
              value={Enfermeira.Email}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={saveEnfermeira} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default EnfermeiraAdd;
