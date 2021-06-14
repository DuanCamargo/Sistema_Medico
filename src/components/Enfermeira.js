import React, { useState, useEffect } from "react";
import EnfermeiraDataService from "../services/EnfermeiraDataService";

//Nome, Sobrenome, CPF, Telefone, Endereço, Coren, e-mail

const Enfermeira = props => {
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
  const [message, setMessage] = useState("");
  const [currentEnfermeira, setcurrentEnfermeira] = useState(initialEnfermeiraState);
  const [id, setId] = useState(props.match.params.id)

  useEffect(() => { 
    getEnfermeira(id);
  }, [props.match.params.id]);

  const getEnfermeira = id => {
    EnfermeiraDataService.get(id)
    .then(response => {
      setcurrentEnfermeira(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const   handleInputChange = event => {
    const { name, value } = event.target;
    setcurrentEnfermeira({ ...currentEnfermeira, [name]: value });
  };

  const updateEnfermeira = () => {
    EnfermeiraDataService.update(id, currentEnfermeira)
    .then(response => {
      console.log(response);
      setMessage("Enfermeira was updated successfully!");
      props.history.push("/EnfermeiraList");
    })
    .catch(e => {
      console.log(e)
    })
  };

  const deleteTutorial = () => {
    if (window.confirm('Deseja excluir?')){
      EnfermeiraDataService.remove(currentEnfermeira.id)
      .then(response => {
        setMessage("Tutorial was deleted!")
        props.history.push("/EnfermeiraList")
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  return (
    <div>
    {
      currentEnfermeira ? (
        <div className="edit-form">
          <h4>EDITAR ENFERMEIRA</h4>
            <form>
              <div className="form-group">
                <label htmlFor="Nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="Nome"
                  name="Nome"
                  value={currentEnfermeira.Nome}
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
                  value={currentEnfermeira.Sobrenome}
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
                  value={currentEnfermeira.Endereco}
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
                  value={currentEnfermeira.CPF}
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
                  value={currentEnfermeira.Coren}
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
                  value={currentEnfermeira.Telefonee}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  name="Email"
                  value={currentEnfermeira.Email}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          <button className="btn btn-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>
          <button type="submit" className="btn btn-success" onClick={updateEnfermeira}>
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
export default Enfermeira;