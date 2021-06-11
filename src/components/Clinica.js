import React, { useState, useEffect } from "react";
import ClinicaDataService from "../services/ClinicaDataService";
import { Link } from "react-router-dom";

const Clinica = props => {

  const initialTutorialState = {
    key: null,
    title: '',
    description: "",
    telefone: "",
    published: 'Unpublished',
  };
  
  const [message, setMessage] = useState("");
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);

  //PARAMETRO PASSADO (TÍTULO)
  const [key, setKey] = useState(props.match.params.id)

  useEffect(()=>{
    const data = ClinicaDataService.getById(key)
    console.log(key)
    setCurrentTutorial(data[0])
  }, [])

  //CRIA UM ITEM NO OBJETO COM O NAME DO INPUT E O VALUE DELE.
  //TEM QUE SER UM QUE JÁ EXISTE NO OBJETO.
  const handleInputChange = event => { 
    const {name, value} = event.target;
    setCurrentTutorial({...currentTutorial, [name] : value});
  }

  //TRANSFORMANDO STATE PUBLISHED PARA BOOLEANO.
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
      telefone: currentTutorial.telefone,
      published: currentTutorial.published
    }
    ClinicaDataService.update(key, data);
    setCurrentTutorial(data)
  }

  const deleteTutorial = () => {
    if(window.confirm("Deseja deletar a clínica?")){
      ClinicaDataService.remove(key);

      //CHAMA A PAGINA LISTA DE CLINICAS
      props.history.push("/clinicalist")
    }
  };

  return (
    <div className="clinica-box">
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Clínica</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input 
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={currentTutorial.title}
              onChange={handleInputChange}
              />

              <label htmlFor="description">Endereço</label>
              <input 
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={currentTutorial.description}
              onChange={handleInputChange}
              />

              <label htmlFor="telefone">Telefone</label>
              <input 
              type="tel"
              className="form-control"
              id="telefone"
              name="telefone"
              value={currentTutorial.telefone}
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
          <Link to="/clinicalist">
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
          <p>Clínica não encontrada...</p>
        </div>
      )}
    </div>
  )
};

export default Clinica;
